
$(document).ready(function () {
    $("input").keyup(function () {
        if($("input").val().length<5){
            $("input").addClass("is-invalid");
        }else{
            $("input").removeClass("is-invalid");
            $("input").addClass("is-valid");


        }
    });
}); 