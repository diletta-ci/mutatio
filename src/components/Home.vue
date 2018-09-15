<template>
  <div class="home">
    <section class="header">
      <h1 class="heading-primary__light">Mutatio</h1>
      <h2 class="heading-secondary__light">UI Photo Editor</h2>
    </section>
    <section class="editor">
      <h2 class="heading-secondary">Edit your Photo</h2>
      <div v-if="!image" class="controls">
        <form class="controls-photoupload" action=""> 
          <label for="fileupload">Select a photo to edit</label><br />
          <input type="file" @change="onFileChange" name="fileupload" value="fileupload" id="fileupload"> 
        </form>
      </div>
      <div v-else class="controls">
        <button @click="removeImage">Remove image</button>
      </div>
      <div v-if="!watermark" class="controls">
        <form class="controls-watermark" action="">
          <label for="watermark">Watermark</label><br />
          <input type="file" @change="onFileChange" name="watermark" id="watermark">
        </form>
      </div>
      <div v-else class="controls">
        <form class="controls-watermark__position">
          <input @click="chooseWatermarkPosition" type="radio" id="topLeft" value="topLeft" v-model="logo">
          <label for="topLeft">Top Left</label><br>
          <input @click="chooseWatermarkPosition" type="radio" id="topRight" value="topRight" v-model="logo">
          <label for="topRight">Top Right</label><br>
          <input @click="chooseWatermarkPosition" type="radio" id="bottomLeft" value="bottomLeft" v-model="logo">
          <label for="bottomLeft">Bottom Left</label><br>
          <input @click="chooseWatermarkPosition" type="radio" id="bottomRight" value="bottomRight" v-model="logo">
          <label for="bottomRight">Bottom Right</label><br>
        </form>
        <button class="controls-watermark__remove-button" @click="removeWatermark">Remove Watermark</button>
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
          <label for="marginTop">Margin Top</label><br>
          <input type="number" id="marginTop" value="marginTop" v-model="itemAlign">
        </form>
        <form class="controls-color__text">
          <h3 class="title-primary">Text Color</h3>
          <input type="color" id="textColor" v-model="color.textColor">
          <label for="textColor">Choose the text color</label><br>
        </form>
        <form class="controls-color__gradient">
          <h3 class="title-primary">Gradient Background</h3>
          <div class="picker">
            <button 
              class="picker--gradient"
              v-for="gradient in gradients" 
              :key="gradient.id" 
              v-on:click="chooseGradient(gradient)"
              v-bind:style="`background: linear-gradient(${gradient});`">
              </button>
          </div>
        </form>
      </div>
        <text-editor
          :align="textAlign"
          :vertAlign="itemAlign"
          :color="color"
          :gradient="color.gradient"
          :image="image"
          :watermark="watermark"
          :watermark-position="watermarkPosition"
          >
          </text-editor>
      <trello-board></trello-board>
    </section>
    <section class="get-image">
      <button @click="getImage">Get Your Image Mutatio</button>
    </section>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: 'Home',
  data () {
    return {
      logo: '',
      sentence: '',
      watermarkPosition: {
        bottom: '',
        right: ''
      },
      textAlign: '',
      itemAlign: '',
      color: {
        textColor: '',
        gradient: ''
      },
      image: '',
      watermark: '',
      gradients: [
        '0deg, rgba(142, 14, 0, 0.8), rgba(31, 28, 24, 0.8)',
        '19deg, rgba(186, 139, 2, 0.6) 0%, rgba(24, 24, 24, 0.6) 100%',
        '45deg, rgba(44, 62, 80, 0.6) 0%, rgba(52, 152, 219, 0.6) 90%',
        '0deg, rgba(255, 222, 233, 0.6) 0%, rgba(181, 255, 252, 0.6) 100%',
        '19deg, rgba(48, 67, 82, 0.6) 0%, rgba(215, 210, 204, 0.6) 100%',
        'transparent, transparent'
      ]
    }
  },
  methods: {
    chooseWatermarkPosition(e) {
      const valuePosition = e.path[0].value;
      switch (valuePosition) {
        case 'topLeft':
          this.watermarkPosition = {
            bottom: 'initial',
            right: 'initial',
          }
          break;
        case 'topRight':
          this.watermarkPosition = {
            bottom: 'initial',
            right: 0,
          }
          break
        case 'bottomLeft':
          this.watermarkPosition = {
            bottom: 0,
            right: 'initial',
          }
          break
        case 'bottomRight':
          this.watermarkPosition = {
            bottom: 0,
            right: 0,
          }
          break
        default:
          case 'bottomRight':
          this.watermarkPosition = {
            bottom: 0,
            right: 0,
          }
          break;
      }
    },
    chooseGradient(gradient) {
      this.color.gradient = gradient;
    },
    onFileChange(e) {
      const file = e.srcElement.id;
      const files = e.target.files || e.dataTransfer.files;
      
      if (!files.length)
        return;

      if(file === 'fileupload') {
        this.createBackgroundImage(files[0]);
      } else if (file === 'watermark') {
        this.createBackgroundWatermark(files[0]);
      }
      
    },
    createBackgroundImage(file) {
      const image = new Image();
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createBackgroundWatermark(file) {
      const watermark = new Image();
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.watermark = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    },
    removeWatermark: function (e) {
      this.watermark = '';
    },
    getImage() {
      console.log('smile :)');
      html2canvas(document.querySelector("#captureImage")).then(canvas => {
        document.body.appendChild(canvas);
        const img = canvas.toDataURL();
        // Put img into iFrame to avoid Chrome issue on open it
        const iframe = `<iframe src="${img}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`;
        const w = window.open();
        w.document.open();
        w.document.write(iframe);
        w.document.close();        
      }).catch((error) => {
        console.log('Error: you didnt smile enough :(')
        alert('Error: you didnt smile enough :(')
      });
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
  padding: 10rem auto;

  .controls {
    display: flex;
    justify-content: space-around;
    padding: 1em 2em;

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
        background: linear-gradient(rgb(0, 151, 167), rgb(255, 165, 0));
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

.get-image {
  display: flex;
  justify-content: center;
  margin-bottom: 20em;
  button {
    width: 30em;
    height: 4em;
  }
}
</style>


