import { shallowRef as nn, unref as Z, shallowReactive as on, nextTick as rn, defineComponent as _t, reactive as Me, inject as ue, computed as $, h as Et, provide as ke, ref as sn, watch as ge, getCurrentInstance as bt, watchEffect as an, effectScope as cn, createApp as un } from "vue";
import ln from "lkt-tooltip";
import fn from "lkt-field";
import dn from "lkt-table";
import pn from "lkt-button";
import hn from "lkt-anchor";
import mn from "lkt-loader";
import gn from "lkt-modal";
import vn from "lkt-modal-confirm";
import yn from "lkt-item-crud";
import _n from "lkt-tag";
import En from "lkt-paginator";
function bn() {
  return wt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function wt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const wn = typeof Proxy == "function", On = "devtools-plugin:setup", Nn = "plugin:settings:set";
let Y, xe;
function kn() {
  var e;
  return Y !== void 0 || (typeof window < "u" && window.performance ? (Y = !0, xe = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Y = !0, xe = globalThis.perf_hooks.performance) : Y = !1), Y;
}
function Rn() {
  return kn() ? xe.now() : Date.now();
}
class Pn {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const f = t.settings[i];
        o[i] = f.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), f = JSON.parse(i);
      Object.assign(s, f);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return Rn();
      }
    }, n && n.on(Nn, (i, f) => {
      i === this.plugin.id && this.fallbacks.setSettings(f);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, f) => this.target ? this.target.on[f] : (...u) => {
        this.onQueue.push({
          method: f,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, f) => this.target ? this.target[f] : f === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(f) ? (...u) => (this.targetQueue.push({
        method: f,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[f](...u)) : (...u) => new Promise((p) => {
        this.targetQueue.push({
          method: f,
          args: u,
          resolve: p
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Sn(e, t) {
  const n = e, o = wt(), r = bn(), s = wn && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(On, e, t);
  else {
    const i = s ? new Pn(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const U = typeof document < "u";
function Ot(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Cn(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && Ot(e.default);
}
const R = Object.assign;
function Re(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = I(r) ? r.map(e) : e(r);
  }
  return n;
}
const se = () => {
}, I = Array.isArray;
function E(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Nt = /#/g, xn = /&/g, An = /\//g, Vn = /=/g, Dn = /\?/g, kt = /\+/g, In = /%5B/g, Tn = /%5D/g, Rt = /%5E/g, $n = /%60/g, Pt = /%7B/g, jn = /%7C/g, St = /%7D/g, Ln = /%20/g;
function Ge(e) {
  return encodeURI("" + e).replace(jn, "|").replace(In, "[").replace(Tn, "]");
}
function Mn(e) {
  return Ge(e).replace(Pt, "{").replace(St, "}").replace(Rt, "^");
}
function Ae(e) {
  return Ge(e).replace(kt, "%2B").replace(Ln, "+").replace(Nt, "%23").replace(xn, "%26").replace($n, "`").replace(Pt, "{").replace(St, "}").replace(Rt, "^");
}
function Gn(e) {
  return Ae(e).replace(Vn, "%3D");
}
function Un(e) {
  return Ge(e).replace(Nt, "%23").replace(Dn, "%3F");
}
function Bn(e) {
  return e == null ? "" : Un(e).replace(An, "%2F");
}
function ee(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && E(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Hn = /\/$/, Kn = (e) => e.replace(Hn, "");
function Pe(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const f = t.indexOf("#");
  let u = t.indexOf("?");
  return f < u && f >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), s = t.slice(u + 1, f > -1 ? f : t.length), r = e(s)), f > -1 && (o = o || t.slice(0, f), i = t.slice(f, t.length)), o = Wn(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: ee(i)
  };
}
function Qn(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ye(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Xe(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && q(t.matched[o], n.matched[r]) && Ct(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function q(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ct(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!qn(e[n], t[n]))
      return !1;
  return !0;
}
function qn(e, t) {
  return I(e) ? Ze(e, t) : I(t) ? Ze(t, e) : e === t;
}
function Ze(e, t) {
  return I(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Wn(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return E(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1, i, f;
  for (i = 0; i < o.length; i++)
    if (f = o[i], f !== ".")
      if (f === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + o.slice(i).join("/");
}
const H = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var le;
(function(e) {
  e.pop = "pop", e.push = "push";
})(le || (le = {}));
var ae;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ae || (ae = {}));
function zn(e) {
  if (!e)
    if (U) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Kn(e);
}
const Fn = /^[^#]+#/;
function Jn(e, t) {
  return e.replace(Fn, "#") + t;
}
function Yn(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const ve = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Xn(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          E(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        E(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      process.env.NODE_ENV !== "production" && E(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Yn(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function et(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ve = /* @__PURE__ */ new Map();
function Zn(e, t) {
  Ve.set(e, t);
}
function eo(e) {
  const t = Ve.get(e);
  return Ve.delete(e), t;
}
let to = () => location.protocol + "//" + location.host;
function xt(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let f = r.includes(e.slice(s)) ? e.slice(s).length : 1, u = r.slice(f);
    return u[0] !== "/" && (u = "/" + u), Ye(u, "");
  }
  return Ye(n, e) + o + r;
}
function no(e, t, n, o) {
  let r = [], s = [], i = null;
  const f = ({ state: l }) => {
    const h = xt(e, location), y = n.value, _ = t.value;
    let P = 0;
    if (l) {
      if (n.value = h, t.value = l, i && i === y) {
        i = null;
        return;
      }
      P = _ ? l.position - _.position : 0;
    } else
      o(h);
    r.forEach((S) => {
      S(n.value, y, {
        delta: P,
        type: le.pop,
        direction: P ? P > 0 ? ae.forward : ae.back : ae.unknown
      });
    });
  };
  function u() {
    i = n.value;
  }
  function p(l) {
    r.push(l);
    const h = () => {
      const y = r.indexOf(l);
      y > -1 && r.splice(y, 1);
    };
    return s.push(h), h;
  }
  function c() {
    const { history: l } = window;
    l.state && l.replaceState(R({}, l.state, { scroll: ve() }), "");
  }
  function a() {
    for (const l of s)
      l();
    s = [], window.removeEventListener("popstate", f), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", f), window.addEventListener("beforeunload", c, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: p,
    destroy: a
  };
}
function tt(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? ve() : null
  };
}
function oo(e) {
  const { history: t, location: n } = window, o = {
    value: xt(e, n)
  }, r = { value: t.state };
  r.value || s(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(u, p, c) {
    const a = e.indexOf("#"), l = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + u : to() + e + u;
    try {
      t[c ? "replaceState" : "pushState"](p, "", l), r.value = p;
    } catch (h) {
      process.env.NODE_ENV !== "production" ? E("Error with push/replace State", h) : console.error(h), n[c ? "replace" : "assign"](l);
    }
  }
  function i(u, p) {
    const c = R({}, t.state, tt(
      r.value.back,
      // keep back and forward entries but override current position
      u,
      r.value.forward,
      !0
    ), p, { position: r.value.position });
    s(u, c, !0), o.value = u;
  }
  function f(u, p) {
    const c = R(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: u,
        scroll: ve()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && E(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(c.current, c, !0);
    const a = R({}, tt(o.value, u, null), { position: c.position + 1 }, p);
    s(u, a, !1), o.value = u;
  }
  return {
    location: o,
    state: r,
    push: f,
    replace: i
  };
}
function ro(e) {
  e = zn(e);
  const t = oo(e), n = no(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = R({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Jn.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function he(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function At(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const De = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var nt;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(nt || (nt = {}));
const io = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${ao(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function te(e, t) {
  return process.env.NODE_ENV !== "production" ? R(new Error(io[e](t)), {
    type: e,
    [De]: !0
  }, t) : R(new Error(), {
    type: e,
    [De]: !0
  }, t);
}
function G(e, t) {
  return e instanceof Error && De in e && (t == null || !!(e.type & t));
}
const so = ["params", "query", "hash"];
function ao(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of so)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const ot = "[^/]+?", co = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, uo = /[.+*?^${}()[\]/\\]/g;
function lo(e, t) {
  const n = R({}, co, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const p of e) {
    const c = p.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !p.length && (r += "/");
    for (let a = 0; a < p.length; a++) {
      const l = p[a];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (l.type === 0)
        a || (r += "/"), r += l.value.replace(uo, "\\$&"), h += 40;
      else if (l.type === 1) {
        const { value: y, repeatable: _, optional: P, regexp: S } = l;
        s.push({
          name: y,
          repeatable: _,
          optional: P
        });
        const O = S || ot;
        if (O !== ot) {
          h += 10;
          try {
            new RegExp(`(${O})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${O}): ` + V.message);
          }
        }
        let N = _ ? `((?:${O})(?:/(?:${O}))*)` : `(${O})`;
        a || (N = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        P && p.length < 2 ? `(?:/${N})` : "/" + N), P && (N += "?"), r += N, h += 20, P && (h += -8), _ && (h += -20), O === ".*" && (h += -50);
      }
      c.push(h);
    }
    o.push(c);
  }
  if (n.strict && n.end) {
    const p = o.length - 1;
    o[p][o[p].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function f(p) {
    const c = p.match(i), a = {};
    if (!c)
      return null;
    for (let l = 1; l < c.length; l++) {
      const h = c[l] || "", y = s[l - 1];
      a[y.name] = h && y.repeatable ? h.split("/") : h;
    }
    return a;
  }
  function u(p) {
    let c = "", a = !1;
    for (const l of e) {
      (!a || !c.endsWith("/")) && (c += "/"), a = !1;
      for (const h of l)
        if (h.type === 0)
          c += h.value;
        else if (h.type === 1) {
          const { value: y, repeatable: _, optional: P } = h, S = y in p ? p[y] : "";
          if (I(S) && !_)
            throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
          const O = I(S) ? S.join("/") : S;
          if (!O)
            if (P)
              l.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : a = !0);
            else
              throw new Error(`Missing required param "${y}"`);
          c += O;
        }
    }
    return c || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: f,
    stringify: u
  };
}
function fo(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Vt(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = fo(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (rt(o))
      return 1;
    if (rt(r))
      return -1;
  }
  return r.length - o.length;
}
function rt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const po = {
  type: 0,
  value: ""
}, ho = /[a-zA-Z0-9_]/;
function mo(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[po]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${p}": ${h}`);
  }
  let n = 0, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let f = 0, u, p = "", c = "";
  function a() {
    p && (n === 0 ? s.push({
      type: 0,
      value: p
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: p,
      regexp: c,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), p = "");
  }
  function l() {
    p += u;
  }
  for (; f < e.length; ) {
    if (u = e[f++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (p && a(), i()) : u === ":" ? (a(), n = 1) : l();
        break;
      case 4:
        l(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : ho.test(u) ? l() : (a(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--);
        break;
      case 2:
        u === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + u : n = 3 : c += u;
        break;
      case 3:
        a(), n = 0, u !== "*" && u !== "?" && u !== "+" && f--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${p}"`), a(), i(), r;
}
function go(e, t, n) {
  const o = lo(mo(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && E(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = R(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function vo(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = ct({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(a) {
    return o.get(a);
  }
  function s(a, l, h) {
    const y = !h, _ = st(a);
    process.env.NODE_ENV !== "production" && bo(_, l), _.aliasOf = h && h.record;
    const P = ct(t, a), S = [_];
    if ("alias" in a) {
      const V = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const M of V)
        S.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          st(R({}, _, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : _.components,
            path: M,
            // we might be the child of an alias
            aliasOf: h ? h.record : _
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let O, N;
    for (const V of S) {
      const { path: M } = V;
      if (l && M[0] !== "/") {
        const B = l.record.path, T = B[B.length - 1] === "/" ? "" : "/";
        V.path = l.record.path + (M && T + M);
      }
      if (process.env.NODE_ENV !== "production" && V.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (O = go(V, l, P), process.env.NODE_ENV !== "production" && l && M[0] === "/" && wo(O, l), h ? (h.alias.push(O), process.env.NODE_ENV !== "production" && Eo(h, O)) : (N = N || O, N !== O && N.alias.push(O), y && a.name && !at(O) && i(a.name)), Dt(O) && u(O), _.children) {
        const B = _.children;
        for (let T = 0; T < B.length; T++)
          s(B[T], O, h && h.children[T]);
      }
      h = h || O;
    }
    return N ? () => {
      i(N);
    } : se;
  }
  function i(a) {
    if (At(a)) {
      const l = o.get(a);
      l && (o.delete(a), n.splice(n.indexOf(l), 1), l.children.forEach(i), l.alias.forEach(i));
    } else {
      const l = n.indexOf(a);
      l > -1 && (n.splice(l, 1), a.record.name && o.delete(a.record.name), a.children.forEach(i), a.alias.forEach(i));
    }
  }
  function f() {
    return n;
  }
  function u(a) {
    const l = Oo(a, n);
    n.splice(l, 0, a), a.record.name && !at(a) && o.set(a.record.name, a);
  }
  function p(a, l) {
    let h, y = {}, _, P;
    if ("name" in a && a.name) {
      if (h = o.get(a.name), !h)
        throw te(1, {
          location: a
        });
      if (process.env.NODE_ENV !== "production") {
        const N = Object.keys(a.params || {}).filter((V) => !h.keys.find((M) => M.name === V));
        N.length && E(`Discarded invalid param(s) "${N.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      P = h.record.name, y = R(
        // paramsFromLocation is a new object
        it(
          l.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((N) => !N.optional).concat(h.parent ? h.parent.keys.filter((N) => N.optional) : []).map((N) => N.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        a.params && it(a.params, h.keys.map((N) => N.name))
      ), _ = h.stringify(y);
    } else if (a.path != null)
      _ = a.path, process.env.NODE_ENV !== "production" && !_.startsWith("/") && E(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((N) => N.re.test(_)), h && (y = h.parse(_), P = h.record.name);
    else {
      if (h = l.name ? o.get(l.name) : n.find((N) => N.re.test(l.path)), !h)
        throw te(1, {
          location: a,
          currentLocation: l
        });
      P = h.record.name, y = R({}, l.params, a.params), _ = h.stringify(y);
    }
    const S = [];
    let O = h;
    for (; O; )
      S.unshift(O.record), O = O.parent;
    return {
      name: P,
      path: _,
      params: y,
      matched: S,
      meta: _o(S)
    };
  }
  e.forEach((a) => s(a));
  function c() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: s,
    resolve: p,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: f,
    getRecordMatcher: r
  };
}
function it(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function st(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: yo(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function yo(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function at(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function _o(e) {
  return e.reduce((t, n) => R(t, n.meta), {});
}
function ct(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ie(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Eo(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ie.bind(null, n)))
      return E(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ie.bind(null, n)))
      return E(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function bo(e, t) {
  t && t.record.name && !e.name && !e.path && E(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function wo(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ie.bind(null, n)))
      return E(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Oo(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    Vt(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = No(e);
  return r && (o = t.lastIndexOf(r, o - 1), process.env.NODE_ENV !== "production" && o < 0 && E(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function No(e) {
  let t = e;
  for (; t = t.parent; )
    if (Dt(t) && Vt(e, t) === 0)
      return t;
}
function Dt({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ko(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(kt, " "), i = s.indexOf("="), f = ee(i < 0 ? s : s.slice(0, i)), u = i < 0 ? null : ee(s.slice(i + 1));
    if (f in t) {
      let p = t[f];
      I(p) || (p = t[f] = [p]), p.push(u);
    } else
      t[f] = u;
  }
  return t;
}
function ut(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Gn(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (I(o) ? o.map((s) => s && Ae(s)) : [o && Ae(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function Ro(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = I(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const Po = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), lt = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Ue = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), It = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Te = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function oe() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function K(e, t, n, o, r, s = (i) => i()) {
  const i = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((f, u) => {
    const p = (l) => {
      l === !1 ? u(te(4, {
        from: n,
        to: t
      })) : l instanceof Error ? u(l) : he(l) ? u(te(2, {
        from: t,
        to: l
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === i && typeof l == "function" && i.push(l), f());
    }, c = s(() => e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? So(p, t, n) : p));
    let a = Promise.resolve(c);
    if (e.length < 3 && (a = a.then(p)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        a = a.then((h) => p._called ? h : (E(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !p._called) {
        E(l), u(new Error("Invalid navigation guard"));
        return;
      }
    }
    a.catch((l) => u(l));
  });
}
function So(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && E(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Se(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && !i.children.length && E(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const f in i.components) {
      let u = i.components[f];
      if (process.env.NODE_ENV !== "production") {
        if (!u || typeof u != "object" && typeof u != "function")
          throw E(`Component "${f}" in record with path "${i.path}" is not a valid component. Received "${String(u)}".`), new Error("Invalid route component");
        if ("then" in u) {
          E(`Component "${f}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const p = u;
          u = () => p;
        } else u.__asyncLoader && // warn only once per component
        !u.__warnedDefineAsync && (u.__warnedDefineAsync = !0, E(`Component "${f}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[f]))
        if (Ot(u)) {
          const c = (u.__vccOpts || u)[t];
          c && s.push(K(c, n, o, i, f, r));
        } else {
          let p = u();
          process.env.NODE_ENV !== "production" && !("catch" in p) && (E(`Component "${f}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), p = Promise.resolve(p)), s.push(() => p.then((c) => {
            if (!c)
              throw new Error(`Couldn't resolve component "${f}" at "${i.path}"`);
            const a = Cn(c) ? c.default : c;
            i.mods[f] = c, i.components[f] = a;
            const h = (a.__vccOpts || a)[t];
            return h && K(h, n, o, i, f, r)();
          }));
        }
    }
  }
  return s;
}
function ft(e) {
  const t = ue(Ue), n = ue(It);
  let o = !1, r = null;
  const s = $(() => {
    const c = Z(e.to);
    return process.env.NODE_ENV !== "production" && (!o || c !== r) && (he(c) || (o ? E(`Invalid value for prop "to" in useLink()
- to:`, c, `
- previous to:`, r, `
- props:`, e) : E(`Invalid value for prop "to" in useLink()
- to:`, c, `
- props:`, e)), r = c, o = !0), t.resolve(c);
  }), i = $(() => {
    const { matched: c } = s.value, { length: a } = c, l = c[a - 1], h = n.matched;
    if (!l || !h.length)
      return -1;
    const y = h.findIndex(q.bind(null, l));
    if (y > -1)
      return y;
    const _ = dt(c[a - 2]);
    return (
      // we are dealing with nested routes
      a > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      dt(l) === _ && // avoid comparing the child with its parent
      h[h.length - 1].path !== _ ? h.findIndex(q.bind(null, c[a - 2])) : y
    );
  }), f = $(() => i.value > -1 && Vo(n.params, s.value.params)), u = $(() => i.value > -1 && i.value === n.matched.length - 1 && Ct(n.params, s.value.params));
  function p(c = {}) {
    return Ao(c) ? t[Z(e.replace) ? "replace" : "push"](
      Z(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(se) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && U) {
    const c = bt();
    if (c) {
      const a = {
        route: s.value,
        isActive: f.value,
        isExactActive: u.value,
        error: null
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(a), an(() => {
        a.route = s.value, a.isActive = f.value, a.isExactActive = u.value, a.error = he(Z(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: $(() => s.value.href),
    isActive: f,
    isExactActive: u,
    navigate: p
  };
}
const Co = /* @__PURE__ */ _t({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: ft,
  setup(e, { slots: t }) {
    const n = Me(ft(e)), { options: o } = ue(Ue), r = $(() => ({
      [pt(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [pt(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && t.default(n);
      return e.custom ? s : Et("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), xo = Co;
function Ao(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Vo(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!I(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function dt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const pt = (e, t, n) => e ?? t ?? n, Do = /* @__PURE__ */ _t({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && To();
    const o = ue(Te), r = $(() => e.route || o.value), s = ue(lt, 0), i = $(() => {
      let p = Z(s);
      const { matched: c } = r.value;
      let a;
      for (; (a = c[p]) && !a.components; )
        p++;
      return p;
    }), f = $(() => r.value.matched[i.value]);
    ke(lt, $(() => i.value + 1)), ke(Po, f), ke(Te, r);
    const u = sn();
    return ge(() => [u.value, f.value, e.name], ([p, c, a], [l, h, y]) => {
      c && (c.instances[a] = p, h && h !== c && p && p === l && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), p && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !q(c, h) || !l) && (c.enterCallbacks[a] || []).forEach((_) => _(p));
    }, { flush: "post" }), () => {
      const p = r.value, c = e.name, a = f.value, l = a && a.components[c];
      if (!l)
        return ht(n.default, { Component: l, route: p });
      const h = a.props[c], y = h ? h === !0 ? p.params : typeof h == "function" ? h(p) : h : null, P = Et(l, R({}, y, t, {
        onVnodeUnmounted: (S) => {
          S.component.isUnmounted && (a.instances[c] = null);
        },
        ref: u
      }));
      if (process.env.NODE_ENV !== "production" && U && P.ref) {
        const S = {
          depth: i.value,
          name: a.name,
          path: a.path,
          meta: a.meta
        };
        (I(P.ref) ? P.ref.map((N) => N.i) : [P.ref.i]).forEach((N) => {
          N.__vrv_devtools = S;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        ht(n.default, { Component: P, route: p }) || P
      );
    };
  }
});
function ht(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Io = Do;
function To() {
  const e = bt(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    E(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function re(e, t) {
  const n = R({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => qo(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function pe(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let $o = 0;
function jo(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = $o++;
  Sn({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((c, a) => {
      c.instanceData && c.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: re(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: c, componentInstance: a }) => {
      if (a.__vrv_devtools) {
        const l = a.__vrv_devtools;
        c.tags.push({
          label: (l.name ? `${l.name.toString()}: ` : "") + l.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Tt
        });
      }
      I(a.__vrl_devtools) && (a.__devtoolsApi = r, a.__vrl_devtools.forEach((l) => {
        let h = l.route.path, y = Lt, _ = "", P = 0;
        l.error ? (h = l.error, y = Bo, P = Ho) : l.isExactActive ? (y = jt, _ = "This is exactly active") : l.isActive && (y = $t, _ = "This link is active"), c.tags.push({
          label: h,
          textColor: P,
          tooltip: _,
          backgroundColor: y
        });
      }));
    }), ge(t.currentRoute, () => {
      u(), r.notifyComponentUpdate(), r.sendInspectorTree(f), r.sendInspectorState(f);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((c, a) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: a.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: c },
          groupId: a.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((c, a) => {
      const l = {
        guard: pe("beforeEach"),
        from: re(a, "Current Location during this navigation"),
        to: re(c, "Target location")
      };
      Object.defineProperty(c.meta, "__navigationId", {
        value: i++
      }), r.addTimelineEvent({
        layerId: s,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: c.fullPath,
          data: l,
          groupId: c.meta.__navigationId
        }
      });
    }), t.afterEach((c, a, l) => {
      const h = {
        guard: pe("afterEach")
      };
      l ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: l ? l.message : "",
          tooltip: "Navigation Failure",
          value: l
        }
      }, h.status = pe("❌")) : h.status = pe("✅"), h.from = re(a, "Current Location during this navigation"), h.to = re(c, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: c.fullPath,
          time: r.now(),
          data: h,
          logType: l ? "warning" : "default",
          groupId: c.meta.__navigationId
        }
      });
    });
    const f = "router-inspector:" + o;
    r.addInspector({
      id: f,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!p)
        return;
      const c = p;
      let a = n.getRoutes().filter((l) => !l.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !l.parent.record.components);
      a.forEach(Ut), c.filter && (a = a.filter((l) => (
        // save matches state based on the payload
        $e(l, c.filter.toLowerCase())
      ))), a.forEach((l) => Gt(l, t.currentRoute.value)), c.rootNodes = a.map(Mt);
    }
    let p;
    r.on.getInspectorTree((c) => {
      p = c, c.app === e && c.inspectorId === f && u();
    }), r.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === f) {
        const l = n.getRoutes().find((h) => h.record.__vd_id === c.nodeId);
        l && (c.state = {
          options: Mo(l)
        });
      }
    }), r.sendInspectorTree(f), r.sendInspectorState(f);
  });
}
function Lo(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Mo(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${Lo(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Tt = 15485081, $t = 2450411, jt = 8702998, Go = 2282478, Lt = 16486972, Uo = 6710886, Bo = 16704226, Ho = 12131356;
function Mt(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Go
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Lt
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Tt
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: jt
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: $t
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Uo
  });
  let o = n.__vd_id;
  return o == null && (o = String(Ko++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Mt)
  };
}
let Ko = 0;
const Qo = /^\/(.*)\/([a-z]*)$/;
function Gt(e, t) {
  const n = t.matched.length && q(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => q(o, e.record))), e.children.forEach((o) => Gt(o, t));
}
function Ut(e) {
  e.__vd_match = !1, e.children.forEach(Ut);
}
function $e(e, t) {
  const n = String(e.re).match(Qo);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => $e(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = ee(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => $e(i, t));
}
function qo(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Wo(e) {
  const t = vo(e.routes, e), n = e.parseQuery || ko, o = e.stringifyQuery || ut, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = oe(), i = oe(), f = oe(), u = nn(H);
  let p = H;
  U && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Re.bind(null, (d) => "" + d), a = Re.bind(null, Bn), l = (
    // @ts-expect-error: intentionally avoid the type check
    Re.bind(null, ee)
  );
  function h(d, g) {
    let m, v;
    return At(d) ? (m = t.getRecordMatcher(d), process.env.NODE_ENV !== "production" && !m && E(`Parent route "${String(d)}" not found when adding child route`, g), v = g) : v = d, t.addRoute(v, m);
  }
  function y(d) {
    const g = t.getRecordMatcher(d);
    g ? t.removeRoute(g) : process.env.NODE_ENV !== "production" && E(`Cannot remove non-existent route "${String(d)}"`);
  }
  function _() {
    return t.getRoutes().map((d) => d.record);
  }
  function P(d) {
    return !!t.getRecordMatcher(d);
  }
  function S(d, g) {
    if (g = R({}, g || u.value), typeof d == "string") {
      const b = Pe(n, d, g.path), C = t.resolve({ path: b.path }, g), W = r.createHref(b.fullPath);
      return process.env.NODE_ENV !== "production" && (W.startsWith("//") ? E(`Location "${d}" resolved to "${W}". A resolved location cannot start with multiple slashes.`) : C.matched.length || E(`No match found for location with path "${d}"`)), R(b, C, {
        params: l(C.params),
        hash: ee(b.hash),
        redirectedFrom: void 0,
        href: W
      });
    }
    if (process.env.NODE_ENV !== "production" && !he(d))
      return E(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, d), S({});
    let m;
    if (d.path != null)
      process.env.NODE_ENV !== "production" && "params" in d && !("name" in d) && // @ts-expect-error: the type is never
      Object.keys(d.params).length && E(`Path "${d.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), m = R({}, d, {
        path: Pe(n, d.path, g.path).path
      });
    else {
      const b = R({}, d.params);
      for (const C in b)
        b[C] == null && delete b[C];
      m = R({}, d, {
        params: a(b)
      }), g.params = a(g.params);
    }
    const v = t.resolve(m, g), k = d.hash || "";
    process.env.NODE_ENV !== "production" && k && !k.startsWith("#") && E(`A \`hash\` should always start with the character "#". Replace "${k}" with "#${k}".`), v.params = c(l(v.params));
    const x = Qn(o, R({}, d, {
      hash: Mn(k),
      path: v.path
    })), w = r.createHref(x);
    return process.env.NODE_ENV !== "production" && (w.startsWith("//") ? E(`Location "${d}" resolved to "${w}". A resolved location cannot start with multiple slashes.`) : v.matched.length || E(`No match found for location with path "${d.path != null ? d.path : d}"`)), R({
      fullPath: x,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: k,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === ut ? Ro(d.query) : d.query || {}
      )
    }, v, {
      redirectedFrom: void 0,
      href: w
    });
  }
  function O(d) {
    return typeof d == "string" ? Pe(n, d, u.value.path) : R({}, d);
  }
  function N(d, g) {
    if (p !== d)
      return te(8, {
        from: g,
        to: d
      });
  }
  function V(d) {
    return T(d);
  }
  function M(d) {
    return V(R(O(d), { replace: !0 }));
  }
  function B(d) {
    const g = d.matched[d.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: m } = g;
      let v = typeof m == "function" ? m(d) : m;
      if (typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = O(v) : (
        // force empty params
        { path: v }
      ), v.params = {}), process.env.NODE_ENV !== "production" && v.path == null && !("name" in v))
        throw E(`Invalid redirect found:
${JSON.stringify(v, null, 2)}
 when navigating to "${d.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return R({
        query: d.query,
        hash: d.hash,
        // avoid transferring params if the redirect has a path
        params: v.path != null ? {} : d.params
      }, v);
    }
  }
  function T(d, g) {
    const m = p = S(d), v = u.value, k = d.state, x = d.force, w = d.replace === !0, b = B(m);
    if (b)
      return T(
        R(O(b), {
          state: typeof b == "object" ? R({}, k, b.state) : k,
          force: x,
          replace: w
        }),
        // keep original redirectedFrom if it exists
        g || m
      );
    const C = m;
    C.redirectedFrom = g;
    let W;
    return !x && Xe(o, v, m) && (W = te(16, { to: C, from: v }), Fe(
      v,
      v,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (W ? Promise.resolve(W) : Qe(C, v)).catch((A) => G(A) ? (
      // navigation redirects still mark the router as ready
      G(
        A,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? A : we(A)
    ) : (
      // reject any unknown error
      be(A, C, v)
    )).then((A) => {
      if (A) {
        if (G(
          A,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Xe(o, S(A.to), C) && // and we have done it a couple of times
          g && // @ts-expect-error: added only in dev
          (g._count = g._count ? (
            // @ts-expect-error
            g._count + 1
          ) : 1) > 30 ? (E(`Detected a possibly infinite redirection in a navigation guard when going from "${v.fullPath}" to "${C.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : T(
            // keep options
            R({
              // preserve an existing replacement but allow the redirect to override it
              replace: w
            }, O(A.to), {
              state: typeof A.to == "object" ? R({}, k, A.to.state) : k,
              force: x
            }),
            // preserve the original redirectedFrom if any
            g || C
          );
      } else
        A = We(C, v, !0, w, k);
      return qe(C, v, A), A;
    });
  }
  function Zt(d, g) {
    const m = N(d, g);
    return m ? Promise.reject(m) : Promise.resolve();
  }
  function _e(d) {
    const g = de.values().next().value;
    return g && typeof g.runWithContext == "function" ? g.runWithContext(d) : d();
  }
  function Qe(d, g) {
    let m;
    const [v, k, x] = zo(d, g);
    m = Se(v.reverse(), "beforeRouteLeave", d, g);
    for (const b of v)
      b.leaveGuards.forEach((C) => {
        m.push(K(C, d, g));
      });
    const w = Zt.bind(null, d, g);
    return m.push(w), J(m).then(() => {
      m = [];
      for (const b of s.list())
        m.push(K(b, d, g));
      return m.push(w), J(m);
    }).then(() => {
      m = Se(k, "beforeRouteUpdate", d, g);
      for (const b of k)
        b.updateGuards.forEach((C) => {
          m.push(K(C, d, g));
        });
      return m.push(w), J(m);
    }).then(() => {
      m = [];
      for (const b of x)
        if (b.beforeEnter)
          if (I(b.beforeEnter))
            for (const C of b.beforeEnter)
              m.push(K(C, d, g));
          else
            m.push(K(b.beforeEnter, d, g));
      return m.push(w), J(m);
    }).then(() => (d.matched.forEach((b) => b.enterCallbacks = {}), m = Se(x, "beforeRouteEnter", d, g, _e), m.push(w), J(m))).then(() => {
      m = [];
      for (const b of i.list())
        m.push(K(b, d, g));
      return m.push(w), J(m);
    }).catch((b) => G(
      b,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? b : Promise.reject(b));
  }
  function qe(d, g, m) {
    f.list().forEach((v) => _e(() => v(d, g, m)));
  }
  function We(d, g, m, v, k) {
    const x = N(d, g);
    if (x)
      return x;
    const w = g === H, b = U ? history.state : {};
    m && (v || w ? r.replace(d.fullPath, R({
      scroll: w && b && b.scroll
    }, k)) : r.push(d.fullPath, k)), u.value = d, Fe(d, g, m, w), we();
  }
  let ne;
  function en() {
    ne || (ne = r.listen((d, g, m) => {
      if (!Je.listening)
        return;
      const v = S(d), k = B(v);
      if (k) {
        T(R(k, { replace: !0 }), v).catch(se);
        return;
      }
      p = v;
      const x = u.value;
      U && Zn(et(x.fullPath, m.delta), ve()), Qe(v, x).catch((w) => G(
        w,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? w : G(
        w,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (T(
        w.to,
        v
        // avoid an uncaught rejection, let push call triggerError
      ).then((b) => {
        G(
          b,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !m.delta && m.type === le.pop && r.go(-1, !1);
      }).catch(se), Promise.reject()) : (m.delta && r.go(-m.delta, !1), be(w, v, x))).then((w) => {
        w = w || We(
          // after navigation, all matched components are resolved
          v,
          x,
          !1
        ), w && (m.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !G(
          w,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-m.delta, !1) : m.type === le.pop && G(
          w,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), qe(v, x, w);
      }).catch(se);
    }));
  }
  let Ee = oe(), ze = oe(), fe;
  function be(d, g, m) {
    we(d);
    const v = ze.list();
    return v.length ? v.forEach((k) => k(d, g, m)) : (process.env.NODE_ENV !== "production" && E("uncaught error during route navigation:"), console.error(d)), Promise.reject(d);
  }
  function tn() {
    return fe && u.value !== H ? Promise.resolve() : new Promise((d, g) => {
      Ee.add([d, g]);
    });
  }
  function we(d) {
    return fe || (fe = !d, en(), Ee.list().forEach(([g, m]) => d ? m(d) : g()), Ee.reset()), d;
  }
  function Fe(d, g, m, v) {
    const { scrollBehavior: k } = e;
    if (!U || !k)
      return Promise.resolve();
    const x = !m && eo(et(d.fullPath, 0)) || (v || !m) && history.state && history.state.scroll || null;
    return rn().then(() => k(d, g, x)).then((w) => w && Xn(w)).catch((w) => be(w, d, g));
  }
  const Oe = (d) => r.go(d);
  let Ne;
  const de = /* @__PURE__ */ new Set(), Je = {
    currentRoute: u,
    listening: !0,
    addRoute: h,
    removeRoute: y,
    clearRoutes: t.clearRoutes,
    hasRoute: P,
    getRoutes: _,
    resolve: S,
    options: e,
    push: V,
    replace: M,
    go: Oe,
    back: () => Oe(-1),
    forward: () => Oe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: f.add,
    onError: ze.add,
    isReady: tn,
    install(d) {
      const g = this;
      d.component("RouterLink", xo), d.component("RouterView", Io), d.config.globalProperties.$router = g, Object.defineProperty(d.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Z(u)
      }), U && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ne && u.value === H && (Ne = !0, V(r.location).catch((k) => {
        process.env.NODE_ENV !== "production" && E("Unexpected error when starting the router:", k);
      }));
      const m = {};
      for (const k in H)
        Object.defineProperty(m, k, {
          get: () => u.value[k],
          enumerable: !0
        });
      d.provide(Ue, g), d.provide(It, on(m)), d.provide(Te, u);
      const v = d.unmount;
      de.add(d), d.unmount = function() {
        de.delete(d), de.size < 1 && (p = H, ne && ne(), ne = null, u.value = H, Ne = !1, fe = !1), v();
      }, process.env.NODE_ENV !== "production" && U && jo(d, g, t);
    }
  };
  function J(d) {
    return d.reduce((g, m) => g.then(() => _e(m)), Promise.resolve());
  }
  return Je;
}
function zo(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const f = t.matched[i];
    f && (e.matched.find((p) => q(p, f)) ? o.push(f) : n.push(f));
    const u = e.matched[i];
    u && (t.matched.find((p) => q(p, u)) || r.push(u));
  }
  return [n, o, r];
}
const ce = class ce {
};
ce.routerHistory = ro(), ce.routerRoutes = [], ce.beforeEachRouteCallback = void 0;
let Q = ce;
function Fo() {
  return Bt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Bt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Jo = typeof Proxy == "function", Yo = "devtools-plugin:setup", Xo = "plugin:settings:set";
let ie, je;
function Zo() {
  var e;
  return ie !== void 0 || (typeof window < "u" && window.performance ? (ie = !0, je = window.performance) : typeof globalThis < "u" && !((e = globalThis.perf_hooks) === null || e === void 0) && e.performance ? (ie = !0, je = globalThis.perf_hooks.performance) : ie = !1), ie;
}
function er() {
  return Zo() ? je.now() : Date.now();
}
class tr {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const f = t.settings[i];
        o[i] = f.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), f = JSON.parse(i);
      Object.assign(s, f);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return er();
      }
    }, n && n.on(Xo, (i, f) => {
      i === this.plugin.id && this.fallbacks.setSettings(f);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, f) => this.target ? this.target.on[f] : (...u) => {
        this.onQueue.push({
          method: f,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, f) => this.target ? this.target[f] : f === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(f) ? (...u) => (this.targetQueue.push({
        method: f,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[f](...u)) : (...u) => new Promise((p) => {
        this.targetQueue.push({
          method: f,
          args: u,
          resolve: p
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function nr(e, t) {
  const n = e, o = Bt(), r = Fo(), s = Jo && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(Yo, e, t);
  else {
    const i = s ? new tr(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var or = "store";
function z(e, t) {
  Object.keys(e).forEach(function(n) {
    return t(e[n], n);
  });
}
function rr(e) {
  return e !== null && typeof e == "object";
}
function ir(e) {
  return e && typeof e.then == "function";
}
function j(e, t) {
  if (!e)
    throw new Error("[vuex] " + t);
}
function sr(e, t) {
  return function() {
    return e(t);
  };
}
function Ht(e, t, n) {
  return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
    var o = t.indexOf(e);
    o > -1 && t.splice(o, 1);
  };
}
function Kt(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = e.state;
  ye(e, n, [], e._modules.root, !0), Be(e, n, t);
}
function Be(e, t, n) {
  var o = e._state, r = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, i = {}, f = {}, u = cn(!0);
  u.run(function() {
    z(s, function(p, c) {
      i[c] = sr(p, e), f[c] = $(function() {
        return i[c]();
      }), Object.defineProperty(e.getters, c, {
        get: function() {
          return f[c].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = Me({
    data: t
  }), e._scope = u, e.strict && fr(e), o && n && e._withCommit(function() {
    o.data = null;
  }), r && r.stop();
}
function ye(e, t, n, o, r) {
  var s = !n.length, i = e._modules.getNamespace(n);
  if (o.namespaced && (e._modulesNamespaceMap[i] && process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !s && !r) {
    var f = He(t, n.slice(0, -1)), u = n[n.length - 1];
    e._withCommit(function() {
      process.env.NODE_ENV !== "production" && u in f && console.warn(
        '[vuex] state field "' + u + '" was overridden by a module with the same name at "' + n.join(".") + '"'
      ), f[u] = o.state;
    });
  }
  var p = o.context = ar(e, i, n);
  o.forEachMutation(function(c, a) {
    var l = i + a;
    cr(e, l, c, p);
  }), o.forEachAction(function(c, a) {
    var l = c.root ? a : i + a, h = c.handler || c;
    ur(e, l, h, p);
  }), o.forEachGetter(function(c, a) {
    var l = i + a;
    lr(e, l, c, p);
  }), o.forEachChild(function(c, a) {
    ye(e, t, n.concat(a), c, r);
  });
}
function ar(e, t, n) {
  var o = t === "", r = {
    dispatch: o ? e.dispatch : function(s, i, f) {
      var u = me(s, i, f), p = u.payload, c = u.options, a = u.type;
      if ((!c || !c.root) && (a = t + a, process.env.NODE_ENV !== "production" && !e._actions[a])) {
        console.error("[vuex] unknown local action type: " + u.type + ", global type: " + a);
        return;
      }
      return e.dispatch(a, p);
    },
    commit: o ? e.commit : function(s, i, f) {
      var u = me(s, i, f), p = u.payload, c = u.options, a = u.type;
      if ((!c || !c.root) && (a = t + a, process.env.NODE_ENV !== "production" && !e._mutations[a])) {
        console.error("[vuex] unknown local mutation type: " + u.type + ", global type: " + a);
        return;
      }
      e.commit(a, p, c);
    }
  };
  return Object.defineProperties(r, {
    getters: {
      get: o ? function() {
        return e.getters;
      } : function() {
        return Qt(e, t);
      }
    },
    state: {
      get: function() {
        return He(e.state, n);
      }
    }
  }), r;
}
function Qt(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {}, o = t.length;
    Object.keys(e.getters).forEach(function(r) {
      if (r.slice(0, o) === t) {
        var s = r.slice(o);
        Object.defineProperty(n, s, {
          get: function() {
            return e.getters[r];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = n;
  }
  return e._makeLocalGettersCache[t];
}
function cr(e, t, n, o) {
  var r = e._mutations[t] || (e._mutations[t] = []);
  r.push(function(s) {
    n.call(e, o.state, s);
  });
}
function ur(e, t, n, o) {
  var r = e._actions[t] || (e._actions[t] = []);
  r.push(function(s) {
    var i = n.call(e, {
      dispatch: o.dispatch,
      commit: o.commit,
      getters: o.getters,
      state: o.state,
      rootGetters: e.getters,
      rootState: e.state
    }, s);
    return ir(i) || (i = Promise.resolve(i)), e._devtoolHook ? i.catch(function(f) {
      throw e._devtoolHook.emit("vuex:error", f), f;
    }) : i;
  });
}
function lr(e, t, n, o) {
  if (e._wrappedGetters[t]) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] duplicate getter key: " + t);
    return;
  }
  e._wrappedGetters[t] = function(r) {
    return n(
      o.state,
      // local state
      o.getters,
      // local getters
      r.state,
      // root state
      r.getters
      // root getters
    );
  };
}
function fr(e) {
  ge(function() {
    return e._state.data;
  }, function() {
    process.env.NODE_ENV !== "production" && j(e._committing, "do not mutate vuex store state outside mutation handlers.");
  }, { deep: !0, flush: "sync" });
}
function He(e, t) {
  return t.reduce(function(n, o) {
    return n[o];
  }, e);
}
function me(e, t, n) {
  return rr(e) && e.type && (n = t, t = e, e = e.type), process.env.NODE_ENV !== "production" && j(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
}
var dr = "vuex bindings", mt = "vuex:mutations", Ce = "vuex:actions", X = "vuex", pr = 0;
function hr(e, t) {
  nr(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [dr]
    },
    function(n) {
      n.addTimelineLayer({
        id: mt,
        label: "Vuex Mutations",
        color: gt
      }), n.addTimelineLayer({
        id: Ce,
        label: "Vuex Actions",
        color: gt
      }), n.addInspector({
        id: X,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), n.on.getInspectorTree(function(o) {
        if (o.app === e && o.inspectorId === X)
          if (o.filter) {
            var r = [];
            Ft(r, t._modules.root, o.filter, ""), o.rootNodes = r;
          } else
            o.rootNodes = [
              zt(t._modules.root, "")
            ];
      }), n.on.getInspectorState(function(o) {
        if (o.app === e && o.inspectorId === X) {
          var r = o.nodeId;
          Qt(t, r), o.state = vr(
            _r(t._modules, r),
            r === "root" ? t.getters : t._makeLocalGettersCache,
            r
          );
        }
      }), n.on.editInspectorState(function(o) {
        if (o.app === e && o.inspectorId === X) {
          var r = o.nodeId, s = o.path;
          r !== "root" && (s = r.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            o.set(t._state.data, s, o.state.value);
          });
        }
      }), t.subscribe(function(o, r) {
        var s = {};
        o.payload && (s.payload = o.payload), s.state = r, n.notifyComponentUpdate(), n.sendInspectorTree(X), n.sendInspectorState(X), n.addTimelineEvent({
          layerId: mt,
          event: {
            time: Date.now(),
            title: o.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(o, r) {
          var s = {};
          o.payload && (s.payload = o.payload), o._id = pr++, o._time = Date.now(), s.state = r, n.addTimelineEvent({
            layerId: Ce,
            event: {
              time: o._time,
              title: o.type,
              groupId: o._id,
              subtitle: "start",
              data: s
            }
          });
        },
        after: function(o, r) {
          var s = {}, i = Date.now() - o._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: i + "ms",
              tooltip: "Action duration",
              value: i
            }
          }, o.payload && (s.payload = o.payload), s.state = r, n.addTimelineEvent({
            layerId: Ce,
            event: {
              time: Date.now(),
              title: o.type,
              groupId: o._id,
              subtitle: "end",
              data: s
            }
          });
        }
      });
    }
  );
}
var gt = 8702998, mr = 6710886, gr = 16777215, qt = {
  label: "namespaced",
  textColor: gr,
  backgroundColor: mr
};
function Wt(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function zt(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: Wt(t),
    tags: e.namespaced ? [qt] : [],
    children: Object.keys(e._children).map(
      function(n) {
        return zt(
          e._children[n],
          t + n + "/"
        );
      }
    )
  };
}
function Ft(e, t, n, o) {
  o.includes(n) && e.push({
    id: o || "root",
    label: o.endsWith("/") ? o.slice(0, o.length - 1) : o || "Root",
    tags: t.namespaced ? [qt] : []
  }), Object.keys(t._children).forEach(function(r) {
    Ft(e, t._children[r], n, o + r + "/");
  });
}
function vr(e, t, n) {
  t = n === "root" ? t : t[n];
  var o = Object.keys(t), r = {
    state: Object.keys(e.state).map(function(i) {
      return {
        key: i,
        editable: !0,
        value: e.state[i]
      };
    })
  };
  if (o.length) {
    var s = yr(t);
    r.getters = Object.keys(s).map(function(i) {
      return {
        key: i.endsWith("/") ? Wt(i) : i,
        editable: !1,
        value: Le(function() {
          return s[i];
        })
      };
    });
  }
  return r;
}
function yr(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var o = n.split("/");
    if (o.length > 1) {
      var r = t, s = o.pop();
      o.forEach(function(i) {
        r[i] || (r[i] = {
          _custom: {
            value: {},
            display: i,
            tooltip: "Module",
            abstract: !0
          }
        }), r = r[i]._custom.value;
      }), r[s] = Le(function() {
        return e[n];
      });
    } else
      t[n] = Le(function() {
        return e[n];
      });
  }), t;
}
function _r(e, t) {
  var n = t.split("/").filter(function(o) {
    return o;
  });
  return n.reduce(
    function(o, r, s) {
      var i = o[r];
      if (!i)
        throw new Error('Missing module "' + r + '" for path "' + t + '".');
      return s === n.length - 1 ? i : i._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Le(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var L = function(e, t) {
  this.runtime = t, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = e;
  var n = e.state;
  this.state = (typeof n == "function" ? n() : n) || {};
}, Jt = { namespaced: { configurable: !0 } };
Jt.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
L.prototype.addChild = function(e, t) {
  this._children[e] = t;
};
L.prototype.removeChild = function(e) {
  delete this._children[e];
};
L.prototype.getChild = function(e) {
  return this._children[e];
};
L.prototype.hasChild = function(e) {
  return e in this._children;
};
L.prototype.update = function(e) {
  this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters);
};
L.prototype.forEachChild = function(e) {
  z(this._children, e);
};
L.prototype.forEachGetter = function(e) {
  this._rawModule.getters && z(this._rawModule.getters, e);
};
L.prototype.forEachAction = function(e) {
  this._rawModule.actions && z(this._rawModule.actions, e);
};
L.prototype.forEachMutation = function(e) {
  this._rawModule.mutations && z(this._rawModule.mutations, e);
};
Object.defineProperties(L.prototype, Jt);
var F = function(e) {
  this.register([], e, !1);
};
F.prototype.get = function(e) {
  return e.reduce(function(t, n) {
    return t.getChild(n);
  }, this.root);
};
F.prototype.getNamespace = function(e) {
  var t = this.root;
  return e.reduce(function(n, o) {
    return t = t.getChild(o), n + (t.namespaced ? o + "/" : "");
  }, "");
};
F.prototype.update = function(e) {
  Yt([], this.root, e);
};
F.prototype.register = function(e, t, n) {
  var o = this;
  n === void 0 && (n = !0), process.env.NODE_ENV !== "production" && Xt(e, t);
  var r = new L(t, n);
  if (e.length === 0)
    this.root = r;
  else {
    var s = this.get(e.slice(0, -1));
    s.addChild(e[e.length - 1], r);
  }
  t.modules && z(t.modules, function(i, f) {
    o.register(e.concat(f), i, n);
  });
};
F.prototype.unregister = function(e) {
  var t = this.get(e.slice(0, -1)), n = e[e.length - 1], o = t.getChild(n);
  if (!o) {
    process.env.NODE_ENV !== "production" && console.warn(
      "[vuex] trying to unregister module '" + n + "', which is not registered"
    );
    return;
  }
  o.runtime && t.removeChild(n);
};
F.prototype.isRegistered = function(e) {
  var t = this.get(e.slice(0, -1)), n = e[e.length - 1];
  return t ? t.hasChild(n) : !1;
};
function Yt(e, t, n) {
  if (process.env.NODE_ENV !== "production" && Xt(e, n), t.update(n), n.modules)
    for (var o in n.modules) {
      if (!t.getChild(o)) {
        process.env.NODE_ENV !== "production" && console.warn(
          "[vuex] trying to add a new module '" + o + "' on hot reloading, manual reload is needed"
        );
        return;
      }
      Yt(
        e.concat(o),
        t.getChild(o),
        n.modules[o]
      );
    }
}
var vt = {
  assert: function(e) {
    return typeof e == "function";
  },
  expected: "function"
}, Er = {
  assert: function(e) {
    return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
  },
  expected: 'function or object with "handler" function'
}, yt = {
  getters: vt,
  mutations: vt,
  actions: Er
};
function Xt(e, t) {
  Object.keys(yt).forEach(function(n) {
    if (t[n]) {
      var o = yt[n];
      z(t[n], function(r, s) {
        j(
          o.assert(r),
          br(e, n, s, r, o.expected)
        );
      });
    }
  });
}
function br(e, t, n, o, r) {
  var s = t + " should be " + r + ' but "' + t + "." + n + '"';
  return e.length > 0 && (s += ' in module "' + e.join(".") + '"'), s += " is " + JSON.stringify(o) + ".", s;
}
function wr(e) {
  return new D(e);
}
var D = function e(t) {
  var n = this;
  t === void 0 && (t = {}), process.env.NODE_ENV !== "production" && (j(typeof Promise < "u", "vuex requires a Promise polyfill in this browser."), j(this instanceof e, "store must be called with the new operator."));
  var o = t.plugins;
  o === void 0 && (o = []);
  var r = t.strict;
  r === void 0 && (r = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new F(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var i = this, f = this, u = f.dispatch, p = f.commit;
  this.dispatch = function(a, l) {
    return u.call(i, a, l);
  }, this.commit = function(a, l, h) {
    return p.call(i, a, l, h);
  }, this.strict = r;
  var c = this._modules.root.state;
  ye(this, c, [], this._modules.root), Be(this, c), o.forEach(function(a) {
    return a(n);
  });
}, Ke = { state: { configurable: !0 } };
D.prototype.install = function(e, t) {
  e.provide(t || or, this), e.config.globalProperties.$store = this;
  var n = this._devtools !== void 0 ? this._devtools : process.env.NODE_ENV !== "production" || !1;
  n && hr(e, this);
};
Ke.state.get = function() {
  return this._state.data;
};
Ke.state.set = function(e) {
  process.env.NODE_ENV !== "production" && j(!1, "use store.replaceState() to explicit replace store state.");
};
D.prototype.commit = function(e, t, n) {
  var o = this, r = me(e, t, n), s = r.type, i = r.payload, f = r.options, u = { type: s, payload: i }, p = this._mutations[s];
  if (!p) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown mutation type: " + s);
    return;
  }
  this._withCommit(function() {
    p.forEach(function(c) {
      c(i);
    });
  }), this._subscribers.slice().forEach(function(c) {
    return c(u, o.state);
  }), process.env.NODE_ENV !== "production" && f && f.silent && console.warn(
    "[vuex] mutation type: " + s + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
  );
};
D.prototype.dispatch = function(e, t) {
  var n = this, o = me(e, t), r = o.type, s = o.payload, i = { type: r, payload: s }, f = this._actions[r];
  if (!f) {
    process.env.NODE_ENV !== "production" && console.error("[vuex] unknown action type: " + r);
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(p) {
      return p.before;
    }).forEach(function(p) {
      return p.before(i, n.state);
    });
  } catch (p) {
    process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in before action subscribers: "), console.error(p));
  }
  var u = f.length > 1 ? Promise.all(f.map(function(p) {
    return p(s);
  })) : f[0](s);
  return new Promise(function(p, c) {
    u.then(function(a) {
      try {
        n._actionSubscribers.filter(function(l) {
          return l.after;
        }).forEach(function(l) {
          return l.after(i, n.state);
        });
      } catch (l) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in after action subscribers: "), console.error(l));
      }
      p(a);
    }, function(a) {
      try {
        n._actionSubscribers.filter(function(l) {
          return l.error;
        }).forEach(function(l) {
          return l.error(i, n.state, a);
        });
      } catch (l) {
        process.env.NODE_ENV !== "production" && (console.warn("[vuex] error in error action subscribers: "), console.error(l));
      }
      c(a);
    });
  });
};
D.prototype.subscribe = function(e, t) {
  return Ht(e, this._subscribers, t);
};
D.prototype.subscribeAction = function(e, t) {
  var n = typeof e == "function" ? { before: e } : e;
  return Ht(n, this._actionSubscribers, t);
};
D.prototype.watch = function(e, t, n) {
  var o = this;
  return process.env.NODE_ENV !== "production" && j(typeof e == "function", "store.watch only accepts a function."), ge(function() {
    return e(o.state, o.getters);
  }, t, Object.assign({}, n));
};
D.prototype.replaceState = function(e) {
  var t = this;
  this._withCommit(function() {
    t._state.data = e;
  });
};
D.prototype.registerModule = function(e, t, n) {
  n === void 0 && (n = {}), typeof e == "string" && (e = [e]), process.env.NODE_ENV !== "production" && (j(Array.isArray(e), "module path must be a string or an Array."), j(e.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(e, t), ye(this, this.state, e, this._modules.get(e), n.preserveState), Be(this, this.state);
};
D.prototype.unregisterModule = function(e) {
  var t = this;
  typeof e == "string" && (e = [e]), process.env.NODE_ENV !== "production" && j(Array.isArray(e), "module path must be a string or an Array."), this._modules.unregister(e), this._withCommit(function() {
    var n = He(t.state, e.slice(0, -1));
    delete n[e[e.length - 1]];
  }), Kt(this);
};
D.prototype.hasModule = function(e) {
  return typeof e == "string" && (e = [e]), process.env.NODE_ENV !== "production" && j(Array.isArray(e), "module path must be a string or an Array."), this._modules.isRegistered(e);
};
D.prototype.hotUpdate = function(e) {
  this._modules.update(e), Kt(this, !0);
};
D.prototype._withCommit = function(e) {
  var t = this._committing;
  this._committing = !0, e(), this._committing = t;
};
Object.defineProperties(D.prototype, Ke);
const Or = Me({
  modules: {}
}), Nr = () => wr(Or), jr = (e) => {
  const t = un(e);
  t.component("lkt-anchor") === void 0 && t.use(hn), t.component("lkt-button") === void 0 && t.use(pn), t.component("lkt-field") === void 0 && t.use(fn), t.component("lkt-item-crud") === void 0 && t.use(yn), t.component("lkt-loader") === void 0 && t.use(mn), t.component("lkt-modal") === void 0 && t.use(gn), t.component("lkt-modal-confirm") === void 0 && t.use(vn), t.component("lkt-paginator") === void 0 && t.use(En), t.component("lkt-table") === void 0 && t.use(dn), t.component("lkt-tag") === void 0 && t.use(_n), t.component("lkt-tooltip") === void 0 && t.use(ln);
  const n = Wo({ history: Q.routerHistory, routes: [] });
  return Q.routerRoutes.forEach((o) => n.addRoute(o)), typeof Q.beforeEachRouteCallback == "function" && n.beforeEach(Q.beforeEachRouteCallback), t.use(n), t.use(Nr()), t;
}, Lr = (e) => {
  Q.routerRoutes.push(e);
}, Mr = (e) => {
  Q.beforeEachRouteCallback = e;
};
export {
  Lr as addAppRoute,
  jr as createLktApp,
  Mr as setBeforeEachRouteCallback
};
