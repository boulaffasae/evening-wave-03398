<script setup>
import ArticlesList from "@/components/ArticlesList.vue";
</script>

<template>
  <main>
    <div class="uk-section">
      <div class="uk-container">
        <h1>Blog</h1>

        <ArticlesList :articles="articles"></ArticlesList>
      </div>
    </div>
  </main>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      articles: [],
    };
  },
  apollo: {
    articles: gql`
      query Articles {
        articles {
          data {
            id
            attributes {
              slug
              title
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
  },
};
</script>
