<script setup lang="ts">
import {ButtonConfig, ButtonType} from "lkt-vue-kernel";

const props = withDefaults(defineProps<{
    loading?: boolean,
    lang?: string,
}>(), {
    loading: false,
    lang: '',
});
</script>

<template>
<div class="main-header">
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