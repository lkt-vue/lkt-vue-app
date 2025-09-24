import w from "lkt-tooltip";
import I from "lkt-field";
import S from "lkt-table";
import $ from "lkt-button";
import D from "lkt-anchor";
import H from "lkt-loader";
import N, { setCanvas as F } from "lkt-modal";
import j from "lkt-item-crud";
import K from "lkt-tag";
import { getVuexStore as O } from "lkt-vuex-tools";
import W from "lkt-paginator";
import q from "lkt-charts";
import G from "lkt-icon";
import J from "lkt-box";
import Q from "lkt-menu";
import U from "lkt-http-info";
import X from "lkt-step-process";
import Y from "lkt-accordion";
import Z from "lkt-progress";
import tt from "lkt-image";
import ot, { setToastCanvas as et } from "lkt-toast";
import nt from "lkt-header";
import it from "lkt-form";
import lt from "lkt-vue-admin";
import rt from "lkt-web-page";
import mt from "lkt-counter";
import st from "lkt-dot";
import at from "lkt-banner-box";
import { ref as k, defineComponent as f, resolveComponent as m, createElementBlock as v, openBlock as n, createBlock as r, mergeProps as b, unref as u, createElementVNode as p, createVNode as c, normalizeProps as ut, guardReactiveProps as dt, withCtx as h, computed as L, watch as A, onMounted as kt, normalizeClass as ct, createCommentVNode as y, resolveDynamicComponent as ft, nextTick as vt } from "vue";
import { AppSize as _t, ButtonType as pt, MenuController as B } from "lkt-vue-kernel";
import { useRoute as Lt } from "vue-router";
const a = class a {
};
a.lktAppSize = k(_t.MD), a.lktAdminEnabled = k(!0), a.lktAppLoading = k(!0), a.lktAppReady = k(!1), a.lktMainMenu = void 0, a.lktBottomBar = void 0;
let o = a;
const gt = /* @__PURE__ */ f({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (i, l) => {
      const s = m("lkt-menu"), d = m("lkt-loader");
      return n(), v("div", null, [
        i.loading ? (n(), r(d, { key: 1 })) : (n(), r(s, b({ key: 0 }, u(o).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), At = { class: "main-header" }, yt = { class: "main-header-intro" }, bt = /* @__PURE__ */ f({
  __name: "LktMainHeader",
  props: {
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  setup(t) {
    return (i, l) => {
      const s = m("lkt-button");
      return n(), v("div", At, [
        p("div", yt, [
          c(s, ut(dt({
            type: u(pt).Menu,
            menuKey: "lkt-main-menu"
          })), {
            default: h(() => [...l[0] || (l[0] = [
              p("div", { class: "menu-btn" }, [
                p("div", { class: "menu-btn--icon" })
              ], -1)
            ])]),
            _: 1
          }, 16)
        ])
      ]);
    };
  }
}), ht = /* @__PURE__ */ f({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const i = () => B.closeMenu("_");
    return (l, s) => {
      const d = m("lkt-menu"), _ = m("lkt-loader");
      return n(), v("div", null, [
        l.loading ? (n(), r(_, { key: 1 })) : (n(), r(d, b({ key: 0 }, u(o).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: i
        }), null, 16))
      ]);
    };
  }
}), Bt = (t) => {
  o.lktAppReady.value = t;
}, Mt = () => o.lktAppReady, Ct = (t) => {
  o.lktAppLoading.value = t;
}, Rt = () => o.lktAppLoading, ro = /* @__PURE__ */ f({
  __name: "LktAppComponent",
  setup(t) {
    const i = Mt(), l = Rt(), s = k(null), d = k(null), _ = Lt(), M = k("en"), C = async () => {
      vt(() => {
        Bt(!0), Ct(!1);
      });
    }, R = L(() => {
      let e = [];
      return B.getMenuStatus("lkt-main-menu") && e.push("menu-opened"), g.value && e.push("has-bottom-bar"), e.push(`route-is-${_.name}`), e.join(" ");
    });
    A(s, (e) => {
      F(s.value);
    }), A(d, (e) => {
      et(d.value);
    }), kt(async () => {
      await C();
    });
    const g = L(() => {
      var e;
      return o.lktBottomBar && ((e = o.lktBottomBar.modelValue) == null ? void 0 : e.length) > 0;
    }), z = L(() => {
      var e;
      return o.lktMainMenu && ((e = o.lktMainMenu.modelValue) == null ? void 0 : e.length) > 0;
    });
    return (e, zt) => {
      const E = m("lkt-modal-canvas"), x = m("lkt-toast-canvas"), V = m("router-view"), P = m("lkt-loader");
      return n(), v("div", {
        class: ct(["main-content", R.value])
      }, [
        u(i) && !u(l) ? (n(), r(V, { key: 0 }, {
          default: h(({ Component: T }) => [
            c(bt, {
              lang: M.value,
              loading: u(l)
            }, null, 8, ["lang", "loading"]),
            z.value ? (n(), r(ht, {
              key: 0,
              loading: u(l)
            }, null, 8, ["loading"])) : y("", !0),
            (n(), r(ft(T))),
            g.value ? (n(), r(gt, {
              key: 1,
              loading: u(l)
            }, null, 8, ["loading"])) : y("", !0),
            c(E, {
              ref_key: "modalCanvas",
              ref: s
            }, null, 512),
            c(x, {
              ref_key: "toastCanvas",
              ref: d
            }, null, 512)
          ]),
          _: 1
        })) : (n(), r(P, { key: 1 }))
      ], 2);
    };
  }
}), mo = {
  install: (t, i) => {
    i.mainMenu && (o.lktMainMenu = i.mainMenu), i.bottomBar && (o.lktBottomBar = i.bottomBar), t.provide("lktAppSize", o.lktAppSize), t.provide("lktAdminEnabled", o.lktAdminEnabled), t.provide("lktAppLoading", o.lktAppLoading), t.provide("lktAppReady", o.lktAppReady), t.use(O()), t.component("lkt-accordion") === void 0 && t.use(Y), t.component("lkt-anchor") === void 0 && t.use(D), t.component("lkt-banner") === void 0 && t.use(at), t.component("lkt-box") === void 0 && t.use(J), t.component("lkt-button") === void 0 && t.use($), t.component("lkt-chart") === void 0 && t.use(q), t.component("lkt-counter") === void 0 && t.use(mt), t.component("lkt-dot") === void 0 && t.use(st), t.component("lkt-field") === void 0 && t.use(I), t.component("lkt-form") === void 0 && t.use(it), t.component("lkt-header") === void 0 && t.use(nt), t.component("lkt-http-info") === void 0 && t.use(U), t.component("lkt-icon") === void 0 && t.use(G), t.component("lkt-image") === void 0 && t.use(tt), t.component("lkt-item-crud") === void 0 && t.use(j), t.component("lkt-loader") === void 0 && t.use(H), t.component("lkt-menu") === void 0 && t.use(Q), t.component("lkt-modal") === void 0 && t.use(N), t.component("lkt-paginator") === void 0 && t.use(W), t.component("lkt-progress") === void 0 && t.use(Z), t.component("lkt-step-process") === void 0 && t.use(X), t.component("lkt-table") === void 0 && t.use(S), t.component("lkt-tag") === void 0 && t.use(K), t.component("lkt-toast") === void 0 && t.use(ot), t.component("lkt-tooltip") === void 0 && t.use(w), t.component("lkt-vue-admin") === void 0 && t.use(lt), t.component("lkt-web-page") === void 0 && t.use(rt);
  }
}, so = (t) => {
  o.lktAppSize.value = t;
}, ao = () => o.lktAppSize, uo = (t) => {
  o.lktAdminEnabled.value = t;
}, ko = () => o.lktAdminEnabled;
export {
  ro as LktAppComponent,
  mo as default,
  ko as getLktAdminEnabled,
  ao as getLktAppSize,
  uo as setLktAdminEnabled,
  so as setLktAppSize
};
