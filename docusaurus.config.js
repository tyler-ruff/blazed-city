// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blazed Nation',
  tagline: 'We turn Dreams into Reality.',
  url: 'https://blazed.city',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://blazed.sirv.com/logo/Beaker-Dark.png',
  organizationName: 'blazed-labs', // Usually your GitHub org/user name.
  projectName: 'blazed-nation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // No edits allowed
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // No edits allowed
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Blazed Nation',
        logo: {
          alt: 'Beaker - Gray',
          src: 'https://blazed.sirv.com/logo/Beaker-DarkGray.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/blazed-labs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Development',
                href: 'https://www.facebook.com/groups/blzdev',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/blazed-labs/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BlazedLabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/blazed-labs/',
              },
            ],
          },
        ],
        copyright: `&copy;${new Date().getFullYear()} Blazed Labs LLC. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
