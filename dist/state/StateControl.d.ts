import { Ref } from "vue";
import { AppSize, Menu } from "lkt-vue-kernel";
export declare class StateControl {
    static lktAppSize: Ref<AppSize>;
    static lktAdminEnabled: Ref<boolean>;
    static lktAppLoading: Ref<boolean>;
    static lktAppReady: Ref<boolean>;
    static lktMainMenu?: Menu;
    static lktBottomBar?: Menu;
}
