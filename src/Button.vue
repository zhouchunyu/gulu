<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <div class="content"><slot></slot></div>
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
    </button>
</template>

<script>
    export default {
        props: ['icon', 'iconPosition']
    }
</script>

<style lang="sass">
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 var(--button-padding);
        background: var(--button-bg);
        border-radius: var(--border-radius);
        color: var(--button-color);
        border: 1px solid var(--border-color);
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        &:hover {
            border: 1px solid var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        &.icon-right {
            > .content { order: 1;}
            > .icon { order: 2; margin-right: 0; margin-left: .3em;}
        }
    }
</style>