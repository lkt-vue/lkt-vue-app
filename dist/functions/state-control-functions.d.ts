import { Ref } from "vue";
import { HeaderConfig } from "lkt-vue-kernel";
export declare const setLktAppReady: (state: boolean) => void;
export declare const getLktAppReady: () => Ref<boolean>;
export declare const setLktAppLoading: (state: boolean) => void;
export declare const getLktAppLoading: () => Ref<boolean>;
export declare const updateMainHeader: (config: HeaderConfig) => void;
