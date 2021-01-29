module.exports = {
  context: __dirname + '/app',
  entry: './entry',
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,        
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],//preset-reactの追加
            plugins: ["@babel/plugin-syntax-jsx"]//ReactのjsxParse用plug-in
          }
        }
      }
    ]
  }
};