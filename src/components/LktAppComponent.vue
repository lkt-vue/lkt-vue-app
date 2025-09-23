<script lang="ts" setup>
import {setCanvas} from "lkt-modal";
import {computed, inject, nextTick, onMounted, Ref, ref, watch} from "vue";
import {setToastCanvas} from "lkt-toast";
import {useRoute} from "vue-router";
import LktBottomBar from "./global/LktBottomBar.vue";
import LktMainHeader from "./global/LktMainHeader.vue";
import LktMainMenu from "./global/LktMainMenu.vue";
import {StateControl} from "./../state/StateControl";
import {getLktAppLoading, getLktAppReady, setLktAppLoading, setLktAppReady} from "./../functions/state-control-functions";
import {MenuController} from "lkt-vue-kernel";

const ready = getLktAppReady(),
    loading = getLktAppLoading(),
    modalCanvas = ref(null),
    toastCanvas = ref(null),
    route = useRoute();

const currentLang = ref('en');

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
    return StateControl.lktBottomBar && StateControl.lktBottomBar.modelValue?.length > 0;
})

const computedCanRenderMainMenu = computed(() => {
    return StateControl.lktMainMenu && StateControl.lktMainMenu.modelValue?.length > 0;
})
</script>

<template>
    <div class="main-content" :class="computedContentClass">
        <router-view
            v-if="ready && !loading"
            v-slot="{ Component }"
        >
            <lkt-main-header
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