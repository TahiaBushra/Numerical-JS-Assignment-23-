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

// // Octal To Decimal
// const octalStr = "66";
// const decimalOfOctalNumber = parseInt(octalStr, 8);
// console.log(decimalOfOctalNumber);

// // Hexadecimal To Decimal
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

// // parseInt(): Brings out the number only.
// const padding = "2.654px";
// const paddingInNumber = parseInt(padding);
// const paddingInNumber2 = parseFloat(padding);
// console.log(paddingInNumber);
// console.log(paddingInNumber2);

// // Math
// console.log(Math.pow(4, 6));
// console.log(Math.sqrt(144));
// console.log(Math.abs(-81));
// const floatNumber = 3.56;
// console.log(Math.round(floatNumber));
// console.log(Math.ceil(floatNumber));
// console.log(Math.floor(floatNumber));
// console.log(Math.trunc(floatNumber));

// Math.random()
// console.log(Math.random());
// console.log(Math.random() * 100);
// console.log(Math.ceil(Math.random() * 100));

// // Dates
// const currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());

// // Formatted Date
// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString(
//     "bn-BD", {
//     year: "numeric", month: "long", day: "2-digit",
// }
// ); console.log(formattedDate);

// // // setTimeout
// // function greet() {
// //     console.log("Assalamualaikum");
// // }; setTimeout(greet, 3000);

// // setInterval()
// const myInterval = setInterval(() => { console.log(new Date().toLocaleTimeString()); }, 1000);
// setTimeout(() => { clearInterval(myInterval); }, 10000);

// Clock
// const clock = document.querySelector(".clock");
// function buildClock() {
//     const myInterval =
//         setInterval(() => { const time = new Date().toLocaleTimeString("en-UK", { hour: "2-digit", minute: "2-digit", second: "2-digit", dayPeriod: "long" }); clock.textContent = time; }, 1000); stopClock(myInterval);
// };
// function stopClock(myInterval) {
//     setTimeout(() => {
//         clearInterval(myInterval);
//         clock.textContent = "Clock Stopped";
//         clock.style.background = 'linear-gradient(45deg, #f6d365, #fda085)';
//         setTimeout(() => {
//             clock.style.background = 'linear-gradient(45deg, #ff9a9e, #fad0c4)';
//             buildClock();
//         }, 5000);
//     }, 10000);
// }
// buildClock();

// Random Password
const randomPassGen = (digitLimit = 6) => {
    const materials = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/!@#$%^&*()_=[]{}:;'<>?.";
    let pass = "";
    for (let i = 0; i <= digitLimit; i++) {
        pass += materials[Math.ceil(Math.random() * materials.length - 1)];
    }; return pass;
}; console.log(randomPassGen(8));