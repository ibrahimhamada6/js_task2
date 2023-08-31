
do{

  var userString = prompt("Enter a String");
  var regExpstring = new RegExp(/^[a-zA-Z\s]+$/)
  
  if (!regExpstring.test(userString)) {
      alert("Enter a String");
  }

  }while(!regExpstring.test(userString))

  var count = 0;

  for (var i = 0; i < userString.length; i++){
    if (userString[i] == "e") {
      count += 1;
    }
  }
  
  document.write("The number of 'e' characters in the string is " + count);









