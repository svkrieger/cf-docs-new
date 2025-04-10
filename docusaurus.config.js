// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const host = 'https://svkrieger.github.io'
const path = '/cf-docs-new/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Foundry Documentation',
  tagline: 'Documentation to help you deploy and manage Cloud Foundry',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: host,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: path,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'svkrieger', // Usually your GitHub org/user name.
  projectName: 'cf-docs-new', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  staticDirectories: [
    'static',
    'content_repos/docs-cloudfoundry-concepts/static'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'content_repos',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cloudfoundry/docs-cloudfoundry-concepts/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     /** @type {import('@docusaurus/plugin-content-docs').Options} */
  //     ({
  //       id: 'docs-dev-guide',
  //       path: 'content_repos/docs-dev-guide',
  //       routeBasePath: 'docs-dev-guide',
  //       sidebarPath: './sidebars-docs-dev-guide.js',
  //       showLastUpdateTime: true,
  //     }),
  //   ],
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     /** @type {import('@docusaurus/plugin-content-docs').Options} */
  //     ({
  //       id: 'docs-buildpacks',
  //       path: 'content_repos/docs-buildpacks',
  //       routeBasePath: 'docs-buildpacks',
  //       sidebarPath: './sidebars-docs-buildpacks.js',
  //       showLastUpdateTime: true,
  //     }),
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Cloud Foundry Documentation',
        logo: {
          alt: 'Cloud Foundry Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs-cloudfoundry-concepts/', label: 'General Information', position: 'left'},
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'devGuideSidebar',
            label: 'App Developer Guide',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'operationsGuideSidebar',
            label: 'Operator Guide',
          },
          {
            href: 'https://github.com/cloudfoundry',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Community Website',
                href: 'https://www.cloudfoundry.org/community/',
              },
              {
                label: 'Slack',
                href: 'https://slack.cloudfoundry.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cloudfoundry/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC0ZYS0Y7b5oiVLvxGf4magw',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/cloud-foundry?tab=Newest',
              },
              {
                label: 'Mailing List',
                href: 'https://lists.cloudfoundry.org/g/announce',
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
                href: 'https://github.com/cloudfoundry',
              },
            ],
          },
        ],
        copyright: `<a href='${host}${path}'>Cloud Foundry Documentation<a/> © ${new Date().getFullYear()} <a href='https://cloudfoundry.org'>Cloud Foundry Foundation<a/>. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
