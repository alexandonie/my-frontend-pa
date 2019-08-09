<p align="center">
  <a href="https://myfrontendpa.alexandonie.com/">
	<h1 align="center">🤵🏻</h1>
  </a>
</p>
<h3 align="center">My front-end personal assistant</h3>

<p align="center">
  A webpack boilerplate for static websites that does: es6, sass, handlebars and more.
  <br>
  <a href="https://myfrontendpa.alexandonie.com"><strong>Visit the website »</strong></a>
  <br>
</p>

<hr />

<span style="display: block;" align="center" valign="center">

  [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  .
  [![peerDependencies Status](https://img.shields.io/david/peer/alexandonie/my-frontend-pa.svg)](https://david-dm.org/alexandonie/my-frontend-pa?type=peer)
  .
 [![devDependency Status](https://img.shields.io/david/dev/alexandonie/my-frontend-pa.svg)](https://david-dm.org/alexandonie/my-frontend-pa?type=dev)

</span>

<hr />

## Installation

Make sure nodejs and npm are installed on your machine. If not, follow [these intructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then proceed with the next steps:

```bash
git clone https://github.com/alexandonie/my-frontend-pa
 ```

 ```bash
cd my-frontend-pa
 ```

```bash
npm run install
 ```

There's no CLI setup wizard or anything like that so once you have everything on your machine, rename the project accordingly and run ```npm run start``` for the development mode or ```npm run build``` for the production mode.

## File structure

```
📦my-frontend-pa
 ┣ 📂config // this is where all the webpack config lives
 ┣ 📂dist // this is the auto-generated build folder
 ┃ ┣ 📂about
 ┃ ┣ 📂images
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜main.54bbc493581d31e9c2b9.bundle.js
 ┃ ┗ 📜main.cd39ee536e4694328be3.css
 ┣ 📂src // this is where you'll write the actual code of your project
 ┃ ┣ 📂images
 ┃ ┣ 📂scripts
 ┃ ┣ 📂styles
 ┃ ┣ 📂views // every directory contains a few examples to get you going
 ┃ ┃ ┣ 📂includes
 ┃ ┃ ┃ ┣ 📜footer.hbs
 ┃ ┃ ┃ ┗ 📜header.hbs
 ┃ ┃ ┣ 📂layouts
 ┃ ┃ ┃ ┗ 📜base.hbs
 ┃ ┃ ┣ 📜index.hbs
 ┃ ┃ ┗ 📜page2.hbs
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜index.js // the entry point of the app
 ┣ 📜.babelrc
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

## Features
- development server with live reloading and local access from any device (laptop, phone, etc)
- es6 support
- handlebars support
- html, css and js transpilation, bundling and optimization
- sass support
- purgeCSS support to remove dead code
- js linting
- cache busting
- clean urls (through automated folder structuring)

## Author

**Alex Andonie**

-   Website: <https://www.alexandonie.com/>
-   Github: <https://github.com/alexandonie/>

## License

The code is available under the [MIT license](LICENSE).
