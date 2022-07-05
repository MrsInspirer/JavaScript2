alert("What operation do you want to perform? Example: +, -, / or *")

const number1 = prompt("Enter a number.");

const operation= prompt("Enter an operation.")

const number2= prompt ("Enter your next number");

let result;

if (operation == '+') {
   
    result=alert(number1 + number2);
}

else if (operation == '-'){
    
    result= alert(number1 - number2);
}

    
else if (operation == '*'){
   result= alert(number1 * number2);
}
   

else {(operation == '/')
result= alert(number1 / number2);}




