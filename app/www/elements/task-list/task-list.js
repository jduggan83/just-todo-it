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

      document.addEventListener('task-list-delete-completed', function (e) {
          me.deleteCompletedTasks(e);
      });
    },
    behaviors: [
      Polymer.AppPouchDBDatabaseBehavior,
      Polymer.AppStorageBehavior
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
        console.log("task updated");
      });
    },
    deleteCompletedTasks: function(e){
      var me = this;

      for(var i = 0; i<this.tasks.length; i++){
        if(this.tasks[i].completed){
          this._remove(this.tasks[i]).then(function(){
            console.log("here");
          });
        }
      };

    },
    refresh: function(){
        this.$.queryTasks.refresh();
    }
  });
})();
