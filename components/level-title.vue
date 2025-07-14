<script lang="ts" setup>
    defineProps<{
        level?: number;
    }>();
</script>

<template>
    <h1 flex="~ gap-2.5">
        <span v-if="level !== void 0">#{{ level }}</span>
        <span><slot></slot></span>
    </h1>
</template>
