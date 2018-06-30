<template>
  <div class="home">
    <section class="header">
      <h1 class="heading-primary__light">Mutatio</h1>
      <h2 class="heading-secondary__light">UI Photo Editor</h2>
    </section>
    <section class="editor">
      <h2 class="heading-secondary">Edit your Photo</h2>
      <div class="controls">
        <form class="controls-align__horizontal">
          <h3 class="title-primary">Horizontal Text Align</h3>
          <input type="radio" id="left" value="left" v-model="textAlign">
          <label for="left">Left</label><br>
          <input type="radio" id="center" value="center" v-model="textAlign">
          <label for="center">Center</label><br>
          <input type="radio" id="right" value="right" v-model="textAlign">
          <label for="right">Right</label><br>
        </form>
        <form class="controls-align__vertical">
          <h3 class="title-primary">Vertical Text Align</h3>
          <input type="radio" id="start" value="flex-start" v-model="itemAlign">
          <label for="start">Start</label><br>
          <input type="radio" id="center" value="center" v-model="itemAlign">
          <label for="center">Center</label><br>
          <input type="radio" id="bottom" value="flex-end" v-model="itemAlign">
          <label for="bottom">Bottom</label><br>
        </form>
      </div>
      <text-editor
        :align="textAlign"
        :vertAlign="itemAlign"
        ></text-editor>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sentence: '',
      textAlign: '',
      itemAlign: ''
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
  height: 800px;
  padding-top: 10rem;

  .controls {
    display: flex;
    justify-content: space-around;
    padding-bottom: 4rem;
  }
}
</style>


