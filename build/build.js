import D from "lkt-tooltip";
import N from "lkt-field";
import F from "lkt-table";
import j from "lkt-button";
import K from "lkt-anchor";
import O from "lkt-loader";
import S, { setCanvas as U } from "lkt-modal";
import W from "lkt-item-crud";
import q from "lkt-tag";
import { getVuexStore as G } from "lkt-vuex-tools";
import J from "lkt-paginator";
import Q from "lkt-polymorphic-element";
import X from "lkt-charts";
import Y from "lkt-icon";
import Z from "lkt-box";
import tt from "lkt-menu";
import et from "lkt-http-info";
import ot from "lkt-step-process";
import nt from "lkt-accordion";
import it from "lkt-progress";
import at from "lkt-image";
import rt, { setToastCanvas as st } from "lkt-toast";
import lt from "lkt-header";
import mt from "lkt-form";
import ut from "lkt-vue-admin";
import dt from "lkt-web-page";
import ct from "lkt-counter";
import kt from "lkt-dot";
import ft from "lkt-banner-box";
import vt from "lkt-tabs";
import { ref as l, defineComponent as _, watch as h, resolveComponent as d, createElementBlock as y, openBlock as i, createBlock as u, mergeProps as V, unref as k, createCommentVNode as b, createElementVNode as g, createVNode as B, normalizeProps as ht, guardReactiveProps as pt, withCtx as x, computed as A, onMounted as Mt, normalizeClass as Lt, resolveDynamicComponent as Bt, nextTick as _t } from "vue";
import { AppSize as yt, ButtonType as gt, MenuController as z } from "lkt-vue-kernel";
import { useRoute as H } from "vue-router";
const s = class s {
};
s.lktAppSize = l(yt.MD), s.lktAdminEnabled = l(!0), s.lktAppLoading = l(!0), s.lktAppReady = l(!1), s.lktMainMenu = void 0, s.lktBottomBar = void 0, s.hasMainHeader = !0, s.hasMainMenu = !0, s.hasBottomBar = !0;
let e = s;
const At = /* @__PURE__ */ _({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = H(), m = l(!1), c = () => {
      var a;
      return e.lktBottomBar && ((a = e.lktBottomBar.modelValue) == null ? void 0 : a.length) > 0 && (e.hasBottomBar === !0 || typeof e.hasBottomBar == "function" && e.hasBottomBar({
        route: o
      }));
    };
    return h(o, () => {
      m.value = c();
    }, { flush: "pre", immediate: !0, deep: !0 }), (a, r) => {
      const f = d("lkt-menu"), v = d("lkt-loader");
      return i(), y("div", null, [
        t.loading ? (i(), u(v, { key: 1 })) : (i(), u(f, V({ key: 0 }, k(e).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), bt = {
  key: 0,
  class: "main-header"
}, Ht = { class: "main-header-intro" }, Rt = /* @__PURE__ */ _({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(t, { emit: o }) {
    const m = t, c = o, a = H(), r = l(!1), f = l(m.hasMainHeader);
    h(() => m.hasMainHeader, (p) => f.value = p), h(f, (p) => c("update:hasMainHeader", p));
    const v = () => e.hasMainHeader === !0 || typeof e.hasMainHeader == "function" && e.hasMainHeader({
      route: a
    });
    return h(a, () => {
      r.value = v(), f.value = r.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (p, L) => {
      const M = d("lkt-button");
      return r.value ? (i(), y("div", bt, [
        g("div", Ht, [
          B(M, ht(pt({
            type: k(gt).Menu,
            menuKey: "lkt-main-menu"
          })), {
            default: x(() => [...L[0] || (L[0] = [
              g("div", { class: "menu-btn" }, [
                g("div", { class: "menu-btn--icon" })
              ], -1)
            ])]),
            _: 1
          }, 16)
        ])
      ])) : b("", !0);
    };
  }
}), Ct = /* @__PURE__ */ _({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = () => z.closeMenu("_");
    return (m, c) => {
      const a = d("lkt-menu"), r = d("lkt-loader");
      return i(), y("div", null, [
        t.loading ? (i(), u(r, { key: 1 })) : (i(), u(a, V({ key: 0 }, k(e).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), Vt = (t) => {
  e.lktAppReady.value = t;
}, xt = () => e.lktAppReady, zt = (t) => {
  e.lktAppLoading.value = t;
}, Et = () => e.lktAppLoading, ce = /* @__PURE__ */ _({
  __name: "LktAppComponent",
  setup(t) {
    const o = xt(), m = Et(), c = l(null), a = l(null), r = H(), f = l("en"), v = l(!1), p = async () => {
      _t(() => {
        Vt(!0), zt(!1);
      });
    }, L = A(() => {
      let n = [];
      return z.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), M.value && n.push("has-bottom-bar"), v.value && n.push("has-main-header"), n.push(`route-is-${r.name}`), n.join(" ");
    });
    h(c, (n) => {
      U(c.value);
    }), h(a, (n) => {
      st(a.value);
    }), Mt(async () => {
      await p();
    });
    const M = A(() => {
      var n;
      return e.lktBottomBar && ((n = e.lktBottomBar.modelValue) == null ? void 0 : n.length) > 0 && (e.hasBottomBar === !0 || typeof e.hasBottomBar == "function" && e.hasBottomBar({
        route: r
      }));
    }), R = A(() => {
      var n;
      return e.lktMainMenu && ((n = e.lktMainMenu.modelValue) == null ? void 0 : n.length) > 0 && (e.hasMainMenu === !0 || typeof e.hasMainMenu == "function" && e.hasMainMenu({
        route: r
      }));
    });
    return h(r, () => {
      R.value, M.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (n, C) => {
      const E = d("lkt-modal-canvas"), P = d("lkt-toast-canvas"), T = d("router-view"), w = d("lkt-loader");
      return i(), y("div", {
        class: Lt(["main-content", L.value])
      }, [
        k(o) && !k(m) ? (i(), u(T, { key: 0 }, {
          default: x(({ Component: I }) => [
            B(Rt, {
              hasMainHeader: v.value,
              "onUpdate:hasMainHeader": C[0] || (C[0] = ($) => v.value = $),
              lang: f.value,
              loading: k(m)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            R.value ? (i(), u(Ct, {
              key: 0,
              loading: k(m)
            }, null, 8, ["loading"])) : b("", !0),
            (i(), u(Bt(I))),
            M.value ? (i(), u(At, {
              key: 1,
              loading: k(m)
            }, null, 8, ["loading"])) : b("", !0),
            B(E, {
              ref_key: "modalCanvas",
              ref: c
            }, null, 512),
            B(P, {
              ref_key: "toastCanvas",
              ref: a
            }, null, 512)
          ]),
          _: 1
        })) : (i(), u(w, { key: 1 }))
      ], 2);
    };
  }
}), ke = {
  install: (t, o) => {
    o.mainMenu && (e.lktMainMenu = o.mainMenu), o.bottomBar && (e.lktBottomBar = o.bottomBar), o.hasMainHeader && (e.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (e.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (e.hasBottomBar = o.hasBottomBar), t.provide("lktAppSize", e.lktAppSize), t.provide("lktAdminEnabled", e.lktAdminEnabled), t.provide("lktAppLoading", e.lktAppLoading), t.provide("lktAppReady", e.lktAppReady), t.use(G()), t.component("lkt-accordion") === void 0 && t.use(nt), t.component("lkt-anchor") === void 0 && t.use(K), t.component("lkt-banner") === void 0 && t.use(ft), t.component("lkt-box") === void 0 && t.use(Z), t.component("lkt-button") === void 0 && t.use(j), t.component("lkt-chart") === void 0 && t.use(X), t.component("lkt-counter") === void 0 && t.use(ct), t.component("lkt-dot") === void 0 && t.use(kt), t.component("lkt-field") === void 0 && t.use(N), t.component("lkt-form") === void 0 && t.use(mt), t.component("lkt-header") === void 0 && t.use(lt), t.component("lkt-http-info") === void 0 && t.use(et), t.component("lkt-icon") === void 0 && t.use(Y), t.component("lkt-image") === void 0 && t.use(at), t.component("lkt-item-crud") === void 0 && t.use(W), t.component("lkt-loader") === void 0 && t.use(O), t.component("lkt-menu") === void 0 && t.use(tt), t.component("lkt-modal") === void 0 && t.use(S), t.component("lkt-paginator") === void 0 && t.use(J), t.component("lkt-polymorphic-element") === void 0 && t.use(Q), t.component("lkt-progress") === void 0 && t.use(it), t.component("lkt-step-process") === void 0 && t.use(ot), t.component("lkt-table") === void 0 && t.use(F), t.component("lkt-tabs") === void 0 && t.use(vt), t.component("lkt-tag") === void 0 && t.use(q), t.component("lkt-toast") === void 0 && t.use(rt), t.component("lkt-tooltip") === void 0 && t.use(D), t.component("lkt-vue-admin") === void 0 && t.use(ut), t.component("lkt-web-page") === void 0 && t.use(dt);
  }
}, fe = (t) => {
  e.lktAppSize.value = t;
}, ve = () => e.lktAppSize, he = (t) => {
  e.lktAdminEnabled.value = t;
}, pe = () => e.lktAdminEnabled;
export {
  ce as LktAppComponent,
  ke as default,
  pe as getLktAdminEnabled,
  ve as getLktAppSize,
  he as setLktAdminEnabled,
  fe as setLktAppSize
};
