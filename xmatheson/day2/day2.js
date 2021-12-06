//import expessjs module
const express = require('express');

//create express application object
const app = express()


//create 1 character object
var character = {
  name: 'Aeonium',
  race: 'Fairy',
  profession: 'Rogue',
  equipment: {
    head: {},
    chest: {},
    legs: {},
    arm_p: {},
    arm_s: {}
  },
  inventory: [],
  abilities: [],
  stats: {
    attack: 1,
    defense: 10,
    hp_current: 43,
    hp_max: 43
  },
  //this method searches for item in item list with this name and adds it to inventory
  pickupItem: function(searchName) {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item);
        break;
      }
    }
  },
  //searches for given slot and overwrites it with empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("found item slot. Removing.");
        this.equipment.slotName = {};
        break;
      }
    }
  }
};

//holds all possible items
var item_list = [{
    name: 'Gun',
    slot: 'arm_p',
    bonuses: {
      attack: 17
    }
  },
  {
    name: 'Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 3
    }
  }
];


//create GET endpoint
app.get('/', (req, res) => {
  character.pickupItem("Gun");
  character.unequipItem('arm_p')
  res.render('profile', {
    sendData: character
  })
  //each of the character's stats
  //one per paragraph

});

//start http listen server
app.listen(3000)