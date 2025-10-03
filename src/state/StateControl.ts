import {ref, Ref} from "vue";
import {AppSize, LktObject, Menu} from "lkt-vue-kernel";
import {AppSetupConfig} from "../config/partials/AppSetupConfig";

export class StateControl {

    static lktAppSize: Ref<AppSize> = ref(AppSize.MD);
    static lktAdminEnabled: Ref<boolean> = ref(true);
    static lktAppLoading: Ref<boolean> = ref(true);
    static lktAppReady: Ref<boolean> = ref(false);
    static lktAppSetup: Ref<LktObject> = ref({});

    static lktMainMenu?: Menu = undefined;
    static lktBottomBar?: Menu = undefined;

    static hasMainHeader?: boolean | (() => boolean) = true;
    static hasMainMenu?: boolean | (() => boolean) = true;
    static hasBottomBar?: boolean | (() => boolean) = true;

    static setup?: AppSetupConfig = undefined;
}