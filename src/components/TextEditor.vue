<template>
    <div class="text-editor">
        <textarea 
            v-model="text"
            cols="30" 
            rows="10"
            class="text-editor__input"
            placeholder="Write here your senteces..."
            :color="color" 
            >
        </textarea>
        <preview 
            v-bind:style="{ 
                textAlign: align, 
                alignItems: vertAlign,
                }" 
            :content="text"
            >
        </preview>
    </div>
</template>

<script>
import Preview from './Preview'
    export default {
        props: {
            align: {
                type: String,
                default: ''
            },
            vertAlign: {
                type: String,
                default: ''
            },
            color: {
                type: Object,
                default: {}
            }
        },
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
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10rem;
    &__input {
        border: 0;
        font: inherit;
        outline: none;
        resize: none;
        background: $primary-color-dark;
        color: $primary-color-text;
    }

    &__input {
        width: 30%;
        height: 600px;
        padding: 20px;
        &::placeholder {
            color: white;
        }
    }

    &__photo-container {
        display: grid;
        height: 600px;
        width: 600px;
        padding: 20px;
        background-image: linear-gradient(
            to right bottom, 
            rgba($primary-color-text, 0.8), 
            rgba($primary-text-color, 0.8)),
            url('../assets/media/images/ananas.jpeg');
        background: {
            size: cover;
            position: center;
        }
        box-shadow: 0 2px 8px rgba(54, 54, 54, 0.46);
    }
}

</style>