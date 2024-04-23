module.exports = ({ env }) => ({
  search: {
    enabled: true,
    config: {
      provider: "algolia",
      providerOptions: {
        apiKey:  env('ALGOLIA_API_KEY'),
        applicationId: env('ALGOLIA_APPLICATION_ID')
      },
      contentTypes: [{ name: "api::product.product", index: "strapi-store" }],
    },
  },
});