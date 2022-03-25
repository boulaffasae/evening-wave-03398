import { marked } from "marked";

export function getStrapiMedia(url) {
  return `${import.meta.env.VITE_STRAPI_ENDPOINT}${url}`;
}

export function markedParse(markdown) {
  if (!markdown) return;

  return marked.parse(markdown);
}
