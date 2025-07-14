<template>
    <div
        class="inline-flex"
        flex="~ col items-center"
        perspective="origin-top [25rem]"
    >
        <slot></slot>
        <div
            position="absolute top-0"
            op="50"
            filter="blur-2"
            transform="origin-bottom rotate-x-270"
            style="mask-image: linear-gradient(to top, white, transparent);"
        >
            <slot></slot>
        </div>
    </div>
</template>
