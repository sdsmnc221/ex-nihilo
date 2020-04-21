# EX NIHILO :alien:

_The answer is out there._

---

<br>

One Paragraph of project description goes here.

Badges here.

**ANDROID APP** :exclamation: :exclamation: :exclamation:

[Live Demo](https://)

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node / NPM
- React Native / react-native-cli
- Debugger (optional)
- **Android** device or emulator

```
$ git clone https://github.com/sdsmnc221/nexus-tests-rn.git
```

### Installing

Install dependencies

```
$ npm i (or yarn)
$ react-native link
```

## Build

```
$ react-native run-android
```

## THIS BRANCH ONLY :sparkles:

### Changes made

- Modules & Paths resolver / Aliases (with [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)). (Files are now placed in **src/**).
- Empty folder _assets_ (for picto, video, fonts, etc.) and _configs_ (for future use) added.
- App's name and package's name changed to, respectively, _EX NIHILO_ and _ex-nihilo_.
- Components only relate to a screen, and that are not shared _(for example **SmsShort** which only shows up in **SmsScreen**)_ will be moved into the associated screen's folder.

### Docs & Sources

#### [Cleaning up imports using module resolver in React Native](https://dev.to/karanpratapsingh/cleaning-up-imports-using-module-resolver-in-react-native-58g8).

So instead of `import NavigationBar from '../../sharedUI/NavigationBar';`, we will end up with `import NavigationBar from 'sharedUI/NavigationBar';`

Check out [babel.config.js](babel.config.js) for aliases folders.

#### Change packages's name and app's name

Basically I just modified the names in [package.json](package.json) and [app.json](app.json).

And [strings.xml](/android/app/src/main/res/values/strings.xml).

And additionally used a fresh **android/** folders so all the Java packages stuff etc. also have the name **ex_nihilo**.

_(That's why it will take a long time to build the app for the first time)_

### Install and build for testing purpose

#### Checkout to this branch.

```
$ git fetch
$ git pull
$ git checkout an_path-resolver
```

#### Clear caches. No in fact clear everything. Then restart the Metro Bundler Server.

```
$ watchman watch-del-all  && rm -rf node_modules/ && npm cache verify && npm install && npm start --reset-cache
```

Separated commands

```
$ watchman watch-del-al (if you have watchman)
$ rm -rf node_modules/
$ npm cache verify
$ npm i
$ npm start --reset-cache (or react-native start --reset-cache)
```

#### Build for Android

_(It's gonna take a whiiiiiile since I used a new, fresh **android/** folder)_

```
$ react-native run-android
```

## Built With

- [Make A README](https://www.makeareadme.com/) - README's good practices.
- [A template to make good README.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - Dependency Management.
- **Love**.
- React Native.
- etc.

## Contributing

## Versioning

## Authors

- [**Sarah Manzaro**](htts://) @ Gobelins - Designer.
- [**Léa Morand**](htts://) @ Gobelins - Designer.
- [**sdsmnc**](https://github.com/sdsmnc221) / [**An TRUONG**](https://antr.tech) @ Gobelins - Developer.
- [**VincentLrg**](https://github.com/VincentLrg) / [**Vincent Largillet**](htts://) @ Gobelins - Developer.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- etc.
