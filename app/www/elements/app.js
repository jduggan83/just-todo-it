(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';

  // Listen for template bound event to know when bindings
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

})(document);
