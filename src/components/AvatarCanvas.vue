<template>
  <div class="avatar-canvas text-center">
    <canvas ref="canvas" width="521" height="693"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    corpo: { type: String, required: false },
    olhos: { type: String, required: false },
    boca: { type: String, required: false },
    sobrancelhas: { type: String, required: false },
    b_direito: { type: String, required: false },
    b_esquerdo: { type: String, required: false },
    blush: { type: String, required: false },
    objetos: { type: String, required: false },
    cabelo: { type: String, required: false },
  },
  setup(props) {
    const canvas = ref<HTMLCanvasElement | null>(null);

    // Método para desenhar o avatar no canvas
    const drawAvatar = () => {
      if (!canvas.value) return;
      const ctx = canvas.value.getContext("2d");
      if (!ctx) return;

      // Limpa o canvas
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

      // Lista de partes do avatar em ordem de desenho
      const parts = [
        props.corpo,
        props.cabelo,
        props.blush,
        props.olhos,
        props.boca,
        props.sobrancelhas,
        props.objetos,
        props.b_esquerdo,
        props.b_direito,
      ];

      // Desenha cada imagem no canvas
      parts.forEach((part) => {
        if (part) {
          const img = new Image();
          img.src = part; // Caminho da imagem
          img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.value!.width, canvas.value!.height);
          };
        }
      });
    };

    // Reagir às mudanças nas props
    watch(
      () => [
        props.cabelo,
        props.corpo,
        props.blush,
        props.olhos,
        props.boca,
        props.sobrancelhas,
        props.objetos,
        props.b_direito,
        props.b_esquerdo,
      ],
      drawAvatar
    );

    return {
      canvas,
      drawAvatar,
    };
  },

  // Expor o canvas para o componente pai
  methods: {
    getCanvas() {
      return this.$refs.canvas as HTMLCanvasElement | null;
    },
  },
});
</script>

