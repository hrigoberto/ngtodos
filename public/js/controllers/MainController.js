(function(){
// is the getter
  angular.module('ngtodos')
         .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController(){
    console.log('Main!');
  }
})();
