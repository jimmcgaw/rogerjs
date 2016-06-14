module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
