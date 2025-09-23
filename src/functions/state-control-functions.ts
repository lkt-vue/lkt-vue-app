import {StateControl} from "../state/StateControl";
import {Ref} from "vue";

export const setLktAppReady = (state: boolean) => {
    StateControl.lktAppReady.value = state;
}

export const getLktAppReady = (): Ref<boolean> => {
    return StateControl.lktAppReady;
}

export const setLktAppLoading = (state: boolean) => {
    StateControl.lktAppLoading.value = state;
}

export const getLktAppLoading = (): Ref<boolean> => {
    return StateControl.lktAppLoading;
}