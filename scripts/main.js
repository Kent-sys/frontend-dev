document.addEventListener('DOMContentLoaded', function(){

    const main = new Main();
    
});

class Main{
    constructor(){
        this.header = document.querySelector('.header');
        this.observer = [];
        this._init();
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    _inviewAnimation(el, inview){
        if(inview){
            el.classList.add('inview');
        }else{
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview){
        if(inview){
            this.header.classList.remove('triggered');
        }else{
            this.header.classList.add('triggered');
        }
    }

    _toggleSlideAnimattion(el, inview){
        if(inview){
            this.hero.autostart();
        }else{
            this.hero.autostop();
        }
    }

    _scrollInit(){
        this.observer.push(
            new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false})
        );
        this.observer.push(
            new ScrollObserver('.cover-slide', this._inviewAnimation)
        );
        this.observer.push(
            new ScrollObserver('.appear', this._inviewAnimation)
        );
        this.observer.push(
            new ScrollObserver('.animate-title', this._textAnimation)
        );
        this.observer.push(
            new ScrollObserver('.swiper-container', this._toggleSlideAnimattion.bind(this),{once: false})
        );
    }

    _init(){
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));
    }
    _paceDone(){
        this._scrollInit();
    }
}