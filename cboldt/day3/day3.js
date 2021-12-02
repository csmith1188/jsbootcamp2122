//import expresjs module
const express = require('express');

//create and express application object
const app = express()

app.set("view engine", "ejs");

// create one character object
var character = {
  name: 'Pyramid Head',
  race: 'Humanoid',
  profession: 'Punisher',
  equipment: {
    head: {},
    chest: {},
    legs: {},
    arm_p: {},
    arm_s: {},
  },
  inventory: [],
  abilities: [],
  stats: {
    attack: 999999999999,
    defense: 999999999999,
    hp_current: 999999999999,
    hp_max: 999999999999
  },
  //This method searches for an item in the item list with this Name
  //and adds it to this characters inventory
  pickupItem: function(searchName) {
    console.log(this);
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item)
        break;
      }
    }
  },
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("Found item slot. removing");
        this.equipment.slotName = {};
        break;
      }
    }
  }
}
//this holds all possible items
var item_list = [{
    name: 'The Great Knife',
    slot: 'arm_p',
    bonuses: {
      attack: 15
    }
  },
  {
    name: 'The Great Spear',
    slot: 'arm_p',
    bonuses: {
      attack: 10
    }
  },
  {
    name: 'Unrelenting Protection',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
];

//create a get endpoint
app.get('/', (req, res) => {
  character.pickupItem('The Great Knife');
  character.unequipItem('arm_p');
  res.render('profile', { sendData: character })
});

//start an http listen server
app.listen(3000)
