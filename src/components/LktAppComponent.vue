<script lang="ts" setup>
import {setCanvas} from "lkt-modal";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {setToastCanvas} from "lkt-toast";
import {useRoute} from "vue-router";
import LktBottomBar from "./global/LktBottomBar.vue";
import LktMainHeader from "./global/LktMainHeader.vue";
import LktMainMenu from "./global/LktMainMenu.vue";
import {
    getLktAppLoading,
    getLktAppReady,
    setLktAppLoading,
    setLktAppReady,
    setLktAppThemeModeConfig,
    AppStateController, MenuController, ThemeModeConfig} from "lkt-vue-kernel";
import {httpCall} from "lkt-http-client";
import {setI18n} from "lkt-i18n";

const ready = getLktAppReady(),
    loading = getLktAppLoading(),
    modalCanvas = ref(null),
    toastCanvas = ref(null),
    route = useRoute();

const currentLang = ref('en');
const hasMainHeader = ref(false);

const loadApp = async () => {
    if (AppStateController.setup?.i18nResource) {
        const i18nResponse = await httpCall(AppStateController.setup.i18nResource);
        setI18n(i18nResponse.data);
    }

    if (AppStateController.setup?.setupResource) {
        const setupResponse = await httpCall(AppStateController.setup.setupResource);
        for (let k in setupResponse.data) {
            if (k === 'preferredThemeMode') {
                setLktAppThemeModeConfig(setupResponse.data[k]);

            } else {
                AppStateController.lktAppSetup.value[k] = setupResponse.data[k];
            }
        }
    }

    nextTick(() => {
        setLktAppReady(true);
        setLktAppLoading(false);
    })
};

const computedContentClass = computed(() => {
    let r = [];

    if (MenuController.getMenuStatus('lkt-main-menu')) r.push('menu-opened');
    if (computedCanRenderBottomBar.value) r.push('has-bottom-bar');
    if (hasMainHeader.value) r.push('has-main-header');
    r.push(`route-is-${route.name}`)

    return r.join(' ');
});

watch(modalCanvas, (v) => {
    setCanvas(modalCanvas.value);
})

watch(toastCanvas, (v) => {
    setToastCanvas(toastCanvas.value);
})

onMounted(async () => {
    setupThemeMode();
    await loadApp();
});

const computedCanRenderBottomBar = computed(() => {
    return AppStateController.lktBottomBar
        && typeof AppStateController.lktBottomBar?.modelValue !== 'undefined'
        && AppStateController.lktBottomBar?.modelValue?.length > 0
        && (AppStateController.hasBottomBar === true || (typeof AppStateController.hasBottomBar === 'function' && AppStateController.hasBottomBar({
            route,
        })))
        ;
})


const computedCanRenderMainMenu = computed(() => {

    if (!AppStateController.lktMainMenu) return false;

    if (!(typeof AppStateController.lktMainMenu.http === 'object' || Array.isArray(AppStateController.lktMainMenu.modelValue))) return false;

    return AppStateController.hasMainMenu === true
        || (typeof AppStateController.hasMainMenu === 'function' && AppStateController.hasMainMenu({route}))
        ;
})

watch(route, () => {
    computedCanRenderMainMenu.value;
    computedCanRenderBottomBar.value;
}, {flush: 'pre', immediate: true, deep: true});

const setupThemeMode = () => {

    AppStateController.lktAppThemeModeDetected.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change',({ matches }) => {
            if (matches) {
                AppStateController.lktAppThemeModeDetected.value = 'dark';
            } else {
                AppStateController.lktAppThemeModeDetected.value = 'light';
            }
        })
}

watch(AppStateController.lktAppThemeModeDetected, (v) => {
    if (AppStateController.lktAppThemeModeConfig.value === ThemeModeConfig.Auto) {
        AppStateController.lktAppThemeMode.value = AppStateController.lktAppThemeModeDetected.value;

    } else if (AppStateController.lktAppThemeModeConfig.value === ThemeModeConfig.Light) {
        AppStateController.lktAppThemeMode.value = 'light'

    } else if (AppStateController.lktAppThemeModeConfig.value === ThemeModeConfig.Dark) {
        AppStateController.lktAppThemeMode.value = 'dark'
    }
})

watch(AppStateController.lktAppThemeModeConfig, (v) => {
    if (AppStateController.lktAppThemeModeConfig.value === ThemeModeConfig.Auto) {
        AppStateController.lktAppThemeMode.value = AppStateController.lktAppThemeModeDetected.value;

    } else if (AppStateController.lktAppThemeModeConfig.value === ThemeModeConfig.Light) {
        AppStateController.lktAppThemeMode.value = 'light'

    } else if (AppStateController.lktAppThemeModeConfig.value === ThemeModeConfig.Dark) {
        AppStateController.lktAppThemeMode.value = 'dark'
    }
})

watch(AppStateController.lktAppThemeMode, (value, oldValue) => {

    let el = document.getElementsByTagName('body')[0];

    el.classList.add(`${value}-mode`);
    el.classList.remove(`${oldValue}-mode`);
})


</script>

<template>
    <div class="main-content" :class="computedContentClass">
        <router-view
            v-if="ready && !loading"
            v-slot="{ Component }"
        >
            <lkt-main-header
                v-model:hasMainHeader="hasMainHeader"
                :lang="currentLang"
                :loading="loading"
            />

            <lkt-main-menu v-if="computedCanRenderMainMenu" :loading="loading"/>

            <div class="view-component">
                <component :is="Component"/>
            </div>

            <lkt-bottom-bar v-if="computedCanRenderBottomBar" :loading="loading"/>

            <lkt-modal-canvas ref="modalCanvas"/>
            <lkt-toast-canvas ref="toastCanvas"/>

        </router-view>
        <lkt-loader v-else/>
    </div>
</template>