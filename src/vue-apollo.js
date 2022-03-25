import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache({
  typePolicies: {
    Article: {
      keyFields: ["slug"],
    },
  },
});

const apolloClient = new ApolloClient({
  cache,
  uri:
    `${import.meta.env.VITE_STRAPI_ENDPOINT}/graphql` ||
    "http://localhost:1337/graphql",
});

export default apolloClient;
