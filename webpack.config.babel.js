
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isDebug = !process.argv.includes('--release');

const config = {
  entry: {
    client: [
      'babel-polyfill',
      './src/client.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isDebug ? '[name].js' : '[name].[chunkhash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: [
            'env',
            'stage-2',
            'react'
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource)
    }),
    ...isDebug ? [] : [
      new webpack.optimize.UglifyJsPlugin({
        beautify: true,
        comments: false
      })
    ],
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
  ],

  devtool: isDebug ? 'cheap-module-source-map' : false
}

export default config;
