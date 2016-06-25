console.log('sourced');

var myApp=angular.module( 'myApp', [] );
// create a controller
myApp.controller( 'animalController', [ '$scope', '$http', function( $scope, $http ){
  $scope.addAnimal = function(){
    event.preventDefault();
    var objectToSend = {
      name: $scope.nameInput,
      animal: $scope.animalInput,
      age: $scope.ageInput,
      url: $scope.urlInput
    };
    console.log(objectToSend);

    $http({
      method: 'POST',
      url: '/sendAnimal',
      data: objectToSend
    });
    // clear inputs
    $scope.nameInput ='';
    $scope.ageInput ='';
    $scope.animalInput ='';
    $scope.urlInput ='';

  };
}]);
