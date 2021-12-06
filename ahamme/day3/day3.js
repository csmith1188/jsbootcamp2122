//Import ExpressJS Module
const express = require('express');
//Create express application object
const app = express()

app.set("view engine", "ejs");

//Create one character object
var character = {
    name: 'Steve Jobs',
    race: 'Kindergarten Dropout',
    profession: 'CEO of Apple',
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
      defense: 0,
      hp_current: 0,
      hp_max: 2,
    },
    //Searches for an item in the item list with this name and adds it to this character's inventory
    pickupItem: function(searchName) {
      for (var item of item_list) {
        console.log(item.name);
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item)
          break;
        }
      }
    },
    //Searches for a given slot and overwrites it with an emtpy object
    unequipItem: function(slot) {
      for (var slotName in this.equipment) {
        console.log(slotName);
        if (slotName == slot) {
          console.log("Found item slot. Removing.");
          this.equipment.slotName = {};
          break;
        }
      }
    }
};

//This holds all possible items
var item_list = [
  {
    name: 'Cool Hat',
    slot: 'head',
    bonuses: {
      defense: 0,
      hp_max: 3
    }
  },
  {
    name: 'Bag',
    slot: 'arm_s',
    bonuses: {
      defense: 1
    }
  }
];

//function pickupItem

//Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Cool Hat');
  character.unequipItem('head');
  res.render('profile', { sendData: character })
});

//Start an HTTP Listen Server
app.listen(3000)
