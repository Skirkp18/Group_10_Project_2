// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".favorite-gym").on("click", function(event) {
      let id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/gyms/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("Favorited Gym ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newGym = {
        gym_name: $("#gym").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/gyms", {
        type: "POST",
        data: newGym
      }).then(
        function() {
          console.log("Favorited new gym");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-gym").on("click", function(event) {
      let id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/gyms/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted gym ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });