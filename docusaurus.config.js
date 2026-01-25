// @ts-check
import { themes } from "prism-react-renderer";
const prismThemes = themes;

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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "hu",
    locales: ["hu"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-5TBMCF6",
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
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/hellowpio/hub.hellowp.io/blob/main/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/hellowpio/hub.hellowp.io/blob/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
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
            type: "dropdown",
            label: "Termékek",
            position: "left",
            items: [
              {
                label: "HelloPack",
                to: "/docs/dokumentacio/hellopack",
              },
              {
                label: "HelloTools",
                to: "/docs/dokumentacio/hellotools",
              },
              {
                label: "HelloIMG",
                to: "/docs/dokumentacio/hellotools/helloimg",
              },
              {
                label: "Üzemeltetés",
                to: "/docs/dokumentacio/uzemeltetes-karbantartas",
              },
            ],
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
            type: "dropdown",
            label: "Közösség",
            position: "left",
            items: [
              {
                label: "Discord",
                to: "/docs/kozosseg/discord",
              },
              {
                label: "Facebook",
                to: "/docs/kozosseg/facebook",
              },
            ],
          },
          {
            href: "https://hellowp.io/hu/helloconsole/",
            label: "Console",
            position: "right",
            className: "header-console-link",
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
            title: "Termékek",
            items: [
              {
                label: "HelloPack",
                to: "/docs/dokumentacio/hellopack",
              },
              {
                label: "HelloTools",
                to: "/docs/dokumentacio/hellotools",
              },
              {
                label: "HelloIMG",
                to: "/docs/dokumentacio/hellotools/helloimg",
              },
              {
                label: "Üzemeltetés",
                to: "/docs/dokumentacio/uzemeltetes-karbantartas",
              },
            ],
          },
          {
            title: "Tudásbázis",
            items: [
              {
                label: "Oktatóanyagok",
                to: "/docs/tudasbazis/oktatoanyagok",
              },
              {
                label: "Hasznos eszközök",
                to: "/docs/tudasbazis/hasznos-eszkozok",
              },
              {
                label: "Hibaelhárítás",
                to: "/docs/tudasbazis/hibaelharitas",
              },
              {
                label: "Fejlesztői eszközök",
                to: "/docs/tudasbazis/fejlesztoi-eszkozok",
              },
            ],
          },
          {
            title: "Súgó",
            items: [
              {
                label: "Számlázás és előfizetés",
                to: "/docs/sugo/szamlazas-es-elofizetesek",
              },
              {
                label: "Partnerprogram",
                to: "/docs/sugo/partnerprogram",
              },
              {
                label: "Gyakori kérdések",
                to: "/docs/sugo/egyeb",
              },
              {
                label: "Hibakeresés és logolás",
                to: "/docs/tudasbazis/hibaelharitas/wordpress/hibakereses-wordpress-ben",
              },
            ],
          },
          {
            title: "Közösség",
            items: [
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
          {
            title: "HelloWP",
            items: [
              {
                label: "Főoldal",
                href: "https://hellowp.io",
              },
              {
                label: "Console",
                href: "https://hellowp.io/hu/helloconsole/",
              },
              {
                label: "Kapcsolat",
                href: "https://hellowp.io/hu/kapcsolat/",
              },
              {
                label: "WordPress hírek",
                href: "https://helloblog.io/hu/",
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["php", "css", "bash", "json"],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
