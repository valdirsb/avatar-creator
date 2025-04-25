<template>
    <div class="mb-4">
      <h5 class="text-center">{{ label }}</h5>
      <div class="d-flex flex-wrap justify-content-center">

        <button
          @click="$emit('update:modelValue', null)"
          class="btn btn-light border m-2"
          style="width: 120px; height: 120px;"
        >
          <img
            src="assets/reset.png"
            alt="option"
            class="img-fluid"
            style="max-height: 50px;"
          />
          reset
        </button>

        <button
          v-for="option in options"
          :key="option"
          @click="$emit('update:modelValue', option)"
          class="btn btn-light border m-2"
          :class="{ 'border-primary': modelValue === option }"
          style="width: 120px; height: 120px;"
        >
          <canvas :ref="`canvas_${option}`" style="display: none;"></canvas>
          <img
            :ref="`img_${option}`"
            :src="`${option}`"
            alt="option"
            class="img-fluid mb-3"
            style="max-height: 50px;"
          />
          
          {{ option.split('/').pop().split('.').shift().replace(/_/g, ' ') }}
        </button>

        
      </div>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: Array,
      modelValue: String,
      label: String,
    },

    methods: {
      cropImage(option) {
        const img = new Image();
        img.src = option;
        img.onload = () => {
          const canvas = this.$refs[`canvas_${option}`][0];
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0);

          // Get image data
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          let top = canvas.height, left = canvas.width, right = 0, bottom = 0;

          // Loop through all the pixels to find the edges of the visible part
          for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
              const alpha = data[(y * canvas.width + x) * 4 + 3];
              if (alpha > 0) {
                if (y < top) top = y;
                if (y > bottom) bottom = y;
                if (x < left) left = x;
                if (x > right) right = x;
              }
            }
          }

          // Calculate the width and height of the visible part
          const width = right - left;
          const height = bottom - top;

          // Create a new canvas to draw the cropped image
          const croppedCanvas = document.createElement('canvas');
          const croppedCtx = croppedCanvas.getContext('2d');
          croppedCanvas.width = width;
          croppedCanvas.height = height;

          // Draw the cropped image
          croppedCtx.drawImage(canvas, left, top, width, height, 0, 0, width, height);

          // Set the src of the img element to the cropped image
          this.$refs[`img_${option}`][0].src = croppedCanvas.toDataURL();
        };
      }
    },
    watch: {
      options() {

        if (this.options != null && this.options.length > 0) {
          this.options.forEach(option => {
            this.cropImage(option);
          });
        }
        

      }
    },
    mounted() {
      if (this.options != null && this.options.length > 0) {
        this.options.forEach(option => {
          this.cropImage(option);
        });
      }
    }
    

    
  };
  </script>
  
  <style>
  /* Estilos adicionais para os botões */
  button img {
    display: block;
    margin: 0 auto;
  }

  </style>