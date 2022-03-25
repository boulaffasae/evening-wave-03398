import { createApp, h } from "vue";
import { createApolloProvider } from "@vue/apollo-option";
import App from "./App.vue";
import router from "./router";
import apolloClient from "./vue-apollo";

const app = createApp({
  render: () => h(App),
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

app.use(router);
app.use(apolloProvider);

app.mount("#app");
