import $ from "lkt-tooltip";
import z from "lkt-field";
import I from "lkt-table";
import N from "lkt-button";
import j from "lkt-anchor";
import F from "lkt-loader";
import O, { setCanvas as U } from "lkt-modal";
import q from "lkt-item-crud";
import G from "lkt-tag";
import { getVuexStore as J } from "lkt-vuex-tools";
import K from "lkt-paginator";
import Q from "lkt-polymorphic-element";
import X from "lkt-charts";
import Y from "lkt-icon";
import Z from "lkt-box";
import ee from "lkt-menu";
import te from "lkt-http-info";
import oe from "lkt-step-process";
import ne from "lkt-accordion";
import ae from "lkt-progress";
import ie from "lkt-image";
import re, { setToastCanvas as le } from "lkt-toast";
import me from "lkt-header";
import ue from "lkt-form";
import se from "lkt-vue-admin";
import de from "lkt-web-page";
import ke from "lkt-counter";
import ce from "lkt-dot";
import fe from "lkt-banner-box";
import pe from "lkt-tabs";
import he from "lkt-calendar";
import { AppStateController as t, MenuController as V, getLktAppReady as ve, getLktAppLoading as Me, ThemeModeConfig as B, setLktAppThemeModeConfig as Be, setLktAppReady as _e, setLktAppLoading as Le } from "lkt-vue-kernel";
import { getLktAdminEnabled as Tt, getLktAppSetup as bt, getLktAppSize as Ht, setLktAdminEnabled as Rt, setLktAppSize as wt, updateMainHeader as St } from "lkt-vue-kernel";
import { defineComponent as C, ref as p, watch as s, resolveComponent as d, createElementBlock as T, openBlock as l, createBlock as c, mergeProps as x, unref as v, computed as A, createCommentVNode as y, createVNode as g, normalizeProps as Ae, guardReactiveProps as ge, onMounted as ye, normalizeClass as Ce, withCtx as Te, createElementVNode as be, resolveDynamicComponent as He, nextTick as Re } from "vue";
import { useRoute as R } from "vue-router";
import { httpCall as S } from "lkt-http-client";
import { setI18n as we } from "lkt-i18n";
import Se from "lkt-session";
import Ve from "lkt-doc-page";
const xe = /* @__PURE__ */ C({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = R(), m = p(!1), f = () => {
      var i, a;
      return typeof ((i = t.lktBottomBar) == null ? void 0 : i.modelValue) < "u" && ((a = t.lktBottomBar.modelValue) == null ? void 0 : a.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: o }));
    };
    return s(o, () => {
      m.value = f();
    }, { flush: "pre", immediate: !0, deep: !0 }), (i, a) => {
      const _ = d("lkt-menu"), k = d("lkt-loader");
      return l(), T("div", null, [
        e.loading ? (l(), c(k, { key: 1 })) : (l(), c(_, x({ key: 0 }, v(t).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), De = {
  key: 0,
  class: "main-header"
}, Ee = /* @__PURE__ */ C({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(e, { emit: o }) {
    const m = e, f = o, i = R(), a = p(!1), _ = p(!1), k = p(m.hasMainHeader);
    s(() => m.hasMainHeader, (h) => k.value = h), s(k, (h) => f("update:hasMainHeader", h));
    const b = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: i
    }), H = () => t.replaceMainMenuButtonWithBack === !0 || typeof t.replaceMainMenuButtonWithBack == "function" && t.replaceMainMenuButtonWithBack({
      route: i
    });
    s(i, () => {
      a.value = b(), _.value = H(), k.value = a.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const L = A(() => ({
      ...t.mainHeader.value
    }));
    return (h, w) => {
      d("lkt-button");
      const n = d("lkt-header");
      return a.value ? (l(), T("div", De, [
        y("", !0),
        g(n, Ae(ge(L.value)), null, 16)
      ])) : y("", !0);
    };
  }
}), Pe = /* @__PURE__ */ C({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = () => V.closeMenu("_");
    return (m, f) => {
      const i = d("lkt-menu"), a = d("lkt-loader");
      return l(), T("div", null, [
        e.loading ? (l(), c(a, { key: 1 })) : (l(), c(i, x({ key: 0 }, v(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), We = { class: "view-component" }, At = /* @__PURE__ */ C({
  __name: "LktAppComponent",
  setup(e) {
    const o = ve(), m = Me(), f = p(null), i = p(null), a = R(), _ = p("en"), k = p(!1), b = async () => {
      var n, u;
      if ((n = t.setup) != null && n.i18nResource) {
        const r = await S(t.setup.i18nResource);
        we(r.data);
      }
      if ((u = t.setup) != null && u.setupResource) {
        const r = await S(t.setup.setupResource);
        for (let M in r.data)
          M === "preferredThemeMode" ? Be(r.data[M]) : t.lktAppSetup.value[M] = r.data[M];
      }
      Re(() => {
        _e(!0), Le(!1);
      });
    }, H = A(() => {
      let n = [];
      return V.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), L.value && n.push("has-bottom-bar"), k.value && n.push("has-main-header"), n.push(`route-is-${a.name}`), n.join(" ");
    });
    s(f, (n) => {
      U(f.value);
    }), s(i, (n) => {
      le(i.value);
    }), ye(async () => {
      w(), await b();
    });
    const L = A(() => {
      var n, u, r;
      return t.lktBottomBar && typeof ((n = t.lktBottomBar) == null ? void 0 : n.modelValue) < "u" && ((r = (u = t.lktBottomBar) == null ? void 0 : u.modelValue) == null ? void 0 : r.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: a
      }));
    }), h = A(() => !t.lktMainMenu || !(typeof t.lktMainMenu.http == "object" || Array.isArray(t.lktMainMenu.modelValue)) ? !1 : t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({ route: a }));
    s(a, () => {
      h.value, L.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const w = () => {
      t.lktAppThemeModeDetected.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: n }) => {
        n ? t.lktAppThemeModeDetected.value = "dark" : t.lktAppThemeModeDetected.value = "light";
      });
    };
    return s(t.lktAppThemeModeDetected, (n) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), s(t.lktAppThemeModeConfig, (n) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), s(t.lktAppThemeMode, (n, u) => {
      let r = document.getElementsByTagName("body")[0];
      r.classList.add(`${n}-mode`), r.classList.remove(`${u}-mode`);
    }), (n, u) => {
      const r = d("lkt-modal-canvas"), M = d("lkt-toast-canvas"), D = d("router-view"), E = d("lkt-loader");
      return l(), T("div", {
        class: Ce(["main-content", H.value])
      }, [
        v(o) && !v(m) ? (l(), c(D, { key: 0 }, {
          default: Te(({ Component: P }) => [
            g(Ee, {
              hasMainHeader: k.value,
              "onUpdate:hasMainHeader": u[0] || (u[0] = (W) => k.value = W),
              lang: _.value,
              loading: v(m)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            h.value ? (l(), c(Pe, {
              key: 0,
              loading: v(m)
            }, null, 8, ["loading"])) : y("", !0),
            be("div", We, [
              (l(), c(He(P)))
            ]),
            L.value ? (l(), c(xe, {
              key: 1,
              loading: v(m)
            }, null, 8, ["loading"])) : y("", !0),
            g(r, {
              ref_key: "modalCanvas",
              ref: f
            }, null, 512),
            g(M, {
              ref_key: "toastCanvas",
              ref: i
            }, null, 512)
          ]),
          _: 1
        })) : (l(), c(E, { key: 1 }))
      ], 2);
    };
  }
}), gt = {
  install: (e, o) => {
    o.mainMenu && (t.lktMainMenu = o.mainMenu), o.bottomBar && (t.lktBottomBar = o.bottomBar), o.hasMainHeader && (t.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (t.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (t.hasBottomBar = o.hasBottomBar), o.replaceMainMenuButtonWithBack && (t.replaceMainMenuButtonWithBack = o.replaceMainMenuButtonWithBack), o.mainHeader && (t.mainHeader.value = o.mainHeader), o.setup && (t.setup = o.setup), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(J()), e.component("lkt-accordion") === void 0 && e.use(ne), e.component("lkt-anchor") === void 0 && e.use(j), e.component("lkt-banner") === void 0 && e.use(fe), e.component("lkt-box") === void 0 && e.use(Z), e.component("lkt-button") === void 0 && e.use(N), e.component("lkt-calendar") === void 0 && e.use(he), e.component("lkt-chart") === void 0 && e.use(X), e.component("lkt-counter") === void 0 && e.use(ke), e.component("lkt-doc-page") === void 0 && e.use(Ve), e.component("lkt-dot") === void 0 && e.use(ce), e.component("lkt-field") === void 0 && e.use(z), e.component("lkt-form") === void 0 && e.use(ue), e.component("lkt-header") === void 0 && e.use(me), e.component("lkt-http-info") === void 0 && e.use(te), e.component("lkt-icon") === void 0 && e.use(Y), e.component("lkt-image") === void 0 && e.use(ie), e.component("lkt-item-crud") === void 0 && e.use(q), e.component("lkt-loader") === void 0 && e.use(F), e.component("lkt-menu") === void 0 && e.use(ee), e.component("lkt-modal") === void 0 && e.use(O), e.component("lkt-paginator") === void 0 && e.use(K), e.component("lkt-polymorphic-element") === void 0 && e.use(Q), e.component("lkt-progress") === void 0 && e.use(ae), e.component("lkt-step-process") === void 0 && e.use(oe), e.component("lkt-table") === void 0 && e.use(I), e.component("lkt-tabs") === void 0 && e.use(pe), e.component("lkt-tag") === void 0 && e.use(G), e.component("lkt-toast") === void 0 && e.use(re), e.component("lkt-tooltip") === void 0 && e.use($), e.component("lkt-vue-admin") === void 0 && e.use(se), e.component("lkt-web-page") === void 0 && e.use(de), e.use(Se);
  }
};
export {
  At as LktAppComponent,
  gt as default,
  Tt as getLktAdminEnabled,
  bt as getLktAppSetup,
  Ht as getLktAppSize,
  Rt as setLktAdminEnabled,
  wt as setLktAppSize,
  St as updateMainHeader
};
