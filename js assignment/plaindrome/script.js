// 1- make prompt to eneter string input (enter the plaindrom text and take care of sensetivity of text. noon)
// 2- make variable divde by 2 to get the half length of variable 
// 3- reverse the second part of text and store in a varaible
// 4- enter the first part in var and the second part in another part 
// 5- condition to compare two variable true => plaindrom , false => alert (not a plaindrom)


do{
    var str = prompt("enter the plaindrom text and take care of sensetivity of text. noon");
    var regExpstr = new RegExp(/^[a-zA-Z\s]+$/)

    if(!regExpstr.test(str)){
        
        alert("Your String Shouldn't Contain Numbers or Special Charcters");

    }


}while(!regExpstr.test(str))


function getPlaindrom(inputString){
    var halfLength = inputString.length /2;
    var firstPart = inputString.slice(0,halfLength);
    var secondPart = inputString.slice(halfLength,inputString.length).split("").reverse().join("");
    var message = "";
    if(firstPart == secondPart){
        message = "you entered  a plaindroom text";
        // alert("you entered  a plaindroom text")
    }else 
    {
        message = "you don't enter a plaindroom text"
        // alert("you don't enter  a plaindroom text")
    }
    alert(message);
    return message
}

getPlaindrom(str);

