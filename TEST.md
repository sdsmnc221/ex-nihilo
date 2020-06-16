# A Quick Guide For Testing :alien:

<br>

## Where are we?

These instructions will get you up to run some simple and basic tests implemented for **Ex Nihilo** with **Jest**. Some may succeed, some may failed (intentionnaly or not, but of course explanations will be given).

We would like to add many more tests but we don't have enough time. Therefore, this doc also includes a list of potential / future test case scenarios.

Testing isn't always about testing frameworks, we also have some linter and type checking implemented.

<br>

---

## Basic Testing with Jest

### Some external documentations

- [React Native Testing Overview](https://reactnative.dev/docs/testing-overview).
- [Jest's official docs](https://jestjs.io/docs/en/25.x/getting-started.html) - We are using version 25.1.0.
- [Testing React Native App with Jest](https://jestjs.io/docs/en/tutorial-react-native).
- [Jest configuration guide](https://jestjs.io/docs/en/next/configuration#globals-object).

### Prerequisites

- Node / NPM.
- React Native / react-native-cli.
- Jest / jest-cli.
- Terminal.

### Insights

- The configs for Jest can be found in [package.json](package.json).

  ```json
  {
  	"scripts": {
  		//...
  		"test": "jest"
  	},
  	"jest": {
  		"preset": "react-native",
  		"setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  		"moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
  		"moduleNameMapper": {
  			"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/utils/test/assetsTransformer.js",
  			"sharedUI/(.*)": "<rootDir>/src/sharedUI/$1"
  		},
  		"transform": {
  			"^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  		},
  		"transformIgnorePatterns": [
  			"node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*))"
  		],
  		"globals": {}
  	}
  }
  ```

- We use an [assetsTransformer](./src/utils/test/assetsTransformer.js) for non-js file name mapper.

- Test suites are to be found normally in the global or each local [\_**tests\_**](./__tests__/) folder.

### Let's Jesting

- Install dependencies (jest and co. will also be installed since the dependencies are already specified in **package.json**):

  ```
  $ npm i (or yarn)
  ```

- Run tests

  ```
  $ npm run test (or yarn test)
  ```

### Expected results:

#### Failed Test

As we will see in the terminal, every tests will pass except for [App-test.js](__tests__/App-test.js) :mask:. Which is actually normal, if we check [App.js](src/App.js). The app comes with many dependencies and stuffs (store, many providers, many constants that needed to be mocked first or it will stay `undefined`, making the rendering test failed).

#### Some successful basic tests:

- **Component Test: Testing Rendered Output & Snapshot the [PlaceHolder component](src/sharedUI/PlaceHolder/__test.js).**

  - The test file: [PlaceHolder-test.js](__tests__/PlaceHolder-test.js), which is simple and very straightforward snapshot test came out right from the doc :joy:.

    ```javascript
    it('renders PlaceHolder correctly', () => {
    	const tree = renderer.create(<PlaceHolder />).toJSON();
    	expect(tree).toMatchSnapshot();
    });
    ```

  - The test component: [PlaceHolder component](src/sharedUI/PlaceHolder/__test.js), a basic dumb component. We don't use the [real PlaceHolder component](src/sharedUI/PlaceHolder/index.js) though, because for testing purpose we would need to use these two little friends witch will cause build conflicts.

    ```javascript
    import styled, { css } from 'styled-components/native';
    import 'jest-styled-components/native';
    ```

  - Snapshot can be found here: [PlaceHolder-test.js.snap](__tests__/__snapshots__/PlaceHolder-test.js.snap).

<br>

- **Another Component Test: Testing Rendered Output & Snapshot the [Glitch component](src/sharedUI/Glitch/index.test.js).**

  - The test file, which is also the test component: [Glitch/index.test.js](src/sharedUI/Glitch/index.test.js), which is a little bit more complexed in terms of logic.

  - Snapshot can be found here: [Glitch/index.test.js](src/sharedUI/Glitch/__snapshots__/index.test.js.snap).

<br>

---

## Potential test scenarios

### Device Data Retrieval

```
   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
   ┃   ASK FOR USER'S PERMISSION   ┃
   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                   │
             User's consent?
                   │           ╔════╗
                   ├───────────║ NO ║──────────────┐
                   │           ╚════╝              │
                ╔═════╗                            ▼
                ║ YES ║                 ┌─────────────────────┐
                ╚═════╝                 │  NO DATA, NO GAME!  │
                   │                    └─────────────────────┘
            Device has data?
          (Simulator won't)
                   │           ╔════╗
                   ├───────────║ NO ║──────────────┐
                   │           ╚════╝              │
                ╔═════╗                            ▼
                ║ YES ║                  ┌───────────────────┐
                ╚═════╝                  │     FAILSAIFE:    │
                   │                     │CONTINUE GAME WITH │
                   │                     │      FAKE DATA    │
                   ▼                     └───────────────────┘
          ┌────────────────┐                       ▲
          │ DATA RETRIEVAL │                       │
          └────────────────┘                       │
                   │                               │
                   │                               │
      Data retrieval success?                      │
                   │           ╔════╗              │
                   ├───────────║ NO ║──────────────┘
                   │           ╚════╝
                ╔═════╗
                ║ YES ║
                ╚═════╝
                   │
                   ▼
          ┌─────────────────┐
          │ MERGE WITH FAKE │
          │  DATA AND STOCK │
          │ IN GLOBAL STATE │
          └─────────────────┘
```

<br>

### PASSWORD LOCK

```
   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
   ┃      USER INPUT PASSWORD      ┃
   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                   │
        PasswordLock Component
           has hint enabled?
                   │           ╔════╗
                   ├───────────║ NO ║──────────────┐
                   │           ╚════╝              │
                ╔═════╗                            ▼
                ║ YES ║                 ┌─────────────────────┐
                ╚═════╝            ┌───▶︎│ PASSWORD VALIDATION │
                   │               │    └─────────────────────┘
                   │               │               │
                   └───────────────┘               │
                                                   │
                                                   │
                   ┌───────────────────Is Password correct?
                   │                               │
                ╔═════╗                            ▼
                ║ YES ║                          ╔════╗
                ╚═════╝                          ║ NO ║
                   │                             ╚════╝
                   │                               │
                   ▼                               │
          ┌────────────────┐                       ▼
          │UNLOCK & PROCEED│              ┌────────────────┐
          └────────────────┘              │   KEEP TRYING  │
                   ▲                      │ HINT WILL COME │ ◀───┐
                   │                      └────────────────┘     │
                   │                               │             │
                ╔═════╗                            │             │
                ║ YES ║                            │             │
                ╚═════╝                            │             │
                   │                               │             │
                   │                               │             │
         Is password correct? ◀────────────────────┘             │
                   │                                             │
                   │                                             │
                   │           ╔════╗                            │
                   └───────────║ NO ║────────────────────────────┘
                               ╚════╝

```

<br>

### GLITCH COMPONENT

```javascript
- var glitchOn (globalSate) = activator

- On trigger
    => setGlitchOn = true
    => setTimeOut -> 1.5s -> setGlitchOn = false

- if glitchOn = true, mount Glitch

- glitchData:
    [
      (glitch1){ [ { part: full, uri: uri }, { part: part, uri: uri } ] },
      (glitch2){ [ { part: full, uri: uri }, { part: part, uri: uri } ] },
      (glitch3){ [ { part: full, uri: uri }, { part: part, uri: uri } ] }
    ]

- Glitch component logic on mount: every 0.25s
    => Random between glitches
    => Random between glitches format
    => Random position:
        => if glitch is a small piece: height !== 100%, top/left random
        => if glitch is a large piece: height = 100%, top/left = 0

- After every 1.5s e setGlitchOn = false, unMount Glitch component
```

<br>

### Other Tests (TL;DR :tired_face:)

- Dataviz logic
- Data transfer / format / change / handling
- .ENV
- Branched dialogue story

<br>

---

## Static Analysis Test

Static analysis checks our code for errors as we write it, such as **Linter** & **Formatter**, even **TRANSPILER**, integrated in our project as well as **VSCode**.

- [ESLINT configs](./.eslintrc.js).
- [PRETTIER configs](./.prettierrc.js).
- [BABEL configs](./babel.config.js).
- VSCode settings:

  ```json
  {
  	"editor.formatOnSave": true,
  	"eslint.autoFixOnSave": true,
  	"prettier.jsxSingleQuote": true,
  	"prettier.singleQuote": true,
  	"prettier.semi": true,
  	"files.associations": {
  		"*.js": "javascriptreact"
  	},
  	"javascript.updateImportsOnFileMove.enabled": "always"
  }
  ```
