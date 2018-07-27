<template>
    <button class="g-button">hi</button>
</template>

<script>
    export default {}
</script>

<style lang="sass">
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 var(--button-padding);
        background: var(--button-bg);
        border-radius:  var(--border-radius);
        color: var(--button-color);
        border: 1px solid var(--border-color);
        &:hover {
            border: 1px solid var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }

    }
</style>