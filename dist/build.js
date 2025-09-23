import P from "lkt-tooltip";
import $ from "lkt-field";
import I from "lkt-table";
import D from "lkt-button";
import H from "lkt-anchor";
import N from "lkt-loader";
import S, { setCanvas as j } from "lkt-modal";
import F from "lkt-item-crud";
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
import rt from "lkt-vue-admin";
import mt from "lkt-web-page";
import st from "lkt-counter";
import ut from "lkt-dot";
import at from "lkt-banner-box";
import { ref as k, defineComponent as c, resolveComponent as d, createElementBlock as f, openBlock as i, createBlock as s, mergeProps as b, unref as u, inject as g, createElementVNode as p, normalizeClass as M, computed as _, watch as h, onMounted as dt, withCtx as kt, createVNode as L, createCommentVNode as y, resolveDynamicComponent as ct, nextTick as ft } from "vue";
import { AppSize as vt } from "lkt-vue-kernel";
import { useRoute as pt } from "vue-router";
const a = class a {
};
a.lktAppSize = k(vt.MD), a.lktAdminEnabled = k(!0), a.lktAppLoading = k(!0), a.lktAppReady = k(!1), a.lktMainMenu = void 0, a.lktBottomBar = void 0;
let o = a;
const _t = /* @__PURE__ */ c({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, r) => {
      const m = d("lkt-menu"), l = d("lkt-loader");
      return i(), f("div", null, [
        e.loading ? (i(), s(l, { key: 1 })) : (i(), s(m, b({ key: 0 }, u(o).lktBottomBar, { class: "bottom-bar" }), null, 16))
      ]);
    };
  }
}), Lt = { class: "main-header" }, gt = { class: "main-header-intro" }, At = /* @__PURE__ */ c({
  __name: "LktMainHeader",
  props: {
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  setup(t) {
    const e = g("menuOpened"), r = () => {
      e.value = !e.value;
    };
    return (m, l) => (i(), f("div", Lt, [
      p("div", gt, [
        p("div", {
          class: M(["menu-btn", u(e) ? "open" : ""]),
          onClick: r
        }, [...l[0] || (l[0] = [
          p("div", { class: "menu-btn--icon" }, null, -1)
        ])], 2)
      ])
    ]));
  }
}), Bt = /* @__PURE__ */ c({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = g("menuOpened");
    return (r, m) => {
      const l = d("lkt-menu"), v = d("lkt-loader");
      return i(), f("div", null, [
        r.loading ? (i(), s(v, { key: 1 })) : (i(), s(l, b({ key: 0 }, u(o).lktMainMenu, {
          class: ["lkt-main-menu", u(e) ? "menu-opened" : ""],
          onClickOutside: m[0] || (m[0] = (A) => e.value = !1)
        }), null, 16, ["class"]))
      ]);
    };
  }
}), ht = (t) => {
  o.lktAppReady.value = t;
}, yt = () => o.lktAppReady, bt = (t) => {
  o.lktAppLoading.value = t;
}, Mt = () => o.lktAppLoading, io = /* @__PURE__ */ c({
  __name: "LktAppComponent",
  setup(t) {
    const e = yt(), r = Mt(), m = k(null), l = k(null), v = pt(), A = k("en"), C = g("menuOpened"), R = async () => {
      ft(() => {
        ht(!0), bt(!1);
      });
    }, z = _(() => {
      let n = [];
      return C.value && n.push("menu-opened"), B.value && n.push("has-bottom-bar"), n.push(`route-is-${v.name}`), n.join(" ");
    });
    h(m, (n) => {
      j(m.value);
    }), h(l, (n) => {
      nt(l.value);
    }), dt(async () => {
      await R();
    });
    const B = _(() => {
      var n;
      return o.lktBottomBar && ((n = o.lktBottomBar.modelValue) == null ? void 0 : n.length) > 0;
    }), E = _(() => {
      var n;
      return o.lktMainMenu && ((n = o.lktMainMenu.modelValue) == null ? void 0 : n.length) > 0;
    });
    return (n, Ct) => {
      const x = d("lkt-modal-canvas"), V = d("lkt-toast-canvas"), O = d("router-view"), w = d("lkt-loader");
      return i(), f("div", {
        class: M(["main-content", z.value])
      }, [
        u(e) && !u(r) ? (i(), s(O, { key: 0 }, {
          default: kt(({ Component: T }) => [
            L(At, {
              lang: A.value,
              loading: u(r)
            }, null, 8, ["lang", "loading"]),
            E.value ? (i(), s(Bt, {
              key: 0,
              loading: u(r)
            }, null, 8, ["loading"])) : y("", !0),
            (i(), s(ct(T))),
            B.value ? (i(), s(_t, {
              key: 1,
              loading: u(r)
            }, null, 8, ["loading"])) : y("", !0),
            L(x, {
              ref_key: "modalCanvas",
              ref: m
            }, null, 512),
            L(V, {
              ref_key: "toastCanvas",
              ref: l
            }, null, 512)
          ]),
          _: 1
        })) : (i(), s(w, { key: 1 }))
      ], 2);
    };
  }
}), lo = {
  install: (t, e) => {
    e.mainMenu && (o.lktMainMenu = e.mainMenu), e.bottomBar && (o.lktBottomBar = e.bottomBar), t.provide("lktAppSize", o.lktAppSize), t.provide("lktAdminEnabled", o.lktAdminEnabled), t.provide("lktAppLoading", o.lktAppLoading), t.provide("lktAppReady", o.lktAppReady), t.use(q()), t.component("lkt-accordion") === void 0 && t.use(Z), t.component("lkt-anchor") === void 0 && t.use(H), t.component("lkt-banner") === void 0 && t.use(at), t.component("lkt-box") === void 0 && t.use(Q), t.component("lkt-button") === void 0 && t.use(D), t.component("lkt-chart") === void 0 && t.use(J), t.component("lkt-counter") === void 0 && t.use(st), t.component("lkt-dot") === void 0 && t.use(ut), t.component("lkt-field") === void 0 && t.use($), t.component("lkt-form") === void 0 && t.use(lt), t.component("lkt-header") === void 0 && t.use(it), t.component("lkt-http-info") === void 0 && t.use(X), t.component("lkt-icon") === void 0 && t.use(K), t.component("lkt-image") === void 0 && t.use(ot), t.component("lkt-item-crud") === void 0 && t.use(F), t.component("lkt-loader") === void 0 && t.use(N), t.component("lkt-menu") === void 0 && t.use(U), t.component("lkt-modal") === void 0 && t.use(S), t.component("lkt-paginator") === void 0 && t.use(G), t.component("lkt-progress") === void 0 && t.use(tt), t.component("lkt-step-process") === void 0 && t.use(Y), t.component("lkt-table") === void 0 && t.use(I), t.component("lkt-tag") === void 0 && t.use(W), t.component("lkt-toast") === void 0 && t.use(et), t.component("lkt-tooltip") === void 0 && t.use(P), t.component("lkt-vue-admin") === void 0 && t.use(rt), t.component("lkt-web-page") === void 0 && t.use(mt);
  }
}, ro = (t) => {
  o.lktAppSize.value = t;
}, mo = () => o.lktAppSize, so = (t) => {
  o.lktAdminEnabled.value = t;
}, uo = () => o.lktAdminEnabled;
export {
  io as LktAppComponent,
  lo as default,
  uo as getLktAdminEnabled,
  mo as getLktAppSize,
  so as setLktAdminEnabled,
  ro as setLktAppSize
};
