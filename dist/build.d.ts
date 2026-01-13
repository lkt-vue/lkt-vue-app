declare const Ht: import("vue").DefineComponent<{}, (o: any, l: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare namespace wt {
    function install(e: any, n: any): void;
}
import { getLktAdminEnabled as Dt } from "lkt-vue-kernel";
import { getLktAppSetup as Et } from "lkt-vue-kernel";
import { getLktAppSize as Pt } from "lkt-vue-kernel";
import { setLktAdminEnabled as Wt } from "lkt-vue-kernel";
import { setLktAppSize as $t } from "lkt-vue-kernel";
import { updateMainHeader as zt } from "lkt-vue-kernel";
export { Ht as LktAppComponent, wt as default, Dt as getLktAdminEnabled, Et as getLktAppSetup, Pt as getLktAppSize, Wt as setLktAdminEnabled, $t as setLktAppSize, zt as updateMainHeader };
