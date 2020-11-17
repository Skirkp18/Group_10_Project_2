const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

module.exports = function nysAPICall(county) {

   Date.prototype.yyyymmdd = function() {
      const yyyy = this.getFullYear().toString();
      const mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
      const dd = this.getDate().toString();
      return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
   };
  
   const date = new Date();
   console.log( date.yyyymmdd() );
//    const searchDay = 15;
//    $.ajax({
//       url: "https://health.data.ny.gov/resource/xdss-u53e.json?test_date=" + yyyy + "-" + mm + "-" + searchDay + "T00:00.000?county=" + county,
//       type: "GET",
//       data: {
//          "$limit" : 5000,
//          "$$app_token" : "YOURAPPTOKENHERE"
//       }
//    }).done((data) => {
//       alert("Retrieved " + data.length + " records from the dataset!");
//       console.log(data);
//    });

};


