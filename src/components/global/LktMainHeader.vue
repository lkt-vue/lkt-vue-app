<script setup lang="ts">
import {inject, nextTick, ref} from "vue";
import {MenuController} from "lkt-vue-kernel";

const props = withDefaults(defineProps<{
    loading?: boolean,
    lang?: string,
}>(), {
    loading: false,
    lang: '',
});

const menuOpened = ref(false);
const onClickMenuButton = () => {
    MenuController.toggleMenu('lkt-main-menu');
    nextTick(() => {
        menuOpened.value = MenuController.getMenuStatus('lkt-main-menu');
    })
}
</script>

<template>
<div class="main-header">
    <div class="main-header-intro">
        <div class="menu-btn" @click="onClickMenuButton" :class="menuOpened ? 'open' : ''">
            <div class="menu-btn--icon"/>
        </div>
    </div>
</div>
</template>