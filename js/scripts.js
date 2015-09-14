$(document).ready(function() {
    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputtedDate = $("input#new_date").val();
        var inputtedCity = $("input#new_city").val();
        var inputtedCountry = $("input#new_country").val();
        var inputtedNotes = $("textarea#new_notes").val();

        var newPlace = { date : inputtedDate, city : inputtedCity, country : inputtedCountry, notes : inputtedNotes };


    $("ul#places").append("<li><span class='place'>" + newPlace.date + ", " + newPlace.city + "</span></li>");

    $(".place").last().click(function() {
        $("#show-place").show();

        $("#show-place h2").text(newPlace.city);
        $(".country").text(newPlace.country);
        $(".date").text(newPlace.date);
        $(".notes").text(newPlace.notes);
    });

    $("input#new_date").val("");
    $("input#new_city").val("");
    $("input#new_country").val("");
    $("textarea#new_notes").val("");
});
});
