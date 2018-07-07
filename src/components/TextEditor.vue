<template>
    <div class="text-editor">
        <textarea 
            v-model="text"
            cols="30" 
            rows="10"
            class="text-editor__input"
            placeholder="Write here your senteces..."
            >
        </textarea>
        <preview 
            :style="{ 
                textAlign: align, 
                alignItems: vertAlign,
                color: color.textColor
                }" 
            :content="text"
            :class="color.gradient"
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
        background: {
            size: cover;
            position: center;
        }
        box-shadow: 0 2px 8px rgba(54, 54, 54, 0.46);
    }
    .gradient {
        &__1 {
            background-image: linear-gradient(rgba(0, 151, 167, 0.6), rgba(255, 165, 0, 0.6)),
            url('../assets/media/images/ananas.jpeg');
        }
        &__2 {
            background-image: linear-gradient(19deg, rgba(33, 212, 253, 0.6) 0%, rgba(183, 33, 255, 0.6) 100%),
            url('../assets/media/images/ananas.jpeg');
        }
        &__3 {
            background-image: linear-gradient(45deg, rgba(250, 139, 255, 0.6) 0%, rgba(43, 210, 255, 0.6) 52%, rgba(43, 255, 136, 0.6) 90%),
            url('../assets/media/images/ananas.jpeg');

        }
        &__4 {
            background-image: linear-gradient(0deg, rgba(255, 222, 233, 0.6) 0%, rgba(181, 255, 252, 0.6) 100%),
            url('../assets/media/images/ananas.jpeg');
        }
        &__5 {
            background-image: linear-gradient(19deg, rgba(62, 236, 172, 0.6) 0%, rgba(238, 116, 255, 0.6) 100%),
            url('../assets/media/images/ananas.jpeg');
        }
        &__6 {
            background-image: linear-gradient(0deg, rgba(8, 174, 234, 0.6) 0%, rgba(42, 245, 152, 0.6) 100%),
            url('../assets/media/images/ananas.jpeg');
        }
    }
}

</style>