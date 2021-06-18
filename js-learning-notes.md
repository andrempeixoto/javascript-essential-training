# 5 JavaScript Concepts You HAVE TO KNOW (by James Q Quick)

-> [link to video](https://youtu.be/a00NRSFgHsY)

## 1. Equality == vs === variables: primitives vs objects, arrays, classes

## 2. Asychronous JS (Async/Await vs Then/Catch)

## 3. Error handling

- Write defensive code; prepare for things that can go wrong (try/catch)
  checking 'parameter types' and for 'null/undefined';

- Handle these situations nicely so your application doesn't crash.

## 4. ES6 syntax

- Destructuring:

  ```javascript
  const person = {
    firstName: "Andre",
    lastName: "Peixoto
  };
  ```

  ```javascript
  const firstName = person.firstName; // previous to ES6 syntax
  ```

  ```javascript
  const { firstName } = person; // ES6 syntax
  ```

- Spread Operator:

  Allows you to take all the items in an array and spread them out, having
  access to them individually; Specially usefull to pass items in an array
  individually as parameters in a function; Usefull for making copies of arrays

- Objects:

  Useful for: Getting out to the unique key value pairs; Making copies of basic
  objects

- Template literals (`backsticks`) Allows us to do variable or string
  interpolation with data inside of that ES6 template literal

## 5. Array methods

- MAP
- FILTER
- REDUCE
- SUM
- EVERY
- SORT
