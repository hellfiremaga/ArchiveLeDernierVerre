// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Le Dernier Verre',
  tagline: 'Site contenant toutes les infos sur le Dernier Verre',
  favicon: 'img/faviconLDV.ico',

  // Set the production url of your site here
  url: 'https://hellfiremaga.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ArchiveLeDernierVerre/',
  //baseUrl: 'C:/Users/hellf/OneDrive/Developpement/Docusaurus/archiveDernierVerre/website/build',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hellfiremaga', // Usually your GitHub org/user name.
  projectName: 'ArchiveLeDernierVerre', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // ...autres configurations
  scripts: [
    {
      src: '/js/Redirect.js', // Chemin vers ton script
      async: true,
    },
  ],  

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  /*future: {
    experimental_faster: true,
  },*/

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          blogSidebarTitle: 'Tous les événements',
          blogSidebarCount: 'ALL',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/wallpaperLDV300.png',
      navbar: {
        title: 'Le site du Dernier Verre',
        logo: {
          alt: 'Logo du Derniver Verre',
          src: '/img/LogoLDV.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'FAQSidebar',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DernierVerreSidebar',
            position: 'left',
            label: 'Archives du Dernier Verre',
          },
          {
            to: 'blog',
            label: 'Archives des évents',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ProjetSidebar',
            position: 'left',
            label: 'Projets',
          },/*
          {
            type: 'docSidebar',
            sidebarId: 'ErikaSidebar',
            position: 'left',
            label: '==> Les Erika les plus chaudes de ta région <==',
          },*/
          {
            href: 'https://discord.gg/HDjKc8U8qn',
            label: 'Rejoignez nous !',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Archives',
            items: [
              {
                label: 'FAQ',
                to: '/docs/FAQ',
              },
              {
                label: 'Le Dernier Verre',
                to: '/docs/FicheDePersonnageActif',
              },
              {
                label: 'Projets',
                to: '/docs/Projets',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/HDjKc8U8qn',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/hellfiremaga',
              },
              {
                label: 'Odysee',
                href: 'https://odysee.com/@Hellfiremaga:8',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@LesrediffusionsdelivedeMaga',
              },
            ],
          },
          {
            title: 'Docusaurus',
            items: [
              {
                label: 'Site officiel',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HellfireMaga, tous droits réservés. Construit avec Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        wrapLines: true,
      },
    }),
};

module.exports = config;
