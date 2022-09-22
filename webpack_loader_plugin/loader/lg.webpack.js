const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        
        use: [{
            loader: './loader/style-loader.js',
        }]
      },
      {
        test: /\.js$/,
        
        use: [{
            loader: './loader/cleanlog-loader.js',
        }]
      }
    ]
  }
}