let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".number");

const equal = document.querySelector("#equal");

let operator = document.querySelectorAll(".operator");

let clear = document.querySelector("#clear");

let number1 = "";
let number2 = "";
let ope = "";
let arr = [];
let result = "";

clear.addEventListener("click",function(){
  display.value = "";
});

numbers.forEach((item)=>{
  item.addEventListener("click",function(e){
    display.value += Number(e.target.value);
  })
})

operator.forEach((item)=>{
  item.addEventListener("click", function(e){
    number1 = display.value;
    display.value += e.target.value;
    ope = e.target.value;
  })
})

equal.addEventListener("click",function(){
  arr=display.value.split(ope);
  number2 = Number(arr[1]);
  
  calc(number1,number2,ope);
})
function calc(num1,num2,op){
  switch (op) {
    case "+":
        result=Number(num1)+Number(num2);
      break;
    case "-":
      result=num1-num2;
      break;
    case "x":
      result=num1*num2;
      break;
    case "÷":
      result=num1/num2;
      break;

    default:
      result="ERROR";
      break;
  }

  return display.value=result;
}