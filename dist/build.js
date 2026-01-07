import $ from "lkt-tooltip";
import z from "lkt-field";
import I from "lkt-table";
import N from "lkt-button";
import F from "lkt-anchor";
import j from "lkt-loader";
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
import le, { setToastCanvas as re } from "lkt-toast";
import me from "lkt-header";
import ue from "lkt-form";
import se from "lkt-vue-admin";
import de from "lkt-web-page";
import ke from "lkt-counter";
import ce from "lkt-dot";
import fe from "lkt-banner-box";
import pe from "lkt-tabs";
import he from "lkt-calendar";
import { AppStateController as t, MenuController as S, getLktAppReady as ve, getLktAppLoading as Me, ThemeModeConfig as B, setLktAppThemeModeConfig as Be, setLktAppReady as _e, setLktAppLoading as Le } from "lkt-vue-kernel";
import { getLktAdminEnabled as Tt, getLktAppSetup as bt, getLktAppSize as Ht, setLktAdminEnabled as Rt, setLktAppSize as Vt, updateMainHeader as wt } from "lkt-vue-kernel";
import { defineComponent as C, ref as p, watch as s, resolveComponent as d, createElementBlock as T, openBlock as m, createBlock as c, mergeProps as x, unref as v, computed as A, createCommentVNode as y, createVNode as g, normalizeProps as Ae, guardReactiveProps as ge, onMounted as ye, normalizeClass as Ce, withCtx as Te, createElementVNode as be, resolveDynamicComponent as He, nextTick as Re } from "vue";
import { useRoute as R } from "vue-router";
import { httpCall as w } from "lkt-http-client";
import { setI18n as Ve } from "lkt-i18n";
import we from "lkt-session";
import Se from "lkt-doc-page";
const xe = /* @__PURE__ */ C({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = R(), u = p(!1), f = () => {
      var l, i;
      return typeof ((l = t.lktBottomBar) == null ? void 0 : l.modelValue) < "u" && ((i = t.lktBottomBar.modelValue) == null ? void 0 : i.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: o }));
    };
    return s(o, () => {
      u.value = f();
    }, { flush: "pre", immediate: !0, deep: !0 }), (l, i) => {
      const _ = d("lkt-menu"), k = d("lkt-loader");
      return m(), T("div", null, [
        e.loading ? (m(), c(k, { key: 1 })) : (m(), c(_, x({ key: 0 }, v(t).lktBottomBar, {
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
    const u = e, f = o, l = R(), i = p(!1), _ = p(!1), k = p(u.hasMainHeader);
    s(() => u.hasMainHeader, (h) => k.value = h), s(k, (h) => f("update:hasMainHeader", h));
    const b = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: l
    }), H = () => t.replaceMainMenuButtonWithBack === !0 || typeof t.replaceMainMenuButtonWithBack == "function" && t.replaceMainMenuButtonWithBack({
      route: l
    });
    s(l, () => {
      i.value = b(), _.value = H(), k.value = i.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const L = A(() => ({
      ...t.mainHeader.value
    }));
    return (h, V) => {
      d("lkt-button");
      const n = d("lkt-header");
      return i.value ? (m(), T("div", De, [
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
    const o = () => S.closeMenu("_");
    return (u, f) => {
      const l = d("lkt-menu"), i = d("lkt-loader");
      return m(), T("div", null, [
        e.loading ? (m(), c(i, { key: 1 })) : (m(), c(l, x({ key: 0 }, v(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), We = { class: "view-component" }, At = /* @__PURE__ */ C({
  __name: "LktAppComponent",
  setup(e) {
    const o = ve(), u = Me(), f = p(null), l = p(null), i = R(), _ = p("en"), k = p(!1), b = async () => {
      var n, r;
      if ((n = t.setup) != null && n.i18nResource) {
        const a = await w(t.setup.i18nResource);
        Ve(a.data);
      }
      if ((r = t.setup) != null && r.setupResource) {
        const a = await w(t.setup.setupResource);
        for (let M in a.data)
          M === "preferredThemeMode" ? Be(a.data[M]) : t.lktAppSetup.value[M] = a.data[M];
      }
      Re(() => {
        _e(!0), Le(!1);
      });
    }, H = A(() => {
      let n = [];
      return S.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), L.value && n.push("has-bottom-bar"), k.value && n.push("has-main-header"), n.push(`route-is-${i.name}`), n.join(" ");
    });
    s(f, (n) => {
      U(f.value);
    }), s(l, (n) => {
      re(l.value);
    }), ye(async () => {
      V(), await b();
    });
    const L = A(() => {
      var n, r, a;
      return t.lktBottomBar && typeof ((n = t.lktBottomBar) == null ? void 0 : n.modelValue) < "u" && ((a = (r = t.lktBottomBar) == null ? void 0 : r.modelValue) == null ? void 0 : a.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: i
      }));
    }), h = A(() => {
      var n, r, a;
      return t.lktMainMenu && typeof ((n = t.lktMainMenu) == null ? void 0 : n.modelValue) < "u" && ((a = (r = t.lktMainMenu) == null ? void 0 : r.modelValue) == null ? void 0 : a.length) > 0 && (t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({
        route: i
      }));
    });
    s(i, () => {
      h.value, L.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const V = () => {
      t.lktAppThemeModeDetected.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: n }) => {
        n ? t.lktAppThemeModeDetected.value = "dark" : t.lktAppThemeModeDetected.value = "light";
      });
    };
    return s(t.lktAppThemeModeDetected, (n) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), s(t.lktAppThemeModeConfig, (n) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), s(t.lktAppThemeMode, (n, r) => {
      let a = document.getElementsByTagName("body")[0];
      a.classList.add(`${n}-mode`), a.classList.remove(`${r}-mode`);
    }), (n, r) => {
      const a = d("lkt-modal-canvas"), M = d("lkt-toast-canvas"), D = d("router-view"), E = d("lkt-loader");
      return m(), T("div", {
        class: Ce(["main-content", H.value])
      }, [
        v(o) && !v(u) ? (m(), c(D, { key: 0 }, {
          default: Te(({ Component: P }) => [
            g(Ee, {
              hasMainHeader: k.value,
              "onUpdate:hasMainHeader": r[0] || (r[0] = (W) => k.value = W),
              lang: _.value,
              loading: v(u)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            h.value ? (m(), c(Pe, {
              key: 0,
              loading: v(u)
            }, null, 8, ["loading"])) : y("", !0),
            be("div", We, [
              (m(), c(He(P)))
            ]),
            L.value ? (m(), c(xe, {
              key: 1,
              loading: v(u)
            }, null, 8, ["loading"])) : y("", !0),
            g(a, {
              ref_key: "modalCanvas",
              ref: f
            }, null, 512),
            g(M, {
              ref_key: "toastCanvas",
              ref: l
            }, null, 512)
          ]),
          _: 1
        })) : (m(), c(E, { key: 1 }))
      ], 2);
    };
  }
}), gt = {
  install: (e, o) => {
    o.mainMenu && (t.lktMainMenu = o.mainMenu), o.bottomBar && (t.lktBottomBar = o.bottomBar), o.hasMainHeader && (t.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (t.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (t.hasBottomBar = o.hasBottomBar), o.replaceMainMenuButtonWithBack && (t.replaceMainMenuButtonWithBack = o.replaceMainMenuButtonWithBack), o.mainHeader && (t.mainHeader.value = o.mainHeader), o.setup && (t.setup = o.setup), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(J()), e.component("lkt-accordion") === void 0 && e.use(ne), e.component("lkt-anchor") === void 0 && e.use(F), e.component("lkt-banner") === void 0 && e.use(fe), e.component("lkt-box") === void 0 && e.use(Z), e.component("lkt-button") === void 0 && e.use(N), e.component("lkt-calendar") === void 0 && e.use(he), e.component("lkt-chart") === void 0 && e.use(X), e.component("lkt-counter") === void 0 && e.use(ke), e.component("lkt-doc-page") === void 0 && e.use(Se), e.component("lkt-dot") === void 0 && e.use(ce), e.component("lkt-field") === void 0 && e.use(z), e.component("lkt-form") === void 0 && e.use(ue), e.component("lkt-header") === void 0 && e.use(me), e.component("lkt-http-info") === void 0 && e.use(te), e.component("lkt-icon") === void 0 && e.use(Y), e.component("lkt-image") === void 0 && e.use(ie), e.component("lkt-item-crud") === void 0 && e.use(q), e.component("lkt-loader") === void 0 && e.use(j), e.component("lkt-menu") === void 0 && e.use(ee), e.component("lkt-modal") === void 0 && e.use(O), e.component("lkt-paginator") === void 0 && e.use(K), e.component("lkt-polymorphic-element") === void 0 && e.use(Q), e.component("lkt-progress") === void 0 && e.use(ae), e.component("lkt-step-process") === void 0 && e.use(oe), e.component("lkt-table") === void 0 && e.use(I), e.component("lkt-tabs") === void 0 && e.use(pe), e.component("lkt-tag") === void 0 && e.use(G), e.component("lkt-toast") === void 0 && e.use(le), e.component("lkt-tooltip") === void 0 && e.use($), e.component("lkt-vue-admin") === void 0 && e.use(se), e.component("lkt-web-page") === void 0 && e.use(de), e.use(we);
  }
};
export {
  At as LktAppComponent,
  gt as default,
  Tt as getLktAdminEnabled,
  bt as getLktAppSetup,
  Ht as getLktAppSize,
  Rt as setLktAdminEnabled,
  Vt as setLktAppSize,
  wt as updateMainHeader
};
