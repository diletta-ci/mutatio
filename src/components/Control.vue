<template>
    <input :type="inputType" :id="inputId" :value="inputId">
    <!-- <label :for="inputId">{{ inputId }}</label><br> -->
</template>

<script>
    export default {
        props: {
            inputType: {
                type: String,
                default: '',
                required: true
            },
            inputId: {
                type: String,
                default: '',
                required: true
            }
        }
    }
</script>

<style scoped>

</style>