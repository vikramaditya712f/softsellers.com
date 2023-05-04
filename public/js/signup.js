// var 

// const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
const password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

// function passwordvalidation(){
//    if(pass1 != pass2){
//       document.getElementById("password_2").innerHTML="Password cannot be different*";
//    }
//    if(pass1=="" || pass2==""){
//       document.getElementById("password_2").innerHTML="Password cannot be empty*";
//    }
// }

function validateForm(){

   var first_name= document.getElementById("f_name").value;
   var last_name = document.getElementById("l_name").value;
   var email = document.getElementById("e_mail").value;
   var uname = document.getElementById("u_name").value;
   var pass1 = document.getElementById("u_pass1").value;
   var pass2 = document.getElementById("u_pass2").value;

   flag=0;

   if(first_name=="" ){
      document.getElementById('first_name').innerHTML="First name cannot be empty*";
      flag=0;
   }
   if(last_name==""){
      document.getElementById("last_name").innerHTML="Last name cannot be empty*";
      flag=0;
   }

   if(email==""){
      document.getElementById("e_mail_id").innerHTML="Email cannot be empty*";
      flag=0;
   }else if(regEmail.test(email) == false){
      document.getElementById("e_mail_id").innerHTML="Email is not valid";
   }

   if(uname==""){
      document.getElementById("user_name").innerHTML="user name cannot be empty*";
      flag=0;
   }

   if(pass1==""){
      document.getElementById("password_1").innerHTML="Password cannot be empty*";
      flag=0;
   }
   else if(password.test(pass1)){
      document.getElementById("password_1").innerHTML="Password must contain a uppercase ,lowercase, digit,special character *";
   }
   else if(pass1.length < 8 || pass1.length > 12){
      document.getElementById("password_1").innerHTML="Password must contain min 8 and max 12 character*";
   }

   if(pass2==""){
      document.getElementById("password_2").innerHTML="Password cannot be empty*";
      flag=0;
   }else if(pass1 != pass2 ){
      document.getElementById("password_2").innerHTML="Password does not match*";
   }

   if(flag==1){
      console.log(flag);
      return true;
   }
   else{
      return false;
   }
}