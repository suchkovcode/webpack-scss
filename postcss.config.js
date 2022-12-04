const isDev = process.env.NODE_ENV !== "production";

module.exports = {
   plugins: [
      require("postcss-100vh-fix"),
      isDev ? undefined : require("autoprefixer"),
      isDev ? undefined : require("postcss-mq-keyframes"),
      isDev ? undefined : require("postcss-sort-media-queries"),
      isDev ? undefined : require("postcss-focus"),
   ],
};


