function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());

  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
var sec0 = $(".sec0").text();
var sec1 = $(".sec1").text();
var min0 = $(".min0").text();
var min1 = $(".min1").text();
var hr0 = $(".hr0").text();
var hr1 = $(".hr1").text();
var day0 = $(".day0").text();
var day1 = $(".day1").text();

function updateClock(time) {
  var secs = time.seconds.toString();
  var hrs = time.hours.toString();
  var mins = time.minutes.toString();
  var days = time.days.toString();

  if(secs.length > 1){
      if(sec1 == secs[0]){

    } else {
      sec1 = secs[0];
      updatePanel("sec1", secs[0]);
    }
      if(sec0 == secs[1]){

    } else {
      sec0 = secs[1];
      updatePanel("sec0", secs[1]);
    }
  } else {

   if(sec0 == secs[0]){

    } else {
      sec0 = secs[0];
      updatePanel("sec0", secs[0]);
    }
  }
  if(mins.length > 1){
      if(min1 == mins[0]){

    } else {
      min1 = mins[0];
      updatePanel("min1", mins[0]);
    }
      if(min0 == mins[1]){

    } else {
      min0 = mins[1];
      updatePanel("min0", mins[1]);
    }
  } else {

   if(min0 == mins[0]){

    } else {
      min0 = mins[0];
      updatePanel("min0", mins[0]);
    }
  }
  if(hrs.length > 1){
      if(hr1 == hrs[0]){

    } else {
      hr1 = hrs[0];
      updatePanel("hr1", hrs[0]);
    }
      if(hr0 == hrs[1]){

    } else {
      hr0 = hrs[1];
      updatePanel("hr0", hrs[1]);
    }
  } else {

   if(hr0 == hrs[0]){

    } else {
      hr0 = hrs[0];
      updatePanel("hr0", hrs[0]);
    }
  }
  if(days.length > 1){
      if(day1 == days[0]){

    } else {
      day1 = days[0];
      updatePanel("day1", days[0]);
    }
      if(day0 == days[1]){

    } else {
      day0 = days[1];
      updatePanel("day0", days[1]);
    }
  } else {

   if(day0 == days[0]){

    } else {
      day0 = days[0];
      updatePanel("day0", days[0]);
    }
  }

}
function updatePanel(selector, value){

  var divs = $("#"+selector).children("div.upper-panel");
  //divs.addClass("animate");
  setTimeout(function(){
    $("."+selector).text(value);
  }, 500);

  // setTimeout(function(){
  //   divs.removeClass("animate");
  // }, 600);

}
var timer;
function startTimer() {
  var deadline = document.getElementById("deadline").value;

  var test = Date.parse(deadline);
  if(!test){
    alert("enter Proper Time Eg: mm/dd/yyyy hh:mm:ss GMT+5:30");
  } else {

    timer = setInterval(function () {
      var time = getTimeRemaining(deadline);
      updateClock(time);
    }, 1000);

  }

}

function stopClock () {
  clearInterval(timer);
}
