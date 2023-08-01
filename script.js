"use strict";

var onresize = function() 
{
  var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  console.log(width);
}