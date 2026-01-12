import j from "lkt-tooltip";
import q from "lkt-field";
import F from "lkt-table";
import O from "lkt-button";
import U from "lkt-anchor";
import G from "lkt-loader";
import J, { setCanvas as K } from "lkt-modal";
import Q from "lkt-item-crud";
import X from "lkt-tag";
import { getVuexStore as Y } from "lkt-vuex-tools";
import Z from "lkt-paginator";
import ee from "lkt-polymorphic-element";
import te from "lkt-charts";
import oe from "lkt-icon";
import ne from "lkt-box";
import ae from "lkt-menu";
import ie from "lkt-http-info";
import re from "lkt-step-process";
import le from "lkt-accordion";
import ue from "lkt-progress";
import se from "lkt-image";
import me, { setToastCanvas as de } from "lkt-toast";
import ce from "lkt-header";
import ke from "lkt-form";
import fe from "lkt-vue-admin";
import pe from "lkt-web-page";
import he from "lkt-counter";
import ve from "lkt-dot";
import Me from "lkt-banner-box";
import Be from "lkt-tabs";
import Le from "lkt-calendar";
import { AppStateController as t, MenuController as D, getLktAppReady as _e, getLktAppLoading as Ae, AppResourceStatus as p, ThemeModeConfig as B, setLktAppThemeModeConfig as ge, setLktAppReady as ye, setLktAppLoading as Ce } from "lkt-vue-kernel";
import { getLktAdminEnabled as St, getLktAppSetup as wt, getLktAppSize as Vt, setLktAdminEnabled as xt, setLktAppSize as Dt, updateMainHeader as Et } from "lkt-vue-kernel";
import { defineComponent as b, ref as h, watch as s, resolveComponent as d, createElementBlock as R, openBlock as l, createBlock as k, mergeProps as E, unref as v, computed as A, createCommentVNode as T, createVNode as C, normalizeProps as Te, guardReactiveProps as be, onMounted as Re, normalizeClass as He, withCtx as Se, createElementVNode as we, resolveDynamicComponent as Ve, nextTick as xe } from "vue";
import { useRoute as S } from "vue-router";
import { httpCall as x } from "lkt-http-client";
import { setI18n as De } from "lkt-i18n";
import Ee from "lkt-session";
import Pe from "lkt-doc-page";
const We = /* @__PURE__ */ b({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = S(), m = h(!1), f = () => {
      var i, a;
      return typeof ((i = t.lktBottomBar) == null ? void 0 : i.modelValue) < "u" && ((a = t.lktBottomBar.modelValue) == null ? void 0 : a.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: n }));
    };
    return s(n, () => {
      m.value = f();
    }, { flush: "pre", immediate: !0, deep: !0 }), (i, a) => {
      const L = d("lkt-menu"), c = d("lkt-loader");
      return l(), R("div", null, [
        e.loading ? (l(), k(c, { key: 1 })) : (l(), k(L, E({ key: 0 }, v(t).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), $e = {
  key: 0,
  class: "main-header"
}, ze = /* @__PURE__ */ b({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(e, { emit: n }) {
    const m = e, f = n, i = S(), a = h(!1), L = h(!1), c = h(m.hasMainHeader);
    s(() => m.hasMainHeader, (M) => c.value = M), s(c, (M) => f("update:hasMainHeader", M));
    const H = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: i
    }), g = () => t.replaceMainMenuButtonWithBack === !0 || typeof t.replaceMainMenuButtonWithBack == "function" && t.replaceMainMenuButtonWithBack({
      route: i
    });
    s(i, () => {
      a.value = H(), L.value = g(), c.value = a.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const y = A(() => ({
      ...t.mainHeader.value
    }));
    return (M, w) => {
      d("lkt-button");
      const _ = d("lkt-header");
      return a.value ? (l(), R("div", $e, [
        T("", !0),
        C(_, Te(be(y.value)), null, 16)
      ])) : T("", !0);
    };
  }
}), Ie = /* @__PURE__ */ b({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = () => D.closeMenu("_");
    return (m, f) => {
      const i = d("lkt-menu"), a = d("lkt-loader");
      return l(), R("div", null, [
        e.loading ? (l(), k(a, { key: 1 })) : (l(), k(i, E({ key: 0 }, v(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: n
        }), null, 16))
      ]);
    };
  }
}), Ne = { class: "view-component" }, Tt = /* @__PURE__ */ b({
  __name: "LktAppComponent",
  setup(e) {
    const n = _e(), m = Ae(), f = h(null), i = h(null), a = S(), L = h("en"), c = h(!1), H = A(() => t.i18nStatus.value === p.Loading || t.setupStatus.value === p.Loading), g = async () => {
      var o;
      if ((o = t.setup) != null && o.i18nResource) {
        t.i18nStatus.value = p.Loading;
        const r = await x(t.setup.i18nResource);
        De(r.data), t.i18nStatus.value = p.Ready;
      }
    }, y = async () => {
      var o;
      if ((o = t.setup) != null && o.setupResource) {
        t.setupStatus.value = p.Loading;
        const r = await x(t.setup.setupResource);
        for (let u in r.data)
          u === "preferredThemeMode" ? ge(r.data[u]) : t.lktAppSetup.value[u] = r.data[u];
        t.setupStatus.value = p.Ready;
      }
    }, M = async () => {
      await g(), await y(), xe(() => {
        ye(!0), Ce(!1);
      });
    }, w = A(() => {
      let o = [];
      return D.getMenuStatus("lkt-main-menu") && o.push("menu-opened"), _.value && o.push("has-bottom-bar"), c.value && o.push("has-main-header"), o.push(`route-is-${a.name}`), o.join(" ");
    });
    s(f, (o) => {
      K(f.value);
    }), s(i, (o) => {
      de(i.value);
    }), Re(async () => {
      P(), await M();
    });
    const _ = A(() => {
      var o, r, u;
      return t.lktBottomBar && typeof ((o = t.lktBottomBar) == null ? void 0 : o.modelValue) < "u" && ((u = (r = t.lktBottomBar) == null ? void 0 : r.modelValue) == null ? void 0 : u.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: a
      }));
    }), V = A(() => !t.lktMainMenu || !(typeof t.lktMainMenu.http == "object" || Array.isArray(t.lktMainMenu.modelValue)) ? !1 : t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({ route: a }));
    s(a, () => {
      V.value, _.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const P = () => {
      t.lktAppThemeModeDetected.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: o }) => {
        o ? t.lktAppThemeModeDetected.value = "dark" : t.lktAppThemeModeDetected.value = "light";
      });
    };
    return s(t.lktAppThemeModeDetected, (o) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), s(t.lktAppThemeModeConfig, (o) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), s(t.lktAppThemeMode, (o, r) => {
      let u = document.getElementsByTagName("body")[0];
      u.classList.add(`${o}-mode`), u.classList.remove(`${r}-mode`);
    }), s(t.i18nStatus, (o) => {
      o === p.RequiredRefresh && g();
    }), s(t.setupStatus, (o) => {
      o === p.RequiredRefresh && y();
    }), (o, r) => {
      const u = d("lkt-modal-canvas"), W = d("lkt-toast-canvas"), $ = d("router-view"), z = d("lkt-loader");
      return l(), R("div", {
        class: He(["main-content", w.value])
      }, [
        v(n) && !v(m) && !H.value ? (l(), k($, { key: 0 }, {
          default: Se(({ Component: I }) => [
            C(ze, {
              hasMainHeader: c.value,
              "onUpdate:hasMainHeader": r[0] || (r[0] = (N) => c.value = N),
              lang: L.value,
              loading: v(m)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            V.value ? (l(), k(Ie, {
              key: 0,
              loading: v(m)
            }, null, 8, ["loading"])) : T("", !0),
            we("div", Ne, [
              (l(), k(Ve(I)))
            ]),
            _.value ? (l(), k(We, {
              key: 1,
              loading: v(m)
            }, null, 8, ["loading"])) : T("", !0),
            C(u, {
              ref_key: "modalCanvas",
              ref: f
            }, null, 512),
            C(W, {
              ref_key: "toastCanvas",
              ref: i
            }, null, 512)
          ]),
          _: 1
        })) : (l(), k(z, { key: 1 }))
      ], 2);
    };
  }
}), bt = {
  install: (e, n) => {
    n.mainMenu && (t.lktMainMenu = n.mainMenu), n.bottomBar && (t.lktBottomBar = n.bottomBar), n.hasMainHeader && (t.hasMainHeader = n.hasMainHeader), n.hasMainMenu && (t.hasMainMenu = n.hasMainMenu), n.hasBottomBar && (t.hasBottomBar = n.hasBottomBar), n.replaceMainMenuButtonWithBack && (t.replaceMainMenuButtonWithBack = n.replaceMainMenuButtonWithBack), n.mainHeader && (t.mainHeader.value = n.mainHeader), n.setup && (t.setup = n.setup), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(Y()), e.component("lkt-accordion") === void 0 && e.use(le), e.component("lkt-anchor") === void 0 && e.use(U), e.component("lkt-banner") === void 0 && e.use(Me), e.component("lkt-box") === void 0 && e.use(ne), e.component("lkt-button") === void 0 && e.use(O), e.component("lkt-calendar") === void 0 && e.use(Le), e.component("lkt-chart") === void 0 && e.use(te), e.component("lkt-counter") === void 0 && e.use(he), e.component("lkt-doc-page") === void 0 && e.use(Pe), e.component("lkt-dot") === void 0 && e.use(ve), e.component("lkt-field") === void 0 && e.use(q), e.component("lkt-form") === void 0 && e.use(ke), e.component("lkt-header") === void 0 && e.use(ce), e.component("lkt-http-info") === void 0 && e.use(ie), e.component("lkt-icon") === void 0 && e.use(oe), e.component("lkt-image") === void 0 && e.use(se), e.component("lkt-item-crud") === void 0 && e.use(Q), e.component("lkt-loader") === void 0 && e.use(G), e.component("lkt-menu") === void 0 && e.use(ae), e.component("lkt-modal") === void 0 && e.use(J), e.component("lkt-paginator") === void 0 && e.use(Z), e.component("lkt-polymorphic-element") === void 0 && e.use(ee), e.component("lkt-progress") === void 0 && e.use(ue), e.component("lkt-step-process") === void 0 && e.use(re), e.component("lkt-table") === void 0 && e.use(F), e.component("lkt-tabs") === void 0 && e.use(Be), e.component("lkt-tag") === void 0 && e.use(X), e.component("lkt-toast") === void 0 && e.use(me), e.component("lkt-tooltip") === void 0 && e.use(j), e.component("lkt-vue-admin") === void 0 && e.use(fe), e.component("lkt-web-page") === void 0 && e.use(pe), e.use(Ee);
  }
};
export {
  Tt as LktAppComponent,
  bt as default,
  St as getLktAdminEnabled,
  wt as getLktAppSetup,
  Vt as getLktAppSize,
  xt as setLktAdminEnabled,
  Dt as setLktAppSize,
  Et as updateMainHeader
};
