/**
 * Created by Jonathan on 18/05/2016.
 */
(function() {
  'use strict';

  Polymer({
    is: 'task-edit',
    ready: function() {
      this.upsert = true;
      this.dbName = "tasks";
    },
    properties: {
      taskId: {
        type: String,
        notify: true
      }
    },
    behaviors: [
      Polymer.AppPouchDBDatabaseBehavior,
      Polymer.PaperInputBehavior
    ],
    save: function(e) {
      this._post(this.results[0]).then(function(){
          window.location.href = "/";
      });
    }
  });
})();
