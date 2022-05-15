
<div>
  <h1 align="center">Simplify Testing with React Testing Library
  </h1>
  <strong> 
  Code examples for Chapter 5 - Refactoring Legacy Applications with React Testing Library
  </strong>
  <h2>
  Mini Project: <i>Budget - Final Version</i>
  </h2>
  <p>
  This repo has the final code for the Budget application. Dependencies are updated to latest versions and tests written in React Testing Library are included.  
</p>
</div>

## System Requirements

- [npm](https://www.npmjs.com/)
- [node](https://nodejs.org)
- [git](https://git-scm.com/)

Use the following commands to verify required tooling:

```bash
git --version
node --version
npm --version
```

## Setup

- Chapter 5 consists of multiple "mini" projects. We recommend opening the specific folder for a project in your text editor and not the top-level parent folder containing all chapter projects.

```bash
npm install
```

## Running the project

```bash
npm start
```

## Running the tests

```bash
npm test
```
## Inspect the dependencies
```shell
> npm ls chokidar

the-budget-app@1.0.0 D:\tmp\Simplify-Testing-with-React-Testing-Library-2021\Chapter05\example_1_final
└─┬ react-scripts@5.0.1
  ├─┬ react-dev-utils@12.0.1
  │ └─┬ fork-ts-checker-webpack-plugin@6.5.2
  │   └── chokidar@3.5.3 deduped
  ├─┬ tailwindcss@3.0.24
  │ └── chokidar@3.5.3
  └─┬ webpack-dev-server@4.9.0
    └── chokidar@3.5.3 deduped
```
When you upgrade the dependencies , you need to analysis it . 
* When we upgrade the react core libraries : 
  * react , react-dom -> "^16.14.0" ;
  * @testing-library/react -> 12.1.4 ;
  * @testing-library/user-event   ^13.5.0 

After test , we found [some codes](./src/components/SetIncome.js) needed to be changed :
[createMuiTheme -> createTheme](https://github.com/robert0714/Simplify-Testing-with-React-Testing-Library-2021/commit/db9ebe89714ae404a7ba0b3f065fd35e2ec10cf9#diff-68c07a425366b9f560773366639bd3ed49faf2896131948605f8501c7d45949b) . 

And then , we found uuid module is too old .
* When we upgrade the uuid module :
  *  "uuid": "^3.3.2" -> "^7.0.3"
We encountered the probleme when we execute `npm start` :
* Error message:  "Module not found: Error uuid  import uuidv4 from 'uuid/v4';"
* reference some data: https://stackoverflow.com/questions/70912241/just-after-installing-uuidv4-it-shows-error-which-is-as-follows
* After test , we found [some codes](./src/components/CreateNewBudget.js) needed to be changed : [`import uuidv4 from 'uuid/v4';` -> `import { v4 as uuidv4 } from 'uuid';`](https://github.com/robert0714/Simplify-Testing-with-React-Testing-Library-2021/commit/6d5bf1c4f0c96999f81c0a9f13bd90c08cfab400#diff-153d8c3b593d35151957acaa8dc2147f27fdebf17193c61e37d11c49c76d0399)
