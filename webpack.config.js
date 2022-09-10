const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const isDev = process.env.NODE_ENV !== "production";


module.exports = {
   target: isDev ? "web" : "browserslist",
   devtool: isDev ? "source-map" : undefined,
   cache: {
      type: "filesystem",
   },
   entry: {
      app: path.resolve(__dirname, "./src/app.js"),
   },
   output: {
      path: path.resolve(__dirname, "./dist"),
      filename: isDev ? "[name].[contenthash].js" : "[name].js",
      clean: true,
   },
   resolve: {
      extensions: [".js", ".json", ".scss", ".css"],
      alias: {
         Root: path.resolve(__dirname, "./src"),
         Assets: path.resolve(__dirname, "./src/assets"),
         Components: path.resolve(__dirname, "./src/components"),
      },
   },
   devServer: {
      static: {
         directory: path.join(__dirname, "./dist"),
      },
      server: "http",
      compress: false,
      http2: false,
      https: false,
      port: 5500,
      open: true,
      hot: true,
      liveReload: false,
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            styles: {
               name: "styles",
               type: "css/mini-extract",
               chunks: "all",
               enforce: true,
            },
         },
      },
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: "index.html",
         template: path.resolve(__dirname, "./src/index.html"),
         inject: "body",
         scriptLoading: "blocking",
         minify: isDev ? false : true,
         xhtml: true,
      }),
      new MiniCssExtractPlugin({
         filename: "app.css",
         linkType: "text/css",
      }),
      new ImageminWebpWebpackPlugin( {
         config: [{ 
            test: /\.(png|jpe?g)$/i,
            options: {
               quality: 75
            }
         }],
         overrideExtension: true,
         detailedLogs: false,
         silent: false,
         strict: true
      }
      ),
      new FaviconsWebpackPlugin({
         logo: "./src/assets/img/svg/favicon.svg",
         cache: true,
         mode: "auto",
         outputPath: "./assets/img/icon/",
         inject: true,
         favicons: {
            appName: "«Webpack-app",
            appDescription: "«Webpack",
            developerName: "«Webpack",
            appShortName: "«Webpack",
            developerURL: "«Webpack",
            display: "standalone",
            background: "#fff",
            theme_color: "#fff",
            lang: "en-US",
            scope: "/",
            icons: {
               android: true,
               appleIcon: true,
               appleStartup: true,
               favicons: true,
               windows: true,
               yandex: false,
            },
         },
      }),
      new DuplicatePackageCheckerPlugin(),
      new BundleAnalyzerPlugin({
         analyzerMode: isDev ? "static" : "disabled",
         analyzerPort: 5500,
         openAnalyzer: false,
         analyzerHost: "127.0.0.1",
         logLevel: "info"
      })
   ],
   module: {
      rules: [
         {  // Start Babel
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
                  plugins: ["@babel/plugin-transform-runtime"],
                  cacheDirectory: true,
                  cacheCompression: true,
               },
            },
         }, // End Babel

         {  // Start Html
            test: /\.html$/i,
            loader: "html-loader",
         }, // End Html

         {  // Start Scss
            test: /\.(sa|sc|c)ss$/i,
            use: [
               isDev ? "style-loader" : MiniCssExtractPlugin.loader,
               "css-loader",
               {
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: [
                           require("autoprefixer"),
                           require("postcss-mq-keyframes"),
                           require("postcss-sort-media-queries"),
                        ],
                     },
                  },
               },
               "sass-loader",
            ],
         }, // End Scss

         {  // Start Img
            test: /\.(png|jpe?g)$/i,
            type: "asset/resource",
            use: isDev ? undefined : [
               { loader: "image-webpack-loader"},
            ],
            generator: {
               filename: isDev ? "assets/img/webp/[contenthash][ext]" : "assets/img/webp/[name].webp",
            },
         }, // End Img

         {  // Start gif
            test: /\.gif$/i,
            type: "asset/resource",
            use: isDev ? undefined : {
               loader: "image-webpack-loader",
            },
            generator: {
               filename: isDev ? "assets/gif/[contenthash][ext]" : "assets/gif/[name][ext]",
            },
         }, // End gif

         {  // Start svg
            test: /\.svg$/i,
            type: "asset/resource",
            use: isDev ? undefined : {
               loader: "image-webpack-loader",
            },
            generator: {
               filename: isDev ? "assets/img/svg/[contenthash][ext]" : "assets/img/svg/[name][ext]",
            },
         }, // End svg

         {  // Start Fonts
            test: /\.(eot|ttf|woff|woff2)$/i,
            type: "asset/resource",
            generator: {
               filename: "assets/fonts/[name][ext]",
            },
         }, // End Fonts
      ],
   },
};
