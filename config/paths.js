const fs = require('fs');
const path = require('path');

const root = fs.realpathSync(process.cwd());

module.exports = {
  root,
  dist: path.resolve(root, 'dist')
};
