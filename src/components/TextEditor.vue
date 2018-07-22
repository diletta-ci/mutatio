<template>
    <div class="text-editor">
        <img :src="image" class="image-main" />
        <textarea 
            v-model="text"
            cols="30" 
            rows="10"
            class="text-editor__input"
            placeholder="Write here your senteces..."
            >
        </textarea>
        <div
            :style="{
                textAlign: align, 
                alignItems: vertAlign,
                color: color.textColor
                }" 
            :gradient="color.gradient"
            >
            <preview 
                :style="style"
                :content="text"
                :watermark-position="watermarkPosition"
                >
                <img 
                    :src="watermark" 
                    class="image-watermark" 
                    :style="watermarkPos"
                    />
            </preview>
        </div>
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
            },
            image: '',
            watermark: '',
            gradient: '',
            watermarkPosition: ''
        },
        component: {
            'preview': Preview
        },
        data() {
            return {
                text: '',
                gradientChoosed: 'rgba(0, 151, 167, 0.6), rgba(255, 165, 0, 0.6)'
            }
        },
        computed: {
            style() {    
                return `background-image: linear-gradient(${this.gradientChoosed}), url(${this.image});`;
            },
            watermarkPos() {
                return `bottom: ${this.watermarkPosition.bottom}; right: ${this.watermarkPosition.right};`
            }
        },
        updated() {
            return this.gradientChoosed = this.color.gradient;
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

    .image-main {
        display: none;
    }
}

</style>