# Bank

This project is simple bank transaction web app built with [Angular](https://github.com/angular/angular-cli) version 10.1.1.

Hosting URL - [https://rudani-c.github.io/bank](https://rudani-c.github.io/bank/)

## Development server

* install node.js 
* install Angular cli using `npm i -g @angular/cli`
* Run `npm install` in project directory
* Run `ng run start` or  `ng serve` to start the local dev server on http://localhost:4200/

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. or Run `npm run buildProd`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Story points

### Transfer Money

As a user, I should be able to transfer money using the Transfer Money form as shown in the UI Design.

---

As a user I should be able to:

1. Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form. 
    - Assume that the "FROM ACCOUNT" field is pre-filled with the data shown in the UI Design and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. 
    - When the transfer is pressed the new transfer should appear at the top of the transactions list, and the balance in the "FROM ACCOUNT" field should have decreased by the amount of the transfer.

Non-functional requirements:

- Reset the form to its initial state after the transfer has been completed successfully.
- A user shouldn't be able to overdraft their account beyond a balance of $ -500.00.

### Transaction History

As a user, I should be able to view recent transactions in an ordered list.

As a user, I should be able to search my recent transactions by typing a keyword in the search field.

As a user, I should be able to sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

---

As a user I should be able to:

1. View a list of my recent transactions.
    - Mock data is provided in the "mock" folder.
2. See the transactions list updated with the new transaction when a new money transfer has taken place.
3. Filter the transactions list by typing a keyword in the Search field.
    - The transactions list should update immediately at every keystroke.
4. Clear the filter by clicking an 'x' icon in the Search field.
4. Sort the transactions list by Date, Beneficiary and Amount.

Non-functional requirements:

- The Sorting order (ascending/descending) should be persistent across all sorting options; i.e. If you are sorting by beneficiary ASC and switch the sorting option to Amount, the sorting order should stay ASC
- i18n: add multi-language support
- a11y: WCAG level A
- Share your solution on the remote repository; i.e. Github, Bitbucket, GitLab...
- deploy to a static hosting platform of your choice; i.e. Netlify, Firebase, Vercel, Github pages or Heroku
- decent test coverage

### Helpful Information

- The design to be developed is provided as a PNG for quick reference in the "design" folder.
- Images and icons have been provided in the assets folder. Transaction images are provided as base64 images in the transaction JSON.
- The font for the UI Design can be found on Google fonts: https://fonts.google.com/specimen/Kanit


