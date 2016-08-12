module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: "./app/assets/javascripts/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtools: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
      loader: 'imports?define=>false&this=>window'
    }
  ]
};
