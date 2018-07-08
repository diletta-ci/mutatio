<template>
  <div class="home">
    <section class="header">
      <h1 class="heading-primary__light">Mutatio</h1>
      <h2 class="heading-secondary__light">UI Photo Editor</h2>
    </section>
    <section class="editor">
      <h2 class="heading-secondary">Edit your Photo</h2>
      <div v-if="!image">
          <form class="controls-photoupload" action=""> 
          <label for="fileupload">Select a photo to edit</label>
          <input type="file" @change="onFileChange" name="fileupload" value="fileupload" id="fileupload"> 
        </form>
      </div>
      <div v-else>
        <button @click="removeImage">Remove image</button>
      </div>
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
        <form class="controls-color__text">
          <h3 class="title-primary">Text Color</h3>
          <input type="color" id="textColor" v-model="color.textColor">
          <label for="textColor">Choose the text color</label><br>
        </form>
        <form class="controls-color__gradient">
          <h3 class="title-primary">Gradient Background</h3>
          <div class="picker">
          <button v-on:click="changeColor" id="gradient__1" class="picker--gradient gradient__1"></button>
          <button v-on:click="changeColor" id="gradient__2" class="picker--gradient gradient__2"></button>
          <button v-on:click="changeColor" id="gradient__3" class="picker--gradient gradient__3"></button>
          </div>
          <div class="picker">
          <button v-on:click="changeColor" id="gradient__4" class="picker--gradient gradient__4"></button>
          <button v-on:click="changeColor" id="gradient__5" class="picker--gradient gradient__5"></button>
          <button v-on:click="changeColor" id="gradient__6" class="picker--gradient gradient__6"></button>
          </div>
        </form>
      </div>
      <text-editor
        :align="textAlign"
        :vertAlign="itemAlign"
        :color="color"
        :class="color.gradient"
        :image="image"
        >
          
        </text-editor>
      <trello-board></trello-board>
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
      itemAlign: '',
      color: {
        textColor: '',
        gradient: ''
      },
      image: ''
    }
  },
  methods: {
    changeColor(event) {
      this.color.gradient = event.currentTarget.id;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
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

    .picker {
      display: flex;
      justify-content: space-between;
      &--gradient {
        width: 50px;
        height: 50px;
        margin: 0.5rem;
      } 
    }

    .gradient {
      &__1 {
        background: linear-gradient(pink, orange);
      }
      &__2 {
        background: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
      }
      &__3 {
        background: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
      }
      &__4 {
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
      }
      &__5 {
        background-image: linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%);
      }
      &__6 {
        background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
      }
    }
  }
}
</style>


