<script setup lang="ts">
import {StateControl} from "./../../state/StateControl";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const props = withDefaults(defineProps<{
    lang?: string,
    loading?: boolean,
}>(), {
    lang: '',
    loading: false,
});

const route = useRoute();
const canRender = ref(false);

const checkVisibility = () => {
    return StateControl.lktBottomBar
        && StateControl.lktBottomBar.modelValue?.length > 0
        && (StateControl.hasBottomBar === true || (typeof StateControl.hasBottomBar === 'function' && StateControl.hasBottomBar({
            route,
        })));
}

watch(route, () => {
    canRender.value = checkVisibility();
}, {flush: 'pre', immediate: true, deep: true});
</script>

<template>
    <div>
        <lkt-menu
            v-if="!loading"
            v-bind="StateControl.lktBottomBar"
            menu-key="lkt-bottom-bar"
            class="bottom-bar"
        />
        <lkt-loader v-else/>
    </div>
</template>