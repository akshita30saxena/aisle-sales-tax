## Salex Tax Problem Solution

## Language: Javascript

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

## Folder Structure

src

- index
- constants
  - strings
- controllers
  - compute
  - handler
  - process
- tests
  - utils
- utils
  - input
  - output
  - transform
  - validation

## How To Run

Open a terminal, navigate to the root of the project & follow the below mentioned steps to setup & run the application:

Install

```sh
npm install
```

Start

```sh
npm start
```

Testing

```sh
npm run test
```
