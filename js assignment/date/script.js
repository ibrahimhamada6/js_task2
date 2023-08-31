

do{
    var date = new Date(prompt("Please enter a date (MM/DD/YYYY)"));
    console.log(date);
    if ( date == "Invalid Date") {

        alert("Enter a Date in a Correct Format");
    } else 
    {

        alert (" the date enterd is: "+ date.toISOString()+" ")
    }
    
}while(date == "Invalid Date")


 document.write(date);


