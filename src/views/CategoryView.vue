<script setup>
import ArticlesList from "@/components/ArticlesList.vue";
</script>

<template>
  <div
    class="uk-section"
    v-for="category in categories.data"
    :key="category.id"
  >
    <div class="uk-container">
      <h1>Blog ‟{{ category.attributes.name }}”</h1>

      <ArticlesList
        :articles="category.attributes.articles || []"
      ></ArticlesList>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    slug: function () {
      return this.$route.params.slug;
    },
  },
  apollo: {
    categories: {
      query: gql`
        query Category($slug: String!) {
          categories(filters: { slug: { eq: $slug } }) {
            data {
              attributes {
                slug
                name
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
