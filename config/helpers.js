const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = (relativePath) => {
  const root = fs.realpathSync(process.cwd());
  return path.resolve(root, relativePath);
};

const generateHtmlPluginTemplates = (minify = false) => {
  const templatesLocation = resolvePath('src/views');
  const htmlTemplatePluginObjects = [];
  const allowedFiles = ['hbs', 'handlebars', 'pug', 'mustache', 'html'];

  fs.readdirSync(templatesLocation).forEach(file => {
    const parts = file.split('.');
    const fileName = parts[0];
    const fileExtension = parts[1];

    if (allowedFiles.includes(fileExtension)) {
      const config = {
        filename: fileName === 'index' ? `${fileName}.html` : `${fileName}/index.html`,
        template: templatesLocation + '/' + file,
        minify
      };

      htmlTemplatePluginObjects.push(new HtmlWebpackPlugin(config));
    }
  });

  return htmlTemplatePluginObjects;
};

module.exports = {
  generateHtmlPluginTemplates,
  resolvePath
};
