function NavScroll(config){
    this.navBar = document.querySelector(config.navBar);
    this.target = document.querySelector(config.target);
    this.height = config.height;

    var _this = this;

    window.addEventListener('scroll', getPositions);
    window.addEventListener('load', getPositions);

    function getPositions(){
        var scrollYPos = window.pageYOffset;
        var posTarget = _this.target.getBoundingClientRect().top;
        
        if(scrollYPos > 100 && posTarget > 50 ){
            closeNav()
        } else if(posTarget <= 50){
            openNav();
        } else if (scrollYPos < 100) removeStyleNav();
    }

    function openNav(){
        _this.navBar.removeAttribute('style');
        _this.navBar.classList.add('fixed');
    }

    function closeNav(){
        _this.navBar.removeAttribute('style');
        _this.navBar.style.height = '0px';
        _this.navBar.style.overflow = 'hidden;';
    }

    function removeStyleNav(){
        _this.navBar.classList.remove('fixed');
        _this.navBar.removeAttribute('style');
    }

    
}