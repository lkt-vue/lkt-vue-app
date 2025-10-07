import G from "lkt-tooltip";
import J from "lkt-field";
import ee from "lkt-table";
import te from "lkt-button";
import ae from "lkt-anchor";
import le from "lkt-loader";
import oe, { setCanvas as ne } from "lkt-modal";
import ue from "lkt-item-crud";
import ie from "lkt-tag";
import { getVuexStore as se } from "lkt-vuex-tools";
import re from "lkt-paginator";
import de from "lkt-polymorphic-element";
import me from "lkt-charts";
import ce from "lkt-icon";
import ve from "lkt-box";
import ke from "lkt-menu";
import fe from "lkt-http-info";
import pe from "lkt-step-process";
import he from "lkt-accordion";
import ye from "lkt-progress";
import Me from "lkt-image";
import ge, { setToastCanvas as Le } from "lkt-toast";
import Be from "lkt-header";
import _e from "lkt-form";
import be from "lkt-vue-admin";
import Ae from "lkt-web-page";
import we from "lkt-counter";
import Ve from "lkt-dot";
import De from "lkt-banner-box";
import He from "lkt-tabs";
import { defineComponent as R, ref as s, watch as p, nextTick as Q, computed as H, resolveComponent as L, createElementBlock as _, openBlock as r, createElementVNode as V, createCommentVNode as T, createVNode as b, normalizeProps as C, guardReactiveProps as F, unref as g, withCtx as N, mergeProps as z, createStaticVNode as Re, Fragment as U, renderList as j, createBlock as B, normalizeClass as X, onMounted as xe, resolveDynamicComponent as Ye } from "vue";
import { isDate as Ce, date as D } from "lkt-date-tools";
import { ButtonType as Z, FieldType as K, AppSize as Fe, MenuController as q } from "lkt-vue-kernel";
import { useRoute as $ } from "vue-router";
import { httpCall as W } from "lkt-http-client";
import { setI18n as Te } from "lkt-i18n";
const ze = { class: "lkt-calendar" }, Ee = { class: "calendar" }, Se = { class: "lkt-calendar--header-grid" }, Pe = { class: "lkt-calendar--header-text lkt-flex-row" }, Ie = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, Ne = { class: "lkt-calendar--day lkt-calendar--filling-day" }, $e = /* @__PURE__ */ R({
  __name: "LktCalendar",
  props: {
    modelValue: {},
    events: {},
    disabled: { type: [Boolean, Object] }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: n }) {
    const f = n, h = e, a = s(h.modelValue);
    p(() => h.modelValue, (m) => a.value = m, { deep: !0 }), p(a, (m) => f("update:modelValue", m), { deep: !0 });
    const d = s(/* @__PURE__ */ new Date()), l = s(/* @__PURE__ */ new Date());
    Ce(a.value) && typeof a.value < "u" && (l.value = new Date(a.value.getFullYear(), a.value.getMonth(), a.value.getDate()));
    const u = s(l.value.getFullYear()), o = s(l.value.getMonth()), A = s(!1), y = s(D("Y-m", l.value));
    p(A, (m) => {
      m && Q(() => A.value = !1);
    });
    const x = H(() => new Date(u.value, o.value + 1, 0).getDate()), i = H(() => new Date(u.value, o.value, 1).getDay()), c = () => {
      o.value > 11 && (o.value = 0, u.value += 1), o.value += 1, l.value.setFullYear(u.value, o.value), l.value = new Date(l.value), y.value = D("Y-m", l.value);
    }, v = () => {
      o.value < 0 && (o.value = 11, u.value -= 1), o.value -= 1, l.value.setFullYear(u.value, o.value), l.value = new Date(l.value), y.value = D("Y-m", l.value);
    }, E = (m) => typeof a.value > "u" || a.value.getFullYear() !== u.value || a.value.getMonth() !== o.value ? !1 : a.value.getDate() === m, S = (m) => typeof a.value > "u" || d.value.getFullYear() !== u.value || d.value.getMonth() !== o.value ? !1 : d.value.getDate() === m, P = (m) => ({
      "is-picked": E(m),
      "is-today": S(m)
    }), I = (m) => {
      var M;
      typeof a.value > "u" ? a.value = new Date(u.value, o.value, m) : ((M = a.value) == null || M.setFullYear(u.value, o.value, m), a.value = new Date(a.value));
    };
    return p(u, () => {
      l.value.setFullYear(u.value, o.value), l.value = new Date(l.value), y.value = D("Y-m", l.value);
    }, { deep: !0 }), p(o, () => {
      l.value.setFullYear(u.value, o.value), l.value = new Date(l.value), y.value = D("Y-m", l.value);
    }, { deep: !0 }), (m, M) => {
      const Y = L("lkt-button"), O = L("lkt-field");
      return r(), _("div", ze, [
        V("div", Ee, [
          V("header", Se, [
            b(Y, C(F({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-left",
              events: {
                click: v
              }
            })), null, 16),
            b(Y, C(F({
              type: g(Z).Tooltip,
              text: y.value,
              class: "lkt-calendar--header-text"
            })), {
              tooltip: N(() => [
                V("div", Pe, [
                  b(O, z({
                    modelValue: u.value,
                    "onUpdate:modelValue": M[0] || (M[0] = (w) => u.value = w)
                  }, {
                    type: g(K).Number,
                    label: "Year"
                  }), null, 16, ["modelValue"]),
                  b(O, z({
                    modelValue: o.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (w) => o.value = w)
                  }, {
                    type: g(K).Select,
                    label: "Month",
                    options: [
                      { value: 0, label: "1" },
                      { value: 1, label: "2" },
                      { value: 2, label: "3" },
                      { value: 3, label: "4" },
                      { value: 4, label: "5" },
                      { value: 5, label: "6" },
                      { value: 6, label: "7" },
                      { value: 7, label: "8" },
                      { value: 8, label: "9" },
                      { value: 9, label: "10" },
                      { value: 10, label: "11" },
                      { value: 11, label: "12" }
                    ]
                  }), null, 16, ["modelValue"])
                ])
              ]),
              _: 1
            }, 16),
            b(Y, C(F({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-right",
              events: {
                click: c
              }
            })), null, 16)
          ]),
          A.value ? T("", !0) : (r(), _("div", Ie, [
            M[2] || (M[2] = Re('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (r(!0), _(U, null, j(i.value, (w) => (r(), _("div", Ne))), 256)),
            (r(!0), _(U, null, j(x.value, (w) => (r(), B(Y, {
              class: X(["lkt-calendar--day", P(w)]),
              text: w.toString(),
              onClick: () => I(w)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        M[3] || (M[3] = V("div", { class: "display-selected" }, [
          V("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), Oe = {
  install: (e, n) => {
    e.component("lkt-calendar", $e);
  }
}, k = class k {
};
k.lktAppSize = s(Fe.MD), k.lktAdminEnabled = s(!0), k.lktAppLoading = s(!0), k.lktAppReady = s(!1), k.lktAppSetup = s({}), k.lktMainMenu = void 0, k.lktBottomBar = void 0, k.hasMainHeader = !0, k.hasMainMenu = !0, k.hasBottomBar = !0, k.setup = void 0;
let t = k;
const Ue = /* @__PURE__ */ R({
  __name: "LktBottomBar",
  props: {
    lang: { default: "" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = $(), f = s(!1), h = () => {
      var a, d;
      return typeof ((a = t.lktBottomBar) == null ? void 0 : a.modelValue) < "u" && ((d = t.lktBottomBar.modelValue) == null ? void 0 : d.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({ route: n }));
    };
    return p(n, () => {
      f.value = h();
    }, { flush: "pre", immediate: !0, deep: !0 }), (a, d) => {
      const l = L("lkt-menu"), u = L("lkt-loader");
      return r(), _("div", null, [
        e.loading ? (r(), B(u, { key: 1 })) : (r(), B(l, z({ key: 0 }, g(t).lktBottomBar, {
          "menu-key": "lkt-bottom-bar",
          class: "bottom-bar"
        }), null, 16))
      ]);
    };
  }
}), je = {
  key: 0,
  class: "main-header"
}, Ke = { class: "main-header-intro" }, We = /* @__PURE__ */ R({
  __name: "LktMainHeader",
  props: {
    hasMainHeader: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    lang: { default: "" }
  },
  emits: ["update:hasMainHeader"],
  setup(e, { emit: n }) {
    const f = e, h = n, a = $(), d = s(!1), l = s(f.hasMainHeader);
    p(() => f.hasMainHeader, (o) => l.value = o), p(l, (o) => h("update:hasMainHeader", o));
    const u = () => t.hasMainHeader === !0 || typeof t.hasMainHeader == "function" && t.hasMainHeader({
      route: a
    });
    return p(a, () => {
      d.value = u(), l.value = d.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (o, A) => {
      const y = L("lkt-button");
      return d.value ? (r(), _("div", je, [
        V("div", Ke, [
          b(y, C(F({
            type: g(Z).Menu,
            menuKey: "lkt-main-menu"
          })), {
            default: N(() => [...A[0] || (A[0] = [
              V("div", { class: "menu-btn" }, [
                V("div", { class: "menu-btn--icon" })
              ], -1)
            ])]),
            _: 1
          }, 16)
        ])
      ])) : T("", !0);
    };
  }
}), Qe = /* @__PURE__ */ R({
  __name: "LktMainMenu",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = () => q.closeMenu("_");
    return (f, h) => {
      const a = L("lkt-menu"), d = L("lkt-loader");
      return r(), _("div", null, [
        e.loading ? (r(), B(d, { key: 1 })) : (r(), B(a, z({ key: 0 }, g(t).lktMainMenu, {
          "menu-key": "lkt-main-menu",
          onClickOutside: n
        }), null, 16))
      ]);
    };
  }
}), Xe = (e) => {
  t.lktAppReady.value = e;
}, Ze = () => t.lktAppReady, qe = (e) => {
  t.lktAppLoading.value = e;
}, Ge = () => t.lktAppLoading, Tt = /* @__PURE__ */ R({
  __name: "LktAppComponent",
  setup(e) {
    const n = Ze(), f = Ge(), h = s(null), a = s(null), d = $(), l = s("en"), u = s(!1), o = async () => {
      var i, c;
      if ((i = t.setup) != null && i.i18nResource) {
        const v = await W(t.setup.i18nResource);
        Te(v.data);
      }
      if ((c = t.setup) != null && c.setupResource) {
        const v = await W(t.setup.setupResource);
        t.lktAppSetup.value = v.data;
      }
      Q(() => {
        Xe(!0), qe(!1);
      });
    }, A = H(() => {
      let i = [];
      return q.getMenuStatus("lkt-main-menu") && i.push("menu-opened"), y.value && i.push("has-bottom-bar"), u.value && i.push("has-main-header"), i.push(`route-is-${d.name}`), i.join(" ");
    });
    p(h, (i) => {
      ne(h.value);
    }), p(a, (i) => {
      Le(a.value);
    }), xe(async () => {
      await o();
    });
    const y = H(() => {
      var i, c, v;
      return t.lktBottomBar && typeof ((i = t.lktBottomBar) == null ? void 0 : i.modelValue) < "u" && ((v = (c = t.lktBottomBar) == null ? void 0 : c.modelValue) == null ? void 0 : v.length) > 0 && (t.hasBottomBar === !0 || typeof t.hasBottomBar == "function" && t.hasBottomBar({
        route: d
      }));
    }), x = H(() => {
      var i, c, v;
      return t.lktMainMenu && typeof ((i = t.lktMainMenu) == null ? void 0 : i.modelValue) < "u" && ((v = (c = t.lktMainMenu) == null ? void 0 : c.modelValue) == null ? void 0 : v.length) > 0 && (t.hasMainMenu === !0 || typeof t.hasMainMenu == "function" && t.hasMainMenu({
        route: d
      }));
    });
    return p(d, () => {
      x.value, y.value;
    }, { flush: "pre", immediate: !0, deep: !0 }), (i, c) => {
      const v = L("lkt-modal-canvas"), E = L("lkt-toast-canvas"), S = L("router-view"), P = L("lkt-loader");
      return r(), _("div", {
        class: X(["main-content", A.value])
      }, [
        g(n) && !g(f) ? (r(), B(S, { key: 0 }, {
          default: N(({ Component: I }) => [
            b(We, {
              hasMainHeader: u.value,
              "onUpdate:hasMainHeader": c[0] || (c[0] = (m) => u.value = m),
              lang: l.value,
              loading: g(f)
            }, null, 8, ["hasMainHeader", "lang", "loading"]),
            x.value ? (r(), B(Qe, {
              key: 0,
              loading: g(f)
            }, null, 8, ["loading"])) : T("", !0),
            (r(), B(Ye(I))),
            y.value ? (r(), B(Ue, {
              key: 1,
              loading: g(f)
            }, null, 8, ["loading"])) : T("", !0),
            b(v, {
              ref_key: "modalCanvas",
              ref: h
            }, null, 512),
            b(E, {
              ref_key: "toastCanvas",
              ref: a
            }, null, 512)
          ]),
          _: 1
        })) : (r(), B(P, { key: 1 }))
      ], 2);
    };
  }
}), zt = {
  install: (e, n) => {
    n.mainMenu && (t.lktMainMenu = n.mainMenu), n.bottomBar && (t.lktBottomBar = n.bottomBar), n.hasMainHeader && (t.hasMainHeader = n.hasMainHeader), n.hasMainMenu && (t.hasMainMenu = n.hasMainMenu), n.hasBottomBar && (t.hasBottomBar = n.hasBottomBar), n.setup && (t.setup = n.setup), e.provide("lktAppSize", t.lktAppSize), e.provide("lktAdminEnabled", t.lktAdminEnabled), e.provide("lktAppLoading", t.lktAppLoading), e.provide("lktAppReady", t.lktAppReady), e.provide("lktAppSetup", t.lktAppSetup), e.use(se()), e.component("lkt-accordion") === void 0 && e.use(he), e.component("lkt-anchor") === void 0 && e.use(ae), e.component("lkt-banner") === void 0 && e.use(De), e.component("lkt-box") === void 0 && e.use(ve), e.component("lkt-button") === void 0 && e.use(te), e.component("lkt-calendar") === void 0 && e.use(Oe), e.component("lkt-chart") === void 0 && e.use(me), e.component("lkt-counter") === void 0 && e.use(we), e.component("lkt-dot") === void 0 && e.use(Ve), e.component("lkt-field") === void 0 && e.use(J), e.component("lkt-form") === void 0 && e.use(_e), e.component("lkt-header") === void 0 && e.use(Be), e.component("lkt-http-info") === void 0 && e.use(fe), e.component("lkt-icon") === void 0 && e.use(ce), e.component("lkt-image") === void 0 && e.use(Me), e.component("lkt-item-crud") === void 0 && e.use(ue), e.component("lkt-loader") === void 0 && e.use(le), e.component("lkt-menu") === void 0 && e.use(ke), e.component("lkt-modal") === void 0 && e.use(oe), e.component("lkt-paginator") === void 0 && e.use(re), e.component("lkt-polymorphic-element") === void 0 && e.use(de), e.component("lkt-progress") === void 0 && e.use(ye), e.component("lkt-step-process") === void 0 && e.use(pe), e.component("lkt-table") === void 0 && e.use(ee), e.component("lkt-tabs") === void 0 && e.use(He), e.component("lkt-tag") === void 0 && e.use(ie), e.component("lkt-toast") === void 0 && e.use(ge), e.component("lkt-tooltip") === void 0 && e.use(G), e.component("lkt-vue-admin") === void 0 && e.use(be), e.component("lkt-web-page") === void 0 && e.use(Ae);
  }
}, Et = (e) => {
  t.lktAppSize.value = e;
}, St = () => t.lktAppSize, Pt = (e) => {
  t.lktAdminEnabled.value = e;
}, It = () => t.lktAdminEnabled, Nt = () => t.lktAppSetup;
export {
  Tt as LktAppComponent,
  zt as default,
  It as getLktAdminEnabled,
  Nt as getLktAppSetup,
  St as getLktAppSize,
  Pt as setLktAdminEnabled,
  Et as setLktAppSize
};
