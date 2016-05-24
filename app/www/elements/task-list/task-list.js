/**
 * Created by Jonathan on 18/05/2016.
 */
(function() {
  'use strict';

  Polymer({
    is: 'task-list',
    ready: function() {
      var me = this;
      this.upsert = true;
      this.dbName = "tasks";

      document.addEventListener('task-list-refresh', function (e) {
        me.refresh();
      });
    },
    behaviors: [
      Polymer.AppPouchDBDatabaseBehavior
    ],
    complete: function(e) {
      this.updateTask(e.model, true);
    },
    uncomplete: function(e) {
      this.updateTask(e.model, false);
    },
    updateTask: function(model, completed){
      var task = model.get('task');
      model.set('task.completed', completed);
      task.completed = completed;
      this._post(task).then(function(){
        console.log("here");
      });
    }
  });
})();
