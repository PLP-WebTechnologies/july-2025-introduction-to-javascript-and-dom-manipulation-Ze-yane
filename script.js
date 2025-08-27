//Part 1: Variable declaration and conditional
let name = "Zainab";
let age = 18;
let learner = true;

if(age === 18){
  console.log("Zainab is an adult.")
}else {
  console.log("This is not Zainab's age.")
}

// Part 2: Function
function add(a, b, c){
  return a + b + c;
}
 console.log(add(60, 20, 50));

function greetUser(name){
  return "Good day " + name +".";
}
  console.log(greetUser(name));


//Part: 3 loops
let degCent = 100;
if (degCent == 100){
  console.log("Thats the boiling point of water");
}

if (age >= 10 && age<= 17){
  console.log("My age is between 10 and 17.");
}else if(age >=19 && age<=25){
  console.log("My age is between 19 and 25");
}else {
  console.log("My age is not between 10 and 17 nor is it between 19 and 25.");
}


//Part 4 : DOM interaction 
let changes = function(){
  //Selecting the elements 
  let intro = document.getElementById('intro')
  let header = document.getElementById('header')
  let body = document.getElementById('body')
  let paragraph = document.getElementById('paragraph')
  
  //Manipuating
  body.style.backgroundColor = "green"
  body.style.margin = "30px"
  header.style.backgroundColor = "lightgreen"
  intro.style.textDecoration = "underline"
  paragraph.style.fontFamily = "Arial, sans-serif"
}