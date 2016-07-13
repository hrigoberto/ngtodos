(function(){
// is the getter
  angular.module('ngtodos')//this calls up the module which we created called ngtodos
         .controller('MainController', MainController); //this tells angular to inject the controller known as 'MainController' that is the function MainController, into the app ngtodos

  MainController.$inject = ['$scope', 'TodoService'];
//Tells angular to inject the scope, and TodoService modules into the MainController
  function MainController($scope, TodoService){ //the function MainController is using both the scope and TodoService modules
    $scope.message = 'Hey now, what is that sound?' //tells the maincontroller what to replace message with anywhere it is between {{}} within the scope

    var todos = TodoService.todos; //declares a variable that is the todos within the TodoService
    TodoService.readAll() //this tells MainController function to 'read' aka get all of TodoService
               .then(function(){ // then it'll run a function that logs the todos in the console.
                todos = TodoService.todos
                console.log(todos);
              });

  TodoService.create();
  TodoService.delete();
  TodoService.update();
  
  }
})();
