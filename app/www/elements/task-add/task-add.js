/**
 * Created by Jonathan on 18/05/2016.
 */
(function() {
  'use strict';

  Polymer({
    is: 'task-add',
    ready: function() {
      this.upsert = true;
      this.dbName = "tasks";
    },
    properties: {
      newTaskName: {
          type: String,
          notify: true
      },
      newTaskDescription: {
        type: String,
        notify: true      }
    },behaviors: [
      Polymer.AppPouchDBDatabaseBehavior,
      Polymer.PaperInputBehavior
    ],
    save: function(e) {
      var task = {
        "name": this.newTaskName,
        description: this.newTaskDescription,
        completed: false
      };
      this._post(task).then(function(){
          window.location.href = "/";
      });
    }
  });
})();
