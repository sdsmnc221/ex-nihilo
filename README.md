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

#### _In-game Notification Component_ added:

- `onSwipe` _(left, right, up)_: make it disappear, but the notification will return after a certain amount of time to remind the user to go talk to Janus.
- `onPress`: switch to Janus Conversation Screen (App SMS), and the notification will disappear for good.

#### _Janus Conversation Screen_ added to SMS App:

- `onPressBackButton`: explicitly return to the main page of SMS App (the list of SMS). Since for example if the user is on HomeScreen and press the Notification ==> switch to Janus Conversation Screen but the previous screen is HomeScreen, not the SMS App.
- Section **Reply to Janus / Multiple Choice** added: if answers are available, the user can chose one and press the _SEND_ button (icon) to send it to Janus.

#### Minor rework on _SMS Conversation Screen_ and _Janus Conversation Screen_:

- Always scroll to the bottom of the messages list.
- Rework / Improvements on each screen's layout, some shared components added.

### Docs & Sources

- [react-native-modal](https://github.com/react-native-community/react-native-modal)
- [react-navigation: Navigating without the navigation prop](https://reactnavigation.org/docs/navigating-without-navigation-prop/)

### Install and build for testing purpose

#### Checkout to this branch

```
$ git fetch
$ git pull
$ git checkout an_emergency_notification-janus
```

#### Start the Metro Bundler Server

```
npm start
```

_If it don't work, clear caches:_

```
$ watchman watch-del-all  && rm -rf node_modules/ && npm cache verify && npm install && npm start --reset-cache
```

_Separated commands:_

```
$ watchman watch-del-al (if you have watchman)
$ rm -rf node_modules/
$ npm cache verify
$ npm i
$ npm start --reset-cache (or react-native start --reset-cache)
```

#### Build for Android

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
