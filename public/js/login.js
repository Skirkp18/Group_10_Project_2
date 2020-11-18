const { ConnectionError } = require("sequelize/types");

const loginForm = $("form.login");
const emailInput = $("input#email-input");
const passwordInput = $("input#password-input");

loginForm.on("submit", (event) => {
   console.log("Click!");
   event.preventDefault();
   const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
   };

   if (!userData.email || !userData.password) {
      return;
   }

   loginUser(userData.email, userData.password);
   emailInput.val("");
   passwordInput.val("");
});

function loginUser(email, password) {
   // console.log(email);
   $.post("/api/login", {
      email: email,
      password: password
   })
      .then((User) => {
         // console.log(User);
         window.location.replace("/account");
      })
      .catch((err) => {
         console.log(err);
      });
}

