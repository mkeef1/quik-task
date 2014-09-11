(function(){
  'use strict';

  angular.module('quiktask')
  .factory('Task', ['$http', function($http){

    function create(task){
      return $http.post('/tasks', task);
    }

    function all(){
      return $http.get('/tasks');
    }

    return {create:create, all:all};
  }]);
})();

