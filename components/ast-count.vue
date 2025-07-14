<script lang="ts" setup>
    import { computed } from "vue";

    const props = defineProps<{
        count: unknown | unknown[];
    }>();

    const counts = computed(() => {
        return Array.isArray(props.count) ? props.count : [props.count];
    });
</script>

<template>
    <span text="#FFD602" p="x-1">
        [<span v-for="(c, i) in counts">
            <span v-if="i" text="white/33"> / </span>
            <span text="#8CEC94">x{{ c }}</span>
        </span>]
    </span>
</template>
