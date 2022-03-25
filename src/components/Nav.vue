<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <RouterLink class="uk-navbar-item uk-logo" to="/">Blog</RouterLink>
    </div>

    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li v-for="category in categories.data" :key="category.id">
          <RouterLink
            :to="{
              name: 'category',
              params: { slug: category.attributes.slug },
            }"
          >
            {{ category.attributes.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      categories: [],
    };
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          data {
            id
            attributes {
              slug
              name
            }
          }
        }
      }
    `,
  },
};
</script>
