import { Ref } from "vue";
import { AppSize, HeaderConfig, LktObject, Menu } from "lkt-vue-kernel";
import { AppSetupConfig } from "../config/partials/AppSetupConfig";
import { RouteLocationNormalizedLoaded } from "vue-router";
export declare class StateControl {
    static lktAppSize: Ref<AppSize>;
    static lktAdminEnabled: Ref<boolean>;
    static lktAppLoading: Ref<boolean>;
    static lktAppReady: Ref<boolean>;
    static lktAppSetup: Ref<LktObject>;
    static lktMainMenu?: Menu;
    static lktBottomBar?: Menu;
    static hasMainHeader?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static hasMainMenu?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static hasBottomBar?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static replaceMainMenuButtonWithBack?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static setup?: AppSetupConfig;
    static mainHeader: Ref<HeaderConfig | undefined>;
}
