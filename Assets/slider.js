//JS Script for Slideshow
//Remember to add the classes .slider-container and .slide to the html

class Slider {
    constructor(container, options = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.querySelectorAll('.slide');
        this.currentIndex = 0;
        this.autoPlay = options.autoPlay || false;
        this.interval = options.interval || 3000;
        this.timer = null;

        this.init();
    }

    init() {
        this.createControls();
        this.showSlide(this.currentIndex);
        if (this.autoPlay) this.startAutoPlay();
    }

    createControls() {
        const prevBtn = document.createElement('button');
        prevBtn.innerText = '❮';
        prevBtn.classList.add('slider-prev');
        prevBtn.addEventListener('click', () => this.prevSlide());

        const nextBtn = document.createElement('button');
        nextBtn.innerText = '❯';
        nextBtn.classList.add('slider-next');
        nextBtn.addEventListener('click', () => this.nextSlide());

        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);
    }

    showSlide(index){
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if(i === index) {
                slide.classList.add('active');
            }
        }
    )}

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    startAutoPlay() {
        this.timer = setInterval(() => this.nextSlide(), this.interval);
    }

    stopAutoPlay() {
        clearInterval(this.timer);
    }
}
