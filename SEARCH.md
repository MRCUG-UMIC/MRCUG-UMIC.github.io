# Search setup

The site is configured with the Docusaurus Algolia search theme dependency, but no search credentials are supplied. For production search, register your public site for Algolia DocSearch and add the following under `themeConfig` in `docusaurus.config.js`:

```js
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_ONLY_API_KEY',
  indexName: 'YOUR_INDEX_NAME',
},
```

Alternatively, use a compatible Docusaurus 3 local search plugin. Never commit administrative API keys or private credentials.
