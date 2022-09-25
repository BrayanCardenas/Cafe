//  Parallax


$(window).scroll(function(){
    const windowWidth = $(window).width();

    if(windowWidth > 800){
        const scroll = $(window).scrollTop()

        $('.header__text').css({
            transform: 'translate(0,' + scroll / 17 + '% )'
        })
        $('.about__article').css({
            transform: 'translate(0, -' + scroll / 8 + '% )'
        })
    }
})