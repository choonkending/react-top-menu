var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    library: 'ReactTopMenu',
    libraryTarget: 'umd',
    filename: 'dist/ReactTopMenu.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        exclude: path.join(__dirname, '/node_modules')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

