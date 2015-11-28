$(document).ready(function() {

    $("#btn-shorten").click(function() {
        var tamales_api = "http://t.antojitos.io/api/v1/urls";
        var url = $("#url").val();

        var shorten = $.ajax({
            method: "POST",
            url: tamales_api,
            contentType: "application/json",
            data: JSON.stringify({url: url}),
            dataType: "json"
        }).done(function(data) {
            $("#short-url").val(data.short_url);
            $("#shorten").hide();
            $("#copy").show();
        });
        
    });
    
});
