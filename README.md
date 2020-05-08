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

### Changes made - [Store config in the environment](https://12factor.net/config):

- Setup environment variables / configs **.env**.

- [**.env.example**](./.env.example) was also created.

- Store confidential stuffs (like API keys, passwords, etc.) and other configs in **.env**.

### Docs & Sources

#### [Config variables for React Native apps](https://github.com/luggit/react-native-config).

- Create your own **.env** file based on [**.env.example**](./.env.example) (or get it from your teammate :satisfied:). **Environment variables are stored in this file, and won't be committed** _(since it was added in [**.gitignore**](./.gitignore))_.

- Checkout [**configs.js**](./src/configs/index.js): We get all environments variables with `Config` from `react-native-config`, and export all of it for late use.

- For example, in the [**Lock Screen**](./src/screens/LockScreen/index.js):

```javascript
import { KEY_PUZZLE_A } from 'configs';

const [phonePassword, setPhonePassword] = useState(KEY_PUZZLE_A);
```

- _What is `KEY_PUZZLE_A` !? What is the password??_ Well only those who have the **.env** file know. The password won't be hardcoded and seen in this public repo :satisfied:.

- Commands for the first build:

```
$ watchman watch-del-al (if you have watchman)
$ rm -rf node_modules/ (optional)
$ npm cache verify (optional)

$ npm i
$ react-native link
$ npm start --reset-cache (or react-native start --reset-cache)
$ react-native run-android
```

- Everytime we update the **.env** file, we need to rebuild the app:

```
$ npm start --reset-cache (--reset-cache is optional)
$ react-native run-android
```

- Test out the password locks!

## Built With

- [Make A README](https://www.makeareadme.com/) - README's good practices.
- [A template to make good README.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - Dependency Management.
- **Love**.
- React Native.
- [react-native-config](https://github.com/luggit/react-native-config).
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
