/**
 * Created by Ihor on 31.10.2019.
 */
'use strict';

class NITimer {

    constructor(
        selctor,
        secondsCounter,
        functionTimerEnd,
    ) {
        this.interval = null;
        this.selector = selctor;
        this.secondCounter = secondsCounter;
        this.functionTimerEnd = functionTimerEnd;
        this.start()
    }

    start() {
        this.interval = setInterval( this.startTimer.bind(this), 1000 );
    }

    startTimer() {
        this.secondCounter--;
        if ( this.secondCounter > 0 ) {
            this.writeNewValToTimer();
        }
        else {
            document.querySelector(this.selector).innerText = 'Время Вышло!';
            this.functionTimerEnd();
            window.clearInterval(this.interval);
        }
    }

    writeNewValToTimer() {
        document.querySelector(this.selector).innerText = 'Осталось времени: ' + this.toRightFormat();
    }

    toRightFormat() {
        let h, m, s;
        h = Math.floor( this.secondCounter / 3600 );
        m = Math.floor( this.secondCounter / 60 ) % 60;
        s = this.secondCounter % 60;

        return h+ ':'+ m + ':' + s;
    }
}
