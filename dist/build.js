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
import ut from "lkt-banner-box";
import at from "lkt-tabs";
import { ref as k, defineComponent as f, resolveComponent as m, createElementBlock as v, openBlock as n, createBlock as r, mergeProps as b, unref as a, createElementVNode as p, createVNode as c, normalizeProps as dt, guardReactiveProps as kt, withCtx as h, computed as L, watch as A, onMounted as ct, normalizeClass as ft, createCommentVNode as y, resolveDynamicComponent as vt, nextTick as _t } from "vue";
import { AppSize as pt, ButtonType as Lt, MenuController as B } from "lkt-vue-kernel";
import { useRoute as gt } from "vue-router";
const u = class u {
};
u.lktAppSize = k(pt.MD), u.lktAdminEnabled = k(!0), u.lktAppLoading = k(!0), u.lktAppReady = k(!1), u.lktMainMenu = void 0, u.lktBottomBar = void 0;
let o = u;
const At = /* @__PURE__ */ f({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (i, l) => {
      const s = m("lkt-menu"), d = m("lkt-loader");
      return n(), v("div", null, [
        t.loading ? (n(), r(d, { key: 1 })) : (n(), r(s, b({ key: 0 }, a(o).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), yt = { class: "main-header" }, bt = { class: "main-header-intro" }, ht = /* @__PURE__ */ f({
  __name: "LktMainHeader",
  props: {
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  setup(t) {
    return (i, l) => {
      const s = m("lkt-button");
      return n(), v("div", yt, [
        p("div", bt, [
          c(s, dt(kt({
            type: a(Lt).Menu,
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
}), Bt = /* @__PURE__ */ f({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const i = () => B.closeMenu("_");
    return (l, s) => {
      const d = m("lkt-menu"), _ = m("lkt-loader");
      return n(), v("div", null, [
        t.loading ? (n(), r(_, { key: 1 })) : (n(), r(d, b({ key: 0 }, a(o).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: i
        }), null, 16))
      ]);
    };
  }
}), Mt = (t) => {
  o.lktAppReady.value = t;
}, Ct = () => o.lktAppReady, Rt = (t) => {
  o.lktAppLoading.value = t;
}, xt = () => o.lktAppLoading, so = /* @__PURE__ */ f({
  __name: "LktAppComponent",
  setup(t) {
    const i = Ct(), l = xt(), s = k(null), d = k(null), _ = gt(), M = k("en"), C = async () => {
      _t(() => {
        Mt(!0), Rt(!1);
      });
    }, R = L(() => {
      let e = [];
      return B.getMenuStatus("lkt-main-menu") && e.push("menu-opened"), g.value && e.push("has-bottom-bar"), e.push(`route-is-${_.name}`), e.join(" ");
    });
    A(s, (e) => {
      F(s.value);
    }), A(d, (e) => {
      et(d.value);
    }), ct(async () => {
      await C();
    });
    const g = L(() => {
      var e;
      return o.lktBottomBar && ((e = o.lktBottomBar.modelValue) == null ? void 0 : e.length) > 0;
    }), x = L(() => {
      var e;
      return o.lktMainMenu && ((e = o.lktMainMenu.modelValue) == null ? void 0 : e.length) > 0;
    });
    return (e, zt) => {
      const z = m("lkt-modal-canvas"), E = m("lkt-toast-canvas"), T = m("router-view"), V = m("lkt-loader");
      return n(), v("div", {
        class: ft(["main-content", R.value])
      }, [
        a(i) && !a(l) ? (n(), r(T, { key: 0 }, {
          default: h(({ Component: P }) => [
            c(ht, {
              lang: M.value,
              loading: a(l)
            }, null, 8, ["lang", "loading"]),
            x.value ? (n(), r(Bt, {
              key: 0,
              loading: a(l)
            }, null, 8, ["loading"])) : y("", !0),
            (n(), r(vt(P))),
            g.value ? (n(), r(At, {
              key: 1,
              loading: a(l)
            }, null, 8, ["loading"])) : y("", !0),
            c(z, {
              ref_key: "modalCanvas",
              ref: s
            }, null, 512),
            c(E, {
              ref_key: "toastCanvas",
              ref: d
            }, null, 512)
          ]),
          _: 1
        })) : (n(), r(V, { key: 1 }))
      ], 2);
    };
  }
}), uo = {
  install: (t, i) => {
    i.mainMenu && (o.lktMainMenu = i.mainMenu), i.bottomBar && (o.lktBottomBar = i.bottomBar), t.provide("lktAppSize", o.lktAppSize), t.provide("lktAdminEnabled", o.lktAdminEnabled), t.provide("lktAppLoading", o.lktAppLoading), t.provide("lktAppReady", o.lktAppReady), t.use(O()), t.component("lkt-accordion") === void 0 && t.use(Y), t.component("lkt-anchor") === void 0 && t.use(D), t.component("lkt-banner") === void 0 && t.use(ut), t.component("lkt-box") === void 0 && t.use(J), t.component("lkt-button") === void 0 && t.use($), t.component("lkt-chart") === void 0 && t.use(q), t.component("lkt-counter") === void 0 && t.use(mt), t.component("lkt-dot") === void 0 && t.use(st), t.component("lkt-field") === void 0 && t.use(I), t.component("lkt-form") === void 0 && t.use(it), t.component("lkt-header") === void 0 && t.use(nt), t.component("lkt-http-info") === void 0 && t.use(U), t.component("lkt-icon") === void 0 && t.use(G), t.component("lkt-image") === void 0 && t.use(tt), t.component("lkt-item-crud") === void 0 && t.use(j), t.component("lkt-loader") === void 0 && t.use(H), t.component("lkt-menu") === void 0 && t.use(Q), t.component("lkt-modal") === void 0 && t.use(N), t.component("lkt-paginator") === void 0 && t.use(W), t.component("lkt-progress") === void 0 && t.use(Z), t.component("lkt-step-process") === void 0 && t.use(X), t.component("lkt-table") === void 0 && t.use(S), t.component("lkt-tabs") === void 0 && t.use(at), t.component("lkt-tag") === void 0 && t.use(K), t.component("lkt-toast") === void 0 && t.use(ot), t.component("lkt-tooltip") === void 0 && t.use(w), t.component("lkt-vue-admin") === void 0 && t.use(lt), t.component("lkt-web-page") === void 0 && t.use(rt);
  }
}, ao = (t) => {
  o.lktAppSize.value = t;
}, ko = () => o.lktAppSize, co = (t) => {
  o.lktAdminEnabled.value = t;
}, fo = () => o.lktAdminEnabled;
export {
  so as LktAppComponent,
  uo as default,
  fo as getLktAdminEnabled,
  ko as getLktAppSize,
  co as setLktAdminEnabled,
  ao as setLktAppSize
};
