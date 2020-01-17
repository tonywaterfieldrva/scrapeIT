$(function() {
    console.log("Inside scrape.js function call");
    // $(".create-form").on("submit", function(event) {
    //     event.preventDefault();
    //     var newburger = { burger_name: $("#makeburger").val(), devoured: 0};
    //     console.log(newburger);
    //     $.ajax("/api/burgers", {
    //         type: "POST", 
    //         data: newburger
    //     }).then(function() {

    //         console.log("New Burger Added");
    //     });
    //     location.reload();
    // });
    // $(".eatburger").on("click", function(event) {
    //     event.preventDefault();
    //     console.log("eatburger click");
    //     var id = $(this).data("id");
    //     var devouredState = {
    //         devoured: 1
    //     };
    //     $.ajax("/api/burgers/" + id, {
    //         type: "PUT",
    //         data: devouredState
    //     }).then(function(data) {
    //         console.log("Burger has been eaten!");

    //     });
    //     location.reload();
    // });
    // $(".trashburger").on("click", function(event) {
    //     event.preventDefault();
    //     var id = $(this).data("id");
    //     var urlLink = "/api/burgers/" + id;
    //     $.ajax({
    //         type: "DELETE",
    //         url: urlLink
    //     }).then(function(data) {

    //     });
    //     location.reload();

    // });

});
