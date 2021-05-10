window.blazorTime = {};

// This is a minified version of https://github.com/felixge/node-dateformat/
// it is so small that I am just including it and renaming the global variable 
// rather than requiring the dependancy.
!function (e) { const t = (() => { const e = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, o = /[^-+\dA-Z]/g; return (r, i, l, M) => { if (1 !== arguments.length || "string" !== d(r) || /\d/.test(r) || (i = r, r = void 0), (r = r || 0 === r ? r : new Date) instanceof Date || (r = new Date(r)), isNaN(r)) throw TypeError("Invalid date"); const D = (i = String(t.masks[i] || i || t.masks.default)).slice(0, 4); "UTC:" !== D && "GMT:" !== D || (i = i.slice(4), l = !0, "GMT:" === D && (M = !0)); const u = () => l ? "getUTC" : "get", T = () => r[u() + "Date"](), h = () => r[u() + "Day"](), c = () => r[u() + "Month"](), g = () => r[u() + "FullYear"](), f = () => r[u() + "Hours"](), N = () => r[u() + "Minutes"](), p = () => r[u() + "Seconds"](), H = () => r[u() + "Milliseconds"](), S = () => l ? 0 : r.getTimezoneOffset(), b = () => m(r), F = { d: () => T(), dd: () => a(T()), ddd: () => t.i18n.dayNames[h()], DDD: () => s({ y: g(), m: c(), d: T(), _: u(), dayName: t.i18n.dayNames[h()], short: !0 }), dddd: () => t.i18n.dayNames[h() + 7], DDDD: () => s({ y: g(), m: c(), d: T(), _: u(), dayName: t.i18n.dayNames[h() + 7] }), m: () => c() + 1, mm: () => a(c() + 1), mmm: () => t.i18n.monthNames[c()], mmmm: () => t.i18n.monthNames[c() + 12], yy: () => String(g()).slice(2), yyyy: () => a(g(), 4), h: () => f() % 12 || 12, hh: () => a(f() % 12 || 12), H: () => f(), HH: () => a(f()), M: () => N(), MM: () => a(N()), s: () => p(), ss: () => a(p()), l: () => a(H(), 3), L: () => a(Math.floor(H() / 10)), t: () => f() < 12 ? t.i18n.timeNames[0] : t.i18n.timeNames[1], tt: () => f() < 12 ? t.i18n.timeNames[2] : t.i18n.timeNames[3], T: () => f() < 12 ? t.i18n.timeNames[4] : t.i18n.timeNames[5], TT: () => f() < 12 ? t.i18n.timeNames[6] : t.i18n.timeNames[7], Z: () => M ? "GMT" : l ? "UTC" : (String(r).match(y) || [""]).pop().replace(o, "").replace(/GMT\+0000/g, "UTC"), o: () => (S() > 0 ? "-" : "+") + a(100 * Math.floor(Math.abs(S()) / 60) + Math.abs(S()) % 60, 4), p: () => (S() > 0 ? "-" : "+") + a(Math.floor(Math.abs(S()) / 60), 2) + ":" + a(Math.floor(Math.abs(S()) % 60), 2), S: () => ["th", "st", "nd", "rd"][T() % 10 > 3 ? 0 : (T() % 100 - T() % 10 != 10) * T() % 10], W: () => b(), WW: () => a(b()), N: () => (() => n(r))() }; return i.replace(e, e => e in F ? F[e]() : e.slice(1, e.length - 1)) } })(); t.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", paddedShortDate: "mm/dd/yyyy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, t.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"] }; const a = (e, t) => { for (e = String(e), t = t || 2; e.length < t;)e = "0" + e; return e }, s = ({ y: e, m: t, d: a, _: s, dayName: m, short: n = !1 }) => { const d = new Date, y = new Date; y.setDate(y[s + "Date"]() - 1); const o = new Date; o.setDate(o[s + "Date"]() + 1); return (() => d[s + "FullYear"]())() === e && (() => d[s + "Month"]())() === t && (() => d[s + "Date"]())() === a ? n ? "Tdy" : "Today" : (() => y[s + "FullYear"]())() === e && (() => y[s + "Month"]())() === t && (() => y[s + "Date"]())() === a ? n ? "Ysd" : "Yesterday" : (() => o[s + "FullYear"]())() === e && (() => o[s + "Month"]())() === t && (() => o[s + "Date"]())() === a ? n ? "Tmw" : "Tomorrow" : m }, m = e => { const t = new Date(e.getFullYear(), e.getMonth(), e.getDate()); t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3); const a = new Date(t.getFullYear(), 0, 4); a.setDate(a.getDate() - (a.getDay() + 6) % 7 + 3); const s = t.getTimezoneOffset() - a.getTimezoneOffset(); t.setHours(t.getHours() - s); const m = (t - a) / 6048e5; return 1 + Math.floor(m) }, n = e => { let t = e.getDay(); return 0 === t && (t = 7), t }, d = e => null === e ? "null" : void 0 === e ? "undefined" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : {}.toString.call(e).slice(8, -1).toLowerCase(); "function" == typeof define && define.amd ? define(() => t) : "object" == typeof exports ? module.exports = t : e.blazorDateFormat = t }(this);

window.blazorTime = {
  init: function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function (mutations, observer) {
      for (var i = 0; i < mutations.length; i++)
      {
        var target = mutations[i].target;
        if (target.nodeName == "UTC-TO-LOCAL") {
          window.blazorTime.updateTag(target);
        }
      }
      console.log(mutations);
    });

    //watch for elements that have the blazor-time-observer attribute
    observer.observe(document, {
      attributes: true,
      attributeFilter: ["blazor-time-observer"],
      subtree: true,
    });
  },
  updateTag: function (htmlNode) {
    //get date from tag contents
    var utctimeval = htmlNode.attributes["blazor-time-observer"].value;
    var tagDate = new Date(utctimeval);

    //get format from tag
    var format = htmlNode.attributes["format"];
    var formatValue = null;
    if (format) {
      formatValue = format.value;
    }

    //set contents of display tag
    if (formatValue) {
      htmlNode.innerHTML = blazorDateFormat(tagDate, formatValue);
    }
    else {
      htmlNode.innerHTML = blazorDateFormat(tagDate);
    }
  },
  updateAllTags: function () {
    //convert existing display tags
    var timeTags = document.getElementsByTagName("utc-to-local")
    for (var i = 0; i < timeTags.length; i++) {
      //get tag
      var currentTag = timeTags[i];
      this.updateTag(currentTag);
    }
  }
};
window.blazorTime.init();
