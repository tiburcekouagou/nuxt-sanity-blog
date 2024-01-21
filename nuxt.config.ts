// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sanity"],
  sanity: {
    projectId: "mln7pucs",
    apiVersion: "2024-01-21",
    dataset: "production",
    useCdn: false,
  },
});
