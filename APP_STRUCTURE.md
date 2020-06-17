# A Quick Look At The Project's Structure :alien:

<br>

## Where are we?

Quick insights about the project, such as app structure, files organization, naming conventions, coding conventions, etc. etc. :zzz:.

<br>

## App Structure / Directory Tree

```bash
├root
│
├───── __test__                         ==> Testing, Jesting stuffs.
│     ├───── __snapshots__
│     ├───── *-test.js
│
├───── android                          ==> IMPORTANT as this is an Android game, containing build releases, Android assets files, keystore file, configs needed to be tweaked (gradle.properties, build.gradle, MainApplication.java etc.).
│
├───── ios                              ==> As this is an Android only project, we simply ignored this.
│
├───── docs                             ==> Various files, misc. files mostly used in the READMEs | Poster, conception doc.
│
├───── releases                         ==> Latest APK.
│
├───── src
│     ├───── App.js                     ==> The starting point.
│     ├───── assets                     ==> Fonts, images, sound, etc.
│     ├───── configs                    ==> Various global configs files, constants, Theme and styles files.
│     ├───── data                       ==> Data Classes, Default data (json/csv).
│     ├───── hooks                      ==> Various hooks, logic managers such as Story/Dialogue manager, Permissions manager, Data and Game manager
│     ├───── screens                    ==> Every screens and "applications".
│     ├───── sharedUI                   ==> Common components used across the app.
│     ├───── states                     ==> Redux, states, stores.
│     ├───── utils                      ==> Utils functions.
│
├───── index.js
│
├───── app.json
│
├───── .env / .env.example              ==> Confidential data (such as API Key)
│
├───── .prettierrc.js
│
├───── .eslintrc.js
│
├───── babel.config.js
│
├───── README.md
│
├───── TEST.md
│
├───── APP_STRUCTURE.md
│
├───── package.json
│
├───── node_modules
│
└───── .gitignore
```

<br>

## Files organisation & Naming conventions

### [src](./src)

- **assets** files: _UPPERCASE_ and _snake_case_.

- **configs** and **utils** files: _lowercase_ and _camelCase_.

  - Except for **components** or **modules** file: _Capitalized_ and _camelCase_.

- Files in **data**: _lowercase_ and _camelCase_.

  - Except for **Data Classes**: _Capitalized_ and well, also _camelCase_.

- **Hooks**: start with _use_ prefix, _camelCase_.

  - Should there are any folder inside, the folder name: _Capitalized_ and _camelCase_.

- Each **screen or app** a folder in _Capitalized_ and _camelCase_.

  - Each folder should have an **index.js** file.
  - Should there are _components belonging only to that screen_, create a **components** folder inside.

- Each **shared component** a folder in _Capitalized_ and _camelCase_.

  - Each folder should have an **index.js** file.
  - **configs or utils or misc.** files related to the component should be placed inside the folder, in _lowercase_ and _camelCase_.
  - **Related to derived components** should also be placed inside the folder, in _Capitalized_ and _camelCase_

- **states** folder: TL;DR go check the folder :zzz:.

<br>

## Coding conventions

- Functional components.
- Hooks.
- `PropTypes` and `defaultProps`.
- `styled-components` > `StyleSheet`.
- `JSX`.
- Destructuring assignment & Spread operator.

:alien:

- [Other patterns that we may or may not follow](https://reactpatterns.com/).
