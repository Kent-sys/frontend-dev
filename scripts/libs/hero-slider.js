class HeroSlider {
    constructor(el){
        this.el = el
        this.swiper = this._initeSwiper();
    }

    _initeSwiper(){
        return new Swiper (this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints:{
                1024:{
                    slidesPerView: 2,
                }
            },
          })
    }

    autostart(){
        this.swiper.params.autoplay = {
            delay: 4000, 
            disableOnInteraction: false,
        }
        this.swiper.autoplay.start();
    }

    autostop(){
        this.swiper.autoplay.stop();
    }
}