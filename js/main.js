(function(){
    const $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');


    var menu = new Menu({
        btnMenu: '.btnMenu',
        nav: '.header-nav',
        btnX: '.header-nav span'
    })

    var carousel = new Carousel({
        container: '.slideshow',
        itens: '.slide-item',
        btnSpans: '.slide-menu-select',
        slideMenu: '.slide-menu',
        interval: 5000
    })

    var navScroll = new NavScroll({
        navBar: '.header-top',
        target: '.main-content',
        height: 40
    })
})()