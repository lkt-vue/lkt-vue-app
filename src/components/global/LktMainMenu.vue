<script setup lang="ts">
import {AppStateController, MenuController} from "lkt-vue-kernel";

const props = withDefaults(defineProps<{
    loading?: boolean,
}>(), {
    loading: false,
});

const closeMenu = () => MenuController.closeMenu('_');
</script>

<template>
    <div >
        <lkt-menu
            v-if="!loading"
            v-bind="AppStateController.lktMainMenu"
            menu-key="lkt-main-menu"
            @click-outside="closeMenu"
        />
        <lkt-loader v-else/>
    </div>
</template>