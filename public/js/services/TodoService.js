// anonymous self running function (function(){})()
(function(){
  angular.module('ngtodos') //calls the angular module ngtodos into this service (known as the getter)
         .factory('TodoService', TodoService); //.factory is one of four types of services. This will be the one we're using for now. Injects the factory known as TodoService into the ngtodos module;

  TodoService.$inject = ['$http']; //injects the module http into TodoService

  function TodoService($http){

    var baseUrl = 'https://quiet-refuge-27140.herokuapp.com/' //acts as the baseUrl for functions. Do not forget the '/' at the end.
    var o = { // var o is the object, it houses variables with all the functions to call all of the routes
      create: createTodo,
      readAll: getAll,
      update: updateTodo,
      delete: deleteTodo,
      todos: []
    };
    return o;

    function createTodo(desc){
      var info = {
        description: desc
      };
      return $http.post(baseUrl + 'todos', info)
                  .then(function(response){
                    console.log('create', response);
                    getAll();
                  });
    };
    function getAll(){
      return $http.get(baseUrl + 'todos') // this is telling the http module to go get this route (URL)
                  .then(function(response){ //then acts as a prompt to start a function once a promise has been fulfilled (in this case the response from the URL is the promise)
                    o.todos = response.data; //this says that the todos array in object will be made equal to the data in the response from the get
                  });
    };
    function updateTodo(id, newTodo){
      return $http.put(baseUrl + 'todos' + id, newTodo)
                  .then(function(response){
                    console.log('update', response);
                    getAll();
                  });
    };
    function deleteTodo(id){
      return $http.delete(baseUrl + 'todos/' + id)
                  .then(function(response){
                    console.log('delete', response);
                    getAll(); //acts as a synchronizer
                  })
    };
  }
})()
