<template>
    <div class="text-editor">
        <textarea 
            v-model="text" 
            cols="30" 
            rows="10"
            class="text-editor__input"
            >
        </textarea>
        <preview :content="text"></preview>
    </div>
</template>

<script>
import Preview from './Preview'
    export default {
        component: {
            'preview': Preview
        },
        data () {
            return {
                text: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/style/abstracts/_variables.scss';

.text-editor {
    display: flex;
    flex-direction: row;
    height: 30vh;
    width: 100%;
    &__input {
        border: 0;
        font: inherit;
        outline: none;
        resize: none;
        background: $primary-color-light;
    }

    &__input, &__preview {
        width: 50%;
        height: 100%;
        padding: 20px;
    }

    &__preview {
        background: $primary-color-dark;
        color: $primary-color-text;
    }
}

</style>