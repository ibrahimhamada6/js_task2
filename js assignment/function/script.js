function acceptTwoParametersOnly(param1, param2) {
    if (arguments.length !== 2) {
      
        throw "The function accepts only two parameters.";
    }
  


    document.write(acceptTwoParametersOnly());
}



function reverseParams(...params) {
    return params.reverse();
  }


  document.write(reverseParams(4,5,6));
  

  

function getDayName(date) {

    var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var date = new Date (date);
    var dayIndex=date.getDay();
    return days[dayIndex];
}

document.write(getDayName(31/8/2023));


function reverseString(str) {
    var reversedString = ""; 
    for (var i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }

  document.write(reverseString("drow"));


