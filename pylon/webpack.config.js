const path = require('path');

module.exports = {
  entry: './App.js', // entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory bundled file
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // look for .js files
        exclude: /node_modules/, // exclude the node_modules directory
        use: {
          loader: 'babel-loader', // use babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use the env and react presets
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // resolve these extensions
  },
};
