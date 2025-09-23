import m from "lkt-tooltip";
import n from "lkt-field";
import r from "lkt-table";
import k from "lkt-button";
import f from "lkt-anchor";
import d from "lkt-loader";
import l from "lkt-modal";
import s from "lkt-item-crud";
import c from "lkt-tag";
import { getVuexStore as u } from "lkt-vuex-tools";
import L from "lkt-paginator";
import v from "lkt-charts";
import A from "lkt-icon";
import b from "lkt-box";
import g from "lkt-menu";
import h from "lkt-http-info";
import z from "lkt-step-process";
import E from "lkt-accordion";
import S from "lkt-progress";
import x from "lkt-image";
import I from "lkt-toast";
import P from "lkt-header";
import T from "lkt-form";
import B from "lkt-vue-admin";
import M from "lkt-web-page";
import V from "lkt-counter";
import D from "lkt-dot";
import F from "lkt-banner-box";
import { ref as e } from "vue";
import { AppSize as H } from "lkt-vue-kernel";
const i = class i {
};
i.lktAppSize = e(H.MD), i.lktAdminEnabled = e(!0);
let t = i;
const so = {
  install: (o, w) => {
    o.provide("lktAppSize", t.lktAppSize), o.provide("lktAdminEnabled", t.lktAdminEnabled), o.use(u()), o.component("lkt-accordion") === void 0 && o.use(E), o.component("lkt-anchor") === void 0 && o.use(f), o.component("lkt-banner") === void 0 && o.use(F), o.component("lkt-box") === void 0 && o.use(b), o.component("lkt-button") === void 0 && o.use(k), o.component("lkt-chart") === void 0 && o.use(v), o.component("lkt-counter") === void 0 && o.use(V), o.component("lkt-dot") === void 0 && o.use(D), o.component("lkt-field") === void 0 && o.use(n), o.component("lkt-form") === void 0 && o.use(T), o.component("lkt-header") === void 0 && o.use(P), o.component("lkt-http-info") === void 0 && o.use(h), o.component("lkt-icon") === void 0 && o.use(A), o.component("lkt-image") === void 0 && o.use(x), o.component("lkt-item-crud") === void 0 && o.use(s), o.component("lkt-loader") === void 0 && o.use(d), o.component("lkt-menu") === void 0 && o.use(g), o.component("lkt-modal") === void 0 && o.use(l), o.component("lkt-paginator") === void 0 && o.use(L), o.component("lkt-progress") === void 0 && o.use(S), o.component("lkt-step-process") === void 0 && o.use(z), o.component("lkt-table") === void 0 && o.use(r), o.component("lkt-tag") === void 0 && o.use(c), o.component("lkt-toast") === void 0 && o.use(I), o.component("lkt-tooltip") === void 0 && o.use(m), o.component("lkt-vue-admin") === void 0 && o.use(B), o.component("lkt-web-page") === void 0 && o.use(M);
  }
}, co = (o) => {
  t.lktAppSize.value = o;
}, uo = () => t.lktAppSize, Lo = (o) => {
  t.lktAdminEnabled.value = o;
}, vo = () => t.lktAdminEnabled;
export {
  so as default,
  vo as getLktAdminEnabled,
  uo as getLktAppSize,
  Lo as setLktAdminEnabled,
  co as setLktAppSize
};
