// 1. তিনটি সংখ্যার মধ্যে বৃহত্তম সংখ্যা নির্ণয়
let num1 = 15;
let num2 = 28;
let num3 = 22;

if (num1 >= num2 && num1 >= num3) {
  console.log("Largest number is:", num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("Largest number is:", num2);
} else {
  console.log("Largest number is:", num3);
}


// 2. লিপ ইয়ার (Leap Year) নির্ণয়
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}


// 3. FizzBuzz চ্যালেঞ্জ (১ থেকে ২০ পর্যন্ত)
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// 4. মৌলিক সংখ্যা (Prime Number) কিনা তা পরীক্ষা
let number = 13;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}


// 5. তারকা দিয়ে প্যাটার্ন তৈরি (Star Pattern)
let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
