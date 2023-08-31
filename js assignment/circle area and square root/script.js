
do{

    var radius = parseInt(prompt("Enter the value of the circle's radius"));
 
    if(isNaN(radius)){
 
     alert("Enter A Number");
 
    }
 }while(isNaN(radius))
 
 
 var circleArea = Math.PI * Math.pow(radius, 2);
 
 alert("The Area of the Circle is " + circleArea );
 
 
 
 do{
 
    var userValue = prompt("Enter a value to calculate its square root");
 
    if(isNaN(userValue)){
 
     alert("Enter A Number");
 
    }
 }while(isNaN(userValue))
 
 
 var root = Math.sqrt(userValue);
 
 alert("The square root of " + userValue + " is " + root);
 
 
 
 
 