const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const dotenv = require ('dotenv').config({ path: __dirname + '/.env' })
const Dotenv = require('dotenv-webpack');


module.exports = {
    // Starting point of the app, where webpack begins its bundling
    entry: './client/index.js',
    // Mode set to development (can be 'production' for optimized build)
    mode: 'development',
    module: {
        rules: [
          // Transpile JSX (React) files into vanilla JS
            {
                test: /\.jsx?/ ,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }],
                      '@babel/preset-react'
                    ]
                  }
                }
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader', 
                  'css-loader',
                  'sass-loader'
                ],
              },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.m?js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
              },
        ]
    },
    // Resolve .js and .jsx file extensions when importing
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
          "fs": false,
          "os": false,
          "path": false,
          "crypto": false,
        },
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        // Serve files from the specified directory
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        // Hot-reloading: auto-refresh browser on changes
        hot: true,
        // Fallback to index.html for Single Page Applications
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        // Proxy API requests to our express server running on port 3000
        proxy: {
            '/api/**': {
              target: 'http://localhost:3000/',
              secure: false,
              changeOrigin: true
            },
            '/assets/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
          },
    },
    // Where the bundled output will be saved
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Plugins to extend webpack's functionality
    plugins: [
      // Auto-generate an HTML file that includes the webpack bundles
      new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, 'client/index.html')
    }),

    new Dotenv({
      path: './.env',
      safe: true,
    }),

    //   new webpack.DefinePlugin({
    //     // 'process.env': JSON.stringify(dotenv.parsed),
    //     'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
      
    // })
  ],
};