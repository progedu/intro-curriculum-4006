module.exports = {
  context: __dirname + '/app',
  //entry: {a:'./entry',b:'./hextest'},
  entry: ['./entry','./hextest'],
  //entry: './entry',
  mode: 'none',
  output: {
    path: __dirname + '/public/javascripts',
    //filename: '[name].bundle.js'
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};