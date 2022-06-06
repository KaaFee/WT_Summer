<?php
$pass=$_POST["Password"];
if(strlen($_REQUEST["fname"])<5){
    echo "Please provide first name with more than 4 characters<br>";
}
if(strlen($_REQUEST["lname"])<5){
    echo "Please provide last name with more than 4 characters<br>";
}

//designation validation
if(isset($_REQUEST["designation"])){
   
}
else{
    echo "Please select a designation<br>";
}

if(isset($_REQUEST["java"]) || isset($_REQUEST["php"]) || isset($_REQUEST["c++"])){
    
}
else{
    echo "Please select a preferred language<br>";
}

if(strlen($_REQUEST["email"]<0)){

}
else{
    echo "Please provide a email address<br>";
}

if(preg_match("/^[a-zA-Z-' ]*$/",$pass)){
    echo "Please provide at least one numeric value in password";
}


?>
 