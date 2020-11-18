const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const apiKeySecret = "16o6tlyye0c604y9z99qjatpf8x0665i38i3i4s22iepzipirx";
const apiKey = "dwincu9gs5g4vkzesqg1iyavl";
const appToken = "48doUWe4iYqYnEuRLh45oxEpk";

function nysAPICall (county) {
//    console.log(county);
   $.ajax({
      url: "https://health.data.ny.gov/resource/xdss-u53e.json?county=" + county,
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
    //   console.log(inffectionPercentage);
      return inffectionPercentage;
   });
};

module.exports.nysAPICall = nysAPICall;



