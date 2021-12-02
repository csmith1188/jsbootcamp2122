//Import expressJS module
const express = require('express');

// Create an express application object
const app = express()

// View Engine
app.set("view engine", "ejs");

// Create one character object
var character = {
  name: 'Chad',
  race: 'God',
  profession: 'Assassin',
  equipment: {
    head: '',
    chest: '',
    legs: '',
    arm_p: '',
    arm_s: '',
  },
  inventory: [],
  abilities: [],
  //This method searches for an item in the item list with this Name and aadds it to this characters inventory
  pickupItem: function(searchName) {
    for (var item of item_list) {
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item);
        break;
      }
    }
  },
  stats: {
    attack: 999999999999,
    defense: 999999999999,
    hp_current: 999999999999,
    hp_max: 999999999999
  },
  // This method searches for a given slot and overwrites it with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("Found item slot. Removing");
        this.equipment.slotName = {};
      }
    }
  }
}


var item_list = [{
    name: 'Divine Dagger',
    slot: 'arm_p',
    bonuses: {
      attack: 999999999999
    }
  },
  {
    name: 'Gods Protection',
    slot: 'arm_s',
    bonuses: {
      defense: 999999999999
    }
  },
];


// Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Divine Dagger');
  character.unequipItem('arm_p');
  res.render('profile', { sendData: character })
  //each of the characters stats
  // One per paragraph
})
// Start an http listen server
app.listen(3000)
