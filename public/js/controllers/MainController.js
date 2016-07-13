(function(){
// is the getter
  angular.module('ngtodos')//this calls up the module which we created called ngtodos
         .controller('MainController', MainController); //this tells angular to inject the controller known as 'MainController' that is the function MainController, into the app ngtodos

  MainController.$inject = ['$scope', 'TodoService'];
//Tells angular to inject the scope, and TodoService modules into the MainController
  function MainController($scope, TodoService){ //the function MainController is using both the scope and TodoService modules
    $scope.todos = TodoService.todos;
    $scope.create = createTodo;
    getTodos();




    function getTodos(){
      TodoService.readAll()
                 .then(function(){
                   $scope.todos = TodoService.todos;
                   console.log($scope.todos);
                 })
    }

    function createTodo(description){
      TodoService.create(description)
                 .then(function(){
                   $scope.todos = TodoService.todos;
                   $scope.description = '',
                   getTodos();
                 })
  }
  }

})();
