/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
if (votingAge >= 18) {
    console.log (true)
} else {
    console.log (false)
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let a;
let b = 4;
if (b === 4) {
    a = "Pancakes, Because Aliens don't wear hats.";
}
console.log (a)


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let someVar = Number("1999");
console.log (someVar)


//Task d: Write a function to multiply a*b 
function multiplyer (a, b) {
    return a * b;
}
console.log (multiplyer(2, 3))




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function ageInDogYears (myAge) {
    const dogYears = myAge * 7;
    return dogYears;
}

console.log (ageInDogYears(31))




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//take weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 
function oneYearOld (age, bodyWeight) {
    if (age >= 1 && bodyWeight <= 5) {
        return bodyWeight * .05;
    } else if (age >= 1 && bodyWeight <= 10) {
        return bodyWeight * .04;
    } else if (age >= 1 && bodyWeight <= 15) {
        return bodyWeight * .03;
    }else {
        return bodyWeight * .02;
    }
}
// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight
function lessThanYear (age, bodyWeight) {
    if (age > .17 && age < .33) {
        return bodyWeight * .10;
    } else if (age > .33 && age < .84) {
        return bodyWeight * .05;
    }else {
        return bodyWeight * .04;
    }
}
// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

console.log (oneYearOld (1, 15))



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function runGame (myChoice) {
    let computerChoice;
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerChoice = "Rock";
    }else if (randomNumber < 0.66){
        computerChoice ="Paper";
    }else {
        computerChoice = "Sissors";
    }
  
    document.getElementById ("userID").innerHTML = `You Chose: ${myChoice}`;
    document.getElementById ("computerID").innerHTML = `The Computer Chose: ${computerChoice}`;

    if (myChoice === "Rock" && computerChoice === "Rock") {
        document.getElementById ("results").innerHTML = "It's a Tie!";
        console.log (myChoice, computerChoice)
        return "It's a tie!";
    }else if (myChoice === "Rock" && computerChoice === "Paper") {
        document.getElementById ("results").innerHTML = "You Loose!";
        console.log (myChoice, computerChoice)
        return "You lose!";
    }else if (myChoice === "Rock" && computerChoice === "Sissors") {
        document.getElementById ("results").innerHTML = "You Win!";
        console.log (myChoice, computerChoice)
        return "You win!";
    }else if (myChoice === "Paper" && computerChoice === "Rock") {
        document.getElementById ("results").innerHTML = "You Win!";
        console.log (myChoice, computerChoice)
        return "You win!";
    }else if (myChoice === "Paper" && computerChoice === "Paper") {
        document.getElementById ("results").innerHTML = "It's a Tie!";
        console.log (myChoice, computerChoice)
        return "It's a tie!";
    }else if (myChoice === "Paper" && computerChoice === "Sissors") {
        document.getElementById ("results").innerHTML = "You Lose!";
        console.log (myChoice, computerChoice)
        return "You lose!";
    }else if (myChoice === "Sissors" && computerChoice === "Rock") {
        document.getElementById ("results").innerHTML = "You Lose!";
        console.log (myChoice, computerChoice)
        return "You lose!";
    }else if (myChoice === "Sissors" && computerChoice === "Paper") {
        document.getElementById ("results").innerHTML = "You Win!";
        console.log (myChoice, computerChoice)
        return "You win!";
    }else {
        document.getElementById ("results").innerHTML = "It's a Tie!";
        console.log (myChoice, computerChoice)
        return "It's a tie!";
    } 
}



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles (KM) {
    return KM / 1.609;
}
console.log (kmToMiles(5))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCM (feet) {
    return feet * 12;
}  
console.log (feetToCM (3))




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong (numberOfBottles) {
    for (let i = numberOfBottles; i > 0; i--) {
        console.log (`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall!`)
    }
}  
console.log(annoyingSong(100))



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function gradeCalculator (a) {
      if (a > 90) {
          return "A";
      }else if (a > 80) {
          return "B";
      }else if (a > 70) {
          return "C";
      }else if (a > 60) {
          return "D";
      }else {
          return "F";
      }
  }
console.log(gradeCalculator(89))
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function vowelCounter (someStr) {
    const vowelList = "aeiouAEIOU";
    let vowelCount = 0;
    
    for (let i = 0; i < someStr.length; i++) {
        if (vowelList.indexOf(someStr[i]) !== -1) {
            vowelCount += 1;
        }
    }
    return vowelCount;

}
console.log(vowelCounter("This is a string to count vowels. Lets see how many are in this string"))




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function buttonFunction () {
    let userChoice = prompt ("Enter Rock, Paper or Sissors");
    runGame (userChoice);
}
