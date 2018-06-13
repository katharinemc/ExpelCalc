This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Expel Calc

## Tech/framework used
- [React](https://reactjs.org)
- [Enzyme](https://github.com/airbnb/enzyme)

## Features
- Performs basic addition, subtraction, and multiplication
- Can string multiple operations, e.g. 1 + 1 + 1 = 3
- Requires at least one number between operators
- Does not accept non-numbers
- True to form for retro pocket calculators, errors are displayed as "Error" in the display box.

## Demo It!
To demo locally, clone this repo, install the necessary dependencies, and run the app locally.
You can also enjoy ExpelCalc [deployed on Netlify](http://5b214342b13fb158d3e905a6.brave-bhaskara-1e607a.netlify.com)
## Code Example

Components are stored in the /src/ folder, which also contains a subfolder for tests.
```
expel_calc/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    /_tests_/
      numberbutton.test.js
      wholecalc.test.js
    CalcOperators.js
    NumberButtons.js
    MathOperators.js
    WholeCalc.js
    App.css
    App.js
    index.css
    index.js
```


