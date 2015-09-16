
## ARMY APFT example app using MS tech typescript / WebAPI  along with Facebook's Reactjs,.

## This is a Work in Progress
Really just getting a feel for using typescript seeing how it changes my workflow vs using babel


## Setup 

I'm using Visual Studio Community 2015 its Free and an awesome IDE! [VS2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx).... you can try out visual studio code as well

IISExpress server
- default port: 61292 change in project settings

Using semantic for the UI may move to bootstrap 4 alpha version
For dependencies you need node installed -> get the globals out the way first

``` bash
$ npm install
$ npm install tsd -g
$ npm install --global gulp
$ npm install -g typescript
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
│   └── tsconfig.json # typescript configuration
└── webpack           # Webpack config 
└── data              # Csv files
└── typings           # typescript definitions
└── Views             # C# views map to controllers
└── Controllers       # WebAPI controllers
└── tsd               # Installed typings config (2 not offically merged so not included there yet)
```


### Notes
Encounterd an issue using typescript compiler for both jsx and es6 transpiling. So I essentially made this a two step process, tsc for typescript and babel for es6 transpiling see webpack config and tsconfig.

## License

MIT

[React]: http://facebook.github.io/react/
[Redux]: https://github.com/gaearon/redux
[Babel]: https://babeljs.io/
[ESLint]: http://eslint.org/
[Webpack]: http://webpack.github.io/ 
[Typescript]: http://www.typescriptlang.org/
