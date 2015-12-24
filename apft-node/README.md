
## ARMY APFT example app using reactjs / redux / express

## Setup 
 
Using semantic UI.
For dependencies you need node installed -> get the globals out the way first

``` bash
$ npm install
$ npm install --global gulp
$npm start

gulp webpack 
gulp theme
```

## Structure

``` bash
.
├── wwwwroot
│   └── Additonal scripts to build
│   └── bundle.js   # bundled files webpack files
├── scripts
│   ├── actions       # Actions
│   ├── components    # Components
│   ├── containers    # Containers
│   ├── reducers      # Reducers
│   ├── store         # Store
│   └── index.js      # entry file for webpack build
└── webpack           # Webpack config 
└── data              # Csv files


### Notes 
## License

MIT

[React]: http://facebook.github.io/react/
[Redux]: https://github.com/gaearon/redux
[Babel]: https://babeljs.io/
[ESLint]: http://eslint.org/
[Webpack]: http://webpack.github.io/
