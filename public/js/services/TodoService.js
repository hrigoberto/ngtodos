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

    function createTodo(desc){//informs createTodo that there is a description input coming in
      var info = {//is the information being input to create the new todos
        description: desc //the left value has to match the backend name for that value
      };
      return $http.post(baseUrl + 'todos', info) //tells http module to post to the baseurl/todos with the info that has been input
                  .then(function(response){ //acts a prompt waiting for the promise from the server that then runs the function underneath
                    console.log('create', response); //logs the word create so we can see the connection in the console
                    getAll(); //acts a a synchronizer
                  });
    };
    function getAll(){
      return $http.get(baseUrl + 'todos') // this is telling the http module to go get this route (URL)
                  .then(function(response){ //then acts as a prompt to start a function once a promise has been fulfilled (in this case the response from the URL is the promise)
                    o.todos = response.data; //this says that the todos array in object will be made equal to the data in the response from the get
                  });
    };
    function updateTodo(id, newTodo){//tells the update todo function to look for two things, the id and the newTodo
      return $http.put(baseUrl + 'todos/' + id, newTodo)//tells http to put the newTodo into the baseUrl/todos/id
                  .then(function(response){//acts as a promise to start a function once the server responds
                    console.log('update', response);
                    getAll();
                  });
    };
    function deleteTodo(id){ //tells delete function to look out for the id input
      return $http.delete(baseUrl + 'todos/' + id) //tells http to delete the baseUrl/todos/id object
                  .then(function(response){ //listens for a promise fulfillment from the server
                    console.log('delete', response);
                    getAll(); //acts as a synchronizer
                  });
    };
  }
})()
