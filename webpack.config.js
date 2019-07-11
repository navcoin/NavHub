const path = require('path');

let counter = 0;

module.exports = {
  entry: {
    'latest-news': './react/components/latest-news.js',
    'news': './react/components/news.js',
    'news-article': './react/components/news-article.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'themes/navhub-v2/static/js/react'),
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {    
       cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
          name: 'vendor'
        },
      },
    },
 },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'react/components')
        ],
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
