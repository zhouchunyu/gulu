<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
        <div style="border: 1px solid black">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'span': {
                type: [Number, String]
            },
            'offset': {
                type: [Number, String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col{
        height: 100px;
        border: 1px solid red;
        width: 50%;
        padding: 0 10px;
    }

    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
    $offset-prefix: offset-;
    @for $n from 1 through 24 {
        &.#{$offset-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }
</style>