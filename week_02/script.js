let num = 100; //integer

//integer

/*
this is a
block comment
*/

let num = 100; //integer

function foo () {
    console.log(num);
    let num1 = 200;
}

//foo(); //create a function and call out the function

console.log(num1)

let anonFun = function(){
    console.log("hello");
};

anonFun();

(function() {
    console.log("Hello");
})();

(()=> console.log(100))();

//function foo(){
//     console.log(num):
// };

let foo = () => console.log(num);

let bar = 100;
bar = 200;

let arr = ["foo", 123, ["zar", "car"]];

console.log(arr[1]);

// Set item in array
arr[1] = "barbar";

console.log(arr[1]);

// Add item to the end of the array
arr.push("par")

// Removing an item from the array (index, delete)
arr.splice(2, 1);

console.log(arr);

let newArr = ["cow", "turtle", "goat"];

for (let item of newArr) {
    console.log(item);
}

for (let i in newArr) {
    console.log(i + "" + newArr[1]);
}

newArr.forEach((item, 1) => console.log(i+""+item));

//Objetcts

let obj1 = {
    name:"Jill",
    age: 85,
    job: "Cactus Hunter",
};

//Access property
console.log(boj1.name);
console.log(obj1["name"]);

//set value
obj1.job = "Barista";

//loop through all properties
for (let key in obj1) {
    let value = obj1[key];
    console.log('${key}:${value}');
}

let fall = [1,2,3];
console.log(typeof fall)

// let str = "Hello" + key + "more text here" + foo;
// let str = 'Hello ${key} more text here ${foo}';

//regular for loop
for (let i = 0; i < 10; 1++){
    console.log(i);
}

let val = 80;

if (val > 80){
    console.log("good")
} else if (val > 50) {
    console.log("okay")
} else {
    console.log("terrible")
}

let y = {val >= 80} ? console.log("good") : console.log("not good");

let newVar = document.getElementById("example");
newVar.innerHTML += "Hello world!"
