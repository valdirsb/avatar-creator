// src/types/ImageLoader.ts
export type AvatarPart = string[]; // Uma lista de caminhos de imagens
export interface AvatarImages {
  corpo: AvatarPart;
  olhos: AvatarPart;
  boca: AvatarPart;
  sobrancelhas: AvatarPart;
  b_direito: AvatarPart;
  b_esquerdo: AvatarPart;
  blush: AvatarPart;
  objetos: AvatarPart;
  cabelo: AvatarPart;
}