
//firstname validation
function fnameval(){
    var fnameval=document.getElementById("f1").value;
    var regex=  /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
   if(!isNaN(fnameval) || fnameval.match(regex)){
       document.getElementById("nameerror").innerHTML="First name  must be alphabets";
       return false;

   }
   else{
       document.getElementById("nameerror").innerHTML="First name  is correct";
       return true;
   }
}
//lastname validation
function lnameval(){
    var lnameval=document.getElementById("l1").value;
    var regex=  /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    if(!isNaN(lnameval || lnameval.match(regex))){
        document.getElementById("lnameerror").innerHTML="Last Name must be alphabets";
        return false;
    }
    else{
        document.getElementById("lnameerror").innerHTML="Last Name is correct";
        return true;
    }
}
//age validation
function ageval(){
    //age must be a number
    var ageval=document.getElementById("ag1").value;
    if(isNaN(ageval) || ageval<9){
        document.getElementById("ageerror").innerHTML="Age must be above 9 years";
        return false;

    }
    else{
        document.getElementById("ageerror").innerHTML="Age is correct";
        return true;

    }  
    
}
//email validation
function emailcheck(){
    var emailval=document.getElementById("mail").value;
    var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailval.match(pattern)){
        document.getElementById("mailerror").innerHTML="Email is not correct";
        return true;

    }
    else{
        document.getElementById("mailerror").innerHTML="Email is  correct";
        return false;

    }
}
function passval(){
    var passval=document.getElementById("p1").value;
    var pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(passval.length>=8 && passval.match(pattern)){
        document.getElementById("passw").innerHTML="Password is  correct";
        return true;

    }
    else{

        document.getElementById("passw").innerHTML="Password must be more than 8 letters long and must have a symbol and at least a uppercase letter";
        return false;
    }
}

//radio 
function getradioval(){
    if(document.getElementById("Junior").checked==true){
        
        document.getElementById("radiovalue").innerHTML="Junior Programmer has been checked";
        return true;
    }
    else if(document.getElementById("Senior").checked==true){
        document.getElementById("radiovalue").innerHTML="Senior Programmer has been checked";
        return true;
        }
    else if(document.getElementById("PL").checked==true){
        document.getElementById("radiovalue").innerHTML="Project Lead has been checked";
        return true;
        }
    else{
        document.getElementById("radiovalue").innerHTML="Please select a radio button";
        return false;
    }

}




//checkbox
function checkval(){
    if(document.getElementById("java").checked==true  || document.getElementById("php").checked==true || document.getElementById("cplusplus").checked==true ){
        
        document.getElementById("checkvalue").innerHTML="Preferred language has been checked";
        return true;
    }
    else{
        document.getElementById("checkvalue").innerHTML="Preferred language has not been checked";
        return false;
    }

}
function fileval(){
    //file uploading validation
    var fileval=document.getElementById("f1").value;
    var pattern=/\.(jpg|jpeg|png|doc|docx|pdf)$/;
    if(fileval.match(pattern)){
        document.getElementById("Fileerror").innerHTML="File is  not correct";
        return true;

    }
    else{
        document.getElementById("Fileerror").innerHTML="File is  correct";
        return false;

    }
}



function formcheck(){
    if(fnameval()==true && lnameval()==true && emailcheck()==true && ageval()==true && passval() && getradioval()==true && checkval()==true && fileval()==true){ 
        document.getElementById("sub").innerHTML="All information is provided";
        return true;

    }
    else{
        document.getElementById("sub").innerHTML="Please fillup all the fields";
        return false;
    }

}