do {

     var userName = prompt("What is your name?");
     var regExpName = new RegExp(/^[a-zA-Z\s]+$/)

     if (userName.length == 0 ) {

        alert("Your Name should be at minimum 1 chatacter long");

    }else if(!regExpName.test(userName))
    {

     alert("Your Name Shouldn't Contain Numbers or Special Charcters");
    }    
   
    } while (userName.length==0  || !regExpName.test(userName));

   
do {    
     var phoneNumber = (prompt("Enter Your Phone Number"));
     var regExpphone = new RegExp(/^[0-9]\d{7}$/)
    
     if (phoneNumber.length == 0) {

        alert("your Phone Number required");

    }if(!regExpphone.test(phoneNumber))
    {

     alert("your Phone Number should be 8 Digits");
    }
        
    } while(phoneNumber.length==0 || !regExpphone.test(phoneNumber)) 

           

do {    
    var mobileNumber = (prompt("Enter Your Mobile Number"));

    var regExpmobile = new RegExp(/^[0][1][0-2]\d{8}$/)
   
    if (mobileNumber.length == 0) {

       alert("your Mobile Number required");

   }if(!regExpmobile.test(mobileNumber))
   {

    alert("your Mobile Number should be 11 Digits "+
    " and Should be Starts with (010|011|012)");
   }
       
   } while(mobileNumber.length==0 || !regExpmobile.test(mobileNumber)) 

          

do {
        var userEmail = prompt("Enter Your Email");
        var regExpEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

       if (userEmail.length == 0 ) {

           alert("your email should be at minimum 20 chatacter long");
       }else if(!regExpEmail.test(userEmail))
       {

        alert("enter a valid email");
       }

    }while(userEmail.length==0  || !regExpEmail.test(userEmail))


        document.write("Welcome "+ userName + "<br>" 
+      "Your Phone Number : " + phoneNumber +"<br>"
+      "Your Mobile Number : " +mobileNumber+
       "<br> Your Email : " +userEmail);

