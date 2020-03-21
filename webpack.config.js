const path = require('path') 
const babelOptions = require('./babel.config.js') 

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?(t|j)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}