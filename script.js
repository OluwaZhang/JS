
// name = "billy"
// if ( name ==="billy"){
//     alert("hi billy")
// }
// name = "billy"
// if ( name ==="billy"){
//     alert("hi billy")
// } else{
//     alert( "go away")
// }

// undefined
// if ( name ==="billy"){
//     alert("hi billy")
// } else if ( name === "john"){
//     alert( "hey man")
// } else{
//     alert( "fuck off")
// }

// name = "billy"
// if ( name ==="billy"){
//     alert("hi billy")
// } else if ( name === "john"){
//     alert( "hey man")
// } else{
//     alert( "fuck off")
// }



// var age = prompt("enter your age")
// if ( Number(age) === 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// } else if (Number(age) > 18){
//     alert("Powering On. Enjoy the ride!")
// } else if (Number(age) < 18){
//     alert("Sorry, you are too young to drive this car. Powering off")
// }

// adding the js to the html
//  4+3;

//  if (4+3=== 7){
//     alert("youre smart");
//  }

// functions
//creating a function way 1
// function sayHello(){
//     console.log("Hello");
// }

// sayHello()

// // second way of creating function

// var sayBye = function(){
//     console.log("bye")
// }
 
// sayBye()

// function sing(){
//     console.log(alxxnaodcno)
//     console.log(bububububu)
// }

// console.log("i am the king")
// console.log( typeof "john")
// console.log(typeof 50 )
// console.log(typeof true )

//dave gray

// strings

const myVariable = "mathematics"

// length property
console.log(myVariable.length) //the length property returns the number of strings
console.log("how are you".length)

// string methods
console.log(myVariable.charAt(2)) //the charAt method returns the element in a required position


console.log(myVariable.indexOf("at")) //the indexOf provides the position of the element required from the first occurence

console.log(myVariable.lastIndexOf("at"))  //this provide the position of the charactyer required from the last occurence 

console.log(myVariable.slice(4, 8)) //this requires 2 positons and returns the start and the ending position


console.log(myVariable.toUpperCase())  //this returns the string in all uppercase

console.log(myVariable.toLowerCase())  //this returns the string in all lower case

console.log(myVariable.includes("mat"))  //this returns boolean to indicate if the characters are included in the  string element

console.log(myVariable.split("c")) //this splits the string element from the character provided
//examples of using the split method
console.log(myVariable.split("e"))

console.log(myVariable.split(""))

console.log("hello, hi, greetings".split(","))

console.log("this is a very good day".split(" "))


// Numbers
const myNumber = 42; //this is an interger
console.log(myNumber)
const myString = "42.76549384hdjck";


const myFloat = 42.7850275; //this is a float

console.log(myFloat)


console.log (myNumber === myFloat);
console.log(myString === myNumber)

console.log (Number(myString) === myNumber)

console.log(Number("john")) //this will return NaN which means not a number

console.log(Number(true)) //this will pass the value of 1

console.log(Number(false)) //this should pass the value of 0

//Number method
console.log(Number.isInteger(myNumber)) 
console.log(Number.isInteger(myString))  //this method determines if the element is an interger or not and returns true or false

// console.log(Number.parseFloat())

console.log(myFloat.toFixed(3)) //this method limits the float to the number of decimal required and also round up


// Math methods

console.log(Math.PI)
console.log(Math.trunc(Math.PI)) //trunc away any decimal

console.log(Math.round(3.4)) //the round  method rounds up to the nearest integer

console.log(Math.ceil(Math.PI))
console.log(Math.ceil(3.2)) //the ceil method will always round up no matter what

console.log(Math.floor(4.9)) //the floor method will always round any number down no matter what

console.log(Math.pow(5, 2)) //the pow method takes two arguements to the power
 
console.log(Math.min( 2, 9, 30, .7)) //the min method returns the smallest number

console.log(Math.max(5, 2)) //the max method returns the largest number

//from 1-10
console.log(Math.random()) //this provide a pseudo range of number from 0-1, doesnt return 0 or 1
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

//this random method can be combined to build a js expression

console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1) 
console.log(Math.floor(Math.random() * 10) + 1) 

//code challenge with dave grey
//write code that return a random letter from your name

// const myName = "john"

