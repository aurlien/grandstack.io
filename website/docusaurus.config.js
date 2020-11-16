module.exports = {
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/grand-stack/grandstack.io/edit/master/website/"
        }
      }
    ]
  ],
  themeConfig: {
    announcementBar: {
      id: "ebook1", // Any value that will identify this message
      content:
        '<div style="display: flex; justify-content: center; align-items: center;"><a target="_blank" rel="noopener noreferrer" href="https://grandstack.io/ebook"><img src="/img/bookcover_small.png" style="max-height: 75px;"></img></a><span>Download the free ebook <a target="_blank" rel="noopener noreferrer" href="https://grandstack.io/ebook">Fullstack GraphQL Applications with GRANDstack</a></span></div>',
      backgroundColor: "#fafbfc", // Defaults to `#fff`
      textColor: "#091E42" // Defaults to `#000`
    },
    gtag: {
      trackingID: "UA-43032717-4"
    },
    // googleAnalytics: {
    //   trackingID: "UA-43032717-4"
    // },
    algolia: {
      apiKey: "cc5871df6979b737c77b6c2670ac2392",
      indexName: "grandstack"
    },
    navbar: {
      title: "GRANDstack",
      logo: {
        alt: "GRANDstack Logo",
        src: "img/GrandStack-Logo-SiteIcon-512x512.png"
      },
      links: [
        {
          to: "docs/getting-started-neo4j-graphql",
          label: "Docs",
          position: "left"
        },
        { to: "https://blog.grandstack.io", label: "Blog", position: "left" }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started-neo4j-graphql"
            },
            {
              label: "neo4j-graphql.js",
              to: "docs/neo4j-graphql-js"
            },
            {
              label: "GraphQL Schema Design Guide",
              to: "docs/guide-graphql-schema-design"
            },
            {
              label: "API Reference",
              to: "docs/neo4j-graphql-js-api"
            },
            {
              label: "Resources",
              to: "/docs/grandstack-resources"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GRANDstack Blog",
              href: "https://blog.grandstack.io"
            },
            {
              label: "GitHub",
              href: "https://github.com/grand-stack"
            },
            {
              label: "#GRANDstack on Twitter",
              href:
                "https://twitter.com/search?q=%23GRANDstack&src=typed_query&f=live"
            },
            {
              label: "Feedback Survey",
              href: "https://grandstack.io/survey"
            },
            {
              label: "Subscribe For Updates",
              href: "http://eepurl.com/c8JGuf"
            }
          ]
        }
      ],
      logo: {
        alt: "GRANDstack Logo",
        src: "img/GrandStack-Logo-1Color_White.png",
        href: "//grandstack.io"
      },
      copyright: `Licensed under <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License.</a>`
    },
    image: "img/GrandStack-Logo-Square.png",
    sidebarCollapsible: true
  },
  title: "GRANDstack",
  tagline: "Build Fullstack GraphQL Applications With Ease.",
  url: "https://grandstack.io" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "grandstack.io",
  organizationName: "grand-stack",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  favicon: "img/GrandStack-Logo-SiteIcon-512x512.png",

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-blocks-buttons.js"
  ],
  stylesheets: ["/css/code-blocks-buttons.css", "/css/custom.css"]
};
