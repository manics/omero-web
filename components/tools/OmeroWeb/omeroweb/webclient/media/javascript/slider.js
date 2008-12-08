$(document).ready(function () {

    $(function() { 
        $('#slider_callout').hide(); 
        var calloutVisible = false; 
        $("#products li.product").css('width', 80);
        $('#products img.imgzoom').attr('width', 80);
        $('#products img.catzoom').attr('width', 80);
        $('.slider_bar').slider({ 
            handle: '.slider_handle', 
            startValue: 100,
            min: 100, 
            max: 300,
            start: function(e, ui) { 
                $('#slider_callout').fadeIn('fast', function() {
                    calloutVisible = true;
                    $("#products li.product").css('width', 1.6*Math.round(ui.value/2));
                    $('#products img.imgzoom').css('width', 1.6*Math.round(ui.value/2));
                    $('#products img.catzoom').css('width', 1.6*Math.round(ui.value/2));
                }); 
            }, 
            stop: function(e, ui) { 
                if (calloutVisible == false) { 
                    $('#slider_callout').fadeIn('fast', function() { calloutVisible = true;}); 
                    $('#slider_callout').css('left', ui.handle.css('left')).text(Math.round(ui.value)); 
                } 
                //$('#slider_callout').fadeOut('fast', function() { calloutVisible = false; }); 
            }, 
            slide: function(e, ui) { 
                $("#products li.product").css('width', 1.6*Math.round(ui.value/2));
                $('#products img.imgzoom').css('width', 1.6*Math.round(ui.value/2));
                $('#products img.catzoom').css('width', 1.6*Math.round(ui.value/2));
                
                $('#slider_callout').css('left', ui.handle.css('left')).text("x"+(Math.round(ui.value)/100)); 
            } 
        }); 
    });
    
})