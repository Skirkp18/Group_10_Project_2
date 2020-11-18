$(document).ready(() => {
   // Getting references to our form and input
   const signUpForm = $("form.signup");
   const emailInput = $("input#email-create");
   const passwordInput = $("input#password-create");
   const firstNameInput = $("input#firstName-create");
   const lastNameInput = $("input#lastName-create");
   const countyInput = $("input#county-create");



   // When the signup button is clicked, we validate the email and password are not blank
   signUpForm.on("submit", (event) => {
      console.log("Working!");
      event.preventDefault();
      const userData = {
         email: emailInput.val().trim(),
         password: passwordInput.val().trim(),
         firstName: firstNameInput.val().trim(),
         lastName: lastNameInput.val().trim(),
         county: countyInput.val().trim(),
      };

      if (!userData.email || !userData.password || !userData.firstName || !userData.county) {
         return;
      }
      // If we have an email and password, run the signUpUser function
      // console.log(userData.password);
      signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.county);
      emailInput.val("");
      passwordInput.val("");
      firstNameInput.val("");
      lastNameInput.val("");
      countyInput.val("");
   });

   // Does a post to the signup route. If successful, we are redirected to the members page
   // Otherwise we log any errors
   // eslint-disable-next-line no-unused-vars
   function signUpUser(email, password, firstName, lastName, county) {
      $.post("/api/signup", {
         email: email,
         password: password,
         firstName: firstName,
         lastName: lastName,
         county: county
      })
         // eslint-disable-next-line no-unused-vars
         .then((data) => {
            window.location.replace("/account");
            // If there's an error, handle it by throwing up a bootstrap alert
         })
         .catch(handleLoginErr);
   }

   function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
   }
});
