<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {AppStateController} from "lkt-vue-kernel";

const props = withDefaults(defineProps<{
    lang?: string,
    loading?: boolean,
}>(), {
    lang: '',
    loading: false,
});

const route = useRoute();
const canRender = ref(false);

const checkVisibility = (): boolean => {
    return typeof AppStateController.lktBottomBar?.modelValue !== 'undefined'
        && AppStateController.lktBottomBar.modelValue?.length > 0
        && (
            AppStateController.hasBottomBar === true
            || (typeof AppStateController.hasBottomBar === 'function' && AppStateController.hasBottomBar({route}))
        );
}

watch(route, () => {
    canRender.value = checkVisibility();
}, {flush: 'pre', immediate: true, deep: true});
</script>

<template>
    <div>
        <lkt-menu
            v-if="!loading"
            v-bind="AppStateController.lktBottomBar"
            menu-key="lkt-bottom-bar"
            class="bottom-bar"
        />
        <lkt-loader v-else/>
    </div>
</template>