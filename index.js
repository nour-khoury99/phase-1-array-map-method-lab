

//Using For...of in place of .map()
/*
const students = ["harry", "ron", "hermione", "ginevra"];
const rollCall = [];

for (const student of students) {
  rollCall.push( student + " the wizard" );
}

console.log(rollCall);
*/

function studentRollCall(student){
  return student + "the wizard";
}

const students = ["harry","ron","hermonie","ginevra"];
const rollCall=students.map(studentRollCall);

/*We use map() when we want to transform the elements in an array in some way. To do this, we pass a function as an argument; that function (the callback) is what executes our desired transformation. In JavaScript, arguments can be primitive types like Number or String, 
but they can also be work. Very few other programming languages
allow that! */

console.log(rollCall);

//following function with arrow function
const rollCall1 = students.map(student => student + " the wizard");

//demonstrate map with complex Data

const robots = [
  {name:'jhonny 5', modes: 5 , isActivated : false,},
  {name:'C3PO', modes: 3 , isActivated : false,},
  {name:'Sonny', modes: 2.5 , isActivated : false,},
  {name:'Baymax', modes: 1.5 , isActivated : false,}
]

const activatedRobots = robots.map(robot => {
  return Object.assign({},robot,{
    modes : robot.modes*2,
    isActivated:true,
  });
});

console.log(activatedRobots);

//Lab
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function UpperCase(index){

    let array1 = index;
    let newArrUpper = [];
  
  for(let x= 0 ;x <tutorials.length; x++){

        newArrUpper.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }

  return newArrUpper;
}

console.log(UpperCase(tutorials));
const titleCased = () => {
  return tutorials
}
