// anonymous self running function (function(){})()
(function(){
  angular.module('ngtodos') //calls the angular model ngtodos into this service
         .factory('TodoService', TodoService); //.factory is one of four types of services. This will be the one we're using for now.

  TodoService.$inject = ['$http']; //injects the module http into TodoService

  function TodoService($http){
    // var o is the object, it has all the functions to call all of the routes
    var o = {
      create: createTodo,
      readAll: getAll,
      update: updateTodo,
      delete: deleteTodo,
      todos: []
    };
    return o;

    function createTodo(){};
    function getAll(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos/')
                  .then(function(response){
                    o.todos = response.data;
                  });
    };
    function updateTodo(){};
    function deleteTodo(){};
  }
})()
