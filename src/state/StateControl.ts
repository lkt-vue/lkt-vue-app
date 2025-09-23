import {ref, Ref} from "vue";
import {AppSize, Menu} from "lkt-vue-kernel";

export class StateControl {

    static lktAppSize: Ref<AppSize> = ref(AppSize.MD);
    static lktAdminEnabled: Ref<boolean> = ref(true);
    static lktAppLoading: Ref<boolean> = ref(true);
    static lktAppReady: Ref<boolean> = ref(false);

    static lktMainMenu?: Menu = undefined;
    static lktBottomBar?: Menu = undefined;
}