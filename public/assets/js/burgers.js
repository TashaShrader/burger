$(function(){

  $(".change-devoured").on("click", function(event){
      var id = $(this).data("id");
      var yesDevoured= $(this).data("newBurger");

      var newState = {
          devoured: yesDevoured
      };
      $.ajax("/api/burgers" + id, {
          type: "PUT",
          data: newState
      }).then(
          function(){
              location.reload();
          }
      );
  });


});

$(".create-form").on("submit-burger", function(event, req, res){
event.preventDefault();
var newBurger ={
  name: req.body.burger_name,
  devoured: req.body.devoured
}
$.ajax("/api/burger/", {
  name: "Post",
  data: newBurger,
}).then(function(){
  location.reload();
})

})

$(".delete-burger").on("click", function(event){
  var id = $(this).data("id");
  $.ajax("/api/burger/" + id, {
      type: "DELETE"
  }).then(
      function() {
          location.reload();
      }
  )
})

