'use strict';

(function() {

console.log('This site is under construction :P');

//------------------------------------------------------------------------------
//
//  Constants
//
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//
//  Variables
//
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//
//  Functions
//
//------------------------------------------------------------------------------

var addClassByClass = function(targetClassName, addClassName) {
  var elements = document.getElementsByClassName(targetClassName);

  for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add(addClassName);
  }
};

//------------------------------------------------------------------------------
//
//  Event handlers
//
//------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function(event){
//   console.log(event.currentTarget + '.' +  event.type);
// }, false);

window.addEventListener('load', function(event){
//   console.log(event.currentTarget + '.' +  event.type);
  var startDelay = 300;
  setTimeout(function() { addClassByClass('simple-profile', 'show'); }, startDelay);
  
  setTimeout(function() { addClassByClass('avatar', 'show'); }, startDelay+=300);
  
  setTimeout(function() { addClassByClass('title', 'show'); }, startDelay+=300);
  setTimeout(function() { addClassByClass('description', 'show'); }, startDelay);

  setTimeout(function() { addClassByClass('contact-links', 'show'); }, startDelay+=150);
}, false);

// window.addEventListener('orientationchange', function(event) {
// //   console.log(event.currentTarget + '.' +  event.type);
  
//   // Workarounds for iOS Safari landscape bug
//   if(90 === window.orientation || -90 === window.orientation) {
//     document.body.scrollTop = 0;
//   }
  
// }, false);

})();
