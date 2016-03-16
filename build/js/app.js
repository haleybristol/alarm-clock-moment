(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"../js/alarm.js":1}]},{},[2]);
