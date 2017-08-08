var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {

    $scope.output = "0";
    $scope.inOperation = false;
    $scope.num1 = 0;

    $scope.updateOutput = function (btn) {
        if ($scope.output == "0") {
            $scope.output = btn;
        } else {
            $scope.output += String(btn);
        }
    };

    $scope.operate = function (op) {
        if ($scope.output && !$scope.inOperation) {
            $scope.num1 = $scope.output;
            $scope.output += op;
            $scope.inOperation = true;
        } else if ($scope.output.length > $scope.num1.length + 1) {
            try {

                $scope.output = eval($scope.output);
            }
            catch (e) {
                alert("Expression is invalid.");

            }
            console.log($scope.output);
            $scope.output += op;
        }
    };

    $scope.equal = function () {
        if ($scope.output.length > $scope.num1.length + 1) {
            try {
                $scope.output = eval($scope.output);
            }
            catch (e) {
                alert("Expression is invalid.");
            }
            console.log($scope.output);
            $scope.num1 = $scope.output;
        } else {
            $scope.output = $scope.num1;
        }
    };

});