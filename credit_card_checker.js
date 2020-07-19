// To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays.

function createCard (string) {
  let arr = string.split('');
  let finalCard = arr.map(function(item) {
  return parseInt(item, 10);
  });
  return finalCard;
};

console.log(createCard('4485014005695066'))

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const example = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:

// The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

function validateCred(arr) {
  let copyArr = arr.slice(0);
 for (let i = copyArr.length - 2; i >= 0; i -= 2) {
  copyArr[i] *= 2;
   if (copyArr[i] > 9) {
     copyArr[i] -= 9;
     }};
 const sum = copyArr.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
 });
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
 };

console.log(validateCred(createCard('4485014005695066')))

// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

const invalid = [];

function findInvalidCards(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (validateCred(arr[i]) === false) {
       invalid.push(arr[i]);}
    } return invalid;
  };

console.log(findInvalidCards(batch));

// Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.

function idInvalidCardCompanies(arr) {
  const companies = [];
  for (i = 0; i < arr.length; i++) {
    switch (arr[i][0]) {
      case 3: if (!companies.includes('Amex (American Express)')) {
        companies.push('Amex (American Express)');
      } break;
      case 4: if (!companies.includes('Visa')) {
        companies.push('Visa');
      } break;
      case 5: if (!companies.includes('Mastercard')) {
        companies.push('Mastercard');
      } break;
      case 6: if (!companies.includes('Discover')) {
        companies.push('Discover');
      } break;
      default:
      console.log('Company not found');
      break;
      }}; return companies;
      };

console.log(idInvalidCardCompanies(invalid));



/*

If you’d like to challenge yourself further, you could consider the following:

Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
Create a function that will convert invalid numbers into valid numbers.

Hint: If you need to convert strings to numbers, parseInt() can help you do that.

*/