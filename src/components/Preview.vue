<template>
    <div class="text-editor__photo-container">
        <div class="text-editor__frame">
            <slot />
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

<style lang="scss" scoped>

.text-editor {
    &__frame {
        position: relative;
        .image-watermark {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100px;
            height: auto;
        }
    }
}
</style>
