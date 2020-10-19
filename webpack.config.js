const path = require('path');

module.exports = {
  // root: path.resolve(__dirname, '../', '../'),
  output: path.resolve(__dirname, '../', '../', 'build'),
  entry: path.resolve(__dirname, '../', '../', 'src/index.js'),
  // template: path.resolve(__dirname, '../', '../', 'public/index.html'),
};