// src/utils/imageLoader.ts
import { AvatarPart } from '@/types/ImageLoader';

// Função utilitária para importar imagens
function importImages(context: __WebpackModuleApi.RequireContext): AvatarPart {
  return context.keys().map((key) => context(key));
}

export const kim = {
  corpo: importImages(require.context('@/assets/kim/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/kim/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/kim/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/kim/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/kim/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/kim/b_esquerdo', false, /\.png$/)),
  // blush: importImages(require.context('@/assets/kim/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/kim/objetos', false, /\.png$/)),
};

export const liry = {
  corpo: importImages(require.context('@/assets/liry/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/liry/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/liry/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/liry/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/liry/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/liry/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/liry/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/liry/objetos', false, /\.png$/)),
};

export const nova_liry = {
  corpo: importImages(require.context('@/assets/nova_liry/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/nova_liry/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/nova_liry/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/nova_liry/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/nova_liry/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/nova_liry/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/nova_liry/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/nova_liry/objetos', false, /\.png$/)),
};

export const zad = {
  corpo: importImages(require.context('@/assets/zad/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/zad/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/zad/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/zad/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/zad/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/zad/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/zad/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/zad/objetos', false, /\.png$/)),
};

export const camila = {
  corpo: importImages(require.context('@/assets/camila/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/camila/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/camila/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/camila/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/camila/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/camila/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/camila/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/camila/objetos', false, /\.png$/)),
};

export const nova_zad = {
  corpo: importImages(require.context('@/assets/nova_zad/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/nova_zad/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/nova_zad/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/nova_zad/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/nova_zad/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/nova_zad/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/nova_zad/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/nova_zad/objetos', false, /\.png$/)),
};

export const nova_camila = {
  corpo: importImages(require.context('@/assets/nova_camila/corpo', false, /\.png$/)),
  cabelo: importImages(require.context('@/assets/nova_camila/cabelo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/nova_camila/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/nova_camila/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/nova_camila/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/nova_camila/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/nova_camila/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/nova_camila/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/nova_camila/objetos', false, /\.png$/)),
};

export const liry3 = {
  corpo: importImages(require.context('@/assets/liry_versao_3/corpo', false, /\.png$/)),
  olhos: importImages(require.context('@/assets/liry_versao_3/olhos', false, /\.png$/)),
  boca: importImages(require.context('@/assets/liry_versao_3/boca', false, /\.png$/)),
  sobrancelhas: importImages(require.context('@/assets/liry_versao_3/sobrancelhas', false, /\.png$/)),
  b_direito: importImages(require.context('@/assets/liry_versao_3/b_direito', false, /\.png$/)),
  b_esquerdo: importImages(require.context('@/assets/liry_versao_3/b_esquerdo', false, /\.png$/)),
  blush: importImages(require.context('@/assets/liry_versao_3/blush', false, /\.png$/)),
  objetos: importImages(require.context('@/assets/liry_versao_3/objetos', false, /\.png$/)),
};