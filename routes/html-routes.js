// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const userAccountInfo = require("../public/js/account.js");

module.exports = function(app) {
   app.get("/", (req, res) => {
      // If the user already has an account send them to the account page
      if (req.user) {

         // IF STATEMENT AFTER CHECKING COVID RATE TO SEE IF TO GO TO GYM OR ACTIVITY PAGE (RIGHT NOW GOING TO MAIN ACCOUNT PAGE)
         // =====================================================================================================================


         
         res.render("account");
      }
      res.render("loginpage");
   });

   app.get("/login", (req, res) => {
      // If the user already has an account send them to the account page
      if (req.user) {

         // IF STATEMENT AFTER CHECKING COVID RATE TO SEE IF TO GO TO GYM OR ACTIVITY PAGE (RIGHT NOW GOING TO MAIN ACCOUNT PAGE)
         res.render("account");
      }
      res.render("loginpage");
   });

   // Here we've add our isAuthenticated middleware to this route.
   // If a user who is not logged in tries to access this route they will be redirected to the signup page
   app.get("/account", isAuthenticated, (req, res) => {
      const userAccountInfoObj = {
         email: req.user.email,
         firstName: req.user.firstName,
         lastName: req.user.lastName,
         zipCode: req.user.zipCode
      };

      const i = 1;
      if (i !== 1) {
         res.render("account-gymclosed.handlebars", userAccountInfoObj);
      } else {
         res.render("account.handlebars", userAccountInfoObj);
      }
   });

};
