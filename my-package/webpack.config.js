const path = require('path');
const projectRoot = process.cwd();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(projectRoot, 'dist'),
  },
};
