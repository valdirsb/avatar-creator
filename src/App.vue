<template>
  <div id="app" class="container mt-4">
    <h1 class="text-center mb-4">Construtor de Avatar!</h1>
    <div class="row">
      <!-- Coluna para opções -->
      <div class="col-md-6">
        <!-- Botões de troca de personagem -->
        <div class="row">
          <div class="col">
            <button
              v-for="personagem in personagens"
              :key="personagem.nome"
              type="button"
              class="btn btn-lg btn-primary m-2"
              :class="{ 'btn-danger': personagemSelecionado === personagem.nome }"
              @click="trocarPersonagem(personagem.nome)"
            >
              {{ personagem.label }}
            </button>
          </div>
        </div>

        <!-- Abas -->
        <div class="mb-4 fundo p-2">
          <div class="d-flex flex-wrap justify-content-center">
            <AvatarButtons
              v-for="aba in abas"
              :key="aba.nome"
              @click="abaSelecionada = aba.nome"
              :class="{ 'border-danger': abaSelecionada === aba.nome }"
              :label="aba.label"
              :src="`./assets/${personagemSelecionado}/${aba.nome}.png`"
            />
          </div>
        </div>

        <hr>

        <!-- Opções de personalização -->
        <AvatarOptions
          v-if="abaSelecionada"
          :options="personagem[abaSelecionada]"
          v-model="selecoes[abaSelecionada]"
          :label="abas.find(a => a.nome === abaSelecionada)?.label"
        />
      </div>

      <!-- Coluna para visualização -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <AvatarCanvas
              ref="avatarCanvas"
              v-bind="selecoes"
            />
          </div>
        </div>
        <div class="text-center mt-3">
          <button class="btn btn-lg btn-primary" @click="saveAvatar">
            Salvar Avatar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import { zad, liry, camila, kim, nova_liry, nova_zad, nova_camila, liry3, zad3, camila3 } from './utils/imageLoaders';
import AvatarOptions from "./components/AvatarOptions.vue";
import AvatarButtons from "./components/AvatarButtons.vue";
import AvatarCanvas from "./components/AvatarCanvas.vue";

export default {
  components: { AvatarOptions, AvatarCanvas, AvatarButtons },
  setup() {
    const avatarCanvas = ref<{ getCanvas: () => HTMLCanvasElement } | null>(null);

    const personagens = [
      { nome: 'liry', label: 'Liry', data: liry },
      { nome: 'zad', label: 'Zad', data: zad },
      { nome: 'camila', label: 'Camila', data: camila },
      { nome: 'kim', label: 'Kim', data: kim },
      { nome: 'nova_liry', label: 'Nova Liry', data: nova_liry },
      { nome: 'nova_zad', label: 'Nova Zad', data: nova_zad },
      { nome: 'nova_camila', label: 'Nova Camila', data: nova_camila },
      { nome: 'liry3', label: 'Liry 3', data: liry3 },
      { nome: 'zad3', label: 'Zad 3', data: zad3 },
      { nome: 'camila3', label: 'Camila 3', data: camila3 },
    ];

    const personagemSelecionado = ref('liry');
    const personagem = computed<Record<string, any>>(() =>
      personagens.find(p => p.nome === personagemSelecionado.value)?.data || {}
    );

    const abas = [
      { nome: 'corpo', label: 'Corpo' },
      { nome: 'olhos', label: 'Olhos' },
      { nome: 'boca', label: 'Boca' },
      { nome: 'sobrancelhas', label: 'Sobrancelhas' },
      { nome: 'b_direito', label: 'Braço 1' },
      { nome: 'b_esquerdo', label: 'Braço 2' },
      { nome: 'blush', label: 'Blush' },
      { nome: 'objetos', label: 'Objetos' },
      { nome: 'cabelo', label: 'Cabelo' },
    ];

    const abaSelecionada = ref<string | null>(null);

    const selecoes = reactive<Record<string, string | null>>({
      corpo: null,
      olhos: null,
      boca: null,
      sobrancelhas: null,
      b_direito: null,
      b_esquerdo: null,
      blush: null,
      objetos: null,
      cabelo: null,
    });

    const trocarPersonagem = (nome: string) => {
      personagemSelecionado.value = nome;
      Object.keys(selecoes).forEach(key => (selecoes[key] = null));
      abaSelecionada.value = null;
    };

    const saveAvatar = () => {
      const canvas = avatarCanvas.value?.getCanvas();
      if (!canvas) {
        alert('Canvas não encontrado.');
        return;
      }

      const link = document.createElement('a');
      link.download = 'avatar.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    // Watch para 'objetos'
    watch(() => selecoes.objetos, (novoValor) => {
      if (novoValor) {
        selecoes.b_direito = null;
        selecoes.b_esquerdo = null;
      }
    });

    // Watch para 'b_direito'
    watch(() => selecoes.b_direito, (novoValor) => {
      if (novoValor) {
        selecoes.objetos = null;
      }
    });

    // Watch para 'b_esquerdo'
    watch(() => selecoes.b_esquerdo, (novoValor) => {
      if (novoValor) {
        selecoes.objetos = null;
      }
    });

    return {
      avatarCanvas,
      personagens,
      personagemSelecionado,
      personagem,
      abas,
      abaSelecionada,
      selecoes,
      trocarPersonagem,
      saveAvatar,
    };
  },
};
</script>

<style>
body {
  background-color: #f8f9fa;
}

h1, h4, h5 {
  color: #343a40;
}

button {
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.1);
}

.fundo {
  background-color: #58626d;
}
</style>
