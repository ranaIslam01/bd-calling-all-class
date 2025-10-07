// variable and oparetor

var a = 10;
let b = 5;
const c = 9;

console.log(a+b+c);
var a =15;
console.log(a);
b = 25;
console.log(a+b+c);

let d = b/a;
console.log(d);


let e = d * c;
console.log(e);



// condition if else if else


number = 90;

if (number >=80 && number<=100) {
    console.log('you have got "A+" in the Exam');
    
}else if(number >=70 && number<=79){
    console.log('you have got "A" in the Exam');
}else if(number >=60 && number<=69){
    console.log('you have got "A-" in the Exam');
}else if(number >=50 && number<=59){
    console.log('you have got "B" in the Exam');
}else if(number >=40 && number<=49){
    console.log('you have got "C" in the Exam');
}else if(number >=33 && number<=39){
    console.log('you have got "D" in the Exam');
}else if(number >=1 && number<=32){
    console.log('you are failed in the Exam');
}else{
    console.log('THe result is not true');
}


// switch statement
let age = 19;
switch(true){
    case (age>=18):
        console.log("you can vote");
        break;
    case (age<18):
        console.log("you cannot vote");
        break;
    default:
        console.log("You are very very baby😂");
        
        
}


// function 

function name(Nvalue,age){
    return `My Name is ${Nvalue}.I am ${age} years old`;
}
console.log(name("Mahbub Alam",21));



// Array function 
let sum = (a,b)=>{
    return a+b;
}
console.log("The summation is",sum(10,20));
let sub = (a,b)=>{
    return a-b;
}
console.log("The subtraction is",sub(100,20));



// recursive function
function multiplecation(value){
    let num = 17;
    if(value === 11){
        return
    }
    let num2 = value;
    console.log(num,"X",num2,"=",num*num2);
    multiplecation(value + 1);
    
}
multiplecation(1)




// callback function

function main(value, cb){
    if(value >= 500 || value<=100){
        return cb(value)
    }
    console.log("Don't use callback function");
    
}
function Siam(value){
    console.log(value);
    
}

let taka = main(500, Siam);




// function scop

let n = 40; //global scop
function scop(){
    var f = 20; //local scop
    return f + n;
}
console.log(scop());
//console.log(f); //not define 