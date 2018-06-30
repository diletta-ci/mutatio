<template>
    <div class="text-editor__preview" v-html="markdownText">
        
    </div>
</template>

<script>
import marked from 'marked'
    export default {
        props: ['content'],
        computed: {
            markdownText () {
                return marked(this.content, { sanitize: true })
            }
        }
    }
</script>

<style scoped>

</style>