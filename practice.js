// Template Lieral 
let person = {
    name: "Mya",
    parent: ["U Aye", "Daw Win"],
    age: 24,
    sister: "Thiri",
    job: "Developer",
}

let myData = person.name + " Resume <ul><li>Father: " + person.parent[0] + "</li><li>Mother: " +
 person.parent[1] + "</li><ul>";

let myDataNew = `
    ${person.name} Resume
    <ul>
        <li>Father: ${person.parent[0]}</li>
        <li>Mother: ${person.parent[1]}</li>
        <li>Sister: ${person.sister}</li>
        <li>Age: ${person.age}</li>
    </ul>
`;

document.querySelector('.h1').innerHTML = myData;
document.querySelector('.p').innerHTML = myDataNew;

// End Template Literal

// ---------------- Function Default -------------------//

// Lastest way for Default way

function doIt(name = "Mg Mg"){
    console.log(name);
}
doIt("Aung");

// Old way 

function oldWay (name){
    if (name == undefined){
        name = "Mg Mg" ;
    }
    console.log(name);
}
oldWay();

function data(name = "Mg" , age = 30){
    console.log(`Name is ${name} and Age is ${age}`);
}

// data();
data("Kris" , 20);

// -------------Function Expression (function name not have [instead of "function" can use "=>"])

let dd = () => {
    console.log("Mr.Anno");
}
dd();

// ---------Immediately Invokable Function Expression (IIFEs)
(function () {
    console.log ("IIEF");
})();


// Array 
let number = [1,2,3,4,5,6,7,8,9];

// ----- isArray
let bol = Array.isArray(number);
console.log(bol);

// Array Sort 
let arrSort = [12,2,30,3,5,6,7,10];

function filter(x,y ){
    return x - y;
}
let result = arrSort.sort((x,y) => x - y);
console.log(result);

function under12(num){
    return num < 13;
}
console.log(arrSort.find(under12));

// Scope 
// var ,let 
var num = 10 ;  //var is Global . Can redeclare
let num1 = 20; //Block scope(can't see from window )

console.log(window.num);
console.log(window.num1);

for (var i = 1; i <= 10; i++){
    console.log("let" ,i);
}
console.log("Outside let" ,i);


// Query Selector 
let scripts = document.scripts;
let scrArray = Array.from(scripts);

srcArray.forEach(scripts => {
    console.log(scripts.src);
});

