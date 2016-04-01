myApp.factory("HeroManager", ["$http", function($http){

  var getData = function() {
    $http.get("/hero").then(function(response){
      data.result = response.data;
      console.log(data);
    });
  };

  var data = {};

  var postData = function(data){
    $http.post("/hero", data).then(function(response){
      console.log(response.data);
      getData();
    });
  };

  var deleteData = function(data){
    $http.delete("/hero/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getData();
    });
  };


  return {
    postData: postData,
    getData: getData,
    deleteData: deleteData,
    data: data
  };
}]);
