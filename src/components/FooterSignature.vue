<template>
    <footer class="footer-signature">
        <p>proudly powered by 
            <a href="https://github.com/GiodiCi/mutatio" target="blank">
                Diletta - Giodi Ci
            </a>
        </p>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/style/abstracts/_variables.scss';

.footer-signature {
    text-align: center;
    padding-bottom: 1em;
    font-size: 0.8em;
    a {
        text-decoration: none;
        color: $primary-color-dark;
        &:hover, &:focus {
            color: $primary-color;
        }
    }
}
</style>