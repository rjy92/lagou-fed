const path = require('path')
const MyPlugin = require('./plugins/MyPlugin')
const FileListPlugin = require('./plugins/FileListPlugin')
module.exports = {
  entry: './src/index.js',
  output: {
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
    ],
    
  },
  plugins: [
    new MyPlugin({ title: 'MyPlugin' }),
    new FileListPlugin()
  ],
}