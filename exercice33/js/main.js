$(document).ready(function(){
    $(".btn").click(function(){
        $.ajax({
            url:"https://restcountries.eu/rest/v2/name/france",
            success: function(data, status, response){
                console.log(response.statusCode);
                $("#country").text(data.map(function(country){
                    return country.name;
                }).join(" - "));
    
                $("#capital").text(data.map(function(country){
                    // console.log(france.name);
                    return country.capital;
                }).join(" - "));
            },
            method: "GET",
            error: function(data, status, response){
                $("#exercise").text("ERROR");
            },
            dataType: "json"
        })
    })

    })
   