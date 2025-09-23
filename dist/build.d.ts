declare const io: import("vue").DefineComponent<{}, (n: any, Ct: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare namespace lo {
    function install(t: any, e: any): void;
}
declare function uo(): import("vue").Ref<boolean, boolean>;
declare function mo(): import("vue").Ref<vt, vt>;
declare function so(t: any): void;
declare function ro(t: any): void;
import { AppSize as vt } from "lkt-vue-kernel";
export { io as LktAppComponent, lo as default, uo as getLktAdminEnabled, mo as getLktAppSize, so as setLktAdminEnabled, ro as setLktAppSize };
