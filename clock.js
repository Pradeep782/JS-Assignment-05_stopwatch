"use strict";

// creating the $ function that fetches the html element using its id
var $ = function (id) {
    return document.getElementById(id);
};



//global stop watch timer variable and elapsed time object

var stopwatchTimer;

var elapsedMinutes = 0;

var elapsedSeconds = 0;

var elapsedMilliseconds = 0;


// creating the displayCurrentTime function that gets the hour minute and seconds using the new Date object.

var displayCurrentTime = function () {

    var timenow = new Date();

    var hr = timenow.getHours();

    // The default value of the ampm
    var ampm = "AM"; 



// changing the AM and PM by comparing the hr


    if (hr > 12) { 

        hr = hr - 12;

        ampm = "PM";

    } else { 

        switch (hr) {

            case 12: 

                ampm = "PM";

                break;

            case 0: 

                hr = 12;

                ampm = "AM";

        }

    }


    // using the DOM to insert the hr, min, sec in html 

    $("hours").firstChild.nodeValue = hr;

    $("minutes").firstChild.nodeValue = timenow.getMinutes();

    $("seconds").firstChild.nodeValue = timenow.getSeconds();

    $("ampm").firstChild.nodeValue = ampm;

};



var tickStopwatch = function () {

 

    // increment milliseconds by 10 milliseconds

    elapsedMilliseconds = elapsedMilliseconds + 10;

    

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero

    if (elapsedMilliseconds == 1000) {

        elapsedMilliseconds = 0;

        elapsedSeconds = elapsedSeconds + 1;

    }

    // if seconds total 60, increment minutes by one and reset seconds to zero

    if (elapsedSeconds == 60) {

        elapsedSeconds = 0;

        elapsedMinutes = elapsedMinutes + 1;

    }

    //displaying the updated stopwatch time.

    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;

    $("s_seconds").firstChild.nodeValue = elapsedSeconds;

    $("s_minutes").firstChild.nodeValue = elapsedMinutes;



};


// function that starts the stopwatch after clicking the start link
var startStopwatch = function (evt) {

    
 // prevent default action of the start link

    var eventHandler = function () {

        if (!evt) {
            evt = window.event
        }

        if (evt.preventDefault) {

            evt.preventDefault();

        } else {

            evt.returnValue = false;

        }

    };

    // do first tick of stop watch and then set interval timer to tick

    tickStopwatch;

    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer

    stopwatchTimer = setInterval(tickStopwatch, 10);

    

 



};



// function that stops the stopwatch after clicking the stop link

var stopStopwatch = function (evt) {

    // prevent default action of the stop link

    var eventHandler = function () {

        if (!evt) {
            evt = window.event
        }

        if (evt.preventDefault) {

            evt.preventDefault();

        } else {

            evt.returnValue = false;

        }

    };

    // stops the  timer

    clearInterval(stopwatchTimer);



};

// function that resets the stopwatch after clicking the reset link


var resetStopwatch = function (evt) {

    // prevent default action of reset link

    var eventHandler = function () {

        if (!evt) {
            evt = window.event
        }

        if (evt.preventDefault) {

            evt.preventDefault();

        } else {

            evt.returnValue = false;

        }

    };

    // stops the timer

    clearInterval(stopwatchTimer);

    // reset elapsed variables and clear stopwatch display

    elapsedMilliseconds = 0;

    elapsedSeconds = 0;

    elapsedMinutes = 0;

    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;

    $("s_seconds").firstChild.nodeValue = elapsedSeconds;

    $("s_minutes").firstChild.nodeValue = elapsedMinutes;



};

window.onload = function () {

    // set initial clock display and then set interval timer to display

    // new time every second. Don't store timer object because it

    // won't be needed - clock will just run.

    displayCurrentTime();

    setInterval(displayCurrentTime, 1000);




    // startStopwatch function to start the stopwatch
    $("start").onclick = startStopwatch;

    // stopStopwatch function to stop the stopwatch
    $("stop").onclick = stopStopwatch;

    // resetStopwatch function to reset the stopwatch
    $("reset").onclick = resetStopwatch;

};