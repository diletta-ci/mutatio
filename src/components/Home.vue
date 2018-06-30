<template>
  <div class="home">
    <section class="header">
      <h1 class="heading-primary__light">Mutatio</h1>
      <h2 class="heading-secondary__light">UI Photo Editor</h2>
    </section>
    <section class="editor">
      <h2 class="heading-secondary">Edit your Photo</h2>
      <text-editor></text-editor>
      <div class="editor-photo-container">
        <div class="editor-photo-container__frame">
          <p class="user-text">{{ sentence }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sentence: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/abstracts/_variables.scss';

.header {
  background-color: $primary-color;
}

.editor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem;

  &-photo-container {
    padding: 2rem;
  
    &__frame {
      height: 400px;
      width: 400px;
      background: {
        image: url('../assets/media/images/ananas.jpeg');
        size: cover;
        position: center;
      }
      box-shadow: 0 2px 8px rgba(54, 54, 54, 0.46);
      .user-text {
        color: $primary-color-text;
        text-align: center;
      }
    }
  }
}
</style>


