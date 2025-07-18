function sum(a,b){
    return a+b;
}

function isPositive(number){
    return number >= 0;
}

function randomNumber(){
    return Math.random();
}

document.addEventListener("click", function(){
    console.log("click");
})

// to make this as an arrow  function                        



let sum2 = (a,b) => a+b;


let isPositive2 = (number) => number>=0;

let randomNumber2 = (number) => Math.random();

document.addEventListener("click", ()=> console.log("hi"));


