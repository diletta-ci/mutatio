<template>
    <form class="controls">
        <h3 class="title-primary">{{ titleControl }}</h3>
        <slot />
    </form>
</template>

<script>
    export default {
        props: {
            titleControl: {
                type: String,
                default: 'New Control'
            }
        }
    }
</script>

<style scoped>

</style>