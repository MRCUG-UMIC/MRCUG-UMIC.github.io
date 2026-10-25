// Update url, organizationName, projectName and contact details before deployment.
const config = {
 title: 'Uganda Medical Informatics Centre HPC Wiki', tagline: 'Documentation, Resources and Training Opportunities',
 favicon: 'img/favicon.svg', url: 'https://mrcug-umic.github.io', baseUrl: '/',
 organizationName: 'MRCUG-UMIC', projectName: 'MRCUG-UMIC.github.io',
 onBrokenLinks: 'throw', onBrokenMarkdownLinks: 'warn',
 i18n: {defaultLocale: 'en', locales: ['en']},
 presets: [['classic', {
  docs: {routeBasePath: 'docs', sidebarPath: require.resolve('./sidebars.js'), editUrl: undefined, showLastUpdateTime: false},
  blog: {routeBasePath: 'news', showReadingTime: true, blogTitle: 'HPC News', blogDescription: 'Updates from research computing'},
  theme: {customCss: require.resolve('./src/css/custom.css')}
 }]],
 themeConfig: {
  image: 'img/social-card.svg',
  navbar: {title: 'Uganda Medical Informatics Centre HPC Wiki', logo: {alt:'HPC',src:'img/mrc-uvri-and-lshtm-logo.png'}, items: [
   {to:'/',label:'Home',position:'left'}, {to:'/about',label:'About',position:'left'},
   {type:'docSidebar',sidebarId:'mainSidebar',position:'left',label:'Documentation'},
   {to:'/training',label:'Training',position:'left'}, {to:'/research',label:'Research',position:'left'},
   {to:'/news',label:'News',position:'left'}, {to:'/support',label:'Support',position:'right'},
   ]},
  footer: {style:'light', links: [
   {title:'Explore',items:[{label:'About the HPC',to:'/about'},{label:'Research',to:'/research'},{label:'Training',to:'/training'}]},
   {title:'Documentation',items:[{label:'Start here',to:'/docs/getting-started/overview'},{label:'Run jobs',to:'/docs/cluster/slurm'},{label:'Troubleshooting',to:'/docs/support/troubleshooting'}]},
   {title:'Connect',items:[{label:'Support',to:'/support'},{label:'News',to:'/news'}]}
  ],copyright:`© ${new Date().getFullYear()} Uganda Medical Informatics Centre | MRC/UVRI & LSHTM Uganda Research Unit.`},
  prism: {additionalLanguages: ['bash','python','yaml','json']},
  colorMode: {defaultMode:'light',respectPrefersColorScheme:true},
 },
};
module.exports = config;
