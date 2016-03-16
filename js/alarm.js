exports.Alarm = function(current, set) {
  this.time = current;
  this.alarm = set;
  var greeting = "this is my local greeting.";
  this.greeting = "this is my object property greeting.";
};

exports.Alarm.prototype.ringAlarm = function(setTime) {
  if (this.time.format('hh:mm') === setTime) {
    alert('wake up');
    return true;
  }
  else {
    console.log(this.time.format('hh:mm'));
    console.log(setTime);
    return false;
  }
};

exports.Alarm.prototype.updateTime = function() {
  this.time = moment();
  $('#time').text(this.time.format('hh:mm:ss'));
};
