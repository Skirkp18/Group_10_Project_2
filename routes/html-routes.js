const isAuthenticated = require("../config/middleware/isAuthenticated");
const appToken = "48doUWe4iYqYnEuRLh45oxEpk";

const { JSDOM } = require( "jsdom" );
const { data } = require("jquery");
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );




module.exports = function(app) {
   app.get("/", (req, res) => {
      if (req.user) {

         // IF STATEMENT AFTER CHECKING COVID RATE TO SEE IF TO GO TO GYM OR ACTIVITY PAGE (RIGHT NOW GOING TO MAIN ACCOUNT PAGE)
         // =====================================================================================================================


         
         res.render("account");
      }
      res.render("loginpage");
   });

   app.get("/login", (req, res) => {
      if (req.user) {

         // IF STATEMENT AFTER CHECKING COVID RATE TO SEE IF TO GO TO GYM OR ACTIVITY PAGE (RIGHT NOW GOING TO MAIN ACCOUNT PAGE)
         res.render("account");
      }
      res.render("loginpage");
   });


   app.get("/account", isAuthenticated, (req, res) => {
      const userAccountInfoObj = {
         email: req.user.email,
         firstName: req.user.firstName,
         lastName: req.user.lastName,
         county: req.user.county
      };
      
      $.ajax({
         url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.2994, 74.2179&type=gym&key=AIzaSyANcLOChoFLDu-OoosLY9pSa0KmhhGdOvc" + serAccountInfoObj.county + "county", 
         type: "GET",
         data: {
            "$limit" : 5000,
            "$$app_token" : appToken
         }
         })
         
      $.ajax({
         url: "https://health.data.ny.gov/resource/xdss-u53e.json?county=" + userAccountInfoObj.county,
         type: "GET",
         data: {
            "$limit" : 5000,
            "$$app_token" : appToken
         }
      }).done((data) => {
         console.log("Retrieved " + data.length + " records from the dataset!");
         //   console.table(data);
         const countyCOVIDData = data;
         console.table(countyCOVIDData.slice(-1).pop());
         const currentCOVIDData = countyCOVIDData.slice(-1).pop();
         const numberOfTests = currentCOVIDData.total_number_of_tests;
         //   console.log(numberOfTests);
         const numberOfPositiveTests = currentCOVIDData.new_positives;
         const inffectionPercentage = (numberOfPositiveTests/numberOfTests) * 100;
         // console.log(inffectionPercentage);
         const roundedInfectionRate = inffectionPercentage.toFixed(2);
         userAccountInfoObj.covidRate = roundedInfectionRate;
         console.log(userAccountInfoObj);
         if (inffectionPercentage >= 4 ) {
            res.render("account-gymclosed.handlebars", userAccountInfoObj);
         } else {
            res.render("account.handlebars", userAccountInfoObj);
         }
      });




   });

};
