//Import expressJS module
const express = require('express');

// Create an epxress application object
const app = express()

app.set("view engine", "ejs");

// Create one character object
var char = {
  name: 'Hatsune Miku',
  race: 'Human',
  profession: 'Virtual Idol',
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
    attack: 39,
    defense: 39,
    hp_current: '∞',
    hp_max: '∞'
  },
  //This method searches for an item in the itme list with this name
  //And adds it to this character's inventory
  pickupItem: function(searchName) {
    console.log(this);
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("poggie woggies");
        this.inventory.push(item);
        break;
      }
    }
  },
  //This method searches for a given slot and overwrites
  //it with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("Removing - not so poggie woggies");
        this.equipment.slotName = {};
        break;
      }
    }
  }
}

// This holds all possible items
var item_list = [
  {
    name: 'Diamond Pickaxe',
    slot: 'arm_p',
    bonuses: {
      attack: 16
    }
  },
  {
    name: 'Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
];

// Create a GET endpoint
app.get('/', (req, res) => {
  char.pickupItem('Diamond Pickaxe');
  char.unequipItem('arm_p');
  res.render('profile', { sendData: char })
});

//Start an http listen server
app.listen(3000);
