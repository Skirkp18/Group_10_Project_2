// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
   app.get("/", (req, res) => {
      // If the user already has an account send them to the account page
      if (req.user) {
         res.render("account");
      }
      res.render("loginpage");
   });

   app.get("/login", (req, res) => {
      // If the user already has an account send them to the account page
      if (req.user) {
         res.render("account");
      }
      res.render("loginpage");
   });

   // Here we've add our isAuthenticated middleware to this route.
   // If a user who is not logged in tries to access this route they will be redirected to the signup page
   app.get("/account", isAuthenticated, (req, res) => {
      res.render("account.handlebars");
   });

};
