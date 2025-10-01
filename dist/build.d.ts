declare const ce: import("vue").DefineComponent<{}, (n: any, C: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare namespace ke {
    function install(t: any, o: any): void;
}
declare function pe(): import("vue").Ref<boolean, boolean>;
declare function ve(): import("vue").Ref<yt, yt>;
declare function he(t: any): void;
declare function fe(t: any): void;
import { AppSize as yt } from "lkt-vue-kernel";
export { ce as LktAppComponent, ke as default, pe as getLktAdminEnabled, ve as getLktAppSize, he as setLktAdminEnabled, fe as setLktAppSize };
