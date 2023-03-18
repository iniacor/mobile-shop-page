/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /.(js|jsx|ts|tsx?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash][ext]',
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.module\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
    stats: {
      children: true,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: '_redirects', to: '', noErrorOnMissing: true },
          { from: 'src/icons', to: 'icons' },
          { from: 'src/images', to: 'images' },
        ],
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@theme/*': path.resolve(__dirname, 'src/theme/*'),
      },
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 3000,
      static: {
        directory: path.join(__dirname, '/'),
      },
    },
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    );
  }

  return config;
};
