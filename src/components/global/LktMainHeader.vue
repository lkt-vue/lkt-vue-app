<script setup lang="ts">
import {inject, Ref} from "vue";

const props = withDefaults(defineProps<{
    loading?: boolean,
    lang?: string,
}>(), {
    loading: false,
    lang: '',
});

const menuOpened = <Ref<boolean>>inject('menuOpened');
const onClickMenuButton = () => {
    menuOpened.value = !menuOpened.value;
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