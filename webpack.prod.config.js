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
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  postcss: function() {
    return [
      require('postcss-simple-vars')(),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  }
};

