import { Ref } from "vue";
import { AppSize, LktObject, Menu } from "lkt-vue-kernel";
import { AppSetupConfig } from "../config/partials/AppSetupConfig";
export declare class StateControl {
    static lktAppSize: Ref<AppSize>;
    static lktAdminEnabled: Ref<boolean>;
    static lktAppLoading: Ref<boolean>;
    static lktAppReady: Ref<boolean>;
    static lktAppSetup: Ref<LktObject>;
    static lktMainMenu?: Menu;
    static lktBottomBar?: Menu;
    static hasMainHeader?: boolean | (() => boolean);
    static hasMainMenu?: boolean | (() => boolean);
    static hasBottomBar?: boolean | (() => boolean);
    static setup?: AppSetupConfig;
}
