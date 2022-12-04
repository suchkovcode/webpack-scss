const purgecss = require("@fullhuman/postcss-purgecss");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
   plugins: [
      require("postcss-100vh-fix"),
      isDev ? undefined : require("autoprefixer"),
      isDev ? undefined : require("postcss-mq-keyframes"),
      isDev ? undefined : require("postcss-sort-media-queries"),
      isDev ? undefined : require("postcss-focus"),
      purgecss({
         content: ["./src/pages/*.html", "./src/modules/*.js"],
         css: [],
         skippedContentGlobs: ["node_modules/**"],
         dynamicAttributes: [""],
         fontFace: false,
         keyframes: false,
         variables: true,
         rejected: false,
         rejectedCss: false,
         safelist: {
            standard: [],
            deep: [],
            greedy: [],
            keyframes: [],
            variables: []
         },
      })
   ],
};


