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

## About Layout Wrapper

- The [`LayoutWrapper` component](./src/sharedUI/LayoutWrapper/index.js) wraps around each screen, provides it with a `SafeAreaView` and, if necessary, common component such as:

  - [`NavigationBar`](./src/sharedUI/NavigationBar/index.js)
  - [`StatusBar`](./src/sharedUI/StatusBar/index.js)

- Pass (or not) to the `LayoutWrapper` the prop `screenName`, and base on it the [`getLayoutConfigs` function](./src/sharedUI/LayoutWrapper/configs.js) will provide the right layout for each screen:

```javascript
// ./src/screens/Home/index.js

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import { SCREENS } from 'configs';

<LayoutWrapper screenName={SCREENS.HOME}>
	<View>{/* Screen Content */}</View>
</LayoutWrapper>;
```

```javascript
// ./src/screens/Intro/index.js

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import { SCREENS } from 'configs';

<LayoutWrapper>
	<View>{/* Screen Content */}</View>
</LayoutWrapper>;
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
