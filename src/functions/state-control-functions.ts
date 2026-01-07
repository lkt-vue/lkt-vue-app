import {Ref} from "vue";
import {AppStateController as StateControl, HeaderConfig} from "lkt-vue-kernel";
import {DataState} from "lkt-data-state";

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

export const updateMainHeader = (config: HeaderConfig): void => {
    if (typeof StateControl.mainHeader.value === 'undefined'){
        StateControl.mainHeader.value = config;
        return;
    }

    let dataState = new DataState(StateControl.mainHeader.value);
    dataState.increment(config);
    StateControl.mainHeader.value = dataState.getData();
}