// console.log(myName.charAt(2))
// console.log(Math.floor(Math.random() * 4) + 1)
// console.log(Math.floor(Math.random() * 4) + 1)
// console.log(Math.floor(Math.random() * 4) + 1)
// console.log(Math.floor(Math.random() * 4) + 1)
// console.log(Math.floor(Math.random() * 4) + 1) 
 console.log("coding chalenge");
const myName ="crocodile"
console.log(myName.charAt(2)) //this gets a character from the element

//generating a number randomly

console.log(Math.random()*5 + 1 ) //this generates a number randomly

//adding the floor method will round off and give number from 0-4 
console.log(Math.floor(Math.random() * 4 + 1))
console.log(Math.floor(Math.random() * 4 + 1))
console.log(Math.floor(Math.random() * 4 + 1))
console.log(Math.floor(Math.random() * 4 + 1))

//adding the charAt method using the above statement to determine position
console.log(myName.charAt(Math.floor(Math.random() * 4 )))
console.log(myName.charAt(Math.floor(Math.random() * 4 )))
console.log(myName.charAt(Math.floor(Math.random() * 4 )))
console.log(myName.charAt(Math.floor(Math.random() * 4 )))

// to make it work for any name 
console.log(myName.charAt(Math.floor(Math.random() * 4 )))
//naow not every name has the same number of letters so we need the length element

console.log("this is the solution..... creating reusable code") 

console.log(myName.charAt(Math.floor(Math.random() * myName.length )))
console.log(myName.charAt(Math.floor(Math.random() * myName.length )))
console.log(myName.charAt(Math.floor(Math.random() * myName.length )))
console.log(myName.charAt(Math.floor(Math.random() * myName.length )))
console.log(myName.charAt(Math.floor(Math.random() * myName.length )))
console.log(myName.charAt(Math.floor(Math.random() * myName.length )))

console.log("if statement with dave gray")

//conditional if statements

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = false
// let reply;

// if(customerIsBanned){
//     reply = "no soup for you";
// }
// else if (soup && crackers){
//     reply = `Here's your order of ${soup} and crackers`;
// }else if (soup){
//     reply = `Here's your order of ${soup}`;
// } else{
//     reply = `sorry we are out of soup.`;
// }
// console.log(reply)
 
//the or der of the command should be very important.. and well arranged to give out the right results

// new example
// let testScore = 10;
// let collegeStudent = false;
// let grade;

// if (testScore >= 90) {
//     grade = "A"
// }
// else if (testScore >= 80){
//     grade = "B"
// }
// else if (testScore>=70){
//     grade = "C"
// }
// else if(testScore>=60){
//     grade = `D`
// }else {
//     if (collegeStudent){
//         grade = "U"
//     } else {
//         grade = "F"
//     }
// }

// console.log( grade)
    
//rock papaer scissors game
//decision tree

// if(playerOne === computer){
//     //tie game
// }
// else if (playerOne === "rock"){
//     if( computer === "paper"){
//         // computer wins
//     } else{
//         //player wins
//     }   
// }
// else if (playerOne === "paper"){
//     if( computer === "scissors"){
//         // computer wins
//     } else{
//         //player wins
//     }   
// }
// else if (playerOne === "scissors"){
//     if( computer === "rock"){
//         // computer wins
//     } else{
//         //player wins
//     }   
// }

//i will complete this code and make it more efficint....

// alert( "dont forget to finish your rock papaer scissors code")

// alert("rock paper scissors game made to 50%")

// alert("welcome to the game")
// var playerOne = prompt ("player one")
// var playerTwo = prompt ("player two")

//  if(playerOne === playerTwo){
//     alert("its a tie")
// }
// else if (playerOne === "rock"){
//     if( playerTwo === "paper"){
//             alert("playerTwo wins")
//     } else{
//         alert("playerOne wins")
//     }   
// }
// else if (playerOne === "paper"){
//     if( playerTwo === "scissors"){
//         alert("playerTwo wins")
//     } else{
//         alert("playerOne wins")
//     }   
// }
// else if (playerOne === "scissors"){
//     if( playerTwo=== "rock"){
//         alert("playerTwo wins")
//     } else{
//         alert("playerOne wins")
//     }   
// } else{
//     alert("no result")
// }

//switch atatements
//sintax
// switch (expression OR value){
//     case choice1:
//         //run this code
//     break;

//     case choice2:
//         //run this code
//         break;

//     //as many case as possible

//     default:
//         //run this code
//         //no break needed here
// }

//swith statements need strict matches to function properly

