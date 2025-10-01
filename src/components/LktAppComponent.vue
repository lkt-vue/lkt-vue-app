<script lang="ts" setup>
import {setCanvas} from "lkt-modal";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {setToastCanvas} from "lkt-toast";
import {useRoute} from "vue-router";
import LktBottomBar from "./global/LktBottomBar.vue";
import LktMainHeader from "./global/LktMainHeader.vue";
import LktMainMenu from "./global/LktMainMenu.vue";
import {StateControl} from "./../state/StateControl";
import {
    getLktAppLoading,
    getLktAppReady,
    setLktAppLoading,
    setLktAppReady
} from "./../functions/state-control-functions";
import {MenuController} from "lkt-vue-kernel";

const ready = getLktAppReady(),
    loading = getLktAppLoading(),
    modalCanvas = ref(null),
    toastCanvas = ref(null),
    route = useRoute();

const currentLang = ref('en');
const hasMainHeader = ref(false);

const loadApp = async () => {
        // @todo (config in order to auto fetch i18n, initial config, etc.)

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
    await loadApp();
});

const computedCanRenderBottomBar = computed(() => {
    return StateControl.lktBottomBar
        && StateControl.lktBottomBar.modelValue?.length > 0
        && (StateControl.hasBottomBar === true || (typeof StateControl.hasBottomBar === 'function' && StateControl.hasBottomBar({
            route,
        })))
        ;
})



const computedCanRenderMainMenu = computed(() => {
    return StateControl.lktMainMenu
        && StateControl.lktMainMenu.modelValue?.length > 0
        && (StateControl.hasMainMenu === true || (typeof StateControl.hasMainMenu === 'function' && StateControl.hasMainMenu({
            route
        })))
        ;
})

watch(route, () => {
    computedCanRenderMainMenu.value;
    computedCanRenderBottomBar.value;
}, {flush: 'pre', immediate: true, deep: true});
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

            <component :is="Component"/>

            <lkt-bottom-bar v-if="computedCanRenderBottomBar" :loading="loading"/>

            <lkt-modal-canvas ref="modalCanvas"/>
            <lkt-toast-canvas ref="toastCanvas"/>

        </router-view>
        <lkt-loader v-else/>
    </div>
</template>