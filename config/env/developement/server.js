module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  algolia_api_key: env.string("ALGOLIA_API_KEY", "67ccc8416bb1150660fae76651f487a8"),
  algolia_application_id: env.string("ALGOLIA_APPLICATION_ID", "8XVVR86Q57"),
});
