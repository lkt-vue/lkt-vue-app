declare const At: import("vue").DefineComponent<{}, (n: any, r: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare namespace gt {
    function install(e: any, o: any): void;
}
import { getLktAdminEnabled as Tt } from "lkt-vue-kernel";
import { getLktAppSetup as bt } from "lkt-vue-kernel";
import { getLktAppSize as Ht } from "lkt-vue-kernel";
import { setLktAdminEnabled as Rt } from "lkt-vue-kernel";
import { setLktAppSize as Vt } from "lkt-vue-kernel";
import { updateMainHeader as wt } from "lkt-vue-kernel";
export { At as LktAppComponent, gt as default, Tt as getLktAdminEnabled, bt as getLktAppSetup, Ht as getLktAppSize, Rt as setLktAdminEnabled, Vt as setLktAppSize, wt as updateMainHeader };
