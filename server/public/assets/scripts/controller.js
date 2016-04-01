// myApp.controller("AddController", ["$scope", "Hero", function($scope, Hero){
//   $scope.hero = {};
//   $scope.submitHero = function(data){
//     Hero.postData(data);
//   };
// }]);
//
// myApp.controller("ShowController", ["$scope", "Hero", function($scope, Hero){
//   $scope.heroArray = Hero.data;
//   Hero.getData();
//
//   $scope.deleteHero = function(data){
//     Hero.deleteData(data);
//     console.log("meow");
//   };
// }]);


myApp.controller("AddController", ["$scope", "HeroManager", function($scope, HeroManager){
  $scope.hero = {};
  $scope.powers = ["Invisibility","Flight", "Super Speed","Heat Vision","Super Strength","Accelerated Healing","Power Blast","Animal Affinity"];

  $scope.submitHero = function(data) {
    HeroManager.postData(data);

  };
}]);

myApp.controller("ShowController", ["$scope", "HeroManager", function($scope, HeroManager){
  $scope.heroArray = HeroManager.data;
  HeroManager.getData();
  $scope.deleteHero = function(data){
    HeroManager.deleteData(data);
    console.log("meow");

  };

}]);
