 // When the user clicks on the signup button, open the modal
 function handleSignUpButtonClick() {
     console.log("sdfd");

     // Get the modal
     var modal = document.getElementById("signUpModal");

     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];

     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
         modal.style.display = "none";
     };

     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     };

     modal.style.display = "block";
 };

 function handleSignInButtonClick() {
     alert("Sign in clicked");
 };