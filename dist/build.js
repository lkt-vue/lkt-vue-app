import P from "lkt-tooltip";
import I from "lkt-field";
import $ from "lkt-table";
import D from "lkt-button";
import H from "lkt-anchor";
import N from "lkt-loader";
import F, { setCanvas as O } from "lkt-modal";
import j from "lkt-item-crud";
import W from "lkt-tag";
import { getVuexStore as q } from "lkt-vuex-tools";
import G from "lkt-paginator";
import J from "lkt-charts";
import K from "lkt-icon";
import Q from "lkt-box";
import U from "lkt-menu";
import X from "lkt-http-info";
import Y from "lkt-step-process";
import Z from "lkt-accordion";
import tt from "lkt-progress";
import ot from "lkt-image";
import et, { setToastCanvas as nt } from "lkt-toast";
import it from "lkt-header";
import lt from "lkt-form";
import mt from "lkt-vue-admin";
import rt from "lkt-web-page";
import st from "lkt-counter";
import ut from "lkt-dot";
import at from "lkt-banner-box";
import { ref as a, defineComponent as f, resolveComponent as d, createElementBlock as v, openBlock as i, createBlock as r, mergeProps as B, unref as u, createElementVNode as p, normalizeClass as y, nextTick as b, computed as L, watch as M, onMounted as dt, withCtx as kt, createVNode as g, createCommentVNode as h, resolveDynamicComponent as ct } from "vue";
import { AppSize as ft, MenuController as c } from "lkt-vue-kernel";
import { useRoute as vt } from "vue-router";
const s = class s {
};
s.lktAppSize = a(ft.MD), s.lktAdminEnabled = a(!0), s.lktAppLoading = a(!0), s.lktAppReady = a(!1), s.lktMainMenu = void 0, s.lktBottomBar = void 0;
let o = s;
const _t = /* @__PURE__ */ f({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, m) => {
      const k = d("lkt-menu"), l = d("lkt-loader");
      return i(), v("div", null, [
        e.loading ? (i(), r(l, { key: 1 })) : (i(), r(k, B({ key: 0 }, u(o).lktBottomBar, { class: "bottom-bar" }), null, 16))
      ]);
    };
  }
}), pt = { class: "main-header" }, Lt = { class: "main-header-intro" }, gt = /* @__PURE__ */ f({
  __name: "LktMainHeader",
  props: {
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  setup(t) {
    const e = a(!1), m = () => {
      c.toggleMenu("lkt-main-menu"), b(() => {
        e.value = c.getMenuStatus("lkt-main-menu");
      });
    };
    return (k, l) => (i(), v("div", pt, [
      p("div", Lt, [
        p("div", {
          class: y(["menu-btn", e.value ? "open" : ""]),
          onClick: m
        }, [...l[0] || (l[0] = [
          p("div", { class: "menu-btn--icon" }, null, -1)
        ])], 2)
      ])
    ]));
  }
}), At = /* @__PURE__ */ f({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    c.getMenuStatus("_");
    const e = () => c.closeMenu("_");
    return (m, k) => {
      const l = d("lkt-menu"), _ = d("lkt-loader");
      return i(), v("div", null, [
        m.loading ? (i(), r(_, { key: 1 })) : (i(), r(l, B({ key: 0 }, u(o).lktMainMenu, {
          class: ["main-menu", u(c).getMenuStatus("lkt-main-menu") ? "menu-opened" : ""],
          "menu-key": "lkt-main-menu",
          onClickOutside: e
        }), null, 16, ["class"]))
      ]);
    };
  }
}), Mt = (t) => {
  o.lktAppReady.value = t;
}, ht = () => o.lktAppReady, Bt = (t) => {
  o.lktAppLoading.value = t;
}, yt = () => o.lktAppLoading, no = /* @__PURE__ */ f({
  __name: "LktAppComponent",
  setup(t) {
    const e = ht(), m = yt(), k = a(null), l = a(null), _ = vt(), C = a("en"), R = async () => {
      b(() => {
        Mt(!0), Bt(!1);
      });
    }, z = L(() => {
      let n = [];
      return c.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), A.value && n.push("has-bottom-bar"), n.push(`route-is-${_.name}`), n.join(" ");
    });
    M(k, (n) => {
      O(k.value);
    }), M(l, (n) => {
      nt(l.value);
    }), dt(async () => {
      await R();
    });
    const A = L(() => {
      var n;
      return o.lktBottomBar && ((n = o.lktBottomBar.modelValue) == null ? void 0 : n.length) > 0;
    }), E = L(() => {
      var n;
      return o.lktMainMenu && ((n = o.lktMainMenu.modelValue) == null ? void 0 : n.length) > 0;
    });
    return (n, bt) => {
      const x = d("lkt-modal-canvas"), V = d("lkt-toast-canvas"), S = d("router-view"), w = d("lkt-loader");
      return i(), v("div", {
        class: y(["main-content", z.value])
      }, [
        u(e) && !u(m) ? (i(), r(S, { key: 0 }, {
          default: kt(({ Component: T }) => [
            g(gt, {
              lang: C.value,
              loading: u(m)
            }, null, 8, ["lang", "loading"]),
            E.value ? (i(), r(At, {
              key: 0,
              loading: u(m)
            }, null, 8, ["loading"])) : h("", !0),
            (i(), r(ct(T))),
            A.value ? (i(), r(_t, {
              key: 1,
              loading: u(m)
            }, null, 8, ["loading"])) : h("", !0),
            g(x, {
              ref_key: "modalCanvas",
              ref: k
            }, null, 512),
            g(V, {
              ref_key: "toastCanvas",
              ref: l
            }, null, 512)
          ]),
          _: 1
        })) : (i(), r(w, { key: 1 }))
      ], 2);
    };
  }
}), io = {
  install: (t, e) => {
    e.mainMenu && (o.lktMainMenu = e.mainMenu), e.bottomBar && (o.lktBottomBar = e.bottomBar), t.provide("lktAppSize", o.lktAppSize), t.provide("lktAdminEnabled", o.lktAdminEnabled), t.provide("lktAppLoading", o.lktAppLoading), t.provide("lktAppReady", o.lktAppReady), t.use(q()), t.component("lkt-accordion") === void 0 && t.use(Z), t.component("lkt-anchor") === void 0 && t.use(H), t.component("lkt-banner") === void 0 && t.use(at), t.component("lkt-box") === void 0 && t.use(Q), t.component("lkt-button") === void 0 && t.use(D), t.component("lkt-chart") === void 0 && t.use(J), t.component("lkt-counter") === void 0 && t.use(st), t.component("lkt-dot") === void 0 && t.use(ut), t.component("lkt-field") === void 0 && t.use(I), t.component("lkt-form") === void 0 && t.use(lt), t.component("lkt-header") === void 0 && t.use(it), t.component("lkt-http-info") === void 0 && t.use(X), t.component("lkt-icon") === void 0 && t.use(K), t.component("lkt-image") === void 0 && t.use(ot), t.component("lkt-item-crud") === void 0 && t.use(j), t.component("lkt-loader") === void 0 && t.use(N), t.component("lkt-menu") === void 0 && t.use(U), t.component("lkt-modal") === void 0 && t.use(F), t.component("lkt-paginator") === void 0 && t.use(G), t.component("lkt-progress") === void 0 && t.use(tt), t.component("lkt-step-process") === void 0 && t.use(Y), t.component("lkt-table") === void 0 && t.use($), t.component("lkt-tag") === void 0 && t.use(W), t.component("lkt-toast") === void 0 && t.use(et), t.component("lkt-tooltip") === void 0 && t.use(P), t.component("lkt-vue-admin") === void 0 && t.use(mt), t.component("lkt-web-page") === void 0 && t.use(rt);
  }
}, lo = (t) => {
  o.lktAppSize.value = t;
}, mo = () => o.lktAppSize, ro = (t) => {
  o.lktAdminEnabled.value = t;
}, so = () => o.lktAdminEnabled;
export {
  no as LktAppComponent,
  io as default,
  so as getLktAdminEnabled,
  mo as getLktAppSize,
  ro as setLktAdminEnabled,
  lo as setLktAppSize
};
