'use strict';

app.controller('UiRightCtrl', function($scope, Character) {

	$scope.playerCoordinates = Character.coordinates;

	$scope.playername = Character.playername;
    $scope.playerclass = Character.playerclass;
    $scope.playerhealth = Character.playerhealth;

    $scope.spell1 = Character.spell1;
    $scope.spell2 = Character.spell2;

    $scope.weapon = Character.weapon;

    $scope.currentexperience = Character;
    $scope.currentgold = Character;

            
				









});