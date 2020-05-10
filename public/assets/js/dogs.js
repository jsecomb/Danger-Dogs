$(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        let burgerName = $("#burgerName").val();
        let devoured = $("[name=devoured]:checked").val().trim()

        let newBurger = {
            burger_name: burgerName,
            devoured: devoured
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })
    })

    $(".eat").on("click", function (event) {
        var id = $(this).data("id");

        var burgerEaten = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".throwAway").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    });

});
