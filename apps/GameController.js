app.controller("GameController", function($scope){
    $scope.y=0;
    
    $scope.moveDown= function(){
        $scope.y++;
    }
});