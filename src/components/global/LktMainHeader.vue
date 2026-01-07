<script setup lang="ts">
import {AnchorType, AppStateController, ButtonConfig, ButtonType, HeaderConfig} from "lkt-vue-kernel";
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";

const props = withDefaults(defineProps<{
    hasMainHeader?: boolean,
    loading?: boolean,
    lang?: string,
}>(), {
    hasMainHeader: false,
    loading: false,
    lang: '',
});

const emit = defineEmits(['update:hasMainHeader']);

const route = useRoute();
const canRender = ref(false);
const replaceMainMenuButtonWithBack = ref(false);
const hasMainHeaderRef = ref(props.hasMainHeader)

watch(() => props.hasMainHeader, (v) => hasMainHeaderRef.value = v);
watch(hasMainHeaderRef, (v) => emit('update:hasMainHeader', v));

const checkVisibility = () => {
    return (AppStateController.hasMainHeader === true || (typeof AppStateController.hasMainHeader === 'function' && AppStateController.hasMainHeader({
        route
    })));
}

const checkReplaceMainMenuButtonWithBack = () => {
    return (AppStateController.replaceMainMenuButtonWithBack === true || (typeof AppStateController.replaceMainMenuButtonWithBack === 'function' && AppStateController.replaceMainMenuButtonWithBack({
        route
    })));
}

watch(route, () => {
    canRender.value = checkVisibility();
    replaceMainMenuButtonWithBack.value = checkReplaceMainMenuButtonWithBack();
    hasMainHeaderRef.value = canRender.value;
}, {flush: 'pre', immediate: true, deep: true});

const computedMainHeaderConfig = computed(() => {
    return <HeaderConfig>{
        ...AppStateController.mainHeader.value,
    }
})
</script>

<template>
<div class="main-header"
     v-if="canRender">
    <div class="main-header-intro" v-if="false">
        <lkt-button v-if="replaceMainMenuButtonWithBack" v-bind="<ButtonConfig>{
            type: ButtonType.Anchor,
            anchor: {
                type: AnchorType.RouterLinkBack,
                icon: 'lkt-icn-arrow-left',
            }
        }">
        </lkt-button>
        <lkt-button v-else v-bind="<ButtonConfig>{
            type: ButtonType.Menu,
            menuKey: 'lkt-main-menu',
        }">
            <div class="menu-btn">
                <div class="menu-btn--icon"/>
            </div>
        </lkt-button>
    </div>

    <lkt-header v-bind="computedMainHeaderConfig"/>
</div>
</template>