<script setup>
import { computed } from "vue";

const props = defineProps({
  articles: {
    type: Object,
    required: true,
  },
});

const leftArticles = computed({
  get() {
    return props.articles.data?.slice(0, 1);
  },
});

const rightArticles = computed({
  get() {
    return props.articles.data?.slice(1, props.articles.data?.length);
  },
});
</script>

<template>
  <div class="uk-child-width-1-2" uk-grid>
    <div>
      <div v-for="article in leftArticles" :key="article.id">
        <RouterLink
          class="uk-link-reset"
          :to="{
            name: 'article',
            params: { slug: article.attributes.slug },
          }"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img
                :src="
                  getStrapiMedia(article.attributes.cover.data.attributes.url)
                "
                alt=""
                class="uk-width-1-1 uk-height-large uk-object-cover"
              />
            </div>
            <div class="uk-card-body">
              <span class="uk-text-small uk-text-uppercase">
                {{ article.attributes.category.data.attributes.name }}
              </span>
              <h3 class="uk-card-title uk-margin-remove-top">
                {{ article.attributes.title }}
              </h3>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <div>
      <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
        <div v-for="article in rightArticles" :key="article.id">
          <RouterLink
            class="uk-link-reset"
            :to="{
              name: 'article',
              params: { slug: article.attributes.slug },
            }"
          >
            <div class="uk-card uk-card-small uk-card-muted">
              <div class="uk-card-media-top">
                <img
                  :src="
                    getStrapiMedia(article.attributes.cover.data.attributes.url)
                  "
                  alt=""
                  class="uk-width-1-1 uk-height-small uk-object-cover"
                />
              </div>
              <div class="uk-card-body">
                <span class="uk-text-small uk-text-uppercase">
                  {{ article.attributes.category.data.attributes.name }}
                </span>
                <h3 class="uk-card-title uk-margin-remove-top">
                  {{ article.attributes.title }}
                </h3>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from "../utils";

export default {
  methods: {
    getStrapiMedia,
  },
};
</script>
