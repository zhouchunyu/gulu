<template>
    <button class="g-button" :class="[`icon-${iconPosition}`]" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="icon && loading" :name="icon" class="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            'icon': {}, 'iconPosition': {
                type: String, default: 'left', validator(value) {
                    return !(value !== 'left' && value !== 'right')
                }
            }, 'loading': {type: Boolean, default: false}
        }

    }
</script>

<style lang="scss">
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
        .loading {
            animation: spin 1.5s infinite linear;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
    }
</style>