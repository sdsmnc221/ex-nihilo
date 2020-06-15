# EX NIHILO :alien:

_**The answer is out there.**_

---

<br>

![Made by](https://img.shields.io/badge/Team-EX%20NIHILO%20%40%20Gobelins%20BDDI%202020-lightgrey)

[![Website](https://img.shields.io/badge/Website-up-green)](https://exnihilo.netlify.app) [![GitHub license](https://img.shields.io/badge/License-MIT-green)](./LICENSE) [![GitHub release](https://img.shields.io/badge/Release-v1.0.0.0-green)](https://github.com/sdsmnc221/ex-nihilo/releases)

[![App size](https://img.shields.io/badge/APK%20size-~51%20Mb-blue)](https://bit.ly/ex-nihilo-apk) ![Platform](https://img.shields.io/badge/Platform-Android%20only!-red) [![Maintenance](https://img.shields.io/badge/Maintained%3F-maybe-yellow)](https://github.com/sdsmnc221/ex-nihilo/graphs/commit-activity)

![made-with-react-native](https://img.shields.io/badge/Made%20with-React%20Native-blue) ![made-with-vue](https://img.shields.io/badge/Made%20with-Vue-informational) ![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-blue)

<br>

---

<br>

<p align="center">
    <a href="https://exnihilo.netlify.app" target="__blank"><img src="./docs/exnihilo_affiche.jpg" alt="Affiiche Ex Nihilo" style="width:80%;"/></a>
</p>

<br>

<p align="center">
    Si vous trouviez un téléphone abandonné...
    <br>
    Quel secret pourriez-vous découvrir ?
    <br>
    Et si la réponse à vos question était autre part ?
    <br>
    <br>
    <a href="https://exnihilo.netlify.app" target="__blank"><b>___Android APK Download___</b></a>
</p>

<br>

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node / NPM
- React Native / react-native-cli
- React Native Debugger (optional)
- **Android** device or emulator

```
$ git clone https://github.com/sdsmnc221/ex-nihilo.git
```

### Installing

- Install dependencies:

```
$ npm i (or yarn)
$ react-native link
```

### Configuration

- Create a correct **.env file** base on [**.env.example**](./.env.example), or ask us :sweat:.

## Build Debug

```
$ npm start --reset-cache // optional, to open metro bundler server first
$ react-native run-android
```

## Build Release

- Follow [the official document](https://reactnative.dev/docs/signed-apk-android):

  - Generate a key store with the same configs in [**gradle.properties**](./android/gradle.properties):

  ```
  $ sudo keytool -genkey -v -keystore ex-nihilo-key.keystore -alias ex-nihilo -keyalg RSA -keysize 2048 -validity 10000
  ```

  - Place the keystore file under `android/app`.

  - Generate the release AAB:

  ```
  $ cd android
  $ ./gradlew bundleRelease
  $ cd ..
  ```

  - Test the release build of your app:

  ```
  $ npx react-native run-android --variant=release
  ```

- Generate APK from AAB: use [**bundletool**](https://developer.android.com/studio/command-line/bundletool) with `--mode=universal`:

  ```
  $ java -jar "PATH_TO_BUNDLE_TOOL" build-apks --bundle=PATH_TO_AAP/AAB_FILE_NAME.aab --output=ex-nihilo.apks --ks="PATH_TO_KEYSTORE" --ks-pass=pass:KEYSTORE_PASSWORD --ks-key-alias=KEYSTORE_ALIAS --key-pass=pass:KEYSTORE_PASSWORD --mode=universal
  ```

## Others DOCS

- For **Testings**, check [TEST.md](./TEST.md).
- For **App Structure**, check [APP_STRUCTURE.md](./APP_STRUCTURE.md).

## Built With

- React Native / Redux.
- VueJS / VueX.
- P5 / Canvas.
- [Make A README](https://www.makeareadme.com/) - README's good practices.
- [A template to make good README.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - Dependency Management.
- [Badges from SHIELDS.IO](https://shields.io/).
- **Love** & **COVID19 social distance**.
- etc.

## Authors

- [**Sarah Manzaro**](htts://) @ Gobelins - Designer.
- [**Léa Morand**](htts://) @ Gobelins - Designer.
- [**sdsmnc**](https://github.com/sdsmnc221) / [**An TRUONG**](https://antr.tech) @ Gobelins - Developer.
- [**VincentLrg**](https://github.com/VincentLrg) / [**Vincent Largillet**](htts://) @ Gobelins - Developer.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

- [**Gobelins - L'Ecole de l'Image**](https://www.gobelins.fr/).
- [**Gobelins - Interactive Design**](http://designinteractif.gobelins.fr/).
