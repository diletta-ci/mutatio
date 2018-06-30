<template>
    <div class="text-editor__photo-container">
        <div class="text-editor__frame">
            <div class="text-editor__preview" v-html="markdownText"></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
    export default {
        props: {
            content: {
                type: String,
                default: ''
            }
        },
        computed: {
            markdownText () {
                return marked(this.content, { sanitize: true })
            }
        }
    }
</script>