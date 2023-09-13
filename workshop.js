//Use toUppercase method and console log
let string1 = "Welcome";
let upperString1 = string1.toUpperCase();
console.log(upperString1);

//take number as input and return another function that multiplies input with original number.
const multiply = (a, b) => a * b;
sum = multiply(3, 7);
console.log(sum);

//function that takes two numbers as input and returns an object
const returnObj = (a, b) => {a + 2, b + 4};
console.log(returnObj(5, 5));

//convert all string elements to lowercase
const animals = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];
const lcAnimals = animals.map(item => item.toLowerCase());
console.log(lcAnimals);

//print string with length over 11
const longName = animals.filter((item) => item.length > 11);
console.log(longName);

//function using callback that takes string as input and returns string in reverse order
const reverseAnimals = (animals) => animals.map((item) => item.split("").reverse().join(""));
const reversedAnimals = reverseAnimals(animals);
console.log(reversedAnimals);

//Runner function - I do not understand the question.
const runnerLlist = [
    {
    name: "Donna",
    speed: 25,
    },
    {
    name: "Azula",
    speed: 20,
    }
];
//?????

//Currying function - create URL from input values
