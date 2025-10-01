<script setup lang="ts">
import {ButtonConfig, ButtonType} from "lkt-vue-kernel";
import {computed, ref, watch} from "vue";
import {StateControl} from "@/state/StateControl";
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
const hasMainHeaderRef = ref(props.hasMainHeader)

watch(() => props.hasMainHeader, (v) => hasMainHeaderRef.value = v);
watch(hasMainHeaderRef, (v) => emit('update:hasMainHeader', v));

const checkVisibility = () => {
    return (StateControl.hasMainHeader === true || (typeof StateControl.hasMainHeader === 'function' && StateControl.hasMainHeader({
        route
    })));
}

watch(route, () => {
    canRender.value = checkVisibility();
    hasMainHeaderRef.value = canRender.value;
}, {flush: 'pre', immediate: true, deep: true});
</script>

<template>
<div class="main-header"
     v-if="canRender">
    <div class="main-header-intro">
        <lkt-button v-bind="<ButtonConfig>{
            type: ButtonType.Menu,
            menuKey: 'lkt-main-menu',
        }">
            <div class="menu-btn">
                <div class="menu-btn--icon"/>
            </div>
        </lkt-button>
    </div>
</div>
</template>