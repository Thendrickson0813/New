'use strict';

app.controller('UiMiddleCtrl', function($scope, Character, TextFeed, Rooms, $filter) {

    // bringing in service data that have been injected and assigned to local scope

    $scope.textfeed = TextFeed.textfeed;
    $scope.playerCoordinatesX = Character.coordinatesX;
    $scope.playerCoordinatesY = Character.coordinatesY;

    $scope.currentroom = Rooms.currentroom;
    $scope.currentdescription = Rooms.currentdescription;

    // $scope.rooms = Rooms;
    $scope.experience = Character.experience;
    $scope.gold = Character.gold;
    makeMovable();

    $scope.moveUp = function() {
        $scope.playerCoordinatesX[0] = $scope.playerCoordinatesX[0] + 1;
        $scope.textfeed.push('You walk North...');
        // console.log('mainNORTH');
    };
    $scope.moveDown = function() {
        $scope.playerCoordinatesX[0] = $scope.playerCoordinatesX[0] - 1;
        $scope.textfeed.push('You walk South...');
        // console.log('mainDOWN');
    };
    $scope.moveLeft = function() {
        $scope.playerCoordinatesY[0] = $scope.playerCoordinatesY[0] - 1;
        $scope.textfeed.push('You walk West...');
        // console.log('mainLEFT');
    };
    $scope.moveRight = function() {
        $scope.playerCoordinatesY[0] = $scope.playerCoordinatesY[0] + 1;
        $scope.textfeed.push('You walk East...');
        // console.log('mainRIGHT');
    };
    $scope.move = function(moveUp, moveDown, moveLeft, moveRight) {
        if (moveUp) {
            moveUp();
            // console.log('North');
        }
        if (moveDown) {
            moveDown();
            // console.log('South');
        } // CONSOLE LOG READING NORTH
        if (moveLeft) {
            moveLeft();
            // console.log('West');
        } // CONSOLE LOG READING NORTH
        if (moveRight) {
            moveRight();
            // console.log('East');
        } // CONSOLE LOG READING NORTH

        // X Coordinates Is an Array
        // WORKING
        var coordinatesX = $scope.playerCoordinatesX;
        // Y Coordinates Is an Array
        // WORKING
        var coordinatesY = $scope.playerCoordinatesY;

        // Created Var X to add X to Coordinates
        var x = 'X';

        // Concat X with coordinatesX Changed to string
        // WORKING
        var xCoordinates = x.concat(coordinatesX);

        // Create Var Y to add Y to Coordinates
        var y = 'Y';

        // Concat Y with coordinatesY Changed to string
        // WORKING
        var yCoordinates = y.concat(coordinatesY);

        // Concat xCoordinates with yCoordinates still a String
        // WORKING 
        var xyCoordinates = xCoordinates.concat(yCoordinates);
        console.log(xyCoordinates);

        // Turn xyCoordinates from a string into an object
        // WORKING
        var room = [];
        room = {
            'locations': xyCoordinates
        };
        // console.log(room);
        // console.log(Rooms.rooms);

        var arrayLength = Rooms.rooms.length;

        for (var i = 0; i < arrayLength; i++) {
            // console.log(Rooms.rooms[i]);
            if (room.locations === Rooms.rooms[i].locations) {
                var myRoom = Rooms.rooms[i];
                console.log(myRoom);
                console.log('first if rooms');

                if (myRoom.visited === false) {
                    $scope.textfeed.push(myRoom.description);
                    $scope.currentroom = myRoom.name;
                    $scope.currentdescription = myRoom.description;
                    $scope.textfeed.push('Experience Gained: ' + myRoom.experience);
                    var a = parseInt($scope.experience);
                    var b = parseInt(myRoom.experience);
                    var c = a + b;
                    $scope.experience = c;
                    $scope.textfeed.push('Total Experience: ' + $scope.experience);
                    Character.experience = $scope.experience;
                    $scope.textfeed.push('Gold Gained: ' + myRoom.gold);
                    Character.gold += myRoom.gold;
                    myRoom.visited = true;
                    console.log('second if rooms');
                } else {
                    $scope.textfeed.push(myRoom.name);
                    $scope.textfeed.push(myRoom.description);
                    $scope.currentroom = myRoom.name;
                    $scope.currentdescription = myRoom.description;
                    console.log('second if rooms');
                }
            } else if (room.locations.length !== Rooms.rooms[i].locations.length) {
                $scope.currentroom = 'General Room';
                $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';
                console.log('last if rooms');
            }
        }
        
        
    };

    // $scope.submitAction = function() {
    //     $scope.textfeed.push('You took an action!');
    //     console.log('You took an action!');
    //     // determine whether the game is over and if so - print to textfeed
    //     if (Character.experience === Character.gameover) {
    //         $scope.textfeed.push('GAME OVER');
    //     } else {
    //         // reset array once 30 elements are in it so I don't have to worry about overflow FML

    //         console.log('Textfeed length: ' + $scope.textfeed.length);
    //         if ($scope.textfeed.length > 30) {
    //             $scope.textfeed.length = 0;
    //         }

    //         $scope.textfeed.push('you are a nub');
    //         // $scope.textfeed.push('You are walking around in a building');
    //         $scope.currentroom = 'General Room';
    //         $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';
    //     }
    // };

});