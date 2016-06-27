console.log('sourced');

var myApp=angular.module( 'myApp', [] );
// create a controller
myApp.controller( 'animalController', [ '$scope', '$http', function( $scope, $http ){
  $scope.addAnimal = function(){
    event.preventDefault();
    //creates object of input fields
    var objectToSend = {
      name: $scope.nameInput,
      animal: $scope.animalInput,
      age: $scope.ageInput,
      image_url: $scope.urlInput
    };
    console.log(objectToSend);
    //sends object to server
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
    $scope.showAnimals();
  };//end addAnimal
  $scope.showAnimals = function(){
     $http({
       method: 'GET',
       url: '/getAnimals'
     }).then( function( response ){
       $scope.allTheRecords = response.data; //puts database into an array
       console.log( $scope.allTheRecords );
     }), function myError( response ){
       console.log( response.statusText );
     };
   }; // end getRecords
}]);//end controller
