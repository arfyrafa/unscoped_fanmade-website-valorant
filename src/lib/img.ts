import type { ImageMetadata } from "astro";

// Semua gambar di src/assets/ di-import sekaligus, supaya Astro bisa mengompres
// dan mengubahnya ke WebP/AVIF saat build. Data cukup menyebut path-nya, mis. "news/arena.png".
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{avif,png,jpg,jpeg,webp}",
  { eager: true },
);

export function img(path: string): ImageMetadata {
  const hit = files[`/src/assets/${path}`];
  if (!hit) throw new Error(`Gambar tidak ditemukan: src/assets/${path} (cek nama file & huruf besar/kecil)`);
  return hit.default;
}

export function maybeImg(path: string): ImageMetadata | undefined {
  return files[`/src/assets/${path}`]?.default;
}

export const agentImg = (file: string) => img(`agents/${file}.avif`);
export const abilityImg = (file: string, key: string) => maybeImg(`agents/${file}-${key.toLowerCase()}.avif`);
