<script setup lang="ts">
import {inject, Ref} from "vue";
import {StateControl} from "../../state/StateControl";

const props = withDefaults(defineProps<{
    loading?: boolean,
}>(), {
    loading: false,
});

const menuOpened = <Ref<boolean>>inject('menuOpened');

const closeMenu = () => menuOpened.value = false;
</script>

<template>
    <div >
        <lkt-menu
            v-if="!loading"
            v-bind="StateControl.lktMainMenu"
            class="lkt-main-menu"
            :class="menuOpened ? 'menu-opened' : ''"
            @click-outside="menuOpened = false"
        />
        <lkt-loader v-else/>
    </div>
</template>