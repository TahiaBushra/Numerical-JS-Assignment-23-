// // Converting Number : Decimal To Binary , Octal & Hexadecimal
// const decimalNumber = 54;
// const binaryNumber = decimalNumber.toString(2);
// const octalNumber = decimalNumber.toString(8);
// const hexaNumber = decimalNumber.toString(16);
// console.log(binaryNumber, octalNumber, hexaNumber);

// // Binary To Decimal
// const binaryStr = "110110";
// const decimalOfBinaryNumber = parseInt(binaryStr, 2);
// console.log(decimalOfBinaryNumber);

// // Binary To Decimal
// const octalStr = "66";
// const decimalOfOctalNumber = parseInt(octalStr, 8);
// console.log(decimalOfOctalNumber);

// // Binary To Decimal
// const hexaStr = "36";
// const decimalOfHexaNumber = parseInt(hexaStr, 16);
// console.log(decimalOfHexaNumber);

// // Number.isInteger
// const num = 5.9;
// if (Number.isInteger(num)) {
//     console.log(`${num} is an integer number.`);
// } else {
//     console.log(`${num} is not an integer number.`);
// };

// // isNan
// const str = "Assalamualaikum";
// if (isNaN(str)) {
//     console.log(`${str} is not a number.`);
// } else {
//     console.log(`${str} is a number.`);
// };

// parseInt(): Brings out the number only.
const padding = "2.654px";
const paddingInNumber = parseInt(padding);
const paddingInNumber2 = parseFloat(padding);
console.log(paddingInNumber);
console.log(paddingInNumber2);

// Math
console.log(Math.pow(4, 6));
console.log(Math.sqrt(144));
console.log(Math.abs(-81));
const floatNumber = 3.56;
console.log(Math.round(floatNumber));
console.log(Math.ceil(floatNumber));
console.log(Math.floor(floatNumber));
console.log(Math.trunc(floatNumber));