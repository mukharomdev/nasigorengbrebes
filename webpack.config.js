const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/js/dist'),
    filename: 'ngb.bundle.js',
  },
};