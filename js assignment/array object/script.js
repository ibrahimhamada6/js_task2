// 1.Prompt the user to enter three numbers
// 2.Create an array of the three numbers
// 3.Initialize the variables for the mathematical operations
// 4.Use a for loop to perform the mathematical operations on the elements of the array
// 5.Show The user the output on the screen



do{

  var num1 = Number(prompt("enter the first number:"));

    if(isNaN(num1)){
     alert("Enter a Number");
  }
}while(isNaN(num1))

do{

  var num2 = Number(prompt("enter the second number:"));

    if(isNaN(num2)){
     alert("Enter a Number");

    }

}while(isNaN(num2))

do{

  var num3 = Number(prompt("enter the third number:"));

    if(isNaN(num3)){
     alert("Enter a Number");

    }
    
    
 }  while(isNaN(num3))  


var numbers = [num1, num2, num3];

var summation = 0;
var multiply = 1 ;
var divide = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  summation += numbers[i];
  multiply *= numbers[i];
  if (i > 0) {
    divide /= numbers[i];
  }
}


document.write("Sum of The 3 Values " +num1+ " + " + num2 + " + " + num3 +" = " +summation
+"<br> Multiplication of The 3 Values " +num1+ " * " + num2 + " * " + num3 +" = " +multiply 
+ "<br> Division of The 3 Values " +num1+ " / " + num2 + " / " + num3 +" = " +divide );