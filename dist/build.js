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
import { ref as r, defineComponent as y, watch as v, resolveComponent as d, createElementBlock as g, openBlock as a, createBlock as m, mergeProps as z, unref as k, createCommentVNode as R, createElementVNode as b, createVNode as A, normalizeProps as ht, guardReactiveProps as Mt, withCtx as E, computed as H, onMounted as Lt, normalizeClass as Bt, resolveDynamicComponent as _t, nextTick as At } from "vue";
import { AppSize as yt, ButtonType as gt, MenuController as w } from "lkt-vue-kernel";
import { useRoute as C } from "vue-router";
import { httpCall as x } from "lkt-http-client";
import { setI18n as bt } from "lkt-i18n";
const i = class i {
};
i.lktAppSize = r(yt.MD), i.lktAdminEnabled = r(!0), i.lktAppLoading = r(!0), i.lktAppReady = r(!1), i.lktAppSetup = r({}), i.lktMainMenu = void 0, i.lktBottomBar = void 0, i.hasMainHeader = !0, i.hasMainMenu = !0, i.hasBottomBar = !0, i.setup = void 0;
let e = i;
const Ht = /* @__PURE__ */ y({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = C(), u = r(!1), c = () => {
      var s;
      return e.lktBottomBar && ((s = e.lktBottomBar.modelValue) == null ? void 0 : s.length) > 0 && (e.hasBottomBar === !0 || typeof e.hasBottomBar == "function" && e.hasBottomBar({
        route: o
      }));
    };
    return v(o, () => {
      u.value = c();
    }, { flush: "pre", immediate: !0, deep: !0 }), (s, l) => {
      const f = d("lkt-menu"), p = d("lkt-loader");
      return a(), g("div", null, [
        t.loading ? (a(), m(p, { key: 1 })) : (a(), m(f, z({ key: 0 }, k(e).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), Rt = {
  key: 0,
  class: "main-header"
}, Ct = { class: "main-header-intro" }, Vt = /* @__PURE__ */ y({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(t, { emit: o }) {
    const u = t, c = o, s = C(), l = r(!1), f = r(u.hasMainHeader);
    v(() => u.hasMainHeader, (h) => f.value = h), v(f, (h) => c("update:hasMainHeader", h));
    const p = () => e.hasMainHeader === !0 || typeof e.hasMainHeader == "function" && e.hasMainHeader({
      route: s
    });
    return v(s, () => {
      l.value = p(), f.value = l.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (h, _) => {
      const L = d("lkt-button");
      return l.value ? (a(), g("div", Rt, [
        b("div", Ct, [
          A(L, ht(Mt({
            type: k(gt).Menu,
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
}), xt = /* @__PURE__ */ y({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = () => w.closeMenu("_");
    return (u, c) => {
      const s = d("lkt-menu"), l = d("lkt-loader");
      return a(), g("div", null, [
        t.loading ? (a(), m(l, { key: 1 })) : (a(), m(s, z({ key: 0 }, k(e).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), zt = (t) => {
  e.lktAppReady.value = t;
}, Et = () => e.lktAppReady, wt = (t) => {
  e.lktAppLoading.value = t;
}, Pt = () => e.lktAppLoading, ve = /* @__PURE__ */ y({
  __name: "LktAppComponent",
  setup(t) {
    const o = Et(), u = Pt(), c = r(null), s = r(null), l = C(), f = r("en"), p = r(!1), h = async () => {
      var n, B;
      if ((n = e.setup) != null && n.i18nResource) {
        const M = await x(e.setup.i18nResource);
        bt(M.data);
      }
      if ((B = e.setup) != null && B.setupResource) {
        const M = await x(e.setup.setupResource);
        e.lktAppSetup.value = M.data, console.log("hasSetup resource: ", M.data);
      }
      At(() => {
        zt(!0), wt(!1);
      });
    }, _ = H(() => {
      let n = [];
      return w.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), L.value && n.push("has-bottom-bar"), p.value && n.push("has-main-header"), n.push(`route-is-${l.name}`), n.join(" ");
    });
    v(c, (n) => {
      W(c.value);
    }), v(s, (n) => {
      lt(s.value);
    }), Lt(async () => {
      await h();
    });
    const L = H(() => {
      var n;
      return e.lktBottomBar && ((n = e.lktBottomBar.modelValue) == null ? void 0 : n.length) > 0 && (e.hasBottomBar === !0 || typeof e.hasBottomBar == "function" && e.hasBottomBar({
        route: l
      }));
    }), V = H(() => {
      var n;
      return e.lktMainMenu && ((n = e.lktMainMenu.modelValue) == null ? void 0 : n.length) > 0 && (e.hasMainMenu === !0 || typeof e.hasMainMenu == "function" && e.hasMainMenu({
        route: l
      }));
    });
    return v(l, () => {
      V.value, L.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (n, B) => {
      const M = d("lkt-modal-canvas"), P = d("lkt-toast-canvas"), T = d("router-view"), S = d("lkt-loader");
      return a(), g("div", {
        class: Bt(["main-content", _.value])
      }, [
        k(o) && !k(u) ? (a(), m(T, { key: 0 }, {
          default: E(({ Component: I }) => [
            A(Vt, {
              hasMainHeader: p.value,
              "onUpdate:hasMainHeader": B[0] || (B[0] = ($) => p.value = $),
              lang: f.value,
              loading: k(u)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            V.value ? (a(), m(xt, {
              key: 0,
              loading: k(u)
            }, null, 8, ["loading"])) : R("", !0),
            (a(), m(_t(I))),
            L.value ? (a(), m(Ht, {
              key: 1,
              loading: k(u)
            }, null, 8, ["loading"])) : R("", !0),
            A(M, {
              ref_key: "modalCanvas",
              ref: c
            }, null, 512),
            A(P, {
              ref_key: "toastCanvas",
              ref: s
            }, null, 512)
          ]),
          _: 1
        })) : (a(), m(S, { key: 1 }))
      ], 2);
    };
  }
}), he = {
  install: (t, o) => {
    o.mainMenu && (e.lktMainMenu = o.mainMenu), o.bottomBar && (e.lktBottomBar = o.bottomBar), o.hasMainHeader && (e.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (e.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (e.hasBottomBar = o.hasBottomBar), o.setup && (e.setup = o.setup), t.provide("lktAppSize", e.lktAppSize), t.provide("lktAdminEnabled", e.lktAdminEnabled), t.provide("lktAppLoading", e.lktAppLoading), t.provide("lktAppReady", e.lktAppReady), t.provide("lktAppSetup", e.lktAppSetup), t.use(J()), t.component("lkt-accordion") === void 0 && t.use(it), t.component("lkt-anchor") === void 0 && t.use(K), t.component("lkt-banner") === void 0 && t.use(pt), t.component("lkt-box") === void 0 && t.use(tt), t.component("lkt-button") === void 0 && t.use(j), t.component("lkt-chart") === void 0 && t.use(Y), t.component("lkt-counter") === void 0 && t.use(kt), t.component("lkt-dot") === void 0 && t.use(ft), t.component("lkt-field") === void 0 && t.use(N), t.component("lkt-form") === void 0 && t.use(mt), t.component("lkt-header") === void 0 && t.use(ut), t.component("lkt-http-info") === void 0 && t.use(ot), t.component("lkt-icon") === void 0 && t.use(Z), t.component("lkt-image") === void 0 && t.use(st), t.component("lkt-item-crud") === void 0 && t.use(q), t.component("lkt-loader") === void 0 && t.use(O), t.component("lkt-menu") === void 0 && t.use(et), t.component("lkt-modal") === void 0 && t.use(U), t.component("lkt-paginator") === void 0 && t.use(Q), t.component("lkt-polymorphic-element") === void 0 && t.use(X), t.component("lkt-progress") === void 0 && t.use(at), t.component("lkt-step-process") === void 0 && t.use(nt), t.component("lkt-table") === void 0 && t.use(F), t.component("lkt-tabs") === void 0 && t.use(vt), t.component("lkt-tag") === void 0 && t.use(G), t.component("lkt-toast") === void 0 && t.use(rt), t.component("lkt-tooltip") === void 0 && t.use(D), t.component("lkt-vue-admin") === void 0 && t.use(dt), t.component("lkt-web-page") === void 0 && t.use(ct);
  }
}, Me = (t) => {
  e.lktAppSize.value = t;
}, Le = () => e.lktAppSize, Be = (t) => {
  e.lktAdminEnabled.value = t;
}, _e = () => e.lktAdminEnabled, Ae = () => e.lktAppSetup;
export {
  ve as LktAppComponent,
  he as default,
  _e as getLktAdminEnabled,
  Ae as getLktAppSetup,
  Le as getLktAppSize,
  Be as setLktAdminEnabled,
  Me as setLktAppSize
};
