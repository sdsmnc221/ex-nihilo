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

## About Theming

- Checkout theme configs in [theme.js].

- Guides: [_Colors_](./docs/guide-colors.png).

## About Custom Fonts

### Install / Remove / Update Fonts

- We've already configured the [assets fonts folder](./react-native.config.js) (for React Native > 0.6).

- Every time the fonts are to be installed / removed / updated, first manually delete [android/app/src/main/assets](./android/app/src/main/assets) folder.

- Install / Remove / Update fonts in [src/assets/fonts](./src/assets/fonts) folder.

- Relink:

```
$ react-native link
```

- Restart metro bundler server and rebuild the app:

```
$ npm start --reset-cache
$ react-native run-android
```

- Update _fonts_ in [theme.js](./src/configs/theme.js): **IT'S IMPORTANT to have the _FONT NAME STRING_ exactly THE SAME AS the _FONT NAME FILE_.**

### Use Fonts in the project

- Checkout _fonts_ in [theme.js](./src/configs/theme.js).

- **With _styled-component_**: [_example_](./src/screens/SMS/components/AnswerChoice.js) _(can be tested and checked in the Janus Convo Screen)._

```javascript
import theme from 'configs/theme';

const { acumin, cairo, superclarendon } = theme.fonts;

/*
 * Example of how to use custom fonts:
 *
 * 00. Import fonts from theme (configs/theme)
 * 01. DO NOT USE font-weight, font-style etc., as
 *     the imported fonts already have their own weight
 *     and style.
 * 02. Use font-family like normal CSS.
 */

const Choice = styled.Text`
	font-size: 13px;
	/* font-weight: bold; */
	font-family: ${acumin.italic};
`;
```

- **With _React Native StyleSheet_**:

```javascript
import theme from 'configs/theme';

const { superclarendon } = theme.fonts;

const styles = StyleSheet.create({
	font: {
		fontFamily: superclarendon,
	},
});
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
