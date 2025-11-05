import D from "lkt-tooltip";
import S from "lkt-field";
import I from "lkt-table";
import $ from "lkt-button";
import N from "lkt-anchor";
import F from "lkt-loader";
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
import { ref as r, defineComponent as H, watch as M, resolveComponent as c, createElementBlock as b, openBlock as u, createBlock as f, mergeProps as x, unref as h, computed as A, createCommentVNode as g, createVNode as y, normalizeProps as ve, guardReactiveProps as he, onMounted as Me, normalizeClass as Be, withCtx as Le, createElementVNode as _e, resolveDynamicComponent as Ae, nextTick as ye } from "vue";
import { AppSize as ge, MenuController as z } from "lkt-vue-kernel";
import { useRoute as C } from "vue-router";
import { DataState as He } from "lkt-data-state";
import { httpCall as w } from "lkt-http-client";
import { setI18n as be } from "lkt-i18n";
import Re from "lkt-session";
import Ve from "lkt-doc-page";
const a = class a {
};
a.lktAppSize = r(ge.MD), a.lktAdminEnabled = r(!0), a.lktAppLoading = r(!0), a.lktAppReady = r(!1), a.lktAppSetup = r({}), a.lktMainMenu = void 0, a.lktBottomBar = void 0, a.hasMainHeader = !0, a.hasMainMenu = !0, a.hasBottomBar = !0, a.replaceMainMenuButtonWithBack = !1, a.setup = void 0, a.mainHeader = r(void 0);
let t = a;
const Ce = /* @__PURE__ */ H({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = C(), d = r(!1), p = () => {
      var s, i;
      return typeof ((s = t.lktBottomBar) == null ? void 0 : s.modelValue) < "u" && ((i = t.lktBottomBar.modelValue) == null ? void 0 : i.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: o }));
    };
    return M(o, () => {
      d.value = p();
    }, { flush: "pre", immediate: !0, deep: !0 }), (s, i) => {
      const B = c("lkt-menu"), k = c("lkt-loader");
      return u(), b("div", null, [
        e.loading ? (u(), f(k, { key: 1 })) : (u(), f(B, x({ key: 0 }, h(t).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), we = {
  key: 0,
  class: "main-header"
}, xe = /* @__PURE__ */ H({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(e, { emit: o }) {
    const d = e, p = o, s = C(), i = r(!1), B = r(!1), k = r(d.hasMainHeader);
    M(() => d.hasMainHeader, (v) => k.value = v), M(k, (v) => p("update:hasMainHeader", v));
    const R = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: s
    }), V = () => t.replaceMainMenuButtonWithBack === !0 || typeof t.replaceMainMenuButtonWithBack == "function" && t.replaceMainMenuButtonWithBack({
      route: s
    });
    M(s, () => {
      i.value = R(), B.value = V(), k.value = i.value;
    }, { flush: "pre", immediate: !0, deep: !0 });
    const L = A(() => ({
      ...t.mainHeader.value
    }));
    return (v, n) => {
      c("lkt-button");
      const l = c("lkt-header");
      return i.value ? (u(), b("div", we, [
        g("", !0),
        y(l, ve(he(L.value)), null, 16)
      ])) : g("", !0);
    };
  }
}), ze = /* @__PURE__ */ H({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = () => z.closeMenu("_");
    return (d, p) => {
      const s = c("lkt-menu"), i = c("lkt-loader");
      return u(), b("div", null, [
        e.loading ? (u(), f(i, { key: 1 })) : (u(), f(s, x({ key: 0 }, h(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: o
        }), null, 16))
      ]);
    };
  }
}), Ee = (e) => {
  t.lktAppReady.value = e;
}, We = () => t.lktAppReady, Pe = (e) => {
  t.lktAppLoading.value = e;
}, Te = () => t.lktAppLoading, yt = (e) => {
  if (typeof t.mainHeader.value > "u") {
    t.mainHeader.value = e;
    return;
  }
  let o = new He(t.mainHeader.value);
  o.increment(e), t.mainHeader.value = o.getData();
}, De = { class: "view-component" }, gt = /* @__PURE__ */ H({
  __name: "LktAppComponent",
  setup(e) {
    const o = We(), d = Te(), p = r(null), s = r(null), i = C(), B = r("en"), k = r(!1), R = async () => {
      var n, l;
      if ((n = t.setup) != null && n.i18nResource) {
        const m = await w(t.setup.i18nResource);
        be(m.data);
      }
      if ((l = t.setup) != null && l.setupResource) {
        const m = await w(t.setup.setupResource);
        for (let _ in m.data)
          t.lktAppSetup.value[_] = m.data[_];
      }
      ye(() => {
        Ee(!0), Pe(!1);
      });
    }, V = A(() => {
      let n = [];
      return z.getMenuStatus("lkt-main-menu") && n.push("menu-opened"), L.value && n.push("has-bottom-bar"), k.value && n.push("has-main-header"), n.push(`route-is-${i.name}`), n.join(" ");
    });
    M(p, (n) => {
      O(p.value);
    }), M(s, (n) => {
      re(s.value);
    }), Me(async () => {
      await R();
    });
    const L = A(() => {
      var n, l, m;
      return t.lktBottomBar && typeof ((n = t.lktBottomBar) == null ? void 0 : n.modelValue) < "u" && ((m = (l = t.lktBottomBar) == null ? void 0 : l.modelValue) == null ? void 0 : m.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: i
      }));
    }), v = A(() => {
      var n, l, m;
      return t.lktMainMenu && typeof ((n = t.lktMainMenu) == null ? void 0 : n.modelValue) < "u" && ((m = (l = t.lktMainMenu) == null ? void 0 : l.modelValue) == null ? void 0 : m.length) > 0 && (t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({
        route: i
      }));
    });
    return M(i, () => {
      v.value, L.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (n, l) => {
      const m = c("lkt-modal-canvas"), _ = c("lkt-toast-canvas"), E = c("router-view"), W = c("lkt-loader");
      return u(), b("div", {
        class: Be(["main-content", V.value])
      }, [
        h(o) && !h(d) ? (u(), f(E, { key: 0 }, {
          default: Le(({ Component: P }) => [
            y(xe, {
              hasMainHeader: k.value,
              "onUpdate:hasMainHeader": l[0] || (l[0] = (T) => k.value = T),
              lang: B.value,
              loading: h(d)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            v.value ? (u(), f(ze, {
              key: 0,
              loading: h(d)
            }, null, 8, ["loading"])) : g("", !0),
            _e("div", De, [
              (u(), f(Ae(P)))
            ]),
            L.value ? (u(), f(Ce, {
              key: 1,
              loading: h(d)
            }, null, 8, ["loading"])) : g("", !0),
            y(m, {
              ref_key: "modalCanvas",
              ref: p
            }, null, 512),
            y(_, {
              ref_key: "toastCanvas",
              ref: s
            }, null, 512)
          ]),
          _: 1
        })) : (u(), f(W, { key: 1 }))
      ], 2);
    };
  }
}), Ht = {
  install: (e, o) => {
    o.mainMenu && (t.lktMainMenu = o.mainMenu), o.bottomBar && (t.lktBottomBar = o.bottomBar), o.hasMainHeader && (t.hasMainHeader = o.hasMainHeader), o.hasMainMenu && (t.hasMainMenu = o.hasMainMenu), o.hasBottomBar && (t.hasBottomBar = o.hasBottomBar), o.replaceMainMenuButtonWithBack && (t.replaceMainMenuButtonWithBack = o.replaceMainMenuButtonWithBack), o.mainHeader && (t.mainHeader.value = o.mainHeader), o.setup && (t.setup = o.setup), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(G()), e.component("lkt-accordion") === void 0 && e.use(oe), e.component("lkt-anchor") === void 0 && e.use(N), e.component("lkt-banner") === void 0 && e.use(ke), e.component("lkt-box") === void 0 && e.use(Y), e.component("lkt-button") === void 0 && e.use($), e.component("lkt-calendar") === void 0 && e.use(pe), e.component("lkt-chart") === void 0 && e.use(Q), e.component("lkt-counter") === void 0 && e.use(de), e.component("lkt-doc-page") === void 0 && e.use(Ve), e.component("lkt-dot") === void 0 && e.use(ce), e.component("lkt-field") === void 0 && e.use(S), e.component("lkt-form") === void 0 && e.use(le), e.component("lkt-header") === void 0 && e.use(se), e.component("lkt-http-info") === void 0 && e.use(ee), e.component("lkt-icon") === void 0 && e.use(X), e.component("lkt-image") === void 0 && e.use(ae), e.component("lkt-item-crud") === void 0 && e.use(U), e.component("lkt-loader") === void 0 && e.use(F), e.component("lkt-menu") === void 0 && e.use(Z), e.component("lkt-modal") === void 0 && e.use(j), e.component("lkt-paginator") === void 0 && e.use(J), e.component("lkt-polymorphic-element") === void 0 && e.use(K), e.component("lkt-progress") === void 0 && e.use(ne), e.component("lkt-step-process") === void 0 && e.use(te), e.component("lkt-table") === void 0 && e.use(I), e.component("lkt-tabs") === void 0 && e.use(fe), e.component("lkt-tag") === void 0 && e.use(q), e.component("lkt-toast") === void 0 && e.use(ie), e.component("lkt-tooltip") === void 0 && e.use(D), e.component("lkt-vue-admin") === void 0 && e.use(ue), e.component("lkt-web-page") === void 0 && e.use(me), e.use(Re);
  }
}, bt = (e) => {
  t.lktAppSize.value = e;
}, Rt = () => t.lktAppSize, Vt = (e) => {
  t.lktAdminEnabled.value = e;
}, Ct = () => t.lktAdminEnabled, wt = () => t.lktAppSetup;
export {
  gt as LktAppComponent,
  Ht as default,
  Ct as getLktAdminEnabled,
  wt as getLktAppSetup,
  Rt as getLktAppSize,
  Vt as setLktAdminEnabled,
  bt as setLktAppSize,
  yt as updateMainHeader
};
