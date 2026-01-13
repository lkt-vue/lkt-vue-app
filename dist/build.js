import F from "lkt-tooltip";
import O from "lkt-field";
import U from "lkt-table";
import G from "lkt-button";
import J from "lkt-anchor";
import K from "lkt-loader";
import Q, { setCanvas as X } from "lkt-modal";
import Y from "lkt-item-crud";
import Z from "lkt-tag";
import { getVuexStore as ee } from "lkt-vuex-tools";
import te from "lkt-paginator";
import oe from "lkt-polymorphic-element";
import ne from "lkt-charts";
import ae from "lkt-icon";
import ie from "lkt-box";
import le from "lkt-menu";
import re from "lkt-http-info";
import ue from "lkt-step-process";
import se from "lkt-accordion";
import me from "lkt-progress";
import de from "lkt-image";
import ce, { setToastCanvas as ke } from "lkt-toast";
import pe from "lkt-header";
import fe from "lkt-form";
import he from "lkt-vue-admin";
import ve from "lkt-web-page";
import Me from "lkt-counter";
import Be from "lkt-dot";
import Le from "lkt-banner-box";
import _e from "lkt-tabs";
import ge from "lkt-calendar";
import { AppStateController as t, MenuController as E, getLktAppReady as Ae, getLktAppLoading as ye, AppResourceStatus as p, getLktAppSetup as Ce, ThemeModeConfig as B, setLktAppThemeModeConfig as Te, setLktAppReady as be, setLktAppLoading as Se } from "lkt-vue-kernel";
import { getLktAdminEnabled as Dt, getLktAppSetup as Et, getLktAppSize as Pt, setLktAdminEnabled as Wt, setLktAppSize as $t, updateMainHeader as zt } from "lkt-vue-kernel";
import { defineComponent as C, ref as f, watch as r, resolveComponent as d, createElementBlock as T, openBlock as u, createBlock as c, mergeProps as P, unref as M, computed as g, createCommentVNode as y, createVNode as A, normalizeProps as Re, guardReactiveProps as He, onMounted as we, normalizeClass as Ve, withCtx as xe, createElementVNode as De, resolveDynamicComponent as Ee, nextTick as Pe } from "vue";
import { useRoute as V, useRouter as We } from "vue-router";
import { httpCall as D } from "lkt-http-client";
import { setI18n as $e } from "lkt-i18n";
import ze from "lkt-session";
import Ie from "lkt-doc-page";
const Ne = /* @__PURE__ */ C({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = V(), m = f(!1), k = () => {
      var i, a;
      return typeof ((i = t.lktBottomBar) == null ? void 0 : i.modelValue) < "u" && ((a = t.lktBottomBar.modelValue) == null ? void 0 : a.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: n }));
    };
    return r(n, () => {
      m.value = k();
    }, { flush: "pre", immediate: !0, deep: !0 }), (i, a) => {
      const L = d("lkt-menu"), h = d("lkt-loader");
      return u(), T("div", null, [
        e.loading ? (u(), c(h, { key: 1 })) : (u(), c(L, P({ key: 0 }, M(t).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), je = {
  key: 0,
  class: "main-header"
}, qe = /* @__PURE__ */ C({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(e, { emit: n }) {
    const m = e, k = n, i = V(), a = f(!1), L = f(!1), h = f(m.hasMainHeader);
    r(() => m.hasMainHeader, (v) => h.value = v), r(h, (v) => k("update:hasMainHeader", v));
    const _ = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: i
    }), b = () => t.replaceMainMenuButtonWithBack === !0 || typeof t.replaceMainMenuButtonWithBack == "function" && t.replaceMainMenuButtonWithBack({
      route: i
    });
    r(i, () => {
      a.value = _(), L.value = b(), h.value = a.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const S = g(() => ({
      ...t.mainHeader.value
    }));
    return (v, R) => {
      d("lkt-button");
      const H = d("lkt-header");
      return a.value ? (u(), T("div", je, [
        y("", !0),
        A(H, Re(He(S.value)), null, 16)
      ])) : y("", !0);
    };
  }
}), Fe = /* @__PURE__ */ C({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = () => E.closeMenu("_");
    return (m, k) => {
      const i = d("lkt-menu"), a = d("lkt-loader");
      return u(), T("div", null, [
        e.loading ? (u(), c(a, { key: 1 })) : (u(), c(i, P({ key: 0 }, M(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: n
        }), null, 16))
      ]);
    };
  }
}), Oe = { class: "view-component" }, Ht = /* @__PURE__ */ C({
  __name: "LktAppComponent",
  setup(e) {
    const n = Ae(), m = ye(), k = f(null), i = f(null), a = V(), L = We(), h = f("en"), _ = f(!1), b = g(() => t.i18nStatus.value === p.Loading || t.setupStatus.value === p.Loading), S = Ce(), v = async () => {
      var o;
      if ((o = t.setup) != null && o.i18nResource) {
        t.i18nStatus.value = p.Loading;
        const l = await D(t.setup.i18nResource);
        $e(l.data), t.i18nStatus.value = p.Ready;
      }
    }, R = async () => {
      var o;
      if ((o = t.setup) != null && o.setupResource) {
        t.setupStatus.value = p.Loading;
        const l = await D(t.setup.setupResource);
        for (let s in l.data)
          s === "preferredThemeMode" ? Te(l.data[s]) : t.lktAppSetup.value[s] = l.data[s];
        t.setupStatus.value = p.Ready;
      }
    }, H = async () => {
      await v(), await R(), Pe(() => {
        be(!0), Se(!1);
      });
    }, W = g(() => {
      let o = [];
      return E.getMenuStatus("lkt-main-menu") && o.push("menu-opened"), w.value && o.push("has-bottom-bar"), _.value && o.push("has-main-header"), o.push(`route-is-${a.name}`), o.join(" ");
    });
    r(k, (o) => {
      X(k.value);
    }), r(i, (o) => {
      ke(i.value);
    }), we(async () => {
      $(), await H();
    });
    const w = g(() => {
      var o, l, s;
      return t.lktBottomBar && typeof ((o = t.lktBottomBar) == null ? void 0 : o.modelValue) < "u" && ((s = (l = t.lktBottomBar) == null ? void 0 : l.modelValue) == null ? void 0 : s.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: a
      }));
    }), x = g(() => !t.lktMainMenu || !(typeof t.lktMainMenu.http == "object" || Array.isArray(t.lktMainMenu.modelValue)) ? !1 : t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({ route: a }));
    r(a, () => {
      x.value, w.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const $ = () => {
      t.lktAppThemeModeDetected.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: o }) => {
        o ? t.lktAppThemeModeDetected.value = "dark" : t.lktAppThemeModeDetected.value = "light";
      });
    };
    return r(t.lktAppThemeModeDetected, (o) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), r(t.lktAppThemeModeConfig, (o) => {
      t.lktAppThemeModeConfig.value === B.Auto ? t.lktAppThemeMode.value = t.lktAppThemeModeDetected.value : t.lktAppThemeModeConfig.value === B.Light ? t.lktAppThemeMode.value = "light" : t.lktAppThemeModeConfig.value === B.Dark && (t.lktAppThemeMode.value = "dark");
    }), r(t.lktAppThemeMode, (o, l) => {
      let s = document.getElementsByTagName("body")[0];
      s.classList.add(`${o}-mode`), s.classList.remove(`${l}-mode`);
    }), r(t.i18nStatus, (o) => {
      o === p.RequiredRefresh && v();
    }), r(t.setupStatus, (o) => {
      o === p.RequiredRefresh && R();
    }), r(S, (o) => {
      typeof t.appSetupChangedCallback == "function" && t.appSetupChangedCallback({
        setup: o,
        route: a,
        router: L
      });
    }, { deep: !0 }), (o, l) => {
      const s = d("lkt-modal-canvas"), z = d("lkt-toast-canvas"), I = d("router-view"), N = d("lkt-loader");
      return u(), T("div", {
        class: Ve(["main-content", W.value])
      }, [
        M(n) && !M(m) && !b.value ? (u(), c(I, { key: 0 }, {
          default: xe(({ Component: j }) => [
            A(qe, {
              hasMainHeader: _.value,
              "onUpdate:hasMainHeader": l[0] || (l[0] = (q) => _.value = q),
              lang: h.value,
              loading: M(m)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            x.value ? (u(), c(Fe, {
              key: 0,
              loading: M(m)
            }, null, 8, ["loading"])) : y("", !0),
            De("div", Oe, [
              (u(), c(Ee(j)))
            ]),
            w.value ? (u(), c(Ne, {
              key: 1,
              loading: M(m)
            }, null, 8, ["loading"])) : y("", !0),
            A(s, {
              ref_key: "modalCanvas",
              ref: k
            }, null, 512),
            A(z, {
              ref_key: "toastCanvas",
              ref: i
            }, null, 512)
          ]),
          _: 1
        })) : (u(), c(N, { key: 1 }))
      ], 2);
    };
  }
}), wt = {
  install: (e, n) => {
    n.mainMenu && (t.lktMainMenu = n.mainMenu), n.bottomBar && (t.lktBottomBar = n.bottomBar), n.hasMainHeader && (t.hasMainHeader = n.hasMainHeader), n.hasMainMenu && (t.hasMainMenu = n.hasMainMenu), n.hasBottomBar && (t.hasBottomBar = n.hasBottomBar), n.replaceMainMenuButtonWithBack && (t.replaceMainMenuButtonWithBack = n.replaceMainMenuButtonWithBack), n.mainHeader && (t.mainHeader.value = n.mainHeader), n.setup && (t.setup = n.setup), n.appSetupChangedCallback && (t.appSetupChangedCallback = n.appSetupChangedCallback), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(ee()), e.component("lkt-accordion") === void 0 && e.use(se), e.component("lkt-anchor") === void 0 && e.use(J), e.component("lkt-banner") === void 0 && e.use(Le), e.component("lkt-box") === void 0 && e.use(ie), e.component("lkt-button") === void 0 && e.use(G), e.component("lkt-calendar") === void 0 && e.use(ge), e.component("lkt-chart") === void 0 && e.use(ne), e.component("lkt-counter") === void 0 && e.use(Me), e.component("lkt-doc-page") === void 0 && e.use(Ie), e.component("lkt-dot") === void 0 && e.use(Be), e.component("lkt-field") === void 0 && e.use(O), e.component("lkt-form") === void 0 && e.use(fe), e.component("lkt-header") === void 0 && e.use(pe), e.component("lkt-http-info") === void 0 && e.use(re), e.component("lkt-icon") === void 0 && e.use(ae), e.component("lkt-image") === void 0 && e.use(de), e.component("lkt-item-crud") === void 0 && e.use(Y), e.component("lkt-loader") === void 0 && e.use(K), e.component("lkt-menu") === void 0 && e.use(le), e.component("lkt-modal") === void 0 && e.use(Q), e.component("lkt-paginator") === void 0 && e.use(te), e.component("lkt-polymorphic-element") === void 0 && e.use(oe), e.component("lkt-progress") === void 0 && e.use(me), e.component("lkt-step-process") === void 0 && e.use(ue), e.component("lkt-table") === void 0 && e.use(U), e.component("lkt-tabs") === void 0 && e.use(_e), e.component("lkt-tag") === void 0 && e.use(Z), e.component("lkt-toast") === void 0 && e.use(ce), e.component("lkt-tooltip") === void 0 && e.use(F), e.component("lkt-vue-admin") === void 0 && e.use(he), e.component("lkt-web-page") === void 0 && e.use(ve), e.use(ze);
  }
};
export {
  Ht as LktAppComponent,
  wt as default,
  Dt as getLktAdminEnabled,
  Et as getLktAppSetup,
  Pt as getLktAppSize,
  Wt as setLktAdminEnabled,
  $t as setLktAppSize,
  zt as updateMainHeader
};
