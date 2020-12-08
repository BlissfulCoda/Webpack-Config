const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
      rule: [
          {
              use: 'babel-loader'
          }
      ]
  }
};

module.exports = config;
