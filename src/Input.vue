<template>
    <div class="wrapper">
        <input type="text" :class="{error}" :value="value" :disabled="disabled" :readonly="readonly">
        <g-icon name="config"></g-icon>
        <span class="errorMessage">{{error}}</span>
    </div>
</template>

<script>
    import Icon from './Icon';

    export default {
        components: {Icon},
        name: 'GuluInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean
            },
            readonly: {
                type: Boolean
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;  $border-color: #999;  $border-color-hover: #666;  $border-color-focus: #666;  $border-radius: 4px;  $font-size: 12px;  $box-shadow-color: rgba(0,0,0,0.5);  $red: #F1453D;
    .wrapper {
        display: inline-block; font-size:  $font-size;
        > input { height: $height; border: 1px solid $border-color; border-radius: $border-radius;
            &:hover { border-color: $border-color-hover; }
            &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
            &[disabled] { border-color: #bbb; color: #bbb; cursor: not-allowed; }
            &[readonly] { border-color: #bbb; color: #bbb; cursor: not-allowed; }
            &.error { border-color: $red; }
        }
        > .icon { fill: $red;}
        > .errorMessage { color: $red;}
        > :not(:last-child) {
            margin-right: .5em;
        }
    }
</style>