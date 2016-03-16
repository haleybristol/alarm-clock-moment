var Alarm = require('../js/alarm.js').Alarm;

$(document).ready(function() {

  var testAlarm = new Alarm();
  setInterval(function(){
    testAlarm.updateTime();
  }, 1000);




  $('#set-time').submit(function(event){
    event.preventDefault();
    var set_time = $('#alarm').val();

  setInterval(function(){
    testAlarm.ringAlarm(set_time);
  }, 1000);
})

});
