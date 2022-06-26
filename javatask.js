alert("What operation do you want to perform? Example: +, -, / or *")

let a = +prompt("Enter a number.")

let b = prompt("Enter an operation.")

let isValidOperation = '+';

if (isValidOperation == '+') {
    c= +prompt ("Enter your next number");
    
}

else if(isValidOperation == '-'){
    c= prompt ("Enter your next number");
    alert(a-c);
}

    
else if(isValidOperation == '*'){
    alert(a*c);
}
   

else {(isValidOperation == '/')
alert(a/c);}
alert(+a+ +c);



