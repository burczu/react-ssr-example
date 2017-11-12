import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const common = {
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
  }
}

const clientConfig = {
  ...common,

  name: 'client',
  target: 'web',

  entry: {
    client: [
      'babel-polyfill',
      './src/client.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource)
    }),
  ],

  devtool: 'cheap-module-source-map',

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
}

const serverConfig = {
  ...common,

  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: ['babel-polyfill', path.resolve(__dirname, 'src', 'server.js')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },

  devtool: 'cheap-module-source-map',

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  }
}

export default [clientConfig, serverConfig];
