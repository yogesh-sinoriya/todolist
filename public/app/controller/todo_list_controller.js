app.controller('todo_list_controller', function($scope, todo) {
  var imagePath = 'assets/img/blue_nocheck.png';


	$scope.load = function () {
  	todo.get(function (data) {
			$scope.todos = data;
		});		
  };

  $scope.task = {};
	$scope.load();
  

	$scope.chage_status = function (data) {
		todo.complete(data, function(result) {});
	}

  $scope.addToDo = function(){
  	todo.add({ task: $scope.task.new+"", status: false}, function (result){
			$scope.task = {};
			$scope.load();
		});
		
  };

  $scope.delete = function (id) {
  	todo.remove(id, function (result) {
  		$scope.load();
  	})
  };
});