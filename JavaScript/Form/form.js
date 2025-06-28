

function formSubmit(event) {
       event.preventDefault();
       //console.log("Asma");
       //    let h1Tag=document.querySelector('h1');

       //         h1Tag.onclick = function(){
       //             alert("Register Now!")
       //         }
       let first_name = document.getElementById('fname').value;
       let last_name = document.getElementById('lname').value;
       let user_contact = document.getElementById('contact').value;
       let user_dob = document.getElementById('dob').value;
       let user_age = document.getElementById('age').value;
       let email_id = document.getElementById('mail').value;
       let user_gender =document.getElementsByName('gender').value;
       
       console.log(first_name);
       console.log(last_name);;

       function validateName() {
              if (!first_name) {
                     //alert("enter your first name");
                     errMessage += "Enter your first name\n";
                     return false;
              }
              if (!last_name) {
                     //alert("Enter your last name");
                     errMessage += "Enter your last name\n";
                     return false;
              }
       }
       validateName();

       function validateEmail() {
              const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if(email_id.match(email_pattern)){
                     return true;
              }
              else{
                     errMessage += "Inavlid email address, please enter valid email address\n";
                     return false;
              }
              //return email_pattern.test(email_id);
       }
       console.log(validateEmail() ? "Valid email address" : "Invalid email address");

       function validateContact() {
              var phoneno = /^\d{10}$/;
              if (user_contact.match(phoneno)) {
                     return true;
              }
              else {
                    //alert("Inavlid phone number, please enter phone no");
                    errMessage += "Inavlid phone number, please enter phone no\n";
                     return false;
              }
       }
       validateContact();

       function validateDOB() {
              var dob_pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
              if (!user_dob || !user_dob.match(dob_pattern)) {
                     errMessage += "Invalid date of birth\n";
                     return false;
              }
              else {
                     return true
              }
       }
       validateDOB();
       
       function validateAge(){
       if (!user_age || user_age <= 0 || user_age >= 150) {
              //alert("Enter your correct age");
              errMessage += "Enter your correct age\n";
              return false;
       }
       }
       validateAge();

       function validateGender(){
              if(!user_gender){
                errMessage += "Select your gender\n"; 
                return false;    
              }
       }
       validateGender();


       var errMessage = "";
       function checkForm() {
              validateName();
              validateEmail();
              validateContact();
              validateDOB();
              validateAge();
              validateGender();

              if (errMessage == "") {
              } 
              else {
                     alert(errMessage);
              }
       }
       checkForm();


}

const user_form = document.getElementById("user_form");
user_form.addEventListener("submit", formSubmit);
