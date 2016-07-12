(function(){
// is the getter
  angular.module('ngtodos')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.message = 'Hey now, what is that sound?'

    var todos = TodoService.todos;
    TodoService.readAll()
               .then(function(){
                todos = TodoService.todos
                console.log(todos);
              });
  }
})();
