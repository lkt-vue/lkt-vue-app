import D from "lkt-tooltip";
import N from "lkt-field";
import F from "lkt-table";
import j from "lkt-button";
import K from "lkt-anchor";
import O from "lkt-loader";
import U, { setCanvas as W } from "lkt-modal";
import q from "lkt-item-crud";
import G from "lkt-tag";
import { getVuexStore as J } from "lkt-vuex-tools";
import Q from "lkt-paginator";
import X from "lkt-polymorphic-element";
import Y from "lkt-charts";
import Z from "lkt-icon";
import tt from "lkt-box";
import et from "lkt-menu";
import ot from "lkt-http-info";
import nt from "lkt-step-process";
import it from "lkt-accordion";
import at from "lkt-progress";
import st from "lkt-image";
import rt, { setToastCanvas as lt } from "lkt-toast";
import ut from "lkt-header";
import mt from "lkt-form";
import dt from "lkt-vue-admin";
import ct from "lkt-web-page";
import kt from "lkt-counter";
import ft from "lkt-dot";
import pt from "lkt-banner-box";
import vt from "lkt-tabs";
import ht from "lkt-calendar";
import { ref as l, defineComponent as A, watch as M, resolveComponent as k, createElementBlock as g, openBlock as s, createBlock as c, mergeProps as z, unref as p, createCommentVNode as R, createElementVNode as b, createVNode as y, normalizeProps as Mt, guardReactiveProps as Lt, withCtx as E, computed as H, onMounted as Bt, normalizeClass as _t, resolveDynamicComponent as yt, nextTick as At } from "vue";
import { AppSize as gt, ButtonType as bt, MenuController as w } from "lkt-vue-kernel";
import { useRoute as V } from "vue-router";
import { httpCall as x } from "lkt-http-client";
import { setI18n as Ht } from "lkt-i18n";
const a = class a {
};
a.lktAppSize = l(gt.MD), a.lktAdminEnabled = l(!0), a.lktAppLoading = l(!0), a.lktAppReady = l(!1), a.lktAppSetup = l({}), a.lktMainMenu = void 0, a.lktBottomBar = void 0, a.hasMainHeader = !0, a.hasMainMenu = !0, a.hasBottomBar = !0, a.setup = void 0;
let e = a;
const Rt = /* @__PURE__ */ A({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = V(), d = l(!1), f = () => {
      var r, i;
      return typeof ((r = e.lktBottomBar) == null ? void 0 : r.modelValue) < "u" && ((i = e.lktBottomBar.modelValue) == null ? void 0 : i.length) > 0 && (e.hasBottomBar === !0 || typeof e.hasBottomBar == "function" && e.hasBottomBar({ route: o }));
    };
    return M(o, () => {
      d.value = f();
    }, { flush: "pre", immediate: !0, deep: !0 }), (r, i) => {
      const v = k("lkt-menu"), h = k("lkt-loader");
      return s(), g("div", null, [
        t.loading ? (s(), c(h, { key: 1 })) : (s(), c(v, z({ key: 0 }, p(e).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), Vt = {
  key: 0,
  class: "main-header"
}, Ct = { class: "main-header-intro" }, xt = /* @__PURE__ */ A({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(t, { emit: o }) {
    const d = t, f = o, r = V(), i = l(!1), v = l(d.hasMainHeader);
    M(() => d.hasMainHeader, (L) => v.value = L), M(v, (L) => f("update:hasMainHeader", L));
    const h = () => e.hasMainHeader === !0 || typeof e.hasMainHeader == "function" && e.hasMainHeader({
      route: r
    });
    return M(r, () => {
      i.value = h(), v.value = i.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (L, _) => {
      const B = k("lkt-button");
      return i.value ? (s(), g("div", Vt, [
        b("div", Ct, [
          y(B, Mt(Lt({
            type: p(bt).Menu,
            menuKey: "lkt-main-menu"
          })), {
            default: E(() => [..._[0] || (_[0] = [
              b("div", { class: "menu-btn" }, [
                b("div", { class: "menu-btn--icon" })
              ], -1)
            ])]),
            _: 1
          }, 16)
        ])
      ])) : R("", !0);
    };
  }
}), zt = /* @__PURE__ */ A({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = () => w.closeMenu("_");
    return (d, f) => {
      const r = k("lkt-menu"), i = k("lkt-loader");
      return s(), g("div", null, [
        t.loading ? (s(), c(i, { key: 1 })) : (s(), c(r, z({ key: 0 }, p(e).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), Et = (t) => {
  e.lktAppReady.value = t;
}, wt = () => e.lktAppReady, Pt = (t) => {
  e.lktAppLoading.value = t;
}, Tt = () => e.lktAppLoading, Me = /* @__PURE__ */ A({
  __name: "LktAppComponent",
  setup(t) {
    const o = wt(), d = Tt(), f = l(null), r = l(null), i = V(), v = l("en"), h = l(!1), L = async () => {
      var n, u;
      if ((n = e.setup) != null && n.i18nResource) {
        const m = await x(e.setup.i18nResource);
        Ht(m.data);
      }
      if ((u = e.setup) != null && u.setupResource) {
        const m = await x(e.setup.setupResource);
        e.lktAppSetup.value = m.data;
      }
      At(() => {
        Et(!0), Pt(!1);
      });
    }, _ = H(() => {
      let n = [];
      return w.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), B.value && n.push("has-bottom-bar"), h.value && n.push("has-main-header"), n.push(`route-is-${i.name}`), n.join(" ");
    });
    M(f, (n) => {
      W(f.value);
    }), M(r, (n) => {
      lt(r.value);
    }), Bt(async () => {
      await L();
    });
    const B = H(() => {
      var n, u, m;
      return e.lktBottomBar && typeof ((n = e.lktBottomBar) == null ? void 0 : n.modelValue) < "u" && ((m = (u = e.lktBottomBar) == null ? void 0 : u.modelValue) == null ? void 0 : m.length) > 0 && (e.hasBottomBar === !0 || typeof e.hasBottomBar == "function" && e.hasBottomBar({
        route: i
      }));
    }), C = H(() => {
      var n, u, m;
      return e.lktMainMenu && typeof ((n = e.lktMainMenu) == null ? void 0 : n.modelValue) < "u" && ((m = (u = e.lktMainMenu) == null ? void 0 : u.modelValue) == null ? void 0 : m.length) > 0 && (e.hasMainMenu === !0 || typeof e.hasMainMenu == "function" && e.hasMainMenu({
        route: i
      }));
    });
    return M(i, () => {
      C.value, B.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (n, u) => {
      const m = k("lkt-modal-canvas"), P = k("lkt-toast-canvas"), T = k("router-view"), I = k("lkt-loader");
      return s(), g("div", {
        class: _t(["main-content", _.value])
      }, [
        p(o) && !p(d) ? (s(), c(T, { key: 0 }, {
          default: E(({ Component: S }) => [
            y(xt, {
              hasMainHeader: h.value,
              "onUpdate:hasMainHeader": u[0] || (u[0] = ($) => h.value = $),
              lang: v.value,
              loading: p(d)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            C.value ? (s(), c(zt, {
              key: 0,
              loading: p(d)
            }, null, 8, ["loading"])) : R("", !0),
            (s(), c(yt(S))),
            B.value ? (s(), c(Rt, {
              key: 1,
              loading: p(d)
            }, null, 8, ["loading"])) : R("", !0),
            y(m, {
              ref_key: "modalCanvas",
              ref: f
            }, null, 512),
            y(P, {
              ref_key: "toastCanvas",
              ref: r
            }, null, 512)
          ]),
          _: 1
        })) : (s(), c(I, { key: 1 }))
      ], 2);
    };
  }
}), Le = {
  install: (t, o) => {
    o.mainMenu && (e.lktMainMenu = o.mainMenu), o.bottomBar && (e.lktBottomBar = o.bottomBar), o.hasMainHeader && (e.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (e.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (e.hasBottomBar = o.hasBottomBar), o.setup && (e.setup = o.setup), t.provide("lktAppSize", e.lktAppSize), t.provide("lktAdminEnabled", e.lktAdminEnabled), t.provide("lktAppLoading", e.lktAppLoading), t.provide("lktAppReady", e.lktAppReady), t.provide("lktAppSetup", e.lktAppSetup), t.use(J()), t.component("lkt-accordion") === void 0 && t.use(it), t.component("lkt-anchor") === void 0 && t.use(K), t.component("lkt-banner") === void 0 && t.use(pt), t.component("lkt-box") === void 0 && t.use(tt), t.component("lkt-button") === void 0 && t.use(j), t.component("lkt-calendar") === void 0 && t.use(ht), t.component("lkt-chart") === void 0 && t.use(Y), t.component("lkt-counter") === void 0 && t.use(kt), t.component("lkt-dot") === void 0 && t.use(ft), t.component("lkt-field") === void 0 && t.use(N), t.component("lkt-form") === void 0 && t.use(mt), t.component("lkt-header") === void 0 && t.use(ut), t.component("lkt-http-info") === void 0 && t.use(ot), t.component("lkt-icon") === void 0 && t.use(Z), t.component("lkt-image") === void 0 && t.use(st), t.component("lkt-item-crud") === void 0 && t.use(q), t.component("lkt-loader") === void 0 && t.use(O), t.component("lkt-menu") === void 0 && t.use(et), t.component("lkt-modal") === void 0 && t.use(U), t.component("lkt-paginator") === void 0 && t.use(Q), t.component("lkt-polymorphic-element") === void 0 && t.use(X), t.component("lkt-progress") === void 0 && t.use(at), t.component("lkt-step-process") === void 0 && t.use(nt), t.component("lkt-table") === void 0 && t.use(F), t.component("lkt-tabs") === void 0 && t.use(vt), t.component("lkt-tag") === void 0 && t.use(G), t.component("lkt-toast") === void 0 && t.use(rt), t.component("lkt-tooltip") === void 0 && t.use(D), t.component("lkt-vue-admin") === void 0 && t.use(dt), t.component("lkt-web-page") === void 0 && t.use(ct);
  }
}, Be = (t) => {
  e.lktAppSize.value = t;
}, _e = () => e.lktAppSize, ye = (t) => {
  e.lktAdminEnabled.value = t;
}, Ae = () => e.lktAdminEnabled, ge = () => e.lktAppSetup;
export {
  Me as LktAppComponent,
  Le as default,
  Ae as getLktAdminEnabled,
  ge as getLktAppSetup,
  _e as getLktAppSize,
  ye as setLktAdminEnabled,
  Be as setLktAppSize
};
