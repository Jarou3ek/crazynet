
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["729"], {
6524: (function (__unused_webpack_module, exports) {
var __webpack_unused_export__;
/**
 * Webflow: Forms (Hosted)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return hostedSubmitWebflow;
    }
}));
function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
    return function(data) {
        reset(data);
        var form = data.form;
        var payload = {
            name: form.attr('data-name') || form.attr('name') || 'Untitled Form',
            pageId: form.attr('data-wf-page-id') || '',
            elementId: form.attr('data-wf-element-id') || '',
            domain: $('html').attr('data-wf-domain') || null,
            source: loc.href,
            test: Webflow.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
            trackingCookies: collectEnterpriseTrackingCookies()
        };
        const wfFlow = form.attr('data-wf-flow');
        if (wfFlow) {
            payload.wfFlow = wfFlow;
        }
        // only send localeId if it's a localized form
        const localeId = form.attr('data-wf-locale-id');
        if (localeId) {
            payload.localeId = localeId;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload.fields);
        if (status) {
            return alert(status);
        }
        payload.fileUploads = findFileUploads(form);
        // Disable submit button
        disableBtn(data);
        // Read site ID
        // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work
        if (!siteId) {
            afterSubmit(data);
            return;
        }
        $.ajax({
            url: formUrl,
            type: 'POST',
            data: payload,
            dataType: 'json',
            crossDomain: true
        }).done(function(response) {
            if (response && response.code === 200) {
                data.success = true;
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9ybXMtaG9zdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViZmxvdzogRm9ybXMgKEhvc3RlZClcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob3N0ZWRTdWJtaXRXZWJmbG93KFxuICByZXNldCxcbiAgbG9jLFxuICBXZWJmbG93LFxuICBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyxcbiAgcHJldmVudERlZmF1bHQsXG4gIGZpbmRGaWVsZHMsXG4gIGFsZXJ0LFxuICBmaW5kRmlsZVVwbG9hZHMsXG4gIGRpc2FibGVCdG4sXG4gIHNpdGVJZCxcbiAgYWZ0ZXJTdWJtaXQsXG4gICQsXG4gIGZvcm1Vcmxcbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXNldChkYXRhKTtcblxuICAgIHZhciBmb3JtID0gZGF0YS5mb3JtO1xuICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgbmFtZTogZm9ybS5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmb3JtLmF0dHIoJ25hbWUnKSB8fCAnVW50aXRsZWQgRm9ybScsXG4gICAgICBwYWdlSWQ6IGZvcm0uYXR0cignZGF0YS13Zi1wYWdlLWlkJykgfHwgJycsXG4gICAgICBlbGVtZW50SWQ6IGZvcm0uYXR0cignZGF0YS13Zi1lbGVtZW50LWlkJykgfHwgJycsXG4gICAgICBkb21haW46ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLWRvbWFpbicpIHx8IG51bGwsXG4gICAgICBzb3VyY2U6IGxvYy5ocmVmLFxuICAgICAgdGVzdDogV2ViZmxvdy5lbnYoKSxcbiAgICAgIGZpZWxkczoge30sXG4gICAgICBmaWxlVXBsb2Fkczoge30sXG4gICAgICBkb2xwaGluOiAvcGFzc1tcXHMtX10/KHdvcmR8Y29kZSl8c2VjcmV0fGxvZ2lufGNyZWRlbnRpYWxzL2kudGVzdChcbiAgICAgICAgZm9ybS5odG1sKClcbiAgICAgICksXG4gICAgICB0cmFja2luZ0Nvb2tpZXM6IGNvbGxlY3RFbnRlcnByaXNlVHJhY2tpbmdDb29raWVzKCksXG4gICAgfTtcblxuICAgIGNvbnN0IHdmRmxvdyA9IGZvcm0uYXR0cignZGF0YS13Zi1mbG93Jyk7XG4gICAgaWYgKHdmRmxvdykge1xuICAgICAgcGF5bG9hZC53ZkZsb3cgPSB3ZkZsb3c7XG4gICAgfVxuXG4gICAgLy8gb25seSBzZW5kIGxvY2FsZUlkIGlmIGl0J3MgYSBsb2NhbGl6ZWQgZm9ybVxuICAgIGNvbnN0IGxvY2FsZUlkID0gZm9ybS5hdHRyKCdkYXRhLXdmLWxvY2FsZS1pZCcpO1xuICAgIGlmIChsb2NhbGVJZCkge1xuICAgICAgcGF5bG9hZC5sb2NhbGVJZCA9IGxvY2FsZUlkO1xuICAgIH1cblxuICAgIHByZXZlbnREZWZhdWx0KGRhdGEpO1xuXG4gICAgLy8gRmluZCAmIHBvcHVsYXRlIGFsbCBmaWVsZHNcbiAgICB2YXIgc3RhdHVzID0gZmluZEZpZWxkcyhmb3JtLCBwYXlsb2FkLmZpZWxkcyk7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgcmV0dXJuIGFsZXJ0KHN0YXR1cyk7XG4gICAgfVxuXG4gICAgcGF5bG9hZC5maWxlVXBsb2FkcyA9IGZpbmRGaWxlVXBsb2Fkcyhmb3JtKTtcblxuICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgIGRpc2FibGVCdG4oZGF0YSk7XG5cbiAgICAvLyBSZWFkIHNpdGUgSURcbiAgICAvLyBOT1RFOiBJZiB0aGlzIHNpdGUgaXMgZXhwb3J0ZWQsIHRoZSBIVE1MIHRhZyBtdXN0IHJldGFpbiB0aGUgZGF0YS13Zi1zaXRlIGF0dHJpYnV0ZSBmb3IgZm9ybXMgdG8gd29ya1xuICAgIGlmICghc2l0ZUlkKSB7XG4gICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBmb3JtVXJsLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICB9KVxuICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICBkYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgIH0pO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImhvc3RlZFN1Ym1pdFdlYmZsb3ciLCJyZXNldCIsImxvYyIsIldlYmZsb3ciLCJjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcyIsInByZXZlbnREZWZhdWx0IiwiZmluZEZpZWxkcyIsImFsZXJ0IiwiZmluZEZpbGVVcGxvYWRzIiwiZGlzYWJsZUJ0biIsInNpdGVJZCIsImFmdGVyU3VibWl0IiwiJCIsImZvcm1VcmwiLCJkYXRhIiwiZm9ybSIsInBheWxvYWQiLCJuYW1lIiwiYXR0ciIsInBhZ2VJZCIsImVsZW1lbnRJZCIsImRvbWFpbiIsInNvdXJjZSIsImhyZWYiLCJ0ZXN0IiwiZW52IiwiZmllbGRzIiwiZmlsZVVwbG9hZHMiLCJkb2xwaGluIiwiaHRtbCIsInRyYWNraW5nQ29va2llcyIsIndmRmxvdyIsImxvY2FsZUlkIiwic3RhdHVzIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImNyb3NzRG9tYWluIiwiZG9uZSIsInJlc3BvbnNlIiwiY29kZSIsInN1Y2Nlc3MiLCJmYWlsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7OzsrQkFFRDs7O2VBQXdCQTs7O0FBQVQsU0FBU0Esb0JBQ3RCQyxLQUFLLEVBQ0xDLEdBQUcsRUFDSEMsT0FBTyxFQUNQQyxnQ0FBZ0MsRUFDaENDLGNBQWMsRUFDZEMsVUFBVSxFQUNWQyxLQUFLLEVBQ0xDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLFdBQVcsRUFDWEMsQ0FBQyxFQUNEQyxPQUFPO0lBRVAsT0FBTyxTQUFVQyxJQUFJO1FBQ25CYixNQUFNYTtRQUVOLElBQUlDLE9BQU9ELEtBQUtDLElBQUk7UUFDcEIsSUFBSUMsVUFBVTtZQUNaQyxNQUFNRixLQUFLRyxJQUFJLENBQUMsZ0JBQWdCSCxLQUFLRyxJQUFJLENBQUMsV0FBVztZQUNyREMsUUFBUUosS0FBS0csSUFBSSxDQUFDLHNCQUFzQjtZQUN4Q0UsV0FBV0wsS0FBS0csSUFBSSxDQUFDLHlCQUF5QjtZQUM5Q0csUUFBUVQsRUFBRSxRQUFRTSxJQUFJLENBQUMscUJBQXFCO1lBQzVDSSxRQUFRcEIsSUFBSXFCLElBQUk7WUFDaEJDLE1BQU1yQixRQUFRc0IsR0FBRztZQUNqQkMsUUFBUSxDQUFDO1lBQ1RDLGFBQWEsQ0FBQztZQUNkQyxTQUFTLG1EQUFtREosSUFBSSxDQUM5RFQsS0FBS2MsSUFBSTtZQUVYQyxpQkFBaUIxQjtRQUNuQjtRQUVBLE1BQU0yQixTQUFTaEIsS0FBS0csSUFBSSxDQUFDO1FBQ3pCLElBQUlhLFFBQVE7WUFDVmYsUUFBUWUsTUFBTSxHQUFHQTtRQUNuQjtRQUVBLDhDQUE4QztRQUM5QyxNQUFNQyxXQUFXakIsS0FBS0csSUFBSSxDQUFDO1FBQzNCLElBQUljLFVBQVU7WUFDWmhCLFFBQVFnQixRQUFRLEdBQUdBO1FBQ3JCO1FBRUEzQixlQUFlUztRQUVmLDZCQUE2QjtRQUM3QixJQUFJbUIsU0FBUzNCLFdBQVdTLE1BQU1DLFFBQVFVLE1BQU07UUFDNUMsSUFBSU8sUUFBUTtZQUNWLE9BQU8xQixNQUFNMEI7UUFDZjtRQUVBakIsUUFBUVcsV0FBVyxHQUFHbkIsZ0JBQWdCTztRQUV0Qyx3QkFBd0I7UUFDeEJOLFdBQVdLO1FBRVgsZUFBZTtRQUNmLHdHQUF3RztRQUN4RyxJQUFJLENBQUNKLFFBQVE7WUFDWEMsWUFBWUc7WUFDWjtRQUNGO1FBRUFGLEVBQUVzQixJQUFJLENBQUM7WUFDTEMsS0FBS3RCO1lBQ0x1QixNQUFNO1lBQ050QixNQUFNRTtZQUNOcUIsVUFBVTtZQUNWQyxhQUFhO1FBQ2YsR0FDR0MsSUFBSSxDQUFDLFNBQVVDLFFBQVE7WUFDdEIsSUFBSUEsWUFBWUEsU0FBU0MsSUFBSSxLQUFLLEtBQUs7Z0JBQ3JDM0IsS0FBSzRCLE9BQU8sR0FBRztZQUNqQjtZQUVBL0IsWUFBWUc7UUFDZCxHQUNDNkIsSUFBSSxDQUFDO1lBQ0poQyxZQUFZRztRQUNkO0lBQ0o7QUFDRiJ9

}),
7527: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals
  window,
  document,
  WEBFLOW_FORM_API_HOST,
  WEBFLOW_FORM_OLDIE_HOST,
  WEBFLOW_EXPORT_MODE,
  turnstile
*/ /**
 * Webflow: Forms
 */ 
var Webflow = __webpack_require__(3949);
const renderTurnstileCaptcha = (siteKey, formElement, cb, errorCallback // () => void | boolean
)=>{
    const captchaContainer = document.createElement('div');
    formElement.appendChild(captchaContainer);
    // Render the captcha
    turnstile.render(captchaContainer, {
        sitekey: siteKey,
        callback: function(token) {
            cb(token);
        },
        'error-callback': function() {
            errorCallback();
        }
    });
};
Webflow.define('forms', module.exports = function($, _) {
    const TURNSTILE_LOADED_EVENT = 'TURNSTILE_LOADED';
    var api = {};
    var $doc = $(document);
    var $forms;
    var loc = window.location;
    var retro = window.XDomainRequest && !window.atob;
    var namespace = '.w-form';
    var siteId;
    var emailField = /e(-)?mail/i;
    var emailValue = /^\S+@\S+$/;
    var alert = window.alert;
    var inApp = Webflow.env();
    var listening;
    var formUrl;
    var signFileUrl;
    const turnstileSiteKey = $doc.find('[data-turnstile-sitekey]').data('turnstile-sitekey');
    let turnstileScript;
    // MailChimp domains: list-manage.com + mirrors
    var chimpRegex = /list-manage[1-9]?.com/i;
    var disconnected = _.debounce(function() {
        console.warn('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
    }, 100);
    api.ready = api.design = api.preview = function() {
        // start by loading the turnstile script (if the user has the feature enabled)
        loadTurnstileScript();
        // Init forms
        init();
        // Wire document events on published and in preview workflow only once
        if ((!inApp || Webflow.env('preview')) && !listening) {
            addListeners();
        }
    };
    function init() {
        siteId = $('html').attr('data-wf-site');
        formUrl = "https://webflow.com" + '/api/v1/form/' + siteId;
        // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
        if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
        }
        signFileUrl = `${formUrl}/signFile`;
        $forms = $(namespace + ' form');
        if (!$forms.length) {
            return;
        }
        $forms.each(build);
    }
    function loadTurnstileScript() {
        if (turnstileSiteKey) {
            // Create script tag for turnstile
            turnstileScript = document.createElement('script');
            turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            document.head.appendChild(turnstileScript);
            turnstileScript.onload = ()=>{
                // after the script loads, emit an event that we listen to below.
                // this enables us to listen for the event on each form on the page and render the turnstile token for each of them.
                $doc.trigger(TURNSTILE_LOADED_EVENT);
            };
        }
    }
    function build(i, el) {
        // Store form state using namespace
        var $el = $(el);
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                form: $el
            });
        } // data.form
        reset(data);
        var wrap = $el.closest('div.w-form');
        data.done = wrap.find('> .w-form-done');
        data.fail = wrap.find('> .w-form-fail');
        data.fileUploads = wrap.find('.w-file-upload');
        data.fileUploads.each(function(j) {
            initFileUpload(j, data);
        });
        if (turnstileSiteKey) {
            // Once all custom fonts are loaded, set the button state to indicate Turnstile is loading
            setButtonToTurnstileLoading(data);
            // Add loading state to the form wrapper
            setFormLoadingState($el, true);
            // this is probably overkill, but if the turnstile script has already loaded and we reached this point then
            // we'll fire the callback below immediately. Otherwise we'll wait for the TURNSTILE_LOADED_EVENT to fire.
            $doc.on(typeof turnstile !== 'undefined' ? 'ready' : TURNSTILE_LOADED_EVENT, function() {
                // render the hidden input with the turnstile token for each form on the page
                renderTurnstileCaptcha(turnstileSiteKey, el, (token)=>{
                    // The turnstile token gets automatically attached to the form as a hidden input field & sent on submission to the server.
                    // Here we are using this `data.turnstileToken` value to decide whether or not the submit button should be enabled.
                    data.turnstileToken = token;
                    // enable the submit button and restore text once turnstile is done rendering
                    reset(data);
                    setFormLoadingState($el, false);
                }, ()=>{
                    // If Turnstile fails, keep the button disabled but restore original state (tooltip, etc.)
                    reset(data);
                    // Ensure button is definitely disabled if reset didn't handle it (e.g., if turnstileSiteKey logic changes)
                    if (data.btn) {
                        data.btn.prop('disabled', true);
                    }
                    setFormLoadingState($el, false);
                });
            });
        }
        // Accessibility fixes
        var formName = data.form.attr('aria-label') || data.form.attr('data-name') || 'Form';
        if (!data.done.attr('aria-label')) {
            data.form.attr('aria-label', formName);
        }
        data.done.attr('tabindex', '-1');
        data.done.attr('role', 'region');
        if (!data.done.attr('aria-label')) {
            data.done.attr('aria-label', formName + ' success');
        }
        data.fail.attr('tabindex', '-1');
        data.fail.attr('role', 'region');
        if (!data.fail.attr('aria-label')) {
            data.fail.attr('aria-label', formName + ' failure');
        }
        var action = data.action = $el.attr('action');
        data.handler = null;
        data.redirect = $el.attr('data-redirect');
        // MailChimp form
        if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
        }
        // Custom form action
        if (action) {
            return;
        }
        // Webflow forms for hosting accounts
        if (siteId) {
            data.handler =  false ? 0 : (()=>{
                const hostedSubmitHandler = (__webpack_require__(6524)/* ["default"] */["default"]);
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
            })();
            return;
        }
        // Alert for disconnected Webflow forms
        disconnected();
    }
    function addListeners() {
        listening = true;
        $doc.on('submit', namespace + ' form', function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
                data.evt = evt;
                data.handler(data);
            }
        });
        // handle checked ui for custom checkbox and radio button
        const CHECKBOX_CLASS_NAME = '.w-checkbox-input';
        const RADIO_INPUT_CLASS_NAME = '.w-radio-input';
        const CHECKED_CLASS = 'w--redirected-checked';
        const FOCUSED_CLASS = 'w--redirected-focus';
        const FOCUSED_VISIBLE_CLASS = 'w--redirected-focus-visible';
        const focusVisibleSelectors = ':focus-visible, [data-wf-focus-visible]';
        const CUSTOM_CONTROLS = [
            [
                'checkbox',
                CHECKBOX_CLASS_NAME
            ],
            [
                'radio',
                RADIO_INPUT_CLASS_NAME
            ]
        ];
        $doc.on('change', namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ')', (evt)=>{
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
        });
        $doc.on('change', namespace + ` form input[type="radio"]`, (evt)=>{
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el)=>$(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass('w-radio-input')) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
        });
        CUSTOM_CONTROLS.forEach(([controlType, customControlClassName])=>{
            $doc.on('focus', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on('blur', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
        });
    }
    // Reset data common to all submit handlers
    function reset(data) {
        var btn = data.btn = data.form.find(':input[type="submit"]');
        data.wait = data.btn.attr('data-wait') || null;
        data.success = false;
        // Determine if the button should be disabled
        const isDisabled = Boolean(turnstileSiteKey && !data.turnstileToken);
        btn.prop('disabled', isDisabled);
        btn.removeClass('w-form-loading');
        data.label && btn.val(data.label);
    }
    // Disable submit button during actual submission
    function disableBtn(data) {
        var btn = data.btn;
        var wait = data.wait; // Use the value from data-wait attribute
        btn.prop('disabled', true);
        // Show wait text and store previous label
        if (wait) {
            data.label = btn.val(); // Store the current label before overwriting
            btn.val(wait);
        }
    }
    // Set button state while Turnstile script is loading
    function setButtonToTurnstileLoading(data) {
        const btn = data.btn || data.form.find(':input[type="submit"]');
        if (!data.btn) data.btn = btn;
        btn.prop('disabled', true);
        btn.addClass('w-form-loading');
    }
    // Add/remove loading class from the form wrapper
    function setFormLoadingState($formEl, isLoading) {
        const $wrapper = $formEl.closest('.w-form');
        if (isLoading) {
            $wrapper.addClass('w-form-loading');
        } else {
            $wrapper.removeClass('w-form-loading');
        }
    }
    // Find form fields, validate, and set value pairs
    function findFields(form, result) {
        var status = null;
        result = result || {};
        // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
        form.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr('type');
            var name = field.attr('data-name') || field.attr('name') || 'Field ' + (i + 1);
            // Encoding the field name will prevent fields that have brackets
            // in their name from being parsed by `bodyParser.urlencoded` as
            // objects which would have unintended consequences like not saving
            // the content of the field.
            // https://webflow.atlassian.net/browse/CMSAUTH-2495
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === 'checkbox') {
                value = field.is(':checked');
            } else if (type === 'radio') {
                // Radio group value already processed
                if (result[name] === null || typeof result[name] === 'string') {
                    return;
                }
                value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
            }
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
        });
        return status;
    }
    function findFileUploads(form) {
        var result = {};
        form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr('data-name') || field.attr('name') || 'File ' + (i + 1);
            var value = field.attr('data-value');
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
        });
        return result;
    }
    const trackingCookieNameMap = {
        _mkto_trk: 'marketo'
    };
    function collectEnterpriseTrackingCookies() {
        const cookies = document.cookie.split('; ').reduce(function(acc, cookie) {
            const splitCookie = cookie.split('=');
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join('=');
                acc[mappedName] = value;
            }
            return acc;
        }, {});
        return cookies;
    }
    function getStatus(field, type, name, value) {
        var status = null;
        if (type === 'password') {
            status = 'Passwords cannot be submitted.';
        } else if (field.attr('required')) {
            if (!value) {
                status = 'Please fill out the required field: ' + name;
            } else if (emailField.test(field.attr('type'))) {
                if (!emailValue.test(value)) {
                    status = 'Please enter a valid email address for: ' + name;
                }
            }
        } else if (name === 'g-recaptcha-response' && !value) {
            status = "Please confirm you're not a robot.";
        }
        return status;
    }
    function exportedSubmitWebflow(data) {
        preventDefault(data);
        afterSubmit(data);
    }
    // Submit form to MailChimp
    function submitMailChimp(data) {
        reset(data);
        var form = data.form;
        var payload = {};
        // Skip Ajax submission if http/s mismatch, fallback to POST instead
        if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr('method', 'post');
            return;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload);
        if (status) {
            return alert(status);
        }
        // Disable submit button
        disableBtn(data);
        // Use special format for MailChimp params
        var fullName;
        _.each(payload, function(value, key) {
            if (emailField.test(key)) {
                payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
            }
        });
        if (fullName && !payload.FNAME) {
            fullName = fullName.split(' ');
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
        }
        // Use the (undocumented) MailChimp jsonp api
        var url = data.action.replace('/post?', '/post-json?') + '&c=?';
        // Add special param to prevent bot signups
        var userId = url.indexOf('u=') + 2;
        userId = url.substring(userId, url.indexOf('&', userId));
        var listId = url.indexOf('id=') + 3;
        listId = url.substring(listId, url.indexOf('&', listId));
        payload['b_' + userId + '_' + listId] = '';
        $.ajax({
            url,
            data: payload,
            dataType: 'jsonp'
        }).done(function(resp) {
            data.success = resp.result === 'success' || /already/.test(resp.msg);
            if (!data.success) {
                console.info('MailChimp error: ' + resp.msg);
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    }
    // Common callback which runs after all Ajax submissions
    function afterSubmit(data) {
        var form = data.form;
        var redirect = data.redirect;
        var success = data.success;
        // Redirect to a success url if defined
        if (success && redirect) {
            Webflow.location(redirect);
            return;
        }
        // Show or hide status divs
        data.done.toggle(success);
        data.fail.toggle(!success);
        if (success) {
            data.done.focus();
        } else {
            data.fail.focus();
        }
        // Hide form on success
        form.toggle(!success);
        // Reset data and enable submit button
        reset(data);
    }
    function preventDefault(data) {
        data.evt && data.evt.preventDefault();
        data.evt = null;
    }
    function initFileUpload(i, form) {
        if (!form.fileUploads || !form.fileUploads[i]) {
            return;
        }
        var file;
        var $el = $(form.fileUploads[i]);
        var $defaultWrap = $el.find('> .w-file-upload-default');
        var $uploadingWrap = $el.find('> .w-file-upload-uploading');
        var $successWrap = $el.find('> .w-file-upload-success');
        var $errorWrap = $el.find('> .w-file-upload-error');
        var $input = $defaultWrap.find('.w-file-upload-input');
        var $label = $defaultWrap.find('.w-file-upload-label');
        var $labelChildren = $label.children();
        var $errorMsgEl = $errorWrap.find('.w-file-upload-error-msg');
        var $fileEl = $successWrap.find('.w-file-upload-file');
        var $removeEl = $successWrap.find('.w-file-remove-link');
        var $fileNameEl = $fileEl.find('.w-file-upload-file-name');
        var sizeErrMsg = $errorMsgEl.attr('data-w-size-error');
        var typeErrMsg = $errorMsgEl.attr('data-w-type-error');
        var genericErrMsg = $errorMsgEl.attr('data-w-generic-error');
        // Accessibility fixes
        // The file upload Input is not stylable by the designer, so we are
        // going to pretend the Label is the input. ¯\_(ツ)_/¯
        if (!inApp) {
            $label.on('click keydown', function(e) {
                if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
                    return;
                }
                e.preventDefault();
                $input.click();
            });
        }
        // Both of these are added through CSS
        $label.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true');
        $removeEl.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true');
        if (!inApp) {
            $removeEl.on('click keydown', function(e) {
                if (e.type === 'keydown') {
                    if (e.which !== 13 && e.which !== 32) {
                        return;
                    }
                    e.preventDefault();
                }
                $input.removeAttr('data-value');
                $input.val('');
                $fileNameEl.html('');
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
            });
            $input.on('change', function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                    return;
                }
                // Show uploading
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                // Set filename
                $fileNameEl.text(file.name);
                // Disable submit button
                if (!isUploading()) {
                    disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
            });
            // Setting input width 1px and height equal label
            // This is so the browser required error will show up
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
        } else {
            $input.on('click', function(e) {
                e.preventDefault();
            });
            $label.on('click', function(e) {
                e.preventDefault();
            });
            $labelChildren.on('click', function(e) {
                e.preventDefault();
            });
        }
        function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === 'string' && errorMsg.indexOf('InvalidFileTypeError') === 0) {
                userError = typeErrMsg;
            } else if (typeof errorMsg === 'string' && errorMsg.indexOf('MaxFileSizeError') === 0) {
                userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr('data-value');
            $input.val('');
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function afterSign(err, data) {
            if (err) {
                return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr('data-value', fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
        }
        function afterUpload(err) {
            if (err) {
                return parseError(err);
            }
            // Show success
            $uploadingWrap.toggle(false);
            $successWrap.css('display', 'inline-block');
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
                return value.uploading;
            });
        }
    }
    function signFile(file, cb) {
        var payload = new URLSearchParams({
            name: file.name,
            size: file.size
        });
        $.ajax({
            type: 'GET',
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
        }).done(function(data) {
            cb(null, data);
        }).fail(function(err) {
            cb(err);
        });
    }
    function uploadS3(url, data, file, fileName, cb) {
        var formData = new FormData();
        for(var k in data){
            formData.append(k, data[k]);
        }
        formData.append('file', file, fileName);
        $.ajax({
            type: 'POST',
            url,
            data: formData,
            processData: false,
            contentType: false
        }).done(function() {
            cb(null);
        }).fail(function(err) {
            cb(err);
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9ybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsc1xuICB3aW5kb3csXG4gIGRvY3VtZW50LFxuICBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QsXG4gIFdFQkZMT1dfRk9STV9PTERJRV9IT1NULFxuICBXRUJGTE9XX0VYUE9SVF9NT0RFLFxuICB0dXJuc3RpbGVcbiovXG5cbi8qKlxuICogV2ViZmxvdzogRm9ybXNcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWxpYicpO1xuXG5jb25zdCByZW5kZXJUdXJuc3RpbGVDYXB0Y2hhID0gKFxuICBzaXRlS2V5LCAvLyBzdHJpbmdcbiAgZm9ybUVsZW1lbnQsIC8vIEhUTUxGb3JtRWxlbWVudFxuICBjYiwgLy8gKHRva2VuOiBzdHJpbmcpID0+IHZvaWRcbiAgZXJyb3JDYWxsYmFjayAvLyAoKSA9PiB2b2lkIHwgYm9vbGVhblxuKSA9PiB7XG4gIGNvbnN0IGNhcHRjaGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FwdGNoYUNvbnRhaW5lcik7XG5cbiAgLy8gUmVuZGVyIHRoZSBjYXB0Y2hhXG4gIHR1cm5zdGlsZS5yZW5kZXIoY2FwdGNoYUNvbnRhaW5lciwge1xuICAgIHNpdGVrZXk6IHNpdGVLZXksXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgY2IodG9rZW4pO1xuICAgIH0sXG4gICAgJ2Vycm9yLWNhbGxiYWNrJzogZnVuY3Rpb24gKCkge1xuICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdmb3JtcycsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfKSB7XG4gICAgY29uc3QgVFVSTlNUSUxFX0xPQURFRF9FVkVOVCA9ICdUVVJOU1RJTEVfTE9BREVEJztcbiAgICB2YXIgYXBpID0ge307XG5cbiAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkZm9ybXM7XG4gICAgdmFyIGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgcmV0cm8gPSB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgIXdpbmRvdy5hdG9iO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctZm9ybSc7XG4gICAgdmFyIHNpdGVJZDtcbiAgICB2YXIgZW1haWxGaWVsZCA9IC9lKC0pP21haWwvaTtcbiAgICB2YXIgZW1haWxWYWx1ZSA9IC9eXFxTK0BcXFMrJC87XG4gICAgdmFyIGFsZXJ0ID0gd2luZG93LmFsZXJ0O1xuICAgIHZhciBpbkFwcCA9IFdlYmZsb3cuZW52KCk7XG4gICAgdmFyIGxpc3RlbmluZztcblxuICAgIHZhciBmb3JtVXJsO1xuICAgIHZhciBzaWduRmlsZVVybDtcblxuICAgIGNvbnN0IHR1cm5zdGlsZVNpdGVLZXkgPSAkZG9jXG4gICAgICAuZmluZCgnW2RhdGEtdHVybnN0aWxlLXNpdGVrZXldJylcbiAgICAgIC5kYXRhKCd0dXJuc3RpbGUtc2l0ZWtleScpO1xuICAgIGxldCB0dXJuc3RpbGVTY3JpcHQ7XG5cbiAgICAvLyBNYWlsQ2hpbXAgZG9tYWluczogbGlzdC1tYW5hZ2UuY29tICsgbWlycm9yc1xuICAgIHZhciBjaGltcFJlZ2V4ID0gL2xpc3QtbWFuYWdlWzEtOV0/LmNvbS9pO1xuXG4gICAgdmFyIGRpc2Nvbm5lY3RlZCA9IF8uZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnT29wcyEgVGhpcyBwYWdlIGhhcyBpbXByb3Blcmx5IGNvbmZpZ3VyZWQgZm9ybXMuIFBsZWFzZSBjb250YWN0IHlvdXIgd2Vic2l0ZSBhZG1pbmlzdHJhdG9yIHRvIGZpeCB0aGlzIGlzc3VlLidcbiAgICAgICk7XG4gICAgfSwgMTAwKTtcblxuICAgIGFwaS5yZWFkeSA9XG4gICAgICBhcGkuZGVzaWduID1cbiAgICAgIGFwaS5wcmV2aWV3ID1cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHN0YXJ0IGJ5IGxvYWRpbmcgdGhlIHR1cm5zdGlsZSBzY3JpcHQgKGlmIHRoZSB1c2VyIGhhcyB0aGUgZmVhdHVyZSBlbmFibGVkKVxuICAgICAgICAgIGxvYWRUdXJuc3RpbGVTY3JpcHQoKTtcblxuICAgICAgICAgIC8vIEluaXQgZm9ybXNcbiAgICAgICAgICBpbml0KCk7XG5cbiAgICAgICAgICAvLyBXaXJlIGRvY3VtZW50IGV2ZW50cyBvbiBwdWJsaXNoZWQgYW5kIGluIHByZXZpZXcgd29ya2Zsb3cgb25seSBvbmNlXG4gICAgICAgICAgaWYgKCghaW5BcHAgfHwgV2ViZmxvdy5lbnYoJ3ByZXZpZXcnKSkgJiYgIWxpc3RlbmluZykge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHNpdGVJZCA9ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLXNpdGUnKTtcblxuICAgICAgZm9ybVVybCA9IFdFQkZMT1dfRk9STV9BUElfSE9TVCArICcvYXBpL3YxL2Zvcm0vJyArIHNpdGVJZDtcblxuICAgICAgLy8gV29yayBhcm91bmQgc2FtZS1wcm90b2NvbCBJRSBYRFIgbGltaXRhdGlvbiAtIHdpdGhvdXQgdGhpcyBJRTkgYW5kIGJlbG93IGZvcm1zIHdvbid0IHN1Ym1pdFxuICAgICAgaWYgKHJldHJvICYmIGZvcm1VcmwuaW5kZXhPZihXRUJGTE9XX0ZPUk1fQVBJX0hPU1QpID49IDApIHtcbiAgICAgICAgZm9ybVVybCA9IGZvcm1VcmwucmVwbGFjZShcbiAgICAgICAgICBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QsXG4gICAgICAgICAgV0VCRkxPV19GT1JNX09MRElFX0hPU1RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc2lnbkZpbGVVcmwgPSBgJHtmb3JtVXJsfS9zaWduRmlsZWA7XG5cbiAgICAgICRmb3JtcyA9ICQobmFtZXNwYWNlICsgJyBmb3JtJyk7XG4gICAgICBpZiAoISRmb3Jtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJGZvcm1zLmVhY2goYnVpbGQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUdXJuc3RpbGVTY3JpcHQoKSB7XG4gICAgICBpZiAodHVybnN0aWxlU2l0ZUtleSkge1xuICAgICAgICAvLyBDcmVhdGUgc2NyaXB0IHRhZyBmb3IgdHVybnN0aWxlXG4gICAgICAgIHR1cm5zdGlsZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB0dXJuc3RpbGVTY3JpcHQuc3JjID1cbiAgICAgICAgICAnaHR0cHM6Ly9jaGFsbGVuZ2VzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS92MC9hcGkuanMnO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHR1cm5zdGlsZVNjcmlwdCk7XG4gICAgICAgIHR1cm5zdGlsZVNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNjcmlwdCBsb2FkcywgZW1pdCBhbiBldmVudCB0aGF0IHdlIGxpc3RlbiB0byBiZWxvdy5cbiAgICAgICAgICAvLyB0aGlzIGVuYWJsZXMgdXMgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnQgb24gZWFjaCBmb3JtIG9uIHRoZSBwYWdlIGFuZCByZW5kZXIgdGhlIHR1cm5zdGlsZSB0b2tlbiBmb3IgZWFjaCBvZiB0aGVtLlxuICAgICAgICAgICRkb2MudHJpZ2dlcihUVVJOU1RJTEVfTE9BREVEX0VWRU5UKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZChpLCBlbCkge1xuICAgICAgLy8gU3RvcmUgZm9ybSBzdGF0ZSB1c2luZyBuYW1lc3BhY2VcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKGVsLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSwge2Zvcm06ICRlbH0pO1xuICAgICAgfSAvLyBkYXRhLmZvcm1cblxuICAgICAgcmVzZXQoZGF0YSk7XG4gICAgICB2YXIgd3JhcCA9ICRlbC5jbG9zZXN0KCdkaXYudy1mb3JtJyk7XG4gICAgICBkYXRhLmRvbmUgPSB3cmFwLmZpbmQoJz4gLnctZm9ybS1kb25lJyk7XG4gICAgICBkYXRhLmZhaWwgPSB3cmFwLmZpbmQoJz4gLnctZm9ybS1mYWlsJyk7XG4gICAgICBkYXRhLmZpbGVVcGxvYWRzID0gd3JhcC5maW5kKCcudy1maWxlLXVwbG9hZCcpO1xuXG4gICAgICBkYXRhLmZpbGVVcGxvYWRzLmVhY2goZnVuY3Rpb24gKGopIHtcbiAgICAgICAgaW5pdEZpbGVVcGxvYWQoaiwgZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR1cm5zdGlsZVNpdGVLZXkpIHtcbiAgICAgICAgLy8gT25jZSBhbGwgY3VzdG9tIGZvbnRzIGFyZSBsb2FkZWQsIHNldCB0aGUgYnV0dG9uIHN0YXRlIHRvIGluZGljYXRlIFR1cm5zdGlsZSBpcyBsb2FkaW5nXG4gICAgICAgIHNldEJ1dHRvblRvVHVybnN0aWxlTG9hZGluZyhkYXRhKTtcblxuICAgICAgICAvLyBBZGQgbG9hZGluZyBzdGF0ZSB0byB0aGUgZm9ybSB3cmFwcGVyXG4gICAgICAgIHNldEZvcm1Mb2FkaW5nU3RhdGUoJGVsLCB0cnVlKTtcblxuICAgICAgICAvLyB0aGlzIGlzIHByb2JhYmx5IG92ZXJraWxsLCBidXQgaWYgdGhlIHR1cm5zdGlsZSBzY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkIGFuZCB3ZSByZWFjaGVkIHRoaXMgcG9pbnQgdGhlblxuICAgICAgICAvLyB3ZSdsbCBmaXJlIHRoZSBjYWxsYmFjayBiZWxvdyBpbW1lZGlhdGVseS4gT3RoZXJ3aXNlIHdlJ2xsIHdhaXQgZm9yIHRoZSBUVVJOU1RJTEVfTE9BREVEX0VWRU5UIHRvIGZpcmUuXG4gICAgICAgICRkb2Mub24oXG4gICAgICAgICAgdHlwZW9mIHR1cm5zdGlsZSAhPT0gJ3VuZGVmaW5lZCcgPyAncmVhZHknIDogVFVSTlNUSUxFX0xPQURFRF9FVkVOVCxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIGhpZGRlbiBpbnB1dCB3aXRoIHRoZSB0dXJuc3RpbGUgdG9rZW4gZm9yIGVhY2ggZm9ybSBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgcmVuZGVyVHVybnN0aWxlQ2FwdGNoYShcbiAgICAgICAgICAgICAgdHVybnN0aWxlU2l0ZUtleSxcbiAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB0dXJuc3RpbGUgdG9rZW4gZ2V0cyBhdXRvbWF0aWNhbGx5IGF0dGFjaGVkIHRvIHRoZSBmb3JtIGFzIGEgaGlkZGVuIGlucHV0IGZpZWxkICYgc2VudCBvbiBzdWJtaXNzaW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgLy8gSGVyZSB3ZSBhcmUgdXNpbmcgdGhpcyBgZGF0YS50dXJuc3RpbGVUb2tlbmAgdmFsdWUgdG8gZGVjaWRlIHdoZXRoZXIgb3Igbm90IHRoZSBzdWJtaXQgYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGRhdGEudHVybnN0aWxlVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAvLyBlbmFibGUgdGhlIHN1Ym1pdCBidXR0b24gYW5kIHJlc3RvcmUgdGV4dCBvbmNlIHR1cm5zdGlsZSBpcyBkb25lIHJlbmRlcmluZ1xuICAgICAgICAgICAgICAgIHJlc2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgIHNldEZvcm1Mb2FkaW5nU3RhdGUoJGVsLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBUdXJuc3RpbGUgZmFpbHMsIGtlZXAgdGhlIGJ1dHRvbiBkaXNhYmxlZCBidXQgcmVzdG9yZSBvcmlnaW5hbCBzdGF0ZSAodG9vbHRpcCwgZXRjLilcbiAgICAgICAgICAgICAgICByZXNldChkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgYnV0dG9uIGlzIGRlZmluaXRlbHkgZGlzYWJsZWQgaWYgcmVzZXQgZGlkbid0IGhhbmRsZSBpdCAoZS5nLiwgaWYgdHVybnN0aWxlU2l0ZUtleSBsb2dpYyBjaGFuZ2VzKVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmJ0bikge1xuICAgICAgICAgICAgICAgICAgZGF0YS5idG4ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0Rm9ybUxvYWRpbmdTdGF0ZSgkZWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgZml4ZXNcbiAgICAgIHZhciBmb3JtTmFtZSA9XG4gICAgICAgIGRhdGEuZm9ybS5hdHRyKCdhcmlhLWxhYmVsJykgfHwgZGF0YS5mb3JtLmF0dHIoJ2RhdGEtbmFtZScpIHx8ICdGb3JtJztcbiAgICAgIGlmICghZGF0YS5kb25lLmF0dHIoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICBkYXRhLmZvcm0uYXR0cignYXJpYS1sYWJlbCcsIGZvcm1OYW1lKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5kb25lLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBkYXRhLmRvbmUuYXR0cigncm9sZScsICdyZWdpb24nKTtcbiAgICAgIGlmICghZGF0YS5kb25lLmF0dHIoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICBkYXRhLmRvbmUuYXR0cignYXJpYS1sYWJlbCcsIGZvcm1OYW1lICsgJyBzdWNjZXNzJyk7XG4gICAgICB9XG4gICAgICBkYXRhLmZhaWwuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIGRhdGEuZmFpbC5hdHRyKCdyb2xlJywgJ3JlZ2lvbicpO1xuICAgICAgaWYgKCFkYXRhLmZhaWwuYXR0cignYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIGRhdGEuZmFpbC5hdHRyKCdhcmlhLWxhYmVsJywgZm9ybU5hbWUgKyAnIGZhaWx1cmUnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGlvbiA9IChkYXRhLmFjdGlvbiA9ICRlbC5hdHRyKCdhY3Rpb24nKSk7XG4gICAgICBkYXRhLmhhbmRsZXIgPSBudWxsO1xuICAgICAgZGF0YS5yZWRpcmVjdCA9ICRlbC5hdHRyKCdkYXRhLXJlZGlyZWN0Jyk7XG5cbiAgICAgIC8vIE1haWxDaGltcCBmb3JtXG4gICAgICBpZiAoY2hpbXBSZWdleC50ZXN0KGFjdGlvbikpIHtcbiAgICAgICAgZGF0YS5oYW5kbGVyID0gc3VibWl0TWFpbENoaW1wO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEN1c3RvbSBmb3JtIGFjdGlvblxuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFdlYmZsb3cgZm9ybXMgZm9yIGhvc3RpbmcgYWNjb3VudHNcbiAgICAgIGlmIChzaXRlSWQpIHtcbiAgICAgICAgZGF0YS5oYW5kbGVyID0gV0VCRkxPV19FWFBPUlRfTU9ERVxuICAgICAgICAgID8gZXhwb3J0ZWRTdWJtaXRXZWJmbG93XG4gICAgICAgICAgOiAoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBob3N0ZWRTdWJtaXRIYW5kbGVyID1cbiAgICAgICAgICAgICAgICByZXF1aXJlKCcuL3dlYmZsb3ctZm9ybXMtaG9zdGVkJykuZGVmYXVsdDtcbiAgICAgICAgICAgICAgcmV0dXJuIGhvc3RlZFN1Ym1pdEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgICAgICAgICAgbG9jLFxuICAgICAgICAgICAgICAgIFdlYmZsb3csXG4gICAgICAgICAgICAgICAgY29sbGVjdEVudGVycHJpc2VUcmFja2luZ0Nvb2tpZXMsXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQsXG4gICAgICAgICAgICAgICAgZmluZEZpZWxkcyxcbiAgICAgICAgICAgICAgICBhbGVydCxcbiAgICAgICAgICAgICAgICBmaW5kRmlsZVVwbG9hZHMsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJ0bixcbiAgICAgICAgICAgICAgICBzaXRlSWQsXG4gICAgICAgICAgICAgICAgYWZ0ZXJTdWJtaXQsXG4gICAgICAgICAgICAgICAgJCxcbiAgICAgICAgICAgICAgICBmb3JtVXJsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFsZXJ0IGZvciBkaXNjb25uZWN0ZWQgV2ViZmxvdyBmb3Jtc1xuICAgICAgZGlzY29ubmVjdGVkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgbGlzdGVuaW5nID0gdHJ1ZTtcblxuICAgICAgJGRvYy5vbignc3VibWl0JywgbmFtZXNwYWNlICsgJyBmb3JtJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQuZGF0YSh0aGlzLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoZGF0YS5oYW5kbGVyKSB7XG4gICAgICAgICAgZGF0YS5ldnQgPSBldnQ7XG4gICAgICAgICAgZGF0YS5oYW5kbGVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gaGFuZGxlIGNoZWNrZWQgdWkgZm9yIGN1c3RvbSBjaGVja2JveCBhbmQgcmFkaW8gYnV0dG9uXG4gICAgICBjb25zdCBDSEVDS0JPWF9DTEFTU19OQU1FID0gJy53LWNoZWNrYm94LWlucHV0JztcbiAgICAgIGNvbnN0IFJBRElPX0lOUFVUX0NMQVNTX05BTUUgPSAnLnctcmFkaW8taW5wdXQnO1xuICAgICAgY29uc3QgQ0hFQ0tFRF9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWNoZWNrZWQnO1xuICAgICAgY29uc3QgRk9DVVNFRF9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWZvY3VzJztcbiAgICAgIGNvbnN0IEZPQ1VTRURfVklTSUJMRV9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWZvY3VzLXZpc2libGUnO1xuICAgICAgY29uc3QgZm9jdXNWaXNpYmxlU2VsZWN0b3JzID0gJzpmb2N1cy12aXNpYmxlLCBbZGF0YS13Zi1mb2N1cy12aXNpYmxlXSc7XG5cbiAgICAgIGNvbnN0IENVU1RPTV9DT05UUk9MUyA9IFtcbiAgICAgICAgWydjaGVja2JveCcsIENIRUNLQk9YX0NMQVNTX05BTUVdLFxuICAgICAgICBbJ3JhZGlvJywgUkFESU9fSU5QVVRfQ0xBU1NfTkFNRV0sXG4gICAgICBdO1xuXG4gICAgICAkZG9jLm9uKFxuICAgICAgICAnY2hhbmdlJyxcbiAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICBgIGZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChgICtcbiAgICAgICAgICBDSEVDS0JPWF9DTEFTU19OQU1FICtcbiAgICAgICAgICAnKScsXG4gICAgICAgIChldnQpID0+IHtcbiAgICAgICAgICAkKGV2dC50YXJnZXQpXG4gICAgICAgICAgICAuc2libGluZ3MoQ0hFQ0tCT1hfQ0xBU1NfTkFNRSlcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhDSEVDS0VEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgJGRvYy5vbignY2hhbmdlJywgbmFtZXNwYWNlICsgYCBmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXWAsIChldnQpID0+IHtcbiAgICAgICAgJChgaW5wdXRbbmFtZT1cIiR7ZXZ0LnRhcmdldC5uYW1lfVwiXTpub3QoJHtDSEVDS0JPWF9DTEFTU19OQU1FfSlgKS5tYXAoXG4gICAgICAgICAgKGksIGVsKSA9PlxuICAgICAgICAgICAgJChlbCkuc2libGluZ3MoUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSkucmVtb3ZlQ2xhc3MoQ0hFQ0tFRF9DTEFTUylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldnQudGFyZ2V0KTtcblxuICAgICAgICBpZiAoISR0YXJnZXQuaGFzQ2xhc3MoJ3ctcmFkaW8taW5wdXQnKSkge1xuICAgICAgICAgICR0YXJnZXQuc2libGluZ3MoUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSkuYWRkQ2xhc3MoQ0hFQ0tFRF9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBDVVNUT01fQ09OVFJPTFMuZm9yRWFjaCgoW2NvbnRyb2xUeXBlLCBjdXN0b21Db250cm9sQ2xhc3NOYW1lXSkgPT4ge1xuICAgICAgICAkZG9jLm9uKFxuICAgICAgICAgICdmb2N1cycsXG4gICAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiJHtjb250cm9sVHlwZX1cIl06bm90KGAgK1xuICAgICAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzTmFtZSArXG4gICAgICAgICAgICAnKScsXG4gICAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLmFkZENsYXNzKEZPQ1VTRURfQ0xBU1MpO1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuZmlsdGVyKGZvY3VzVmlzaWJsZVNlbGVjdG9ycylcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKGN1c3RvbUNvbnRyb2xDbGFzc05hbWUpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhGT0NVU0VEX1ZJU0lCTEVfQ0xBU1MpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgJGRvYy5vbihcbiAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiJHtjb250cm9sVHlwZX1cIl06bm90KGAgK1xuICAgICAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzTmFtZSArXG4gICAgICAgICAgICAnKScsXG4gICAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke0ZPQ1VTRURfQ0xBU1N9ICR7Rk9DVVNFRF9WSVNJQkxFX0NMQVNTfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGRhdGEgY29tbW9uIHRvIGFsbCBzdWJtaXQgaGFuZGxlcnNcbiAgICBmdW5jdGlvbiByZXNldChkYXRhKSB7XG4gICAgICB2YXIgYnRuID0gKGRhdGEuYnRuID0gZGF0YS5mb3JtLmZpbmQoJzppbnB1dFt0eXBlPVwic3VibWl0XCJdJykpO1xuICAgICAgZGF0YS53YWl0ID0gZGF0YS5idG4uYXR0cignZGF0YS13YWl0JykgfHwgbnVsbDtcbiAgICAgIGRhdGEuc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBCb29sZWFuKHR1cm5zdGlsZVNpdGVLZXkgJiYgIWRhdGEudHVybnN0aWxlVG9rZW4pO1xuICAgICAgYnRuLnByb3AoJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICBidG4ucmVtb3ZlQ2xhc3MoJ3ctZm9ybS1sb2FkaW5nJyk7XG4gICAgICBkYXRhLmxhYmVsICYmIGJ0bi52YWwoZGF0YS5sYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uIGR1cmluZyBhY3R1YWwgc3VibWlzc2lvblxuICAgIGZ1bmN0aW9uIGRpc2FibGVCdG4oZGF0YSkge1xuICAgICAgdmFyIGJ0biA9IGRhdGEuYnRuO1xuICAgICAgdmFyIHdhaXQgPSBkYXRhLndhaXQ7IC8vIFVzZSB0aGUgdmFsdWUgZnJvbSBkYXRhLXdhaXQgYXR0cmlidXRlXG5cbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAvLyBTaG93IHdhaXQgdGV4dCBhbmQgc3RvcmUgcHJldmlvdXMgbGFiZWxcbiAgICAgIGlmICh3YWl0KSB7XG4gICAgICAgIGRhdGEubGFiZWwgPSBidG4udmFsKCk7IC8vIFN0b3JlIHRoZSBjdXJyZW50IGxhYmVsIGJlZm9yZSBvdmVyd3JpdGluZ1xuICAgICAgICBidG4udmFsKHdhaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBidXR0b24gc3RhdGUgd2hpbGUgVHVybnN0aWxlIHNjcmlwdCBpcyBsb2FkaW5nXG4gICAgZnVuY3Rpb24gc2V0QnV0dG9uVG9UdXJuc3RpbGVMb2FkaW5nKGRhdGEpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGRhdGEuYnRuIHx8IGRhdGEuZm9ybS5maW5kKCc6aW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgaWYgKCFkYXRhLmJ0bikgZGF0YS5idG4gPSBidG47XG5cbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgYnRuLmFkZENsYXNzKCd3LWZvcm0tbG9hZGluZycpO1xuICAgIH1cblxuICAgIC8vIEFkZC9yZW1vdmUgbG9hZGluZyBjbGFzcyBmcm9tIHRoZSBmb3JtIHdyYXBwZXJcbiAgICBmdW5jdGlvbiBzZXRGb3JtTG9hZGluZ1N0YXRlKCRmb3JtRWwsIGlzTG9hZGluZykge1xuICAgICAgY29uc3QgJHdyYXBwZXIgPSAkZm9ybUVsLmNsb3Nlc3QoJy53LWZvcm0nKTtcbiAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ3ctZm9ybS1sb2FkaW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygndy1mb3JtLWxvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaW5kIGZvcm0gZmllbGRzLCB2YWxpZGF0ZSwgYW5kIHNldCB2YWx1ZSBwYWlyc1xuICAgIGZ1bmN0aW9uIGZpbmRGaWVsZHMoZm9ybSwgcmVzdWx0KSB7XG4gICAgICB2YXIgc3RhdHVzID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB7fTtcblxuICAgICAgLy8gVGhlIFwiOmlucHV0XCIgc2VsZWN0b3IgaXMgYSBqUXVlcnkgc2hvcnRjdXQgdG8gc2VsZWN0IGFsbCBpbnB1dHMsIHNlbGVjdHMsIHRleHRhcmVhc1xuICAgICAgZm9ybVxuICAgICAgICAuZmluZChcbiAgICAgICAgICAnOmlucHV0Om5vdChbdHlwZT1cInN1Ym1pdFwiXSk6bm90KFt0eXBlPVwiZmlsZVwiXSk6bm90KFt0eXBlPVwiYnV0dG9uXCJdKSdcbiAgICAgICAgKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSAkKGVsKTtcbiAgICAgICAgICB2YXIgdHlwZSA9IGZpZWxkLmF0dHIoJ3R5cGUnKTtcbiAgICAgICAgICB2YXIgbmFtZSA9XG4gICAgICAgICAgICBmaWVsZC5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmaWVsZC5hdHRyKCduYW1lJykgfHwgJ0ZpZWxkICcgKyAoaSArIDEpO1xuICAgICAgICAgIC8vIEVuY29kaW5nIHRoZSBmaWVsZCBuYW1lIHdpbGwgcHJldmVudCBmaWVsZHMgdGhhdCBoYXZlIGJyYWNrZXRzXG4gICAgICAgICAgLy8gaW4gdGhlaXIgbmFtZSBmcm9tIGJlaW5nIHBhcnNlZCBieSBgYm9keVBhcnNlci51cmxlbmNvZGVkYCBhc1xuICAgICAgICAgIC8vIG9iamVjdHMgd2hpY2ggd291bGQgaGF2ZSB1bmludGVuZGVkIGNvbnNlcXVlbmNlcyBsaWtlIG5vdCBzYXZpbmdcbiAgICAgICAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgZmllbGQuXG4gICAgICAgICAgLy8gaHR0cHM6Ly93ZWJmbG93LmF0bGFzc2lhbi5uZXQvYnJvd3NlL0NNU0FVVEgtMjQ5NVxuICAgICAgICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZmllbGQudmFsKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBmaWVsZC5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIC8vIFJhZGlvIGdyb3VwIHZhbHVlIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHRbbmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICBmb3JtXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W25hbWU9XCInICsgZmllbGQuYXR0cignbmFtZScpICsgJ1wiXTpjaGVja2VkJylcbiAgICAgICAgICAgICAgICAudmFsKCkgfHwgbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSAkLnRyaW0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBzdGF0dXMgPSBzdGF0dXMgfHwgZ2V0U3RhdHVzKGZpZWxkLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRGaWxlVXBsb2Fkcyhmb3JtKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgIGZvcm0uZmluZCgnOmlucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gJChlbCk7XG4gICAgICAgIHZhciBuYW1lID1cbiAgICAgICAgICBmaWVsZC5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmaWVsZC5hdHRyKCduYW1lJykgfHwgJ0ZpbGUgJyArIChpICsgMSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZpZWxkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YWx1ZSA9ICQudHJpbSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFja2luZ0Nvb2tpZU5hbWVNYXAgPSB7XG4gICAgICBfbWt0b190cms6ICdtYXJrZXRvJyxcbiAgICAgIC8vIF9faHN0YzogJ2h1YnNwb3QnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcygpIHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykucmVkdWNlKGZ1bmN0aW9uIChcbiAgICAgICAgYWNjLFxuICAgICAgICBjb29raWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBzcGxpdENvb2tpZSA9IGNvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCBuYW1lID0gc3BsaXRDb29raWVbMF07XG4gICAgICAgIGlmIChuYW1lIGluIHRyYWNraW5nQ29va2llTmFtZU1hcCkge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZE5hbWUgPSB0cmFja2luZ0Nvb2tpZU5hbWVNYXBbbmFtZV07XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzcGxpdENvb2tpZS5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgICAgYWNjW21hcHBlZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKGZpZWxkLCB0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXR1cyA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIHN0YXR1cyA9ICdQYXNzd29yZHMgY2Fubm90IGJlIHN1Ym1pdHRlZC4nO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZC5hdHRyKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnUGxlYXNlIGZpbGwgb3V0IHRoZSByZXF1aXJlZCBmaWVsZDogJyArIG5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZW1haWxGaWVsZC50ZXN0KGZpZWxkLmF0dHIoJ3R5cGUnKSkpIHtcbiAgICAgICAgICBpZiAoIWVtYWlsVmFsdWUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIGZvcjogJyArIG5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdnLXJlY2FwdGNoYS1yZXNwb25zZScgJiYgIXZhbHVlKSB7XG4gICAgICAgIHN0YXR1cyA9IFwiUGxlYXNlIGNvbmZpcm0geW91J3JlIG5vdCBhIHJvYm90LlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydGVkU3VibWl0V2ViZmxvdyhkYXRhKSB7XG4gICAgICBwcmV2ZW50RGVmYXVsdChkYXRhKTtcbiAgICAgIGFmdGVyU3VibWl0KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFN1Ym1pdCBmb3JtIHRvIE1haWxDaGltcFxuICAgIGZ1bmN0aW9uIHN1Ym1pdE1haWxDaGltcChkYXRhKSB7XG4gICAgICByZXNldChkYXRhKTtcblxuICAgICAgdmFyIGZvcm0gPSBkYXRhLmZvcm07XG4gICAgICB2YXIgcGF5bG9hZCA9IHt9O1xuXG4gICAgICAvLyBTa2lwIEFqYXggc3VibWlzc2lvbiBpZiBodHRwL3MgbWlzbWF0Y2gsIGZhbGxiYWNrIHRvIFBPU1QgaW5zdGVhZFxuICAgICAgaWYgKC9eaHR0cHMvLnRlc3QobG9jLmhyZWYpICYmICEvXmh0dHBzLy50ZXN0KGRhdGEuYWN0aW9uKSkge1xuICAgICAgICBmb3JtLmF0dHIoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJldmVudERlZmF1bHQoZGF0YSk7XG5cbiAgICAgIC8vIEZpbmQgJiBwb3B1bGF0ZSBhbGwgZmllbGRzXG4gICAgICB2YXIgc3RhdHVzID0gZmluZEZpZWxkcyhmb3JtLCBwYXlsb2FkKTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHN0YXR1cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgICAgZGlzYWJsZUJ0bihkYXRhKTtcblxuICAgICAgLy8gVXNlIHNwZWNpYWwgZm9ybWF0IGZvciBNYWlsQ2hpbXAgcGFyYW1zXG4gICAgICB2YXIgZnVsbE5hbWU7XG4gICAgICBfLmVhY2gocGF5bG9hZCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGVtYWlsRmllbGQudGVzdChrZXkpKSB7XG4gICAgICAgICAgcGF5bG9hZC5FTUFJTCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXigoZnVsbFsgXy1dPyk/bmFtZSkkL2kudGVzdChrZXkpKSB7XG4gICAgICAgICAgZnVsbE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL14oZmlyc3RbIF8tXT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkZOQU1FID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eKGxhc3RbIF8tXT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkxOQU1FID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZnVsbE5hbWUgJiYgIXBheWxvYWQuRk5BTUUpIHtcbiAgICAgICAgZnVsbE5hbWUgPSBmdWxsTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBwYXlsb2FkLkZOQU1FID0gZnVsbE5hbWVbMF07XG4gICAgICAgIHBheWxvYWQuTE5BTUUgPSBwYXlsb2FkLkxOQU1FIHx8IGZ1bGxOYW1lWzFdO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2UgdGhlICh1bmRvY3VtZW50ZWQpIE1haWxDaGltcCBqc29ucCBhcGlcbiAgICAgIHZhciB1cmwgPSBkYXRhLmFjdGlvbi5yZXBsYWNlKCcvcG9zdD8nLCAnL3Bvc3QtanNvbj8nKSArICcmYz0/JztcbiAgICAgIC8vIEFkZCBzcGVjaWFsIHBhcmFtIHRvIHByZXZlbnQgYm90IHNpZ251cHNcbiAgICAgIHZhciB1c2VySWQgPSB1cmwuaW5kZXhPZigndT0nKSArIDI7XG4gICAgICB1c2VySWQgPSB1cmwuc3Vic3RyaW5nKHVzZXJJZCwgdXJsLmluZGV4T2YoJyYnLCB1c2VySWQpKTtcbiAgICAgIHZhciBsaXN0SWQgPSB1cmwuaW5kZXhPZignaWQ9JykgKyAzO1xuICAgICAgbGlzdElkID0gdXJsLnN1YnN0cmluZyhsaXN0SWQsIHVybC5pbmRleE9mKCcmJywgbGlzdElkKSk7XG4gICAgICBwYXlsb2FkWydiXycgKyB1c2VySWQgKyAnXycgKyBsaXN0SWRdID0gJyc7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29ucCcsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgIGRhdGEuc3VjY2VzcyA9IHJlc3AucmVzdWx0ID09PSAnc3VjY2VzcycgfHwgL2FscmVhZHkvLnRlc3QocmVzcC5tc2cpO1xuICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ01haWxDaGltcCBlcnJvcjogJyArIHJlc3AubXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29tbW9uIGNhbGxiYWNrIHdoaWNoIHJ1bnMgYWZ0ZXIgYWxsIEFqYXggc3VibWlzc2lvbnNcbiAgICBmdW5jdGlvbiBhZnRlclN1Ym1pdChkYXRhKSB7XG4gICAgICB2YXIgZm9ybSA9IGRhdGEuZm9ybTtcbiAgICAgIHZhciByZWRpcmVjdCA9IGRhdGEucmVkaXJlY3Q7XG4gICAgICB2YXIgc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcblxuICAgICAgLy8gUmVkaXJlY3QgdG8gYSBzdWNjZXNzIHVybCBpZiBkZWZpbmVkXG4gICAgICBpZiAoc3VjY2VzcyAmJiByZWRpcmVjdCkge1xuICAgICAgICBXZWJmbG93LmxvY2F0aW9uKHJlZGlyZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IG9yIGhpZGUgc3RhdHVzIGRpdnNcbiAgICAgIGRhdGEuZG9uZS50b2dnbGUoc3VjY2Vzcyk7XG4gICAgICBkYXRhLmZhaWwudG9nZ2xlKCFzdWNjZXNzKTtcblxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgZGF0YS5kb25lLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLmZhaWwuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGlkZSBmb3JtIG9uIHN1Y2Nlc3NcbiAgICAgIGZvcm0udG9nZ2xlKCFzdWNjZXNzKTtcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgZW5hYmxlIHN1Ym1pdCBidXR0b25cbiAgICAgIHJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGRhdGEpIHtcbiAgICAgIGRhdGEuZXZ0ICYmIGRhdGEuZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkYXRhLmV2dCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEZpbGVVcGxvYWQoaSwgZm9ybSkge1xuICAgICAgaWYgKCFmb3JtLmZpbGVVcGxvYWRzIHx8ICFmb3JtLmZpbGVVcGxvYWRzW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbGU7XG4gICAgICB2YXIgJGVsID0gJChmb3JtLmZpbGVVcGxvYWRzW2ldKTtcbiAgICAgIHZhciAkZGVmYXVsdFdyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC1kZWZhdWx0Jyk7XG4gICAgICB2YXIgJHVwbG9hZGluZ1dyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC11cGxvYWRpbmcnKTtcbiAgICAgIHZhciAkc3VjY2Vzc1dyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC1zdWNjZXNzJyk7XG4gICAgICB2YXIgJGVycm9yV3JhcCA9ICRlbC5maW5kKCc+IC53LWZpbGUtdXBsb2FkLWVycm9yJyk7XG4gICAgICB2YXIgJGlucHV0ID0gJGRlZmF1bHRXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWlucHV0Jyk7XG4gICAgICB2YXIgJGxhYmVsID0gJGRlZmF1bHRXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWxhYmVsJyk7XG4gICAgICB2YXIgJGxhYmVsQ2hpbGRyZW4gPSAkbGFiZWwuY2hpbGRyZW4oKTtcbiAgICAgIHZhciAkZXJyb3JNc2dFbCA9ICRlcnJvcldyYXAuZmluZCgnLnctZmlsZS11cGxvYWQtZXJyb3ItbXNnJyk7XG4gICAgICB2YXIgJGZpbGVFbCA9ICRzdWNjZXNzV3JhcC5maW5kKCcudy1maWxlLXVwbG9hZC1maWxlJyk7XG4gICAgICB2YXIgJHJlbW92ZUVsID0gJHN1Y2Nlc3NXcmFwLmZpbmQoJy53LWZpbGUtcmVtb3ZlLWxpbmsnKTtcbiAgICAgIHZhciAkZmlsZU5hbWVFbCA9ICRmaWxlRWwuZmluZCgnLnctZmlsZS11cGxvYWQtZmlsZS1uYW1lJyk7XG5cbiAgICAgIHZhciBzaXplRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LXNpemUtZXJyb3InKTtcbiAgICAgIHZhciB0eXBlRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LXR5cGUtZXJyb3InKTtcbiAgICAgIHZhciBnZW5lcmljRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LWdlbmVyaWMtZXJyb3InKTtcblxuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBmaXhlc1xuICAgICAgLy8gVGhlIGZpbGUgdXBsb2FkIElucHV0IGlzIG5vdCBzdHlsYWJsZSBieSB0aGUgZGVzaWduZXIsIHNvIHdlIGFyZVxuICAgICAgLy8gZ29pbmcgdG8gcHJldGVuZCB0aGUgTGFiZWwgaXMgdGhlIGlucHV0LiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKCFpbkFwcCkge1xuICAgICAgICAkbGFiZWwub24oJ2NsaWNrIGtleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJyAmJiBlLndoaWNoICE9PSAxMyAmJiBlLndoaWNoICE9PSAzMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkaW5wdXQuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdGggb2YgdGhlc2UgYXJlIGFkZGVkIHRocm91Z2ggQ1NTXG4gICAgICAkbGFiZWwuZmluZCgnLnctaWNvbi1maWxlLXVwbG9hZC1pY29uJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgJHJlbW92ZUVsLmZpbmQoJy53LWljb24tZmlsZS11cGxvYWQtcmVtb3ZlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICBpZiAoIWluQXBwKSB7XG4gICAgICAgICRyZW1vdmVFbC5vbignY2xpY2sga2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICBpZiAoZS53aGljaCAhPT0gMTMgJiYgZS53aGljaCAhPT0gMzIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgICAkaW5wdXQudmFsKCcnKTtcbiAgICAgICAgICAkZmlsZU5hbWVFbC5odG1sKCcnKTtcbiAgICAgICAgICAkZGVmYXVsdFdyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAgICRzdWNjZXNzV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICRsYWJlbC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkaW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZmlsZSA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNob3cgdXBsb2FkaW5nXG4gICAgICAgICAgJGRlZmF1bHRXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICAgJGVycm9yV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICAkdXBsb2FkaW5nV3JhcC5mb2N1cygpO1xuXG4gICAgICAgICAgLy8gU2V0IGZpbGVuYW1lXG4gICAgICAgICAgJGZpbGVOYW1lRWwudGV4dChmaWxlLm5hbWUpO1xuXG4gICAgICAgICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgaWYgKCFpc1VwbG9hZGluZygpKSB7XG4gICAgICAgICAgICBkaXNhYmxlQnRuKGZvcm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtLmZpbGVVcGxvYWRzW2ldLnVwbG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICBzaWduRmlsZShmaWxlLCBhZnRlclNpZ24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXR0aW5nIGlucHV0IHdpZHRoIDFweCBhbmQgaGVpZ2h0IGVxdWFsIGxhYmVsXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhlIGJyb3dzZXIgcmVxdWlyZWQgZXJyb3Igd2lsbCBzaG93IHVwXG4gICAgICAgIHZhciBoZWlnaHQgPSAkbGFiZWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgJGlucHV0LmhlaWdodChoZWlnaHQpO1xuICAgICAgICAkaW5wdXQud2lkdGgoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGFiZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGFiZWxDaGlsZHJlbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlRXJyb3IoZXJyKSB7XG4gICAgICAgIHZhciBlcnJvck1zZyA9IGVyci5yZXNwb25zZUpTT04gJiYgZXJyLnJlc3BvbnNlSlNPTi5tc2c7XG4gICAgICAgIHZhciB1c2VyRXJyb3IgPSBnZW5lcmljRXJyTXNnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIGVycm9yTXNnID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIGVycm9yTXNnLmluZGV4T2YoJ0ludmFsaWRGaWxlVHlwZUVycm9yJykgPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdXNlckVycm9yID0gdHlwZUVyck1zZztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgZXJyb3JNc2cgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgZXJyb3JNc2cuaW5kZXhPZignTWF4RmlsZVNpemVFcnJvcicpID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHVzZXJFcnJvciA9IHNpemVFcnJNc2c7XG4gICAgICAgIH1cblxuICAgICAgICAkZXJyb3JNc2dFbC50ZXh0KHVzZXJFcnJvcik7XG5cbiAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICRkZWZhdWx0V3JhcC50b2dnbGUodHJ1ZSk7XG4gICAgICAgICRlcnJvcldyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAkZXJyb3JXcmFwLmZvY3VzKCk7XG5cbiAgICAgICAgZm9ybS5maWxlVXBsb2Fkc1tpXS51cGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFpc1VwbG9hZGluZygpKSB7XG4gICAgICAgICAgcmVzZXQoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWZ0ZXJTaWduKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaWxlTmFtZSA9IGRhdGEuZmlsZU5hbWU7XG4gICAgICAgIHZhciBwb3N0RGF0YSA9IGRhdGEucG9zdERhdGE7XG4gICAgICAgIHZhciBmaWxlSWQgPSBkYXRhLmZpbGVJZDtcbiAgICAgICAgdmFyIHMzVXJsID0gZGF0YS5zM1VybDtcbiAgICAgICAgJGlucHV0LmF0dHIoJ2RhdGEtdmFsdWUnLCBmaWxlSWQpO1xuXG4gICAgICAgIHVwbG9hZFMzKHMzVXJsLCBwb3N0RGF0YSwgZmlsZSwgZmlsZU5hbWUsIGFmdGVyVXBsb2FkKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWZ0ZXJVcGxvYWQoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VFcnJvcihlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBzdWNjZXNzXG4gICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICRzdWNjZXNzV3JhcC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICRzdWNjZXNzV3JhcC5mb2N1cygpO1xuXG4gICAgICAgIGZvcm0uZmlsZVVwbG9hZHNbaV0udXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNVcGxvYWRpbmcoKSkge1xuICAgICAgICAgIHJlc2V0KGZvcm0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzVXBsb2FkaW5nKCkge1xuICAgICAgICB2YXIgdXBsb2FkcyA9IChmb3JtLmZpbGVVcGxvYWRzICYmIGZvcm0uZmlsZVVwbG9hZHMudG9BcnJheSgpKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHVwbG9hZHMuc29tZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUudXBsb2FkaW5nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaWduRmlsZShmaWxlLCBjYikge1xuICAgICAgdmFyIHBheWxvYWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB9KTtcblxuICAgICAgJC5hamF4KHt0eXBlOiAnR0VUJywgdXJsOiBgJHtzaWduRmlsZVVybH0/JHtwYXlsb2FkfWAsIGNyb3NzRG9tYWluOiB0cnVlfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwbG9hZFMzKHVybCwgZGF0YSwgZmlsZSwgZmlsZU5hbWUsIGNiKSB7XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvciAodmFyIGsgaW4gZGF0YSkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaywgZGF0YVtrXSk7XG4gICAgICB9XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlTmFtZSk7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2IobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJyZW5kZXJUdXJuc3RpbGVDYXB0Y2hhIiwic2l0ZUtleSIsImZvcm1FbGVtZW50IiwiY2IiLCJlcnJvckNhbGxiYWNrIiwiY2FwdGNoYUNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHVybnN0aWxlIiwicmVuZGVyIiwic2l0ZWtleSIsImNhbGxiYWNrIiwidG9rZW4iLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsIl8iLCJUVVJOU1RJTEVfTE9BREVEX0VWRU5UIiwiYXBpIiwiJGRvYyIsIiRmb3JtcyIsImxvYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmV0cm8iLCJYRG9tYWluUmVxdWVzdCIsImF0b2IiLCJuYW1lc3BhY2UiLCJzaXRlSWQiLCJlbWFpbEZpZWxkIiwiZW1haWxWYWx1ZSIsImFsZXJ0IiwiaW5BcHAiLCJlbnYiLCJsaXN0ZW5pbmciLCJmb3JtVXJsIiwic2lnbkZpbGVVcmwiLCJ0dXJuc3RpbGVTaXRlS2V5IiwiZmluZCIsImRhdGEiLCJ0dXJuc3RpbGVTY3JpcHQiLCJjaGltcFJlZ2V4IiwiZGlzY29ubmVjdGVkIiwiZGVib3VuY2UiLCJjb25zb2xlIiwid2FybiIsInJlYWR5IiwiZGVzaWduIiwicHJldmlldyIsImxvYWRUdXJuc3RpbGVTY3JpcHQiLCJpbml0IiwiYWRkTGlzdGVuZXJzIiwiYXR0ciIsIldFQkZMT1dfRk9STV9BUElfSE9TVCIsImluZGV4T2YiLCJyZXBsYWNlIiwiV0VCRkxPV19GT1JNX09MRElFX0hPU1QiLCJsZW5ndGgiLCJlYWNoIiwiYnVpbGQiLCJzcmMiLCJoZWFkIiwib25sb2FkIiwidHJpZ2dlciIsImkiLCJlbCIsIiRlbCIsImZvcm0iLCJyZXNldCIsIndyYXAiLCJjbG9zZXN0IiwiZG9uZSIsImZhaWwiLCJmaWxlVXBsb2FkcyIsImoiLCJpbml0RmlsZVVwbG9hZCIsInNldEJ1dHRvblRvVHVybnN0aWxlTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nU3RhdGUiLCJvbiIsInR1cm5zdGlsZVRva2VuIiwiYnRuIiwicHJvcCIsImZvcm1OYW1lIiwiYWN0aW9uIiwiaGFuZGxlciIsInJlZGlyZWN0IiwidGVzdCIsInN1Ym1pdE1haWxDaGltcCIsIldFQkZMT1dfRVhQT1JUX01PREUiLCJleHBvcnRlZFN1Ym1pdFdlYmZsb3ciLCJob3N0ZWRTdWJtaXRIYW5kbGVyIiwiZGVmYXVsdCIsImNvbGxlY3RFbnRlcnByaXNlVHJhY2tpbmdDb29raWVzIiwicHJldmVudERlZmF1bHQiLCJmaW5kRmllbGRzIiwiZmluZEZpbGVVcGxvYWRzIiwiZGlzYWJsZUJ0biIsImFmdGVyU3VibWl0IiwiZXZ0IiwiQ0hFQ0tCT1hfQ0xBU1NfTkFNRSIsIlJBRElPX0lOUFVUX0NMQVNTX05BTUUiLCJDSEVDS0VEX0NMQVNTIiwiRk9DVVNFRF9DTEFTUyIsIkZPQ1VTRURfVklTSUJMRV9DTEFTUyIsImZvY3VzVmlzaWJsZVNlbGVjdG9ycyIsIkNVU1RPTV9DT05UUk9MUyIsInRhcmdldCIsInNpYmxpbmdzIiwidG9nZ2xlQ2xhc3MiLCJuYW1lIiwibWFwIiwicmVtb3ZlQ2xhc3MiLCIkdGFyZ2V0IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImZvckVhY2giLCJjb250cm9sVHlwZSIsImN1c3RvbUNvbnRyb2xDbGFzc05hbWUiLCJmaWx0ZXIiLCJ3YWl0Iiwic3VjY2VzcyIsImlzRGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWwiLCJ2YWwiLCIkZm9ybUVsIiwiaXNMb2FkaW5nIiwiJHdyYXBwZXIiLCJyZXN1bHQiLCJzdGF0dXMiLCJmaWVsZCIsInR5cGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsImlzIiwidHJpbSIsImdldFN0YXR1cyIsInRyYWNraW5nQ29va2llTmFtZU1hcCIsIl9ta3RvX3RyayIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsInJlZHVjZSIsImFjYyIsInNwbGl0Q29va2llIiwibWFwcGVkTmFtZSIsInNsaWNlIiwiam9pbiIsInBheWxvYWQiLCJocmVmIiwiZnVsbE5hbWUiLCJrZXkiLCJFTUFJTCIsIkZOQU1FIiwiTE5BTUUiLCJ1cmwiLCJ1c2VySWQiLCJzdWJzdHJpbmciLCJsaXN0SWQiLCJhamF4IiwiZGF0YVR5cGUiLCJyZXNwIiwibXNnIiwiaW5mbyIsInRvZ2dsZSIsImZvY3VzIiwiZmlsZSIsIiRkZWZhdWx0V3JhcCIsIiR1cGxvYWRpbmdXcmFwIiwiJHN1Y2Nlc3NXcmFwIiwiJGVycm9yV3JhcCIsIiRpbnB1dCIsIiRsYWJlbCIsIiRsYWJlbENoaWxkcmVuIiwiY2hpbGRyZW4iLCIkZXJyb3JNc2dFbCIsIiRmaWxlRWwiLCIkcmVtb3ZlRWwiLCIkZmlsZU5hbWVFbCIsInNpemVFcnJNc2ciLCJ0eXBlRXJyTXNnIiwiZ2VuZXJpY0Vyck1zZyIsImUiLCJ3aGljaCIsImNsaWNrIiwicmVtb3ZlQXR0ciIsImh0bWwiLCJmaWxlcyIsInRleHQiLCJpc1VwbG9hZGluZyIsInVwbG9hZGluZyIsInNpZ25GaWxlIiwiYWZ0ZXJTaWduIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJ3aWR0aCIsInBhcnNlRXJyb3IiLCJlcnIiLCJlcnJvck1zZyIsInJlc3BvbnNlSlNPTiIsInVzZXJFcnJvciIsImZpbGVOYW1lIiwicG9zdERhdGEiLCJmaWxlSWQiLCJzM1VybCIsInVwbG9hZFMzIiwiYWZ0ZXJVcGxvYWQiLCJjc3MiLCJ1cGxvYWRzIiwidG9BcnJheSIsInNvbWUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzaXplIiwiY3Jvc3NEb21haW4iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiayIsImFwcGVuZCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBT0EsR0FFQTs7Q0FFQztBQUVELElBQUlBLFVBQVVDLFFBQVE7QUFFdEIsTUFBTUMseUJBQXlCLENBQzdCQyxTQUNBQyxhQUNBQyxJQUNBQyxjQUFjLHVCQUF1Qjs7SUFFckMsTUFBTUMsbUJBQW1CQyxTQUFTQyxhQUFhLENBQUM7SUFDaERMLFlBQVlNLFdBQVcsQ0FBQ0g7SUFFeEIscUJBQXFCO0lBQ3JCSSxVQUFVQyxNQUFNLENBQUNMLGtCQUFrQjtRQUNqQ00sU0FBU1Y7UUFDVFcsVUFBVSxTQUFVQyxLQUFLO1lBQ3ZCVixHQUFHVTtRQUNMO1FBQ0Esa0JBQWtCO1lBQ2hCVDtRQUNGO0lBQ0Y7QUFDRjtBQUVBTixRQUFRZ0IsTUFBTSxDQUNaLFNBQ0NDLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxDQUFDLEVBQUVDLENBQUM7SUFDOUIsTUFBTUMseUJBQXlCO0lBQy9CLElBQUlDLE1BQU0sQ0FBQztJQUVYLElBQUlDLE9BQU9KLEVBQUVYO0lBQ2IsSUFBSWdCO0lBQ0osSUFBSUMsTUFBTUMsT0FBT0MsUUFBUTtJQUN6QixJQUFJQyxRQUFRRixPQUFPRyxjQUFjLElBQUksQ0FBQ0gsT0FBT0ksSUFBSTtJQUNqRCxJQUFJQyxZQUFZO0lBQ2hCLElBQUlDO0lBQ0osSUFBSUMsYUFBYTtJQUNqQixJQUFJQyxhQUFhO0lBQ2pCLElBQUlDLFFBQVFULE9BQU9TLEtBQUs7SUFDeEIsSUFBSUMsUUFBUXBDLFFBQVFxQyxHQUFHO0lBQ3ZCLElBQUlDO0lBRUosSUFBSUM7SUFDSixJQUFJQztJQUVKLE1BQU1DLG1CQUFtQmxCLEtBQ3RCbUIsSUFBSSxDQUFDLDRCQUNMQyxJQUFJLENBQUM7SUFDUixJQUFJQztJQUVKLCtDQUErQztJQUMvQyxJQUFJQyxhQUFhO0lBRWpCLElBQUlDLGVBQWUxQixFQUFFMkIsUUFBUSxDQUFDO1FBQzVCQyxRQUFRQyxJQUFJLENBQ1Y7SUFFSixHQUFHO0lBRUgzQixJQUFJNEIsS0FBSyxHQUNQNUIsSUFBSTZCLE1BQU0sR0FDVjdCLElBQUk4QixPQUFPLEdBQ1Q7UUFDRSw4RUFBOEU7UUFDOUVDO1FBRUEsYUFBYTtRQUNiQztRQUVBLHNFQUFzRTtRQUN0RSxJQUFJLEFBQUMsQ0FBQSxDQUFDbEIsU0FBU3BDLFFBQVFxQyxHQUFHLENBQUMsVUFBUyxLQUFNLENBQUNDLFdBQVc7WUFDcERpQjtRQUNGO0lBQ0Y7SUFFSixTQUFTRDtRQUNQdEIsU0FBU2IsRUFBRSxRQUFRcUMsSUFBSSxDQUFDO1FBRXhCakIsVUFBVWtCLHdCQUF3QixrQkFBa0J6QjtRQUVwRCw4RkFBOEY7UUFDOUYsSUFBSUosU0FBU1csUUFBUW1CLE9BQU8sQ0FBQ0QsMEJBQTBCLEdBQUc7WUFDeERsQixVQUFVQSxRQUFRb0IsT0FBTyxDQUN2QkYsdUJBQ0FHO1FBRUo7UUFFQXBCLGNBQWMsQ0FBQyxFQUFFRCxRQUFRLFNBQVMsQ0FBQztRQUVuQ2YsU0FBU0wsRUFBRVksWUFBWTtRQUN2QixJQUFJLENBQUNQLE9BQU9xQyxNQUFNLEVBQUU7WUFDbEI7UUFDRjtRQUNBckMsT0FBT3NDLElBQUksQ0FBQ0M7SUFDZDtJQUVBLFNBQVNWO1FBQ1AsSUFBSVosa0JBQWtCO1lBQ3BCLGtDQUFrQztZQUNsQ0csa0JBQWtCcEMsU0FBU0MsYUFBYSxDQUFDO1lBQ3pDbUMsZ0JBQWdCb0IsR0FBRyxHQUNqQjtZQUNGeEQsU0FBU3lELElBQUksQ0FBQ3ZELFdBQVcsQ0FBQ2tDO1lBQzFCQSxnQkFBZ0JzQixNQUFNLEdBQUc7Z0JBQ3ZCLGlFQUFpRTtnQkFDakUsb0hBQW9IO2dCQUNwSDNDLEtBQUs0QyxPQUFPLENBQUM5QztZQUNmO1FBQ0Y7SUFDRjtJQUVBLFNBQVMwQyxNQUFNSyxDQUFDLEVBQUVDLEVBQUU7UUFDbEIsbUNBQW1DO1FBQ25DLElBQUlDLE1BQU1uRCxFQUFFa0Q7UUFDWixJQUFJMUIsT0FBT3hCLEVBQUV3QixJQUFJLENBQUMwQixJQUFJdEM7UUFDdEIsSUFBSSxDQUFDWSxNQUFNO1lBQ1RBLE9BQU94QixFQUFFd0IsSUFBSSxDQUFDMEIsSUFBSXRDLFdBQVc7Z0JBQUN3QyxNQUFNRDtZQUFHO1FBQ3pDLEVBQUUsWUFBWTtRQUVkRSxNQUFNN0I7UUFDTixJQUFJOEIsT0FBT0gsSUFBSUksT0FBTyxDQUFDO1FBQ3ZCL0IsS0FBS2dDLElBQUksR0FBR0YsS0FBSy9CLElBQUksQ0FBQztRQUN0QkMsS0FBS2lDLElBQUksR0FBR0gsS0FBSy9CLElBQUksQ0FBQztRQUN0QkMsS0FBS2tDLFdBQVcsR0FBR0osS0FBSy9CLElBQUksQ0FBQztRQUU3QkMsS0FBS2tDLFdBQVcsQ0FBQ2YsSUFBSSxDQUFDLFNBQVVnQixDQUFDO1lBQy9CQyxlQUFlRCxHQUFHbkM7UUFDcEI7UUFFQSxJQUFJRixrQkFBa0I7WUFDcEIsMEZBQTBGO1lBQzFGdUMsNEJBQTRCckM7WUFFNUIsd0NBQXdDO1lBQ3hDc0Msb0JBQW9CWCxLQUFLO1lBRXpCLDJHQUEyRztZQUMzRywwR0FBMEc7WUFDMUcvQyxLQUFLMkQsRUFBRSxDQUNMLE9BQU92RSxjQUFjLGNBQWMsVUFBVVUsd0JBQzdDO2dCQUNFLDZFQUE2RTtnQkFDN0VuQix1QkFDRXVDLGtCQUNBNEIsSUFDQSxDQUFDdEQ7b0JBQ0MsMEhBQTBIO29CQUMxSCxtSEFBbUg7b0JBQ25INEIsS0FBS3dDLGNBQWMsR0FBR3BFO29CQUN0Qiw2RUFBNkU7b0JBQzdFeUQsTUFBTTdCO29CQUNOc0Msb0JBQW9CWCxLQUFLO2dCQUMzQixHQUNBO29CQUNFLDBGQUEwRjtvQkFDMUZFLE1BQU03QjtvQkFDTiwyR0FBMkc7b0JBQzNHLElBQUlBLEtBQUt5QyxHQUFHLEVBQUU7d0JBQ1p6QyxLQUFLeUMsR0FBRyxDQUFDQyxJQUFJLENBQUMsWUFBWTtvQkFDNUI7b0JBQ0FKLG9CQUFvQlgsS0FBSztnQkFDM0I7WUFFSjtRQUVKO1FBRUEsc0JBQXNCO1FBQ3RCLElBQUlnQixXQUNGM0MsS0FBSzRCLElBQUksQ0FBQ2YsSUFBSSxDQUFDLGlCQUFpQmIsS0FBSzRCLElBQUksQ0FBQ2YsSUFBSSxDQUFDLGdCQUFnQjtRQUNqRSxJQUFJLENBQUNiLEtBQUtnQyxJQUFJLENBQUNuQixJQUFJLENBQUMsZUFBZTtZQUNqQ2IsS0FBSzRCLElBQUksQ0FBQ2YsSUFBSSxDQUFDLGNBQWM4QjtRQUMvQjtRQUVBM0MsS0FBS2dDLElBQUksQ0FBQ25CLElBQUksQ0FBQyxZQUFZO1FBQzNCYixLQUFLZ0MsSUFBSSxDQUFDbkIsSUFBSSxDQUFDLFFBQVE7UUFDdkIsSUFBSSxDQUFDYixLQUFLZ0MsSUFBSSxDQUFDbkIsSUFBSSxDQUFDLGVBQWU7WUFDakNiLEtBQUtnQyxJQUFJLENBQUNuQixJQUFJLENBQUMsY0FBYzhCLFdBQVc7UUFDMUM7UUFDQTNDLEtBQUtpQyxJQUFJLENBQUNwQixJQUFJLENBQUMsWUFBWTtRQUMzQmIsS0FBS2lDLElBQUksQ0FBQ3BCLElBQUksQ0FBQyxRQUFRO1FBQ3ZCLElBQUksQ0FBQ2IsS0FBS2lDLElBQUksQ0FBQ3BCLElBQUksQ0FBQyxlQUFlO1lBQ2pDYixLQUFLaUMsSUFBSSxDQUFDcEIsSUFBSSxDQUFDLGNBQWM4QixXQUFXO1FBQzFDO1FBRUEsSUFBSUMsU0FBVTVDLEtBQUs0QyxNQUFNLEdBQUdqQixJQUFJZCxJQUFJLENBQUM7UUFDckNiLEtBQUs2QyxPQUFPLEdBQUc7UUFDZjdDLEtBQUs4QyxRQUFRLEdBQUduQixJQUFJZCxJQUFJLENBQUM7UUFFekIsaUJBQWlCO1FBQ2pCLElBQUlYLFdBQVc2QyxJQUFJLENBQUNILFNBQVM7WUFDM0I1QyxLQUFLNkMsT0FBTyxHQUFHRztZQUNmO1FBQ0Y7UUFFQSxxQkFBcUI7UUFDckIsSUFBSUosUUFBUTtZQUNWO1FBQ0Y7UUFFQSxxQ0FBcUM7UUFDckMsSUFBSXZELFFBQVE7WUFDVlcsS0FBSzZDLE9BQU8sR0FBR0ksc0JBQ1hDLHdCQUNBLEFBQUMsQ0FBQTtnQkFDQyxNQUFNQyxzQkFDSjdGLFFBQVEsMEJBQTBCOEYsT0FBTztnQkFDM0MsT0FBT0Qsb0JBQ0x0QixPQUNBL0MsS0FDQXpCLFNBQ0FnRyxrQ0FDQUMsZ0JBQ0FDLFlBQ0EvRCxPQUNBZ0UsaUJBQ0FDLFlBQ0FwRSxRQUNBcUUsYUFDQWxGLEdBQ0FvQjtZQUVKLENBQUE7WUFDSjtRQUNGO1FBRUEsdUNBQXVDO1FBQ3ZDTztJQUNGO0lBRUEsU0FBU1M7UUFDUGpCLFlBQVk7UUFFWmYsS0FBSzJELEVBQUUsQ0FBQyxVQUFVbkQsWUFBWSxTQUFTLFNBQVV1RSxHQUFHO1lBQ2xELElBQUkzRCxPQUFPeEIsRUFBRXdCLElBQUksQ0FBQyxJQUFJLEVBQUVaO1lBQ3hCLElBQUlZLEtBQUs2QyxPQUFPLEVBQUU7Z0JBQ2hCN0MsS0FBSzJELEdBQUcsR0FBR0E7Z0JBQ1gzRCxLQUFLNkMsT0FBTyxDQUFDN0M7WUFDZjtRQUNGO1FBRUEseURBQXlEO1FBQ3pELE1BQU00RCxzQkFBc0I7UUFDNUIsTUFBTUMseUJBQXlCO1FBQy9CLE1BQU1DLGdCQUFnQjtRQUN0QixNQUFNQyxnQkFBZ0I7UUFDdEIsTUFBTUMsd0JBQXdCO1FBQzlCLE1BQU1DLHdCQUF3QjtRQUU5QixNQUFNQyxrQkFBa0I7WUFDdEI7Z0JBQUM7Z0JBQVlOO2FBQW9CO1lBQ2pDO2dCQUFDO2dCQUFTQzthQUF1QjtTQUNsQztRQUVEakYsS0FBSzJELEVBQUUsQ0FDTCxVQUNBbkQsWUFDRSxDQUFDLGlDQUFpQyxDQUFDLEdBQ25Dd0Usc0JBQ0EsS0FDRixDQUFDRDtZQUNDbkYsRUFBRW1GLElBQUlRLE1BQU0sRUFDVEMsUUFBUSxDQUFDUixxQkFDVFMsV0FBVyxDQUFDUDtRQUNqQjtRQUdGbEYsS0FBSzJELEVBQUUsQ0FBQyxVQUFVbkQsWUFBWSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsQ0FBQ3VFO1lBQzFEbkYsRUFBRSxDQUFDLFlBQVksRUFBRW1GLElBQUlRLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLE9BQU8sRUFBRVYsb0JBQW9CLENBQUMsQ0FBQyxFQUFFVyxHQUFHLENBQ25FLENBQUM5QyxHQUFHQyxLQUNGbEQsRUFBRWtELElBQUkwQyxRQUFRLENBQUNQLHdCQUF3QlcsV0FBVyxDQUFDVjtZQUd2RCxNQUFNVyxVQUFVakcsRUFBRW1GLElBQUlRLE1BQU07WUFFNUIsSUFBSSxDQUFDTSxRQUFRQyxRQUFRLENBQUMsa0JBQWtCO2dCQUN0Q0QsUUFBUUwsUUFBUSxDQUFDUCx3QkFBd0JjLFFBQVEsQ0FBQ2I7WUFDcEQ7UUFDRjtRQUVBSSxnQkFBZ0JVLE9BQU8sQ0FBQyxDQUFDLENBQUNDLGFBQWFDLHVCQUF1QjtZQUM1RGxHLEtBQUsyRCxFQUFFLENBQ0wsU0FDQW5ELFlBQ0UsQ0FBQyxrQkFBa0IsRUFBRXlGLFlBQVksT0FBTyxDQUFDLEdBQ3pDQyx5QkFDQSxLQUNGLENBQUNuQjtnQkFDQ25GLEVBQUVtRixJQUFJUSxNQUFNLEVBQ1RDLFFBQVEsQ0FBQ1Usd0JBQ1RILFFBQVEsQ0FBQ1o7Z0JBQ1p2RixFQUFFbUYsSUFBSVEsTUFBTSxFQUNUWSxNQUFNLENBQUNkLHVCQUNQRyxRQUFRLENBQUNVLHdCQUNUSCxRQUFRLENBQUNYO1lBQ2Q7WUFFRnBGLEtBQUsyRCxFQUFFLENBQ0wsUUFDQW5ELFlBQ0UsQ0FBQyxrQkFBa0IsRUFBRXlGLFlBQVksT0FBTyxDQUFDLEdBQ3pDQyx5QkFDQSxLQUNGLENBQUNuQjtnQkFDQ25GLEVBQUVtRixJQUFJUSxNQUFNLEVBQ1RDLFFBQVEsQ0FBQ1Usd0JBQ1ROLFdBQVcsQ0FBQyxDQUFDLEVBQUVULGNBQWMsQ0FBQyxFQUFFQyxzQkFBc0IsQ0FBQztZQUM1RDtRQUVKO0lBQ0Y7SUFFQSwyQ0FBMkM7SUFDM0MsU0FBU25DLE1BQU03QixJQUFJO1FBQ2pCLElBQUl5QyxNQUFPekMsS0FBS3lDLEdBQUcsR0FBR3pDLEtBQUs0QixJQUFJLENBQUM3QixJQUFJLENBQUM7UUFDckNDLEtBQUtnRixJQUFJLEdBQUdoRixLQUFLeUMsR0FBRyxDQUFDNUIsSUFBSSxDQUFDLGdCQUFnQjtRQUMxQ2IsS0FBS2lGLE9BQU8sR0FBRztRQUVmLDZDQUE2QztRQUM3QyxNQUFNQyxhQUFhQyxRQUFRckYsb0JBQW9CLENBQUNFLEtBQUt3QyxjQUFjO1FBQ25FQyxJQUFJQyxJQUFJLENBQUMsWUFBWXdDO1FBQ3JCekMsSUFBSStCLFdBQVcsQ0FBQztRQUNoQnhFLEtBQUtvRixLQUFLLElBQUkzQyxJQUFJNEMsR0FBRyxDQUFDckYsS0FBS29GLEtBQUs7SUFDbEM7SUFFQSxpREFBaUQ7SUFDakQsU0FBUzNCLFdBQVd6RCxJQUFJO1FBQ3RCLElBQUl5QyxNQUFNekMsS0FBS3lDLEdBQUc7UUFDbEIsSUFBSXVDLE9BQU9oRixLQUFLZ0YsSUFBSSxFQUFFLHlDQUF5QztRQUUvRHZDLElBQUlDLElBQUksQ0FBQyxZQUFZO1FBRXJCLDBDQUEwQztRQUMxQyxJQUFJc0MsTUFBTTtZQUNSaEYsS0FBS29GLEtBQUssR0FBRzNDLElBQUk0QyxHQUFHLElBQUksNkNBQTZDO1lBQ3JFNUMsSUFBSTRDLEdBQUcsQ0FBQ0w7UUFDVjtJQUNGO0lBRUEscURBQXFEO0lBQ3JELFNBQVMzQyw0QkFBNEJyQyxJQUFJO1FBQ3ZDLE1BQU15QyxNQUFNekMsS0FBS3lDLEdBQUcsSUFBSXpDLEtBQUs0QixJQUFJLENBQUM3QixJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDQyxLQUFLeUMsR0FBRyxFQUFFekMsS0FBS3lDLEdBQUcsR0FBR0E7UUFFMUJBLElBQUlDLElBQUksQ0FBQyxZQUFZO1FBQ3JCRCxJQUFJa0MsUUFBUSxDQUFDO0lBQ2Y7SUFFQSxpREFBaUQ7SUFDakQsU0FBU3JDLG9CQUFvQmdELE9BQU8sRUFBRUMsU0FBUztRQUM3QyxNQUFNQyxXQUFXRixRQUFRdkQsT0FBTyxDQUFDO1FBQ2pDLElBQUl3RCxXQUFXO1lBQ2JDLFNBQVNiLFFBQVEsQ0FBQztRQUNwQixPQUFPO1lBQ0xhLFNBQVNoQixXQUFXLENBQUM7UUFDdkI7SUFDRjtJQUVBLGtEQUFrRDtJQUNsRCxTQUFTakIsV0FBVzNCLElBQUksRUFBRTZELE1BQU07UUFDOUIsSUFBSUMsU0FBUztRQUNiRCxTQUFTQSxVQUFVLENBQUM7UUFFcEIsc0ZBQXNGO1FBQ3RGN0QsS0FDRzdCLElBQUksQ0FDSCx1RUFFRG9CLElBQUksQ0FBQyxTQUFVTSxDQUFDLEVBQUVDLEVBQUU7WUFDbkIsSUFBSWlFLFFBQVFuSCxFQUFFa0Q7WUFDZCxJQUFJa0UsT0FBT0QsTUFBTTlFLElBQUksQ0FBQztZQUN0QixJQUFJeUQsT0FDRnFCLE1BQU05RSxJQUFJLENBQUMsZ0JBQWdCOEUsTUFBTTlFLElBQUksQ0FBQyxXQUFXLFdBQVlZLENBQUFBLElBQUksQ0FBQTtZQUNuRSxpRUFBaUU7WUFDakUsZ0VBQWdFO1lBQ2hFLG1FQUFtRTtZQUNuRSw0QkFBNEI7WUFDNUIsb0RBQW9EO1lBQ3BENkMsT0FBT3VCLG1CQUFtQnZCO1lBQzFCLElBQUl3QixRQUFRSCxNQUFNTixHQUFHO1lBRXJCLElBQUlPLFNBQVMsWUFBWTtnQkFDdkJFLFFBQVFILE1BQU1JLEVBQUUsQ0FBQztZQUNuQixPQUFPLElBQUlILFNBQVMsU0FBUztnQkFDM0Isc0NBQXNDO2dCQUN0QyxJQUFJSCxNQUFNLENBQUNuQixLQUFLLEtBQUssUUFBUSxPQUFPbUIsTUFBTSxDQUFDbkIsS0FBSyxLQUFLLFVBQVU7b0JBQzdEO2dCQUNGO2dCQUVBd0IsUUFDRWxFLEtBQ0c3QixJQUFJLENBQUMsaUJBQWlCNEYsTUFBTTlFLElBQUksQ0FBQyxVQUFVLGNBQzNDd0UsR0FBRyxNQUFNO1lBQ2hCO1lBRUEsSUFBSSxPQUFPUyxVQUFVLFVBQVU7Z0JBQzdCQSxRQUFRdEgsRUFBRXdILElBQUksQ0FBQ0Y7WUFDakI7WUFDQUwsTUFBTSxDQUFDbkIsS0FBSyxHQUFHd0I7WUFDZkosU0FBU0EsVUFBVU8sVUFBVU4sT0FBT0MsTUFBTXRCLE1BQU13QjtRQUNsRDtRQUVGLE9BQU9KO0lBQ1Q7SUFFQSxTQUFTbEMsZ0JBQWdCNUIsSUFBSTtRQUMzQixJQUFJNkQsU0FBUyxDQUFDO1FBRWQ3RCxLQUFLN0IsSUFBSSxDQUFDLHVCQUF1Qm9CLElBQUksQ0FBQyxTQUFVTSxDQUFDLEVBQUVDLEVBQUU7WUFDbkQsSUFBSWlFLFFBQVFuSCxFQUFFa0Q7WUFDZCxJQUFJNEMsT0FDRnFCLE1BQU05RSxJQUFJLENBQUMsZ0JBQWdCOEUsTUFBTTlFLElBQUksQ0FBQyxXQUFXLFVBQVdZLENBQUFBLElBQUksQ0FBQTtZQUNsRSxJQUFJcUUsUUFBUUgsTUFBTTlFLElBQUksQ0FBQztZQUN2QixJQUFJLE9BQU9pRixVQUFVLFVBQVU7Z0JBQzdCQSxRQUFRdEgsRUFBRXdILElBQUksQ0FBQ0Y7WUFDakI7WUFDQUwsTUFBTSxDQUFDbkIsS0FBSyxHQUFHd0I7UUFDakI7UUFFQSxPQUFPTDtJQUNUO0lBRUEsTUFBTVMsd0JBQXdCO1FBQzVCQyxXQUFXO0lBRWI7SUFFQSxTQUFTOUM7UUFDUCxNQUFNK0MsVUFBVXZJLFNBQVN3SSxNQUFNLENBQUNDLEtBQUssQ0FBQyxNQUFNQyxNQUFNLENBQUMsU0FDakRDLEdBQUcsRUFDSEgsTUFBTTtZQUVOLE1BQU1JLGNBQWNKLE9BQU9DLEtBQUssQ0FBQztZQUNqQyxNQUFNaEMsT0FBT21DLFdBQVcsQ0FBQyxFQUFFO1lBQzNCLElBQUluQyxRQUFRNEIsdUJBQXVCO2dCQUNqQyxNQUFNUSxhQUFhUixxQkFBcUIsQ0FBQzVCLEtBQUs7Z0JBQzlDLE1BQU13QixRQUFRVyxZQUFZRSxLQUFLLENBQUMsR0FBR0MsSUFBSSxDQUFDO2dCQUN4Q0osR0FBRyxDQUFDRSxXQUFXLEdBQUdaO1lBQ3BCO1lBQ0EsT0FBT1U7UUFDVCxHQUFHLENBQUM7UUFFSixPQUFPSjtJQUNUO0lBRUEsU0FBU0gsVUFBVU4sS0FBSyxFQUFFQyxJQUFJLEVBQUV0QixJQUFJLEVBQUV3QixLQUFLO1FBQ3pDLElBQUlKLFNBQVM7UUFFYixJQUFJRSxTQUFTLFlBQVk7WUFDdkJGLFNBQVM7UUFDWCxPQUFPLElBQUlDLE1BQU05RSxJQUFJLENBQUMsYUFBYTtZQUNqQyxJQUFJLENBQUNpRixPQUFPO2dCQUNWSixTQUFTLHlDQUF5Q3BCO1lBQ3BELE9BQU8sSUFBSWhGLFdBQVd5RCxJQUFJLENBQUM0QyxNQUFNOUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzlDLElBQUksQ0FBQ3RCLFdBQVd3RCxJQUFJLENBQUMrQyxRQUFRO29CQUMzQkosU0FBUyw2Q0FBNkNwQjtnQkFDeEQ7WUFDRjtRQUNGLE9BQU8sSUFBSUEsU0FBUywwQkFBMEIsQ0FBQ3dCLE9BQU87WUFDcERKLFNBQVM7UUFDWDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxTQUFTeEMsc0JBQXNCbEQsSUFBSTtRQUNqQ3NELGVBQWV0RDtRQUNmMEQsWUFBWTFEO0lBQ2Q7SUFFQSwyQkFBMkI7SUFDM0IsU0FBU2dELGdCQUFnQmhELElBQUk7UUFDM0I2QixNQUFNN0I7UUFFTixJQUFJNEIsT0FBTzVCLEtBQUs0QixJQUFJO1FBQ3BCLElBQUlpRixVQUFVLENBQUM7UUFFZixvRUFBb0U7UUFDcEUsSUFBSSxTQUFTOUQsSUFBSSxDQUFDakUsSUFBSWdJLElBQUksS0FBSyxDQUFDLFNBQVMvRCxJQUFJLENBQUMvQyxLQUFLNEMsTUFBTSxHQUFHO1lBQzFEaEIsS0FBS2YsSUFBSSxDQUFDLFVBQVU7WUFDcEI7UUFDRjtRQUVBeUMsZUFBZXREO1FBRWYsNkJBQTZCO1FBQzdCLElBQUkwRixTQUFTbkMsV0FBVzNCLE1BQU1pRjtRQUM5QixJQUFJbkIsUUFBUTtZQUNWLE9BQU9sRyxNQUFNa0c7UUFDZjtRQUVBLHdCQUF3QjtRQUN4QmpDLFdBQVd6RDtRQUVYLDBDQUEwQztRQUMxQyxJQUFJK0c7UUFDSnRJLEVBQUUwQyxJQUFJLENBQUMwRixTQUFTLFNBQVVmLEtBQUssRUFBRWtCLEdBQUc7WUFDbEMsSUFBSTFILFdBQVd5RCxJQUFJLENBQUNpRSxNQUFNO2dCQUN4QkgsUUFBUUksS0FBSyxHQUFHbkI7WUFDbEI7WUFDQSxJQUFJLHlCQUF5Qi9DLElBQUksQ0FBQ2lFLE1BQU07Z0JBQ3RDRCxXQUFXakI7WUFDYjtZQUNBLElBQUksdUJBQXVCL0MsSUFBSSxDQUFDaUUsTUFBTTtnQkFDcENILFFBQVFLLEtBQUssR0FBR3BCO1lBQ2xCO1lBQ0EsSUFBSSxzQkFBc0IvQyxJQUFJLENBQUNpRSxNQUFNO2dCQUNuQ0gsUUFBUU0sS0FBSyxHQUFHckI7WUFDbEI7UUFDRjtRQUVBLElBQUlpQixZQUFZLENBQUNGLFFBQVFLLEtBQUssRUFBRTtZQUM5QkgsV0FBV0EsU0FBU1QsS0FBSyxDQUFDO1lBQzFCTyxRQUFRSyxLQUFLLEdBQUdILFFBQVEsQ0FBQyxFQUFFO1lBQzNCRixRQUFRTSxLQUFLLEdBQUdOLFFBQVFNLEtBQUssSUFBSUosUUFBUSxDQUFDLEVBQUU7UUFDOUM7UUFFQSw2Q0FBNkM7UUFDN0MsSUFBSUssTUFBTXBILEtBQUs0QyxNQUFNLENBQUM1QixPQUFPLENBQUMsVUFBVSxpQkFBaUI7UUFDekQsMkNBQTJDO1FBQzNDLElBQUlxRyxTQUFTRCxJQUFJckcsT0FBTyxDQUFDLFFBQVE7UUFDakNzRyxTQUFTRCxJQUFJRSxTQUFTLENBQUNELFFBQVFELElBQUlyRyxPQUFPLENBQUMsS0FBS3NHO1FBQ2hELElBQUlFLFNBQVNILElBQUlyRyxPQUFPLENBQUMsU0FBUztRQUNsQ3dHLFNBQVNILElBQUlFLFNBQVMsQ0FBQ0MsUUFBUUgsSUFBSXJHLE9BQU8sQ0FBQyxLQUFLd0c7UUFDaERWLE9BQU8sQ0FBQyxPQUFPUSxTQUFTLE1BQU1FLE9BQU8sR0FBRztRQUV4Qy9JLEVBQUVnSixJQUFJLENBQUM7WUFDTEo7WUFDQXBILE1BQU02RztZQUNOWSxVQUFVO1FBQ1osR0FDR3pGLElBQUksQ0FBQyxTQUFVMEYsSUFBSTtZQUNsQjFILEtBQUtpRixPQUFPLEdBQUd5QyxLQUFLakMsTUFBTSxLQUFLLGFBQWEsVUFBVTFDLElBQUksQ0FBQzJFLEtBQUtDLEdBQUc7WUFDbkUsSUFBSSxDQUFDM0gsS0FBS2lGLE9BQU8sRUFBRTtnQkFDakI1RSxRQUFRdUgsSUFBSSxDQUFDLHNCQUFzQkYsS0FBS0MsR0FBRztZQUM3QztZQUNBakUsWUFBWTFEO1FBQ2QsR0FDQ2lDLElBQUksQ0FBQztZQUNKeUIsWUFBWTFEO1FBQ2Q7SUFDSjtJQUVBLHdEQUF3RDtJQUN4RCxTQUFTMEQsWUFBWTFELElBQUk7UUFDdkIsSUFBSTRCLE9BQU81QixLQUFLNEIsSUFBSTtRQUNwQixJQUFJa0IsV0FBVzlDLEtBQUs4QyxRQUFRO1FBQzVCLElBQUltQyxVQUFVakYsS0FBS2lGLE9BQU87UUFFMUIsdUNBQXVDO1FBQ3ZDLElBQUlBLFdBQVduQyxVQUFVO1lBQ3ZCekYsUUFBUTJCLFFBQVEsQ0FBQzhEO1lBQ2pCO1FBQ0Y7UUFFQSwyQkFBMkI7UUFDM0I5QyxLQUFLZ0MsSUFBSSxDQUFDNkYsTUFBTSxDQUFDNUM7UUFDakJqRixLQUFLaUMsSUFBSSxDQUFDNEYsTUFBTSxDQUFDLENBQUM1QztRQUVsQixJQUFJQSxTQUFTO1lBQ1hqRixLQUFLZ0MsSUFBSSxDQUFDOEYsS0FBSztRQUNqQixPQUFPO1lBQ0w5SCxLQUFLaUMsSUFBSSxDQUFDNkYsS0FBSztRQUNqQjtRQUVBLHVCQUF1QjtRQUN2QmxHLEtBQUtpRyxNQUFNLENBQUMsQ0FBQzVDO1FBRWIsc0NBQXNDO1FBQ3RDcEQsTUFBTTdCO0lBQ1I7SUFFQSxTQUFTc0QsZUFBZXRELElBQUk7UUFDMUJBLEtBQUsyRCxHQUFHLElBQUkzRCxLQUFLMkQsR0FBRyxDQUFDTCxjQUFjO1FBQ25DdEQsS0FBSzJELEdBQUcsR0FBRztJQUNiO0lBRUEsU0FBU3ZCLGVBQWVYLENBQUMsRUFBRUcsSUFBSTtRQUM3QixJQUFJLENBQUNBLEtBQUtNLFdBQVcsSUFBSSxDQUFDTixLQUFLTSxXQUFXLENBQUNULEVBQUUsRUFBRTtZQUM3QztRQUNGO1FBRUEsSUFBSXNHO1FBQ0osSUFBSXBHLE1BQU1uRCxFQUFFb0QsS0FBS00sV0FBVyxDQUFDVCxFQUFFO1FBQy9CLElBQUl1RyxlQUFlckcsSUFBSTVCLElBQUksQ0FBQztRQUM1QixJQUFJa0ksaUJBQWlCdEcsSUFBSTVCLElBQUksQ0FBQztRQUM5QixJQUFJbUksZUFBZXZHLElBQUk1QixJQUFJLENBQUM7UUFDNUIsSUFBSW9JLGFBQWF4RyxJQUFJNUIsSUFBSSxDQUFDO1FBQzFCLElBQUlxSSxTQUFTSixhQUFhakksSUFBSSxDQUFDO1FBQy9CLElBQUlzSSxTQUFTTCxhQUFhakksSUFBSSxDQUFDO1FBQy9CLElBQUl1SSxpQkFBaUJELE9BQU9FLFFBQVE7UUFDcEMsSUFBSUMsY0FBY0wsV0FBV3BJLElBQUksQ0FBQztRQUNsQyxJQUFJMEksVUFBVVAsYUFBYW5JLElBQUksQ0FBQztRQUNoQyxJQUFJMkksWUFBWVIsYUFBYW5JLElBQUksQ0FBQztRQUNsQyxJQUFJNEksY0FBY0YsUUFBUTFJLElBQUksQ0FBQztRQUUvQixJQUFJNkksYUFBYUosWUFBWTNILElBQUksQ0FBQztRQUNsQyxJQUFJZ0ksYUFBYUwsWUFBWTNILElBQUksQ0FBQztRQUNsQyxJQUFJaUksZ0JBQWdCTixZQUFZM0gsSUFBSSxDQUFDO1FBRXJDLHNCQUFzQjtRQUN0QixtRUFBbUU7UUFDbkUscURBQXFEO1FBQ3JELElBQUksQ0FBQ3BCLE9BQU87WUFDVjRJLE9BQU85RixFQUFFLENBQUMsaUJBQWlCLFNBQVV3RyxDQUFDO2dCQUNwQyxJQUFJQSxFQUFFbkQsSUFBSSxLQUFLLGFBQWFtRCxFQUFFQyxLQUFLLEtBQUssTUFBTUQsRUFBRUMsS0FBSyxLQUFLLElBQUk7b0JBQzVEO2dCQUNGO2dCQUVBRCxFQUFFekYsY0FBYztnQkFDaEI4RSxPQUFPYSxLQUFLO1lBQ2Q7UUFDRjtRQUVBLHNDQUFzQztRQUN0Q1osT0FBT3RJLElBQUksQ0FBQyw0QkFBNEJjLElBQUksQ0FBQyxlQUFlO1FBQzVENkgsVUFBVTNJLElBQUksQ0FBQyw4QkFBOEJjLElBQUksQ0FBQyxlQUFlO1FBRWpFLElBQUksQ0FBQ3BCLE9BQU87WUFDVmlKLFVBQVVuRyxFQUFFLENBQUMsaUJBQWlCLFNBQVV3RyxDQUFDO2dCQUN2QyxJQUFJQSxFQUFFbkQsSUFBSSxLQUFLLFdBQVc7b0JBQ3hCLElBQUltRCxFQUFFQyxLQUFLLEtBQUssTUFBTUQsRUFBRUMsS0FBSyxLQUFLLElBQUk7d0JBQ3BDO29CQUNGO29CQUVBRCxFQUFFekYsY0FBYztnQkFDbEI7Z0JBRUE4RSxPQUFPYyxVQUFVLENBQUM7Z0JBQ2xCZCxPQUFPL0MsR0FBRyxDQUFDO2dCQUNYc0QsWUFBWVEsSUFBSSxDQUFDO2dCQUNqQm5CLGFBQWFILE1BQU0sQ0FBQztnQkFDcEJLLGFBQWFMLE1BQU0sQ0FBQztnQkFDcEJRLE9BQU9QLEtBQUs7WUFDZDtZQUVBTSxPQUFPN0YsRUFBRSxDQUFDLFVBQVUsU0FBVXdHLENBQUM7Z0JBQzdCaEIsT0FBT2dCLEVBQUU1RSxNQUFNLElBQUk0RSxFQUFFNUUsTUFBTSxDQUFDaUYsS0FBSyxJQUFJTCxFQUFFNUUsTUFBTSxDQUFDaUYsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RELElBQUksQ0FBQ3JCLE1BQU07b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsaUJBQWlCO2dCQUNqQkMsYUFBYUgsTUFBTSxDQUFDO2dCQUNwQk0sV0FBV04sTUFBTSxDQUFDO2dCQUNsQkksZUFBZUosTUFBTSxDQUFDO2dCQUN0QkksZUFBZUgsS0FBSztnQkFFcEIsZUFBZTtnQkFDZmEsWUFBWVUsSUFBSSxDQUFDdEIsS0FBS3pELElBQUk7Z0JBRTFCLHdCQUF3QjtnQkFDeEIsSUFBSSxDQUFDZ0YsZUFBZTtvQkFDbEI3RixXQUFXN0I7Z0JBQ2I7Z0JBQ0FBLEtBQUtNLFdBQVcsQ0FBQ1QsRUFBRSxDQUFDOEgsU0FBUyxHQUFHO2dCQUVoQ0MsU0FBU3pCLE1BQU0wQjtZQUNqQjtZQUVBLGlEQUFpRDtZQUNqRCxxREFBcUQ7WUFDckQsSUFBSUMsU0FBU3JCLE9BQU9zQixXQUFXO1lBQy9CdkIsT0FBT3NCLE1BQU0sQ0FBQ0E7WUFDZHRCLE9BQU93QixLQUFLLENBQUM7UUFDZixPQUFPO1lBQ0x4QixPQUFPN0YsRUFBRSxDQUFDLFNBQVMsU0FBVXdHLENBQUM7Z0JBQzVCQSxFQUFFekYsY0FBYztZQUNsQjtZQUNBK0UsT0FBTzlGLEVBQUUsQ0FBQyxTQUFTLFNBQVV3RyxDQUFDO2dCQUM1QkEsRUFBRXpGLGNBQWM7WUFDbEI7WUFDQWdGLGVBQWUvRixFQUFFLENBQUMsU0FBUyxTQUFVd0csQ0FBQztnQkFDcENBLEVBQUV6RixjQUFjO1lBQ2xCO1FBQ0Y7UUFFQSxTQUFTdUcsV0FBV0MsR0FBRztZQUNyQixJQUFJQyxXQUFXRCxJQUFJRSxZQUFZLElBQUlGLElBQUlFLFlBQVksQ0FBQ3JDLEdBQUc7WUFDdkQsSUFBSXNDLFlBQVluQjtZQUNoQixJQUNFLE9BQU9pQixhQUFhLFlBQ3BCQSxTQUFTaEosT0FBTyxDQUFDLDRCQUE0QixHQUM3QztnQkFDQWtKLFlBQVlwQjtZQUNkLE9BQU8sSUFDTCxPQUFPa0IsYUFBYSxZQUNwQkEsU0FBU2hKLE9BQU8sQ0FBQyx3QkFBd0IsR0FDekM7Z0JBQ0FrSixZQUFZckI7WUFDZDtZQUVBSixZQUFZYSxJQUFJLENBQUNZO1lBRWpCN0IsT0FBT2MsVUFBVSxDQUFDO1lBQ2xCZCxPQUFPL0MsR0FBRyxDQUFDO1lBQ1g0QyxlQUFlSixNQUFNLENBQUM7WUFDdEJHLGFBQWFILE1BQU0sQ0FBQztZQUNwQk0sV0FBV04sTUFBTSxDQUFDO1lBQ2xCTSxXQUFXTCxLQUFLO1lBRWhCbEcsS0FBS00sV0FBVyxDQUFDVCxFQUFFLENBQUM4SCxTQUFTLEdBQUc7WUFDaEMsSUFBSSxDQUFDRCxlQUFlO2dCQUNsQnpILE1BQU1EO1lBQ1I7UUFDRjtRQUVBLFNBQVM2SCxVQUFVSyxHQUFHLEVBQUU5SixJQUFJO1lBQzFCLElBQUk4SixLQUFLO2dCQUNQLE9BQU9ELFdBQVdDO1lBQ3BCO1lBRUEsSUFBSUksV0FBV2xLLEtBQUtrSyxRQUFRO1lBQzVCLElBQUlDLFdBQVduSyxLQUFLbUssUUFBUTtZQUM1QixJQUFJQyxTQUFTcEssS0FBS29LLE1BQU07WUFDeEIsSUFBSUMsUUFBUXJLLEtBQUtxSyxLQUFLO1lBQ3RCakMsT0FBT3ZILElBQUksQ0FBQyxjQUFjdUo7WUFFMUJFLFNBQVNELE9BQU9GLFVBQVVwQyxNQUFNbUMsVUFBVUs7UUFDNUM7UUFFQSxTQUFTQSxZQUFZVCxHQUFHO1lBQ3RCLElBQUlBLEtBQUs7Z0JBQ1AsT0FBT0QsV0FBV0M7WUFDcEI7WUFFQSxlQUFlO1lBQ2Y3QixlQUFlSixNQUFNLENBQUM7WUFDdEJLLGFBQWFzQyxHQUFHLENBQUMsV0FBVztZQUM1QnRDLGFBQWFKLEtBQUs7WUFFbEJsRyxLQUFLTSxXQUFXLENBQUNULEVBQUUsQ0FBQzhILFNBQVMsR0FBRztZQUNoQyxJQUFJLENBQUNELGVBQWU7Z0JBQ2xCekgsTUFBTUQ7WUFDUjtRQUNGO1FBRUEsU0FBUzBIO1lBQ1AsSUFBSW1CLFVBQVUsQUFBQzdJLEtBQUtNLFdBQVcsSUFBSU4sS0FBS00sV0FBVyxDQUFDd0ksT0FBTyxNQUFPLEVBQUU7WUFDcEUsT0FBT0QsUUFBUUUsSUFBSSxDQUFDLFNBQVU3RSxLQUFLO2dCQUNqQyxPQUFPQSxNQUFNeUQsU0FBUztZQUN4QjtRQUNGO0lBQ0Y7SUFFQSxTQUFTQyxTQUFTekIsSUFBSSxFQUFFckssRUFBRTtRQUN4QixJQUFJbUosVUFBVSxJQUFJK0QsZ0JBQWdCO1lBQ2hDdEcsTUFBTXlELEtBQUt6RCxJQUFJO1lBQ2Z1RyxNQUFNOUMsS0FBSzhDLElBQUk7UUFDakI7UUFFQXJNLEVBQUVnSixJQUFJLENBQUM7WUFBQzVCLE1BQU07WUFBT3dCLEtBQUssQ0FBQyxFQUFFdkgsWUFBWSxDQUFDLEVBQUVnSCxRQUFRLENBQUM7WUFBRWlFLGFBQWE7UUFBSSxHQUNyRTlJLElBQUksQ0FBQyxTQUFVaEMsSUFBSTtZQUNsQnRDLEdBQUcsTUFBTXNDO1FBQ1gsR0FDQ2lDLElBQUksQ0FBQyxTQUFVNkgsR0FBRztZQUNqQnBNLEdBQUdvTTtRQUNMO0lBQ0o7SUFFQSxTQUFTUSxTQUFTbEQsR0FBRyxFQUFFcEgsSUFBSSxFQUFFK0gsSUFBSSxFQUFFbUMsUUFBUSxFQUFFeE0sRUFBRTtRQUM3QyxJQUFJcU4sV0FBVyxJQUFJQztRQUNuQixJQUFLLElBQUlDLEtBQUtqTCxLQUFNO1lBQ2xCK0ssU0FBU0csTUFBTSxDQUFDRCxHQUFHakwsSUFBSSxDQUFDaUwsRUFBRTtRQUM1QjtRQUNBRixTQUFTRyxNQUFNLENBQUMsUUFBUW5ELE1BQU1tQztRQUU5QjFMLEVBQUVnSixJQUFJLENBQUM7WUFDTDVCLE1BQU07WUFDTndCO1lBQ0FwSCxNQUFNK0s7WUFDTkksYUFBYTtZQUNiQyxhQUFhO1FBQ2YsR0FDR3BKLElBQUksQ0FBQztZQUNKdEUsR0FBRztRQUNMLEdBQ0N1RSxJQUFJLENBQUMsU0FBVTZILEdBQUc7WUFDakJwTSxHQUFHb007UUFDTDtJQUNKO0lBRUEsZ0JBQWdCO0lBQ2hCLE9BQU9uTDtBQUNUIn0=

}),

}]);