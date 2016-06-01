/**
 * Created by Jonathan on 18/05/2016.
 */
(function() {
  'use strict';

  Polymer({
    is: 'task-edit',
    ready: function() {
      var me = this;
      this.upsert = true;
      this.dbName = "tasks";

      document.addEventListener('task-edit-save', function (e) {
          me.save();
      });
    },
    properties: {
      taskId: {
        type: String,
        notify: true
      }
    },
    behaviors: [
      Polymer.AppPouchDBDatabaseBehavior,
      Polymer.PaperInputBehavior,
      Polymer.AppStorageBehavior
    ],
    save: function() {
      this._post(this.results[0]).then(function(){
        app.showTasks();

      });
    }
  });
})();
