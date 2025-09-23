import {ref, Ref} from "vue";
import {AppSize} from "lkt-vue-kernel";

export class StateControl {

    static lktAppSize: Ref<AppSize> = ref(AppSize.MD);
    static lktAdminEnabled: Ref<boolean> = ref(true);
}