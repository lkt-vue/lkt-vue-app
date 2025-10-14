import D from "lkt-tooltip";
import I from "lkt-field";
import S from "lkt-table";
import $ from "lkt-button";
import F from "lkt-anchor";
import N from "lkt-loader";
import j, { setCanvas as O } from "lkt-modal";
import U from "lkt-item-crud";
import q from "lkt-tag";
import { getVuexStore as G } from "lkt-vuex-tools";
import J from "lkt-paginator";
import K from "lkt-polymorphic-element";
import Q from "lkt-charts";
import X from "lkt-icon";
import Y from "lkt-box";
import Z from "lkt-menu";
import ee from "lkt-http-info";
import te from "lkt-step-process";
import oe from "lkt-accordion";
import ne from "lkt-progress";
import ae from "lkt-image";
import ie, { setToastCanvas as re } from "lkt-toast";
import se from "lkt-header";
import le from "lkt-form";
import ue from "lkt-vue-admin";
import me from "lkt-web-page";
import de from "lkt-counter";
import ce from "lkt-dot";
import ke from "lkt-banner-box";
import fe from "lkt-tabs";
import pe from "lkt-calendar";
import { ref as r, defineComponent as g, watch as M, resolveComponent as c, createElementBlock as H, openBlock as u, createBlock as f, mergeProps as x, unref as h, computed as _, createCommentVNode as y, createVNode as A, normalizeProps as ve, guardReactiveProps as he, onMounted as Me, normalizeClass as Be, withCtx as Le, resolveDynamicComponent as _e, nextTick as Ae } from "vue";
import { AppSize as ye, MenuController as z } from "lkt-vue-kernel";
import { useRoute as V } from "vue-router";
import { DataState as ge } from "lkt-data-state";
import { httpCall as C } from "lkt-http-client";
import { setI18n as He } from "lkt-i18n";
const a = class a {
};
a.lktAppSize = r(ye.MD), a.lktAdminEnabled = r(!0), a.lktAppLoading = r(!0), a.lktAppReady = r(!1), a.lktAppSetup = r({}), a.lktMainMenu = void 0, a.lktBottomBar = void 0, a.hasMainHeader = !0, a.hasMainMenu = !0, a.hasBottomBar = !0, a.replaceMainMenuButtonWithBack = !1, a.setup = void 0, a.mainHeader = r(void 0);
let t = a;
const be = /* @__PURE__ */ g({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = V(), d = r(!1), p = () => {
      var s, i;
      return typeof ((s = t.lktBottomBar) == null ? void 0 : s.modelValue) < "u" && ((i = t.lktBottomBar.modelValue) == null ? void 0 : i.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: o }));
    };
    return M(o, () => {
      d.value = p();
    }, { flush: "pre", immediate: !0, deep: !0 }), (s, i) => {
      const B = c("lkt-menu"), k = c("lkt-loader");
      return u(), H("div", null, [
        e.loading ? (u(), f(k, { key: 1 })) : (u(), f(B, x({ key: 0 }, h(t).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), Re = {
  key: 0,
  class: "main-header"
}, Ve = /* @__PURE__ */ g({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(e, { emit: o }) {
    const d = e, p = o, s = V(), i = r(!1), B = r(!1), k = r(d.hasMainHeader);
    M(() => d.hasMainHeader, (v) => k.value = v), M(k, (v) => p("update:hasMainHeader", v));
    const b = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: s
    }), R = () => t.replaceMainMenuButtonWithBack === !0 || typeof t.replaceMainMenuButtonWithBack == "function" && t.replaceMainMenuButtonWithBack({
      route: s
    });
    M(s, () => {
      i.value = b(), B.value = R(), k.value = i.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const L = _(() => ({
      ...t.mainHeader.value
    }));
    return (v, n) => {
      c("lkt-button");
      const l = c("lkt-header");
      return i.value ? (u(), H("div", Re, [
        y("", !0),
        A(l, ve(he(L.value)), null, 16)
      ])) : y("", !0);
    };
  }
}), Ce = /* @__PURE__ */ g({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = () => z.closeMenu("_");
    return (d, p) => {
      const s = c("lkt-menu"), i = c("lkt-loader");
      return u(), H("div", null, [
        e.loading ? (u(), f(i, { key: 1 })) : (u(), f(s, x({ key: 0 }, h(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), xe = (e) => {
  t.lktAppReady.value = e;
}, ze = () => t.lktAppReady, We = (e) => {
  t.lktAppLoading.value = e;
}, we = () => t.lktAppLoading, ht = (e) => {
  if (typeof t.mainHeader.value > "u") {
    t.mainHeader.value = e;
    return;
  }
  let o = new ge(t.mainHeader.value);
  o.increment(e), t.mainHeader.value = o.getData();
}, Mt = /* @__PURE__ */ g({
  __name: "LktAppComponent",
  setup(e) {
    const o = ze(), d = we(), p = r(null), s = r(null), i = V(), B = r("en"), k = r(!1), b = async () => {
      var n, l;
      if ((n = t.setup) != null && n.i18nResource) {
        const m = await C(t.setup.i18nResource);
        He(m.data);
      }
      if ((l = t.setup) != null && l.setupResource) {
        const m = await C(t.setup.setupResource);
        t.lktAppSetup.value = m.data;
      }
      Ae(() => {
        xe(!0), We(!1);
      });
    }, R = _(() => {
      let n = [];
      return z.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), L.value && n.push("has-bottom-bar"), k.value && n.push("has-main-header"), n.push(`route-is-${i.name}`), n.join(" ");
    });
    M(p, (n) => {
      O(p.value);
    }), M(s, (n) => {
      re(s.value);
    }), Me(async () => {
      await b();
    });
    const L = _(() => {
      var n, l, m;
      return t.lktBottomBar && typeof ((n = t.lktBottomBar) == null ? void 0 : n.modelValue) < "u" && ((m = (l = t.lktBottomBar) == null ? void 0 : l.modelValue) == null ? void 0 : m.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: i
      }));
    }), v = _(() => {
      var n, l, m;
      return t.lktMainMenu && typeof ((n = t.lktMainMenu) == null ? void 0 : n.modelValue) < "u" && ((m = (l = t.lktMainMenu) == null ? void 0 : l.modelValue) == null ? void 0 : m.length) > 0 && (t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({
        route: i
      }));
    });
    return M(i, () => {
      v.value, L.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (n, l) => {
      const m = c("lkt-modal-canvas"), W = c("lkt-toast-canvas"), w = c("router-view"), E = c("lkt-loader");
      return u(), H("div", {
        class: Be(["main-content", R.value])
      }, [
        h(o) && !h(d) ? (u(), f(w, { key: 0 }, {
          default: Le(({ Component: P }) => [
            A(Ve, {
              hasMainHeader: k.value,
              "onUpdate:hasMainHeader": l[0] || (l[0] = (T) => k.value = T),
              lang: B.value,
              loading: h(d)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            v.value ? (u(), f(Ce, {
              key: 0,
              loading: h(d)
            }, null, 8, ["loading"])) : y("", !0),
            (u(), f(_e(P))),
            L.value ? (u(), f(be, {
              key: 1,
              loading: h(d)
            }, null, 8, ["loading"])) : y("", !0),
            A(m, {
              ref_key: "modalCanvas",
              ref: p
            }, null, 512),
            A(W, {
              ref_key: "toastCanvas",
              ref: s
            }, null, 512)
          ]),
          _: 1
        })) : (u(), f(E, { key: 1 }))
      ], 2);
    };
  }
}), Bt = {
  install: (e, o) => {
    o.mainMenu && (t.lktMainMenu = o.mainMenu), o.bottomBar && (t.lktBottomBar = o.bottomBar), o.hasMainHeader && (t.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (t.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (t.hasBottomBar = o.hasBottomBar), o.replaceMainMenuButtonWithBack && (t.replaceMainMenuButtonWithBack = o.replaceMainMenuButtonWithBack), o.mainHeader && (t.mainHeader.value = o.mainHeader), o.setup && (t.setup = o.setup), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(G()), e.component("lkt-accordion") === void 0 && e.use(oe), e.component("lkt-anchor") === void 0 && e.use(F), e.component("lkt-banner") === void 0 && e.use(ke), e.component("lkt-box") === void 0 && e.use(Y), e.component("lkt-button") === void 0 && e.use($), e.component("lkt-calendar") === void 0 && e.use(pe), e.component("lkt-chart") === void 0 && e.use(Q), e.component("lkt-counter") === void 0 && e.use(de), e.component("lkt-dot") === void 0 && e.use(ce), e.component("lkt-field") === void 0 && e.use(I), e.component("lkt-form") === void 0 && e.use(le), e.component("lkt-header") === void 0 && e.use(se), e.component("lkt-http-info") === void 0 && e.use(ee), e.component("lkt-icon") === void 0 && e.use(X), e.component("lkt-image") === void 0 && e.use(ae), e.component("lkt-item-crud") === void 0 && e.use(U), e.component("lkt-loader") === void 0 && e.use(N), e.component("lkt-menu") === void 0 && e.use(Z), e.component("lkt-modal") === void 0 && e.use(j), e.component("lkt-paginator") === void 0 && e.use(J), e.component("lkt-polymorphic-element") === void 0 && e.use(K), e.component("lkt-progress") === void 0 && e.use(ne), e.component("lkt-step-process") === void 0 && e.use(te), e.component("lkt-table") === void 0 && e.use(S), e.component("lkt-tabs") === void 0 && e.use(fe), e.component("lkt-tag") === void 0 && e.use(q), e.component("lkt-toast") === void 0 && e.use(ie), e.component("lkt-tooltip") === void 0 && e.use(D), e.component("lkt-vue-admin") === void 0 && e.use(ue), e.component("lkt-web-page") === void 0 && e.use(me);
  }
}, Lt = (e) => {
  t.lktAppSize.value = e;
}, _t = () => t.lktAppSize, At = (e) => {
  t.lktAdminEnabled.value = e;
}, yt = () => t.lktAdminEnabled, gt = () => t.lktAppSetup;
export {
  Mt as LktAppComponent,
  Bt as default,
  yt as getLktAdminEnabled,
  gt as getLktAppSetup,
  _t as getLktAppSize,
  At as setLktAdminEnabled,
  Lt as setLktAppSize,
  ht as updateMainHeader
};
