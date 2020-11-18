const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {

   app.post("/api/login", passport.authenticate("local"),(req, res) => {
      // res.json(req.user);
      if (req.user) {
         res.render("account");
      }
      res.render("loginpage");
   });
   

   app.post("/api/signup",(req, res) => {
      // console.log(req.body.password);
      db.User.create({
         email: req.body.email,
         password: req.body.password,
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         county: req.body.county
      })
         .then((data) => {
            // console.log(data);
            res.redirect(307, "/api/login");
         })
         .catch((err) => {
            console.log(err);
            res.status(401).json(err);
         });
   });


   app.get("/logout",(req, res) => {
      req.logout();
      res.render("loginpage");
   });

   app.get("/api/user_data",(req, res) => {
      if (!req.user) {
         res.json({});
      } else {
         // console.log(req);
         const userData = {
            email: req.user.email,
            id: req.user.id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            county: req.user.county
         };
         res.json(userData);
         // console.log(userData);
      }
   });
};
