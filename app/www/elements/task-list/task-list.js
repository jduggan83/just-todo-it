/**
 * Created by Jonathan on 18/05/2016.
 */
(function() {
  'use strict';

  Polymer({
    is: 'task-list',
    ready: function() {
      console.log("fdf")
    },
    complete: function(e) {
      var model = e.model.set('item.completed', true);
    },
    uncomplete: function(e) {
      var model = e.model.set('item.completed', false);
    }
  });
})();
