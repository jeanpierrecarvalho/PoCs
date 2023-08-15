// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/people/1", "/people/2", "/people/3", "/people/4"],
    },
  },
  experimental: {
    payloadExtraction: true,
  },
});
