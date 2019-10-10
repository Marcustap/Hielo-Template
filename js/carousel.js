function Carousel(config){
    this.container = document.querySelector(config.container);
    this.itens = this.container.querySelectorAll(config.itens);
    this.btns = this.container.querySelectorAll(config.btnSpans);
    this.slideMenu = this.container.querySelector(config.slideMenu);
    this.interval = config.interval;

    var _this = this;
    var currentSlide = 0;
    
    var intervalInit = setInterval(startSlide, _this.interval);
    startSlide();

    function startSlide(){
        
        var qtd = _this.itens.length;
        var counter = currentSlide % qtd;
        var classActivedRemove = _this.container.querySelectorAll('.actived');

        Array.prototype.forEach.call(classActivedRemove, function(act){
            act.classList.remove('actived');
        })


        _this.itens[counter].classList.add('actived');
        _this.btns[counter].classList.add('actived');
        currentSlide++;

    }

    _this.slideMenu.addEventListener('click', function (e){
        clearInterval(intervalInit);

        if(e.target === _this.btns[0]){
            currentSlide = 0;
            startSlide();
            intervalInit = setInterval(startSlide, _this.interval);
        } else if(e.target === _this.btns[1]){
            currentSlide = 1;
            startSlide();
            intervalInit = setInterval(startSlide, _this.interval);
        } else if(e.target === _this.btns[2]){
            currentSlide = 2;
            startSlide();
            intervalInit = setInterval(startSlide, _this.interval);
        } else if(e.target === _this.btns[3]){
             currentSlide = 3;
            startSlide();
            intervalInit = setInterval(startSlide, _this.interval);
        } else if(e.target === _this.btns[4]){
            currentSlide = 4;
            startSlide();
            intervalInit = setInterval(startSlide, _this.interval);
        }

    })


}
