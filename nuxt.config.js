const meta_description = "Belay Development is a boutique real estate development firm based in Denver, Colorado. Our unique perspective, grounded in decades of experience, empowers us to bring exceptional developments to life. With Belay, you can look at possible differently.";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Belay',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: meta_description },

      { property: "og:site_name", content: "Belay" },
      {
        property: "og:title",
        content: "Belay",
      },
      { property: "og:description", content: meta_description  },
      { property: "og:url", content: "https://www.belaydev.com" },
      { property: "og:image", content: "Social-Static@2x.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpg" },

      { name: "msapplication-TileColor", content: "#BC2F2B" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "theme-color", content: "#000000" },
    ],

    link: [
      { rel: "canonical", href: "" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "image_src", content: "/Social-Static@2x.jpg" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
          href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5700d1" },
      { rel: "shortcut icon", href: "/favicon.ico" },
    ],
    script: [
      {
        innerHTML: `
          !function(t,e,c,n,o,r){t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},setTimeout(function(){o=e.createElement("script"),r=e.getElementsByTagName("script")[0],o.src=c,r.parentNode.insertBefore(o,r)},0)}(window,document,"https://ext.chtbl.com/trackable.js","trackable");
          // Initialize with your Trackable API key
          trackable('init', 'cdfab94f9a0ecd66a1a0d8d777b33952');
        `,
        type: "text/javascript",
        charset: "utf-8",
        body: true,
      },
    ],
    __dangerouslyDisableSanitizers: ["script", "innerHTML"],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Server
   */
  server: {
    port: 3000,
    host: "0.0.0.0",
  },

/*
 ** Vue
 */
  vue: {
    config: {
      devtools: true
    }
  },

  // TODO
  plugins: [
    "~/plugins/lazysizes.client.js",
    "~/plugins/vue-event-horizon.client.js",
  ],


  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/style-resources"
  //   [
  //     "@nuxtjs/google-analytics",
  //     {
  //       id: "UA-7437240-9",
  //     },
  //   ],
  //   [
  //     "nuxt-facebook-pixel-module",
  //     {
  //       pixelId: "758666234316564"
  //     }
  //   ],
  //   "@aceforth/nuxt-optimized-images",
  ],


 /*
 ** https://github.com/juliomrqz/nuxt-optimized-images
 */
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

 /*
 ** Nuxt.js modules
 */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],

 /*
 ** Global CSS
 */
  styleResources: {
    // your settings here
    scss: [
      "~/assets/styles/_vars.scss",
      "~/assets/styles/_mixins.scss",
      "~/assets/styles/_grid.scss",
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  //ADD THIS TO USE NETLIFY FORMS
  build: {
    html: {
      minify: {
        collapseWhitespace: true
      }
    },
    loaders: {
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }, 
      css: {
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
        importLoaders: 1,
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const { loaders: { vue } } = ctx;

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }

      vue.transformAssetUrls.img = ["data-src", "src"];
      vue.transformAssetUrls.source = ["data-srcset", "srcset"];
    },
  },
  /**
   *
   */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "lastcall",
        path: "/lastcall",
        component: resolve(__dirname, "pages/index.vue")
      });

      routes.push({
        name: "LastCall",
        path: "/LastCall",
        component: resolve(__dirname, "pages/index.vue")
      });
    }
  },
}