// switch("1"){
//     case 1:
//         console.log (1)
//         break;
//     case 2:
//         console.log("fire")
//         break;
//      case 3:
//          console.log("go away")
//          break;
//      default:
//          console.log("the end")
// }


//another expression in generating random numbers
// switch(Math.floor(Math.random() *3 + 1)){
//     case 1:
//         console.log (1)
//         break;
//     case 2:
//         console.log("fire")
//         break;
//      case 3:
//          console.log("go away")
//          break;
//      default:
//          console.log("the end")
// }

// //applying switch statement to rock paper scissors
// // let playerOne = "scissors";
// // let playerTwo = "rock";

// // switch(playerOne){
// //     case playerTwo:
// //         console.log("its a tie")
// //         break;
// //     case "rock":
// //         if (playerTwo === "paper"){
// //             console.log("player two wins");
// //         }else{
// //             console.log("player one wins")
// //         }
// //         break;
// //     case "paper":
// //         if (playerTwo === "scissors"){
// //             console.log("player two wins");
// //         }else{
// //             console.log("player one wins")
// //         }
// //         break;  
// //     default:
// //         if (playerTwo === "rock"){
// //             console.log("player two wins");
// //         }else{
// //             console.log("player one wins")
// //         }
// // }

// //tenary operator 
// //syntax
// //condition ? ifTrue : ifFalse;

// let soup = "chicken noodle soup";
// // let response = soup ? "yes we have soup" : "sorry no soup today";
// // console.log(response)
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned ? "sorry no soup for you" : soup ? `yes we have ${soup}` : "sorry we are out of soup"
// console.log(soupAccess) //as seen here tenary operator can be linked together

// //trying it on test scores
// let testScore = 79;
// let myGrade = testScore > 89 ?"A" 
// : testScore > 79 ? "B" 
// : testScore > 69 ? "C" 
// : testScore >59 ? "D" 
// : "F"
// console.log(`my test results are ${myGrade}`)

// let playerOne = "rock";
// let playerTwo = "rock";
// let results = playerOne === playerTwo ? "ita a tie!" 
// : playerOne === "rock" && playerTwo === "paper" ? "player two wins" 
// : playerOne === "paper" && playerTwo === "scissors" ? "pplayer two wins" 
// : playerOne === "scissors" && playerTwo === "rock" ? "player two wins"
// : "player one wins";

// console.log(results)

//starting input interphase

// let myBoolean = confirm("okay === true\ncancel === false")
// console.log (myBoolean);
// let name = prompt("please enter your name")
// console.log (name ??  alert ("you are an idiot"));
// console.log (typeof name)
// if (name){
//     console.log(name ??  alert ("you are an idiot"))
// } else{
//     console.log( "you didnt enter your name")
// }

//dealing with white space

// let name = prompt("whats your name")
// if(name){
//     console.log(name.length)
//     console.log(name.trim().length)
//     console.log(name.trim())
//     console.log(name.length);
// } else{
//     console.log("you are an idiot")
// }

// first interactive game player vs computer

let playGame =  confirm("do you want to play rock, paper scissors or should i come and be going")

if(playGame){
    //game code
    let playerChoice = prompt("rock,paper or scissors?.")
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" ||playerOne === "scissors" ){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? "paper" 
            : "scissors"

            let results = 
            playerOne === computer 
            ? "its a tie!!":
            playerOne === "rock" && computer === "paper"
            ? `player one : ${playerOne}\ncomputer : ${computer} \ncomputer wins!! \n HaHa! I win!!`:
            playerOne === "paper" && computer === "scissors"
            ? `player one : ${playerOne}\ncomputer : ${computer}\n computer wins!! \n HaHa!! I win!`:
            playerOne === "scissors" && computer === "rock" 
            ? `player one : ${playerOne}\ncomputer : ${computer}\n computer wins!! \n HaHa!! I win!!`:
            `player one : ${playerOne}\ncomputer : ${computer}\n player one wins... \n You win... dang it!!`;
         alert(results)

         let playAgain = confirm("you wanna go again?");
         playAgain ? location.reload(): alert("okay go back to what you were doing")

        } else{
            alert("sir or madam.... i have things to do na, the options are rock, paper or scissors")
        }
    }else{
        alert("please make up your mind, i have better things to do")
    }
}else{
    alert("thank you very much, go and find work")
}