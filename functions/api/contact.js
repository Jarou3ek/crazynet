function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function sanitize(value, maxLength = 2000) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return { success: false, error: "Missing TURNSTILE_SECRET_KEY" };
  }

  if (!token) {
    return { success: false, error: "Missing Turnstile token" };
  }

  const ip = request.headers.get("CF-Connecting-IP") || "";

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });

  return response.json();
}

async function sendEmail({ name, email, subject, message }, env) {
  if (!env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  if (!env.CONTACT_TO) {
    throw new Error("Missing CONTACT_TO");
  }

  if (!env.CONTACT_FROM) {
    throw new Error("Missing CONTACT_FROM");
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

  const text = [
    "Nová zpráva z kontaktního formuláře CrazyNet.cz",
    "",
    `Jméno: ${name}`,
    `Email: ${email}`,
    `Předmět: ${subject}`,
    "",
    "Zpráva:",
    message,
  ].join("\n");

  const html = `
    <h2>Nová zpráva z kontaktního formuláře CrazyNet.cz</h2>
    <p><strong>Jméno:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Předmět:</strong> ${safeSubject}</p>
    <p><strong>Zpráva:</strong></p>
    <p>${safeMessage}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `CrazyNet.cz kontakt: ${subject}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorText}`);
  }

  return response.json();
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();

    const honeypot = sanitize(formData.get("website"), 200);
    if (honeypot) {
      return jsonResponse({ ok: true });
    }

    const name = sanitize(formData.get("name"), 120);
    const email = sanitize(formData.get("email"), 254);
    const subject = sanitize(formData.get("P-edm-t") || formData.get("subject"), 200);
    const message = sanitize(formData.get("field") || formData.get("message"), 5000);
    const turnstileToken = sanitize(formData.get("cf-turnstile-response"), 4096);

    if (!name || !email || !subject || !message) {
      return jsonResponse(
        { ok: false, message: "Vyplňte prosím všechna povinná pole." },
        400
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(
        { ok: false, message: "Zadejte prosím platný e-mail." },
        400
      );
    }

    const turnstile = await verifyTurnstile(turnstileToken, request, env);
    if (!turnstile.success) {
      return jsonResponse(
        { ok: false, message: "Ověření proti spamu selhalo. Zkuste to prosím znovu." },
        400
      );
    }

    await sendEmail({ name, email, subject, message }, env);

    return jsonResponse({
      ok: true,
      message: "Děkujeme, zpráva byla odeslána.",
    });
  } catch (error) {
    console.error(error);
    return jsonResponse(
      { ok: false, message: "Zprávu se nepodařilo odeslat. Zkuste to prosím později." },
      500
    );
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, message: "Method not allowed" }, 405);
}
