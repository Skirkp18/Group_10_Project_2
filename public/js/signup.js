$(document).ready(() => {
   // Getting references to our form and input
   const signUpForm = $("form.signup");
   const emailInput = $("input#email-create");
   const passwordInput = $("input#password-create");
   const firstNameInput = $("input#firstName-create");
   const lastNameInput = $("input#lastName-create");
   const zipCodeInput = $("input#zipCode-create");



   // When the signup button is clicked, we validate the email and password are not blank
   signUpForm.on("submit", (event) => {
      console.log("Working!");
      event.preventDefault();
      const userData = {
         email: emailInput.val().trim(),
         password: passwordInput.val().trim(),
         firstName: firstNameInput.val().trim(),
         lastName: lastNameInput.val().trim(),
         zipCode: zipCodeInput.val().trim(),
      };

      if (!userData.email || !userData.password || !userData.firstName || !userData.zipCode) {
         return;
      }
      // If we have an email and password, run the signUpUser function
      console.log(userData.password);
      signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.zipCode);
      emailInput.val("");
      passwordInput.val("");
      firstNameInput.val("");
      lastNameInput.val("");
      zipCodeInput.val("");
   });

   // Does a post to the signup route. If successful, we are redirected to the members page
   // Otherwise we log any errors
   // eslint-disable-next-line no-unused-vars
   function signUpUser(email, password, firstName, lastName, zipCode) {
      $.post("/api/signup", {
         email: email,
         password: password,
         firstName: firstName,
         lastName: lastName,
         zipCode: zipCode
      })
         // eslint-disable-next-line no-unused-vars
         .then((data) => {
            window.location.replace("/account.html");
            // If there's an error, handle it by throwing up a bootstrap alert
         })
         .catch(handleLoginErr);
   }

   function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
   }
});
