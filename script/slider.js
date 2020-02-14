"use strict";

class Slider {

    constructor( el ) {
        this.carusel = el;
        this.setDataNum();
    }

    // set data-number-parm for oll slide and add event listners for sliders
    setDataNum() {
        let arr = this.carusel.getElementsByClassName('slide');
        let arrl = this.carusel.getElementsByClassName('line');

        for( let i = 0; i < arr.length; i++ ) {
            arr[i].setAttribute('data-number',  i );
            arrl[i].setAttribute('data-number', i );
            arr[i].addEventListener( 'touchstart', this.touchStart );
            // arr[i].addEventListener( 'touchmove', this.touchMove );
            arr[i].addEventListener( 'touchend', this.touchEnd );
        }
    }

    sliderList( i ) {
        this.carusel.querySelector('.slide-container').style.marginLeft = ( -i + 1 ) * 100 + '%';
        this.carusel.querySelector('.slider-bottom-icons .line.active').classList.remove('active');
        this.carusel.querySelectorAll('.slider-bottom-icons .line')[i-1].classList.add('active');
    }

    touchStart( e ) {
        // console.log(  e.touches[0] );
        this.tStart = e.touches[0].clientX;
        this.tEnd = NaN;
        this.swipeStep = 40;

    }

    touchMove( e ) {

    }

    touchEnd( e ) {

        // alert( 'najal' );

        this.tEnd = e.changedTouches[0].clientX ;

        let maxCount = this.parentElement.getElementsByClassName('slide').length + 1;
        let count = parseInt( this.getAttribute('data-number') );

        // alert(count);

        if( this.tStart > this.tEnd + this.swipeStep && count < maxCount - 2) {
            this.parentElement.style.marginLeft = ( -count - 1 ) * 100 + '%';
            this.parentElement.parentElement.querySelector('.slider-bottom-icons .line.active').classList.remove('active');
            this.parentElement.parentElement.querySelectorAll('.slider-bottom-icons .line')[count+1].classList.add('active');
            count++;
        }

        if ( this.tStart + this.swipeStep < this.tEnd && count ) {
            this.parentElement.style.marginLeft = ( -count + 1 ) * 100 + '%';
            this.parentElement.parentElement.querySelector('.slider-bottom-icons .line.active').classList.remove('active');
            this.parentElement.parentElement.querySelectorAll('.slider-bottom-icons .line')[count-1].classList.add('active');
            count--;
        }

        if( count === maxCount - 1 ) {
            this.parentElement.style.marginLeft = '0%';
            this.parentElement.parentElement.querySelector('.slider-bottom-icons .line.active').classList.remove('active');
            this.parentElement.parentElement.querySelectorAll('.slider-bottom-icons .line')[0].classList.add('active');
        }
    }
}

var carusel = new Slider( document.getElementById('slider') );
