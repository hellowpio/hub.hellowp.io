// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HelloWP Hub",
  tagline: "Dokumentáció és Tudásbázis",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hub.hellowp.io/",
  baseUrl: "/",

  organizationName: "hellowpio", // Usually your GitHub org/user name.
  projectName: "support.hellowp.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "hu",
    locales: ["hu"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-5TBMCF6',
        anonymizeIP: true,
      },
    ],
  ],
  
  scripts: [
    {
      src: "https://kit.fontawesome.com/11cbb0ec24.js",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          editUrl: "https://github.com/hellowpio/hub.hellowp.io/blob/main/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/hellowpio/hub.hellowp.io/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
  
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "I11ZQJ89FL",
        apiKey: "6507f02646a676db1462458b97a1cda4",
        indexName: "HelloWP HUB",
        contextualSearch: false,
      },

      image: "img/hellowp-hub.png",
      navbar: {
        title: "HelloWP Hub",
        logo: {
          alt: "HelloWP Hub",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "docs/dokumentacio/",
            label: "Dokumentació",
            position: "left",
            activeBaseRegex: "docs/(next|v8)",
          },
          {
            to: "docs/tudasbazis/",
            label: "Tudásbázis",
            position: "left",
          },
          {
            to: "docs/sugo/",
            label: "Súgó",
            position: "left",
          },
          {
            to: "docs/kozosseg/discord",
            label: "Közösség",
            position: "left",
          },
          {
            href: "https://github.com/hellowpio/hub.hellowp.io",
            label: "GitHub",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Dokumentáció",
            items: [
              {
                label: "HelloPack",
                to: "/docs/dokumentacio/hellopack",
              },
              {
                label: "Komplett weboldalak",
                to: "/docs/dokumentacio/komplett-weboldalak",
              },
              {
                label: "Üzemeltetés és karbantartás",
                to: "/docs/dokumentacio/uzemeltetes-karbantartas",
              },
            ],
          },
          {
            title: "Súgó",
            items: [
              {
                label: "Partnerprogram",
                to: "/docs/sugo/partnerprogram",
              },
              {
                label: "Számlázás és előfizetés",
                to: "/docs/sugo/szamlazas-es-elofizetesek",
              },
              {
                label: "Egyéb",
                to: "/docs/sugo/egyeb",
              },
            ],
          },
          {
            title: "Tudásbázis",
            items: [
              {
                label: "Hasznos eszközök",
                to: "docs/tudasbazis/hasznos-eszkozok",
              },
              {
                label: "Oktatóanyagok",
                to: "/docs/tudasbazis/oktatoanyagok",
              },
              {
                label: "Hibaelhárítás",
                to: "/docs/tudasbazis/hibaelharitas",
              },
            ],
          },
          {
            title: "Közösség",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Discord",
                to: "/docs/kozosseg/discord",
              },
              {
                label: "Facebook",
                to: "/docs/kozosseg/facebook",
              },
              {
                label: "GitHub",
                href: "https://github.com/hellowpio/hub.hellowp.io",
              },
            ],
          },
        ],
        logo: {
          alt: "HelloWP!",
          src: "img/logo-260-60-color.svg",
          srcDark: "img/logo-260-60-wihte-green.svg",
          href: "https://hellowp.io",
        },
        copyright: `© ${new Date().getFullYear()} TooEarlyBird, LLC <br> A forráskód <a href="/mit-licensz">MIT</a>, a weboldal tartalma <a href="/cc-by-nc-sa-4.0">CC BY NC SA 4.0 license</a> alatt áll.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php", "css"],
      },
    }),
};

module.exports = config;
