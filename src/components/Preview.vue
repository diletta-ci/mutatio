<template>
    <div class="text-editor__photo-container" id="captureImage">
        <div class="text-editor__frame" :style="{ marginTop: `${vertAlign}px` }">
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
            },
            vertAlign: {
                type: String,
                default: '0px'
            }
        },
        computed: {
            markdownText() {
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
            width: 100px;
            height: auto;
        }
    }
}
</style>
