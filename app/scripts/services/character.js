'use strict';

app.service('Character', function () {
  
  // this.character = [{name:'Derick',  isClass:'Warrior', health:'100'}];
  // this.spells = [{spell1:'Rush-A-Bitch', spell2:'Pummel-A-Bastard'}];
  // this.inventory = [{weapon:'Sword of Tampa', details: 'Gleaming weapon of pain and destruction'}];
  this.experience = 0;
  this.gold = 0;
  this.gameover = 5000;



  this.coordinates = [0,0];
  this.playername = "Derick";
  this.playerclass = "Warrior";
  this.playerhealth = 100;

  this.spell1 = "Smash Face";
  this.spell2 = "Roundhouse Kick";

  this.weapon = "Sword of Tampa";
  this.weapondetails = "Gleaming Sword of Pain and Destruction";


  
});

                