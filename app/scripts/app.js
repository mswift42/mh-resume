(function(document) {
  'use strict';

  document.addEventListener('click', function() {
    // Perform some behaviour
      var toolbar = document.querySelector('core-scaffold');
      toolbar.closeDrawer();
        });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
