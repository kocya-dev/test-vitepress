import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vite Press Test Document",
  description: "A VitePress Site",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    search: {
      provider: "local",
    },
    footer: {
      message: "footer message.",
      copyright: "Copyright © 2024- hogehoge",
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    ja: {
      label: "Japanese",
      lang: "ja", // optional, will be added  as `lang` attribute on `html` tag
      link: "/ja/", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
});
