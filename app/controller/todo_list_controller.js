app.controller('todo_list_controller', function($scope, todo) {
  var imagePath = 'assets/img/blue_nocheck.png';

  $scope.todos = [];
  for (var i = 0; i < 5; i++) {
    $scope.todos.push({
      face: imagePath,
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
});