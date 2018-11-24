const path = require('path');


const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '')
  },
  module : {
    rules : [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test : /\.(s*)css$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test : /\.(png|svg|jpg|gif)$/,
        use : [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
