# Chapter 5: Refactoring Legacy Applications with React Testing Library
In this chapter, we're going to cover the following main topics:
* Using tests to catch regressions when updating dependencies
* Refactoring tests written with Enzyme
* Refactoring tests written with ReactTestUtils
* Refactoring tests to comply with common testing best practices
## Technical requirements
 We will be using the **create-react-app** CLI tool for all code examples. 
 ## Using tests to catch regressions when updating dependencies
 The budgeting application has the following [production dependencies](./example_1_starter/package.json#L9-L16):

 ```json
  "dependencies": {
    "@material-ui/core": "^1.4.2",
    "@material-ui/icons": "^2.0.1",
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "recharts": "^1.1.0",
    "uuid": "^3.3.2"
  },
 ```

 The preceding code shows the current versions of all project dependencies. We will update **"@material-ui/core"** to version **"4.11.3"**, **"@material-ui/icons"** to version **"4.11.2"**, and **"recharts"** to version **"2.0.4"**, so the application has up-to-date dependency code. The approach we will use to update the dependencies will involve having a suite of automated tests running to help catch any regressions after each dependency is updated. The budgeting application does not have any existing tests.

 In situations where a legacy application **has no existing tests**, a great way to get started is by writing **automated UI end-to-end tests** for critical workflows before adding tests at other test levels. 

 ## Creating the regression test suite
 For the first test, we will target the ***setting the income*** functionality by verifying that a user can enter an amount for [**income**](./example_1_starter/src/components/App.test.js#L5-L9):

```javascript
  function setOneDollarIncome() {
    user.click(screen.getByText(/set income/i));
    user.type(screen.getByRole('spinbutton'), '1');
    user.click(screen.getByText(/submit/i));
  }
```
In the previous code, we create a function, **setOneDollarIncome**, to set an income amount of ***$1***. The **setOneDollarIncome** function will reduce repetitive code in successive tests. Next, we will write the main [test code](./example_1_final/src/components/App.test.js#L21-L31):

```javascript
  test('SetIncome, given income amount, sets income', () => {
    render(<App />);
    setOneDollarIncome();
    const leftOverBudget = screen.getByText(/left over:/i);
    const leftOverBudgetAmount = within(leftOverBudget).getByText(/\$1/i);

    expect(leftOverBudgetAmount).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /income: \$1/i })
    ).toBeInTheDocument();
  });
```

In the preceding code, first, we render the **App** component in the DOM. Next, we set an **income** amount of *$1* via the **setOneDollarIncome** function. Next, we grab the **left over** text and use the **within** method from React Testing Library to access the dollar amount text. The **within** method can be used in situations where we want to access the child elements of a parent element. When we run the application, ``the resulting HTML element output`` for the **Left Over** section on the screen is as follows:
```html
<p class="MuiTypography-root BudgetSummary-leftoverText-4   MuiTypography-body1">
  Left over: <span class="BudgetSummary-profit-6">$1</span>
</p>
```
In the preceding code, a **p** element has the text **Left over** as child content. In the test code, we grab the p element via the **Left Over** text and store it in the **leftOverBudget** variable. Then, we use within to grab the span element with the text $1 and store it in the **leftOverBudgetAmount** variable.

Finally, we assert that **leftOverBudgetAmount** is in the DOM. For the next test, we will target the ``creating a budget`` functionality by verifying the resulting amount in the ``Budget Summary`` [section](./example_1_final/src/components/App.test.js#L12-L19) once a user sets a budget:

```javascript
  function createCarBudget(amount = '5') {
    user.click(screen.getByText(/create new budget/i));
    user.selectOptions(screen.getByRole('combobox', { name: /category/i }), [
      screen.getByText('Auto'),
    ]);
    user.type(screen.getByRole('spinbutton'), amount);
    user.click(screen.getByText(/add budget/i));
  }
```