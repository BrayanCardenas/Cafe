// Efecto Nav

$(document).ready(function(){
    $('.header__li').each(function(index, ele){
        $(this).css({
            top: '-200px',
        })
        $(this).animate({
            top: '0'
        }, 1000 + (index * 500) )
    })
})


// Efecto Header

if($ (window).width() > 800){
    $('.header__text').css({
        opacity: 0,
        marginTop: '50px'
        
    });
    $('.header__text').animate({
        opacity:1,
        marginTop: 0
    }, 1000 )
}

// Scroll Nav

const about    = $('#about').offset().top;
const main     = $('#main').offset().top; 
const galeria  = $('#galeria').offset().top;
const locatio = $('#location').offset().top;



$('#nav-about').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 600
    }, 0)
})
 $('#nav-main').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: main
    }, 0)
})
$('#nav-galeria').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: galeria
    }, 0)
})
$('#nav-location').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: locatio
    }, 0)
})