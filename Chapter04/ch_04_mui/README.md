<div>
  <h1 align="center">Simplify Testing with React Testing Library
  </h1>
  <strong> 
  Code examples for Chapter 4 - Integration Testing and Third Party Libraries
  </strong>
  <h2>Mini Project: <i>Material UI</i></h2>
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

- Chapter 4 consists of multiple "mini" projects. We recommend opening the specific folder for a project in your text editor and not the top-level parent folder containing all chapter projects.

```bash
npm install
```

## Running the project

```bash
npm start
```

- Note: you will see the starter text "Replace me with chapter related components" when you initially run the app. Simply replace the text with any component in the chapter repo.

## Running the tests

```bash
npm test
```

## For React 17+ 
```shell
npm install --save --legacy-peer-deps @material-ui/core
npm install --save --legacy-peer-deps @material-ui/icons
```
But React 18 not compatible
* https://github.com/mui/material-ui/issues/32074
