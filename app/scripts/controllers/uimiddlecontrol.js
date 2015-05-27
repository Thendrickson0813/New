'use strict';

app.controller('UiMiddleCtrl', function($scope, Character, TextFeed, Rooms, $filter) {

    // bringing in service data that have been injected and assigned to local scope

    $scope.textfeed = TextFeed.textfeed;
    $scope.playerCoordinates = Character.coordinates;

    $scope.currentroom = Rooms.currentroom;
    $scope.currentdescription = Rooms.currentdescription;

    // $scope.rooms = Rooms;
    $scope.experience = Character.experience;
    $scope.gold = Character.gold;
    
    // initializing script that allows boxes in ui to move and resize
    makeMovable();



    // var actionLog = angular.element(document.querySelector('#comment-list'));



    // function for when user clicks up button
    $scope.moveUp = function() {
        $scope.playerCoordinates[1] = $scope.playerCoordinates[1] + 1;
        $scope.textfeed.push('North');

               // determine whether the game is over and if so - print to textfeed
            if(Character.experience === Character.gameover){
            $scope.textfeed.push('GAME OVER');
        }

        // console.log("========")
        // console.log($scope.playerCoordinates[0])
        // console.log(Rooms.rooms[0].id1.location[0])
        // console.log(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
        //                 && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1]))
        // console.log("========")


        // if this players current coords are equal to room id1 coords

        if(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id1.name;
            $scope.currentdescription = Rooms.rooms[0].id1.description;
            console.log("Current Room: " + Rooms.currentroom);
            console.log(Rooms.rooms[0].id1.name);
            // $scope.textfeed.push(Rooms.rooms[0].id1.description);
            console.log(Rooms.rooms[0].id1.description);

            
            // if the player has never been to this room before
            if (Rooms.rooms[0].id1.visited === false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id1.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id1.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id1.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id1.gold);
                Character.gold += Rooms.rooms[0].id1.gold;


                // set flag to show that player has been here before
                Rooms.rooms[0].id1.visited = true;
                

            }

        } // if this players coords match room id2 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id2.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id2.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id2.name;
            $scope.currentdescription = Rooms.rooms[0].id2.description;
            console.log(Rooms.rooms[0].id2.name);
            // $scope.textfeed.push(Rooms.rooms[0].id2.description);
            console.log(Rooms.rooms[0].id2.description);
            // if player has never been to this room before

            if (Rooms.rooms[0].id2.visited == false){
                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id2.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id2.experience);
                // $scope.experience += Rooms.rooms[0].id2.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id2.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id2.gold);
                Character.gold += Rooms.rooms[0].id2.gold;
                
              
                Rooms.rooms[0].id2.visited = true;
                console.log(Rooms.rooms[0].id2.visited);

            }
        } //if player coords match room id3 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id3.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id3.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id3.name;
            $scope.currentdescription = Rooms.rooms[0].id3.description;
            console.log(Rooms.rooms[0].id3.name);
            // $scope.textfeed.push(Rooms.rooms[0].id3.description);
            console.log(Rooms.rooms[0].id3.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id3.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id3.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id3.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id3.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id3.gold);
                Character.gold += Rooms.rooms[0].id3.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id3.visited = true;
                console.log(Rooms.rooms[0].id3.visited);
            }
        } // if players coords match room id4 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id4.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id4.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id4.name;
            $scope.currentdescription = Rooms.rooms[0].id4.description;
            console.log(Rooms.rooms[0].id4.name);
            // $scope.textfeed.push(Rooms.rooms[0].id4.description);
            console.log(Rooms.rooms[0].id4.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id4.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id4.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id4.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id4.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id4.gold);
                Character.gold += Rooms.rooms[0].id4.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id4.visited = true;
                console.log(Rooms.rooms[0].id4.visited);
            }
        } // if player coords match room id5 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id5.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id5.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id5.name;
            $scope.currentdescription = Rooms.rooms[0].id5.description;
            console.log(Rooms.rooms[0].id5.name);
            // $scope.textfeed.push(Rooms.rooms[0].id5.description);
            console.log(Rooms.rooms[0].id5.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id5.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id5.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id5.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id5.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id5.gold);
                Character.gold += Rooms.rooms[0].id5.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id5.visited = true;
            }
        }
        else{
            // reset array once 30 elements are in it so I don't have to worry about overflow FML
            console.log("Textfeed length: " + $scope.textfeed.length);
            if($scope.textfeed.length > 30)
            {
                $scope.textfeed.length = 0;

            }
            
            $scope.textfeed.push('You are walking around in a building');
            $scope.currentroom = 'General Room';
            $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';
        }
    };

    $scope.moveDown = function() {


        $scope.playerCoordinates[1] = $scope.playerCoordinates[1] - 1;
        $scope.textfeed.push('South');



           // determine whether the game is over and if so - print to textfeed
            if(Character.experience == Character.gameover){
            $scope.textfeed.push('GAME OVER');
        }
        // console.log("You pressed Down!");
        // console.log("Current Location is " + $scope.playerCoordinates);

                // console.log("========")
        // console.log($scope.playerCoordinates[0])
        // console.log(Rooms.rooms[0].id1.location[0])
        // console.log(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
        //                 && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1]))
        // console.log("========")


            if(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id1.name;
            $scope.currentdescription = Rooms.rooms[0].id1.description;
            console.log(Rooms.rooms[0].id1.name);
            // $scope.textfeed.push(Rooms.rooms[0].id1.description);
            console.log(Rooms.rooms[0].id1.description);
            
            // if the player has never been to this room before
            if (Rooms.rooms[0].id1.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id1.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id1.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id1.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id1.gold);
                Character.gold += Rooms.rooms[0].id1.gold;


                // set flag to show that player has been here before
                Rooms.rooms[0].id1.visited = true;
            }

        } // if this players coords match room id2 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id2.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id2.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id2.name;
            $scope.currentdescription = Rooms.rooms[0].id2.description;
            console.log(Rooms.rooms[0].id2.name);
            // $scope.textfeed.push(Rooms.rooms[0].id2.description);
            console.log(Rooms.rooms[0].id2.description);
            // if player has never been to this room before
            if (Rooms.rooms[0].id2.visited == false){
                console.log("working");
                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id2.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id2.experience);
                // $scope.experience += Rooms.rooms[0].id2.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id2.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id2.gold);
                Character.gold += Rooms.rooms[0].id2.gold;
                
              
                Rooms.rooms[0].id2.visited = true;
            }
        } //if player coords match room id3 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id3.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id3.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id3.name;
            $scope.currentdescription = Rooms.rooms[0].id3.description;
            console.log(Rooms.rooms[0].id3.name);
            $scope.textfeed.push(Rooms.rooms[0].id3.description);
            console.log(Rooms.rooms[0].id3.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id3.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id3.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id3.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id3.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id3.gold);
                Character.gold += Rooms.rooms[0].id3.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id3.visited = true;
            }
        } // if players coords match room id4 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id4.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id4.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id4.name;
            $scope.currentdescription = Rooms.rooms[0].id4.description;
            console.log(Rooms.rooms[0].id4.name);
            // $scope.textfeed.push(Rooms.rooms[0].id4.description);
            console.log(Rooms.rooms[0].id4.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id4.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id4.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id4.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id4.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id4.gold);
                Character.gold += Rooms.rooms[0].id4.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id4.visited = true;
            }
        } // if player coords match room id5 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id5.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id5.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id5.name;
            $scope.currentdescription = Rooms.rooms[0].id5.description;
            console.log(Rooms.rooms[0].id5.name);
            $scope.textfeed.push(Rooms.rooms[0].id5.description);
            console.log(Rooms.rooms[0].id5.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id5.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id5.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id5.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id5.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);



                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id5.gold);
                Character.gold += Rooms.rooms[0].id5.gold;
                
                

                // set flag to show that player has been here before
                Rooms.rooms[0].id5.visited = true;
            }
        }
        else{
             // reset array once 30 elements are in it so I don't have to worry about overflow FML
            console.log("Textfeed length: " + $scope.textfeed.length);
            if($scope.textfeed.length > 30)
            {
                $scope.textfeed.length = 0;

            }
            $scope.textfeed.push('You are walking around in a building');
            $scope.currentroom = 'General Room';
            $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';
        }

    };

    $scope.moveLeft = function() {
        $scope.playerCoordinates[0] = $scope.playerCoordinates[0] - 1;
        $scope.textfeed.push('West');



           // determine whether the game is over and if so - print to textfeed
            if(Character.experience == Character.gameover){
            $scope.textfeed.push('GAME OVER');
        }
        // console.log("You pressed Left!");
        // console.log("Current Location is " + $scope.playerCoordinates);



                // console.log("========")
        // console.log($scope.playerCoordinates[0])
        // console.log(Rooms.rooms[0].id1.location[0])
        // console.log(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
        //                 && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1]))
        // console.log("========")


                if(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id1.name;
            $scope.currentdescription = Rooms.rooms[0].id1.description;
            console.log(Rooms.rooms[0].id1.name);
            // $scope.textfeed.push(Rooms.rooms[0].id1.description);
            console.log(Rooms.rooms[0].id1.description);
            
            // if the player has never been to this room before
            if (Rooms.rooms[0].id1.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id1.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id1.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id1.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id1.gold);
                Character.gold += Rooms.rooms[0].id1.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id1.visited = true;
            }

        } // if this players coords match room id2 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id2.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id2.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id2.name;
            $scope.currentdescription = Rooms.rooms[0].id2.description;
            console.log(Rooms.rooms[0].id2.name);
            // $scope.textfeed.push(Rooms.rooms[0].id2.description);
            console.log(Rooms.rooms[0].id2.description);
            // if player has never been to this room before
            if (Rooms.rooms[0].id2.visited == false){
                console.log("working");
                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id2.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id2.experience);
                // $scope.experience += Rooms.rooms[0].id2.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id2.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id2.gold);
                Character.gold += Rooms.rooms[0].id2.gold;
                
              
                Rooms.rooms[0].id2.visited = true;
            }
        } //if player coords match room id3 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id3.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id3.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id3.name;
            $scope.currentdescription = Rooms.rooms[0].id3.description;
            console.log(Rooms.rooms[0].id3.name);
            // $scope.textfeed.push(Rooms.rooms[0].id3.description);
            console.log(Rooms.rooms[0].id3.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id3.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id3.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id3.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id3.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id3.gold);
                Character.gold += Rooms.rooms[0].id3.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id3.visited = true;
            }
        } // if players coords match room id4 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id4.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id4.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id4.name;
            $scope.currentdescription = Rooms.rooms[0].id4.description;
            console.log(Rooms.rooms[0].id4.name);
            // $scope.textfeed.push(Rooms.rooms[0].id4.description);
            console.log(Rooms.rooms[0].id4.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id4.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id4.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id4.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id4.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id4.gold);
                Character.gold += Rooms.rooms[0].id4.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id4.visited = true;
            }
        } // if player coords match room id5 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id5.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id5.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id5.name;
            $scope.currentdescription = Rooms.rooms[0].id5.description;
            console.log(Rooms.rooms[0].id5.name);
            // $scope.textfeed.push(Rooms.rooms[0].id5.description);
            console.log(Rooms.rooms[0].id5.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id5.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id5.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id5.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id5.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id5.gold);
                Character.gold += Rooms.rooms[0].id5.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id5.visited = true;
            }
        }
        else{
             // reset array once 30 elements are in it so I don't have to worry about overflow FML
            console.log("Textfeed length: " + $scope.textfeed.length);
            if($scope.textfeed.length > 30)
            {
                $scope.textfeed.length = 0;

            }
            $scope.textfeed.push('You are walking around in a building');
            $scope.currentroom = 'General Room';
            $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';
        }
    };

    $scope.moveRight = function() {
        $scope.playerCoordinates[0] = $scope.playerCoordinates[0] + 1;
        $scope.textfeed.push('East');

            // determine whether the game is over and if so - print to textfeed
            if(Character.experience == Character.gameover){
            $scope.textfeed.push('GAME OVER');
        }
        // console.log("You pressed Right!");
        // console.log("Current Location is " + $scope.playerCoordinates);

                // console.log("========")
        // console.log($scope.playerCoordinates[0])
        // console.log(Rooms.rooms[0].id1.location[0])
        // console.log(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
        //                 && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1]))
        // console.log("========")


                if(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id1.name;
            $scope.currentdescription = Rooms.rooms[0].id1.description;
            console.log(Rooms.rooms[0].id1.name);
            // $scope.textfeed.push(Rooms.rooms[0].id1.description);
            console.log(Rooms.rooms[0].id1.description);
            
            // if the player has never been to this room before
            if (Rooms.rooms[0].id1.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id1.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id1.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id1.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id1.gold);
                Character.gold += Rooms.rooms[0].id1.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id1.visited = true;
            }

        } // if this players coords match room id2 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id2.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id2.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id2.name;
            // $scope.currentdescription = Rooms.rooms[0].id2.description;
            console.log(Rooms.rooms[0].id2.name);
            $scope.textfeed.push(Rooms.rooms[0].id2.description);
            console.log(Rooms.rooms[0].id2.description);
            // if player has never been to this room before
            if (Rooms.rooms[0].id2.visited == false){
                console.log("working");
                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id2.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id2.experience);
                // $scope.experience += Rooms.rooms[0].id2.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id2.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id2.gold);
                Character.gold += Rooms.rooms[0].id2.gold;
                
              
                Rooms.rooms[0].id2.visited = true;
            }
        } //if player coords match room id3 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id3.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id3.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id3.name;
            // $scope.currentdescription = Rooms.rooms[0].id3.description;
            console.log(Rooms.rooms[0].id3.name);
            $scope.textfeed.push(Rooms.rooms[0].id3.description);
            console.log(Rooms.rooms[0].id3.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id3.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id3.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id3.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id3.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id3.gold);
                Character.gold += Rooms.rooms[0].id3.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id3.visited = true;
            }
        } // if players coords match room id4 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id4.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id4.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id4.name;
            // $scope.currentdescription = Rooms.rooms[0].id4.description;
            console.log(Rooms.rooms[0].id4.name);
            $scope.textfeed.push(Rooms.rooms[0].id4.description);
            console.log(Rooms.rooms[0].id4.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id4.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id4.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id4.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id4.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id4.gold);
                Character.gold = Rooms.rooms[0].id4.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id4.visited = true;
            }
        } // if player coords match room id5 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id5.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id5.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id5.name;
            $scope.currentdescription = Rooms.rooms[0].id5.description;
            console.log(Rooms.rooms[0].id5.name);
            // $scope.textfeed.push(Rooms.rooms[0].id5.description);
            console.log(Rooms.rooms[0].id5.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id5.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id5.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id5.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id5.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id5.gold);
                Character.gold = Rooms.rooms[0].id5.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id5.visited = true;
            }
        }
        else{
             // reset array once 30 elements are in it so I don't have to worry about overflow FML
            console.log("Textfeed length: " + $scope.textfeed.length);
            if($scope.textfeed.length > 30)
            {
                $scope.textfeed.length = 0;

            }
            $scope.textfeed.push('You are walking around in a building');
            $scope.currentroom = 'General Room';
            $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';
        }

    };

    $scope.submitAction = function() {
        $scope.textfeed.push('You took an action!');
        console.log('You took an action!');


           // determine whether the game is over and if so - print to textfeed
            if(Character.experience == Character.gameover){
            $scope.textfeed.push('GAME OVER');
        }

                // console.log("========")
        // console.log($scope.playerCoordinates[0])
        // console.log(Rooms.rooms[0].id1.location[0])
        // console.log(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
        //                 && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1]))
        // console.log("========")


                if(($scope.playerCoordinates[0] === Rooms.rooms[0].id1.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id1.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id1.name;
            $scope.currentdescription = Rooms.rooms[0].id1.description;
            console.log(Rooms.rooms[0].id1.name);
            // $scope.textfeed.push(Rooms.rooms[0].id1.description);
            console.log(Rooms.rooms[0].id1.description);
            
            // if the player has never been to this room before
            if (Rooms.rooms[0].id1.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id1.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id1.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id1.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id1.gold);
                Character.gold = Rooms.rooms[0].id1.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id1.visited = true;
            }

        } // if this players coords match room id2 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id2.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id2.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id2.name;
            $scope.currentdescription = Rooms.rooms[0].id2.description;
            console.log(Rooms.rooms[0].id2.name);
            // $scope.textfeed.push(Rooms.rooms[0].id2.description);
            console.log(Rooms.rooms[0].id2.description);
            // if player has never been to this room before
            if (Rooms.rooms[0].id2.visited == false){
                console.log("working");
                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id2.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id2.experience);
                // $scope.experience += Rooms.rooms[0].id2.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id2.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id2.gold);
                Character.gold = Rooms.rooms[0].id2.gold;
                
              
                Rooms.rooms[0].id2.visited = true;
            }
        } //if player coords match room id3 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id3.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id3.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id3.name;
            $scope.currentdescription = Rooms.rooms[0].id3.description;
            console.log(Rooms.rooms[0].id3.name);
            // $scope.textfeed.push(Rooms.rooms[0].id3.description);
            console.log(Rooms.rooms[0].id3.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id3.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id3.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id3.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id3.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id3.gold);
                Character.gold = Rooms.rooms[0].id3.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id3.visited = true;
            }
        } // if players coords match room id4 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id4.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id4.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id4.name;
            $scope.currentdescription = Rooms.rooms[0].id4.description;
            console.log(Rooms.rooms[0].id4.name);
            // $scope.textfeed.push(Rooms.rooms[0].id4.description);
            console.log(Rooms.rooms[0].id4.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id4.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id4.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id4.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id4.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id4.gold);
                Character.gold = Rooms.rooms[0].id4.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id4.visited = true;
            }
        } // if player coords match room id5 coords
        else if(($scope.playerCoordinates[0] === Rooms.rooms[0].id5.location[0]) 
                        && ($scope.playerCoordinates[1] === Rooms.rooms[0].id5.location[1])){
            // console.log("worked")
            $scope.currentroom = Rooms.rooms[0].id5.name;
            $scope.currentdescription = Rooms.rooms[0].id5.description;
            console.log(Rooms.rooms[0].id5.name);
            // $scope.textfeed.push(Rooms.rooms[0].id5.description);
            console.log(Rooms.rooms[0].id5.description);

            // if the player has never been to this room before
            if (Rooms.rooms[0].id5.visited == false){

                $scope.textfeed.push("Experience Gained: " + Rooms.rooms[0].id5.experience);
                console.log("Experience Gained: " + Rooms.rooms[0].id5.experience);
                // $scope.experience += Rooms.rooms[0].id1.experience;
                // console.log("scope.experience after service property added into it " + $scope.experience);
                var a = parseInt($scope.experience);
                console.log("scope.experience after parse int " + a);
                var b = parseInt(Rooms.rooms[0].id5.experience);
                console.log("Rooms service experience variable after parse" + b);
                var c = a + b;
                $scope.experience = c;
                console.log("scope.experience + service experience data added together" + $scope.experience);
                $scope.textfeed.push("Total Experience: " + $scope.experience);
                console.log(Character.experience);
                console.log($scope.experience);
                Character.experience = $scope.experience;
                console.log(Character.experience);

                $scope.textfeed.push("Gold Gained: " + Rooms.rooms[0].id5.gold);
                Character.gold = Rooms.rooms[0].id5.gold;

                // set flag to show that player has been here before
                Rooms.rooms[0].id5.visited = true;
            }
        }
        else{
             // reset array once 30 elements are in it so I don't have to worry about overflow FML

            console.log("Textfeed length: " + $scope.textfeed.length);
            if($scope.textfeed.length > 30)
            {
                $scope.textfeed.length = 28;

            }

            $scope.textfeed.push('you are a nub');
            // $scope.textfeed.push('You are walking around in a building');
            $scope.currentroom = 'General Room';
            $scope.currentdescription = 'A dank, mysterious hallway in the basic general room...';

        }

        
    };









});