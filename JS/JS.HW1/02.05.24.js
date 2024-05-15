
// function compareNumbers(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// var num1 = 5;
// var num2 = 10;
// var result = compareNumbers(num1, num2);
// console.log(result);



// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }



// function digitsToNumber(a, b, c) {
//     return parseInt(a.toString() + b.toString() + c.toString());
// }




// function calculateArea(length, width = length) {
//     return length * width;
// }



// function isPerfectNumber(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === number;
// }



// function perfectNumbersInRange(min, max) {
//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             console.log(i);
//         }
//     }
// }



// function formatTime(hours, minutes = 0, seconds = 0) {
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }



// function timeToSeconds(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;
// }



// function secondsToTime(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return formatTime(hours, minutes, remainingSeconds);
// }



// function differenceBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
//     const seconds1Total = timeToSeconds(hours1, minutes1, seconds1);
//     const seconds2Total = timeToSeconds(hours2, minutes2, seconds2);
//     const difference = Math.abs(seconds1Total - seconds2Total);
//     return secondsToTime(difference);
// }
