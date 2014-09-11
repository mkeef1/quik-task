(function(){
  'use strict';

  angular.module('quiktask')
  .controller('TasksCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.sort = 'name';
    $scope.task = {};
    $scope.priorities = [];
    $scope.tasks = [];

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorites;
    });

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });

    $scope.add = function(){
      Task.create($scope.task).then(function(response){
        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };
  }]);
})();

