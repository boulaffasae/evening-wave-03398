<template>
  <div v-for="article in articles.data" :key="article.id">
    <img
      :src="getStrapiMedia(article.attributes.cover.data.attributes.url)"
      alt=""
      class="uk-width-1-1 uk-height-medium uk-object-cover"
    />

    <div class="uk-section">
      <div class="uk-container">
        <span class="uk-text-small uk-text-uppercase">
          {{ article.attributes.category.data.attributes.name }}
        </span>
        <h1 class="uk-card-title uk-margin-remove-top">
          {{ article.attributes.title }}
        </h1>
        <div v-for="block in article.attributes.blocks" :key="block.id">
          <component :block="block" :is="block.__typename"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import ComponentSharedRichText from "@/components/ComponentSharedRichText.vue";
import ComponentSharedMedia from "@/components/ComponentSharedMedia.vue";
import ComponentSharedQuote from "@/components/ComponentSharedQuote.vue";
import ComponentSharedSlider from "@/components/ComponentSharedSlider.vue";
import { getStrapiMedia, markedParse } from "../utils";

export default {
  components: {
    ComponentSharedRichText,
    ComponentSharedMedia,
    ComponentSharedQuote,
    ComponentSharedSlider,
  },
  data() {
    return {
      articles: {},
      slug: this.$route.params.slug,
    };
  },
  methods: {
    getStrapiMedia,
    markedParse,
  },
  apollo: {
    articles: {
      query: gql`
        query Article($slug: String!) {
          articles(filters: { slug: { eq: $slug } }) {
            data {
              id
              attributes {
                slug
                title
                blocks {
                  ... on ComponentSharedRichText {
                    id
                    __typename
                    body
                  }
                  ... on ComponentSharedMedia {
                    id
                    __typename
                    file {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentSharedQuote {
                    id
                    __typename
                    title
                    body
                  }
                  ... on ComponentSharedSlider {
                    id
                    __typename
                    files {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
                category {
                  data {
                    attributes {
                      slug
                      name
                    }
                  }
                }
                cover {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.slug,
        };
      },
    },
  },
};
</script>
