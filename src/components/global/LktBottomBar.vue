<script setup lang="ts">
import {StateControl} from "@/state/StateControl";

const props = withDefaults(defineProps<{
    lang?: string,
    loading?: boolean,
}>(), {
    lang: '',
    loading: false,
});
</script>

<template>
    <div>
        <lkt-menu
            v-if="!loading"
            v-bind="StateControl.lktBottomBar"
            class="bottom-bar"
        />
        <lkt-loader v-else/>
    </div>
</template>