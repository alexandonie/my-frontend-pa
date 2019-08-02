const fs = require('fs');
const path = require('path');

const root = fs.realpathSync(process.cwd());

const resolvePath = relativePath => path.resolve(root, relativePath);

module.exports = {
  root,
  dist: resolvePath('dist'),
  appEntry: resolvePath('src/index.js'),
  appTemplate: resolvePath('src/index.html')
};
