module.exports = function() {
   $.get("/api/user_data").then((data) => {
      console.log(data);
      return data;
   });
};

