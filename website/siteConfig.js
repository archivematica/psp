// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {

  title: 'Archivematica Product Support Program',

  url: 'https://psp.archivematica.org',

  disableHeaderTitle: false,

  disableTitleTagline: false,

  baseUrl: '/',

  projectName: 'archivematica-psp',

  organizationName: 'Artefactual Systems Inc.',

  noIndex: true,

  headerLinks: [
    { doc: 'welcome', label: 'Documentation' },
    { href: 'https://github.com/archivematica/psp', label: 'GitHub' },
  ],

  headerIcon: false,

  footerIcon: 'img/favicon.ico',

  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#0e5d8fff',
    secondaryColor: '#0e5d8fff',
  },

  copyright: `Copyright © ${new Date().getFullYear()} Artefactual Systems Inc.`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',

  cleanUrl: true,

  ogImage: 'img/undraw_online.svg',

  twitterImage: 'img/undraw_tweetstorm.svg',

  docsSideNavCollapsible: true,

  enableUpdateBy: false,

  enableUpdateTime: true,

  scrollToTop: true,

  editUrl: 'https://github.com/archivematica/psp/edit/master/docs/',

};

module.exports = siteConfig;
