/**
 * Created by Jonathan on 18/05/2016.
 */
(function() {
  'use strict';

  Polymer({
    is: 'task-add',
    ready: function() {
      var me = this;
      this.upsert = true;
      this.dbName = "tasks";

     document.addEventListener('task-add-save', function (e) {
          me.save();
      });

      document.addEventListener('task-add-reset', function (e) {
        me.reset();
      });
    },
    properties: {
      newTaskName: {
          type: String,
          notify: true
      },
      newTaskDescription: {
        type: String,
        notify: true      }
    },
    behaviors: [
      Polymer.AppPouchDBDatabaseBehavior,
      Polymer.PaperInputBehavior
    ],
    save: function() {
      var task = {
        "name": this.newTaskName,
        description: this.newTaskDescription,
        completed: false
      };
      this._post(task).then(function(){
          app.showTasks();
      });
    },
    reset: function(){
      this.$.newTaskName.value = "";
      this.$.newTaskDescription.value = "";
    }
  });
})();
