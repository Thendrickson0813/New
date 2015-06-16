'use strict';

app.service('Rooms', function() {

    this.currentroom = 'Empty Hallway';
    this.currentdescription = 'An empty void of pain';



    this.rooms = [];
    this.rooms[0] = {
        locations: 'X1Y0',
        name: 'Ballroom',
        description: 'You are in a beautiful ballroom. You look around and visualize the fine art on the walls and realize ' +
            'you are not alone...The smell in the air is thick with death and perfume and your heart begins to beat faster. Who was here? ' +
            'Who recently gave up their will to live and flooded the room with the rancid aroma of death?...',
        experience: 1000,
        gold: 275,
        visited: false
    };
    this.rooms[1] = {
        locations: 'X2Y0',
        name: 'Torture Chamber',
        description: 'You are in blood soaked torture chamber. Corpses everywhere....Bodies hanging from hooks on the wall. How could this ' +
            'happen? Were these the bodies that abandoned their souls in the Ballroom? Their stench appears to be similar to what was left of them...',
        experience: 5000,
        gold: 100,
        visited: false
    };
    this.rooms[2] = {
        'locations': 'X3Y0',
        'name': 'Master Suite',
        'description': 'You are in the master suite. You see a king sized bed, nightstand, and an axe propped up against the wall',
        'experience': 1000,
        'gold': 150,
        'visited': false
    };
    this.rooms[3] = {
        'locations': 'X4Y0',
        'name': 'Kitchen',
        'description': 'You are in a large modern kitchen. You can smell a meal that was cooked recently but is no where in sight...',
        'experience': 1000,
        'gold': 500,
        'visited': false
    };
    this.rooms[4] = {
        'locations': 'X5Y0',
        'name': 'Hidden Room',
        'description': 'You are in a hidden room. You see a 80 inch flat screen television mounted flush with the wall. Playing on the ' +
            'screen is a surveillance feed with many cameras looking inside other rooms in the house. You can see yourself in one of the rooms...',
        'experience': 1000,
        'gold': 1000,
        'visited': false
    };



    // console.log(this.rooms[0].id1.description);
    // console.log(this.rooms[0].id2.description);
    // console.log(this.rooms[0].id3.description);
    // console.log(this.rooms[0].id4.description);
    // console.log(this.rooms[0].id5.description);





});