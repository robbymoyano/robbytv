var hashmapStream = {};
hashmapStream['mega'] = 'http://mdstrm.com/live-stream/53d2c1a32640614e62a0e000?player=screen&amp;autoplay=true&amp;custom.c3=SENALENVIVO&amp;ref=www.mega.cl';
hashmapStream['tvn'] = 'http://mdstrm.com/live-stream/525431f81bc42c4539000057?jsapi=true&amp;autoplay=false&amp;ref=www.tvn.cl';
hashmapStream['chv'] = 'https://content.jwplatform.com/players/TBM3sdjX-NzyH0WjI.html'; 
hashmapStream['ucv'] = 'https://content.jwplatform.com/players/Xjpf8k6z-NzyH0WjI.html';
hashmapStream['canal13'] = 'https://content.jwplatform.com/players/Ln7GGaTL-NzyH0WjI.html';
hashmapStream['lared'] = 'http://d3aacg6baj4jn0.cloudfront.net/nedplayer-lared-ak.html';
hashmapStream['pura'] = 'http://media.digitalproserver.com/v2/live/puranoti';
hashmapStream['13cable'] = 'https://content.jwplatform.com/players/FN4TijyE-NzyH0WjI.html';


var hashmapTitle = {};
hashmapTitle['mega'] = 'Mega';
hashmapTitle['tvn'] = 'TVN';
hashmapTitle['chv'] = 'Chilevisión'; 
hashmapTitle['ucv'] = 'UCV Valparaíso';
hashmapTitle['canal13'] = 'Canal 13';
hashmapTitle['lared'] = 'La Red';
hashmapTitle['pura'] = 'Puranoticia TV';
hashmapTitle['13cable'] = 'Canal 13 Cable';


$(document).ready(function(){
    $('.celda').click(function(){
        var $texto=$(this).attr('canal');
        //$("p").text(hashmapStream[$texto]);
        $("html, body").animate({scrollTop:"0px"});
        var url = hashmapStream[$texto];
        $("#video").attr("src",url);
        var title = hashmapTitle[$texto];
        //  $("p").append(url+ ", " + title);
        $("#titulo").html(title);
    });
});


$(document).ready(function(){
    //$("p").text(hashmapStream[$texto]);
    $("html, body").animate({scrollTop:"0px"});
    var url = hashmapStream['canal13'];
    $("#video").attr("src",url);
    var title = hashmapTitle['canal13'];
    //  $("p").append(url+ ", " + title);
    $("#titulo").html(title);
});


$(document).ready(function() {
    $('.celda').click(function(){   
        $('.celda').removeClass("celdaActiva");
        $(this).addClass("celdaActiva");
    });
});



