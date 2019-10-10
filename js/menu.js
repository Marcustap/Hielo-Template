function Menu(config){
    var $btnMenu = document.querySelector(config.btnMenu);
    var $nav = document.querySelector(config.nav);
    var $btnX = document.querySelector(config.btnX);


    $btnMenu.addEventListener('click', showNav);
    $btnX.addEventListener('click', closeNav);

    function showNav(){
        $nav.classList.add('nav-show');

    }

    function closeNav(){
        $nav.classList.remove('nav-show');

    }
}