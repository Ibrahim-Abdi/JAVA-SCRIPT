// The js Date Object
function makeDate() {
    let currentDate = new Date();

// document.write(currentDate);

let secs = currentDate.getSeconds();
    mins = currentDate.getMinutes(),
    hours = currentDate.getHours(),
    day = currentDate.getDay(),
    date = currentDate.getDate(),
    month = currentDate.getMonth(),
    year = currentDate.getFullYear();

    if(secs < 10){
        secs = `0${secs}`;
    }
    if(mins < 10){
        mins = `0${mins}`;
    }
    if(hours < 10){
        hours = `${hours}`;
    }

    

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let formattedDay = days[day];
    // console.log(formattedDay);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let formattedMonth = months[month];
    // console.log(formattedMonth);  

    // let myDate = `${formattedDay} ${formattedMonth} ${dates} ${hours}:${mins}:${secs}`;
    // document.write(myDate);
    amPm = "AM";
    if (hours > 12) {
        hours <= 12;
        amPm = "PM";
    }
    if(hours == 0){
        hr = 12;
        amPm = "AM";
    }
    let currentTime = hours + ":" + mins + ":" + secs + amPm;

    let grt;
    if (hours < 12) {
        grt = "Good Morning"
    } else if (hours < 17) {
        grt = "Good Afternoon"
    } else ("Evening");

    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("grt").innerHTML = currentTime;



    document.getElementById("day").innerHTML = formattedDay;
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = formattedMonth;
    document.getElementById("year").innerHTML = year;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;

}

setInterval(makeDate, 1000);
