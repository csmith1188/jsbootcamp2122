//import expressjs module
const express = require('express');

//create an express application object
const app = express();

app.set("view engine", "ejs");

//create one characterobject
var character = {
  name: 'Tiberius Caesar Auguwustus',
  race: 'Furry',
  profession: "Furries don't get to work...",
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
    attack: 5,
    defense: 5,
    hp_current: 20,
    hp_max: 20,
  },
  //this method searches for items in the itemlist with this name
  //and adds it to this characters inventory
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
//this method searches for a given slot and overwrites it with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("found item slot. removing.")
        this.equipment.slotName = {};
        break;
      }
    }
  }
}

//this holds all possible items
var item_list = [{
    name: 'Half-life Crossbow',
    slot: 'arm_p',
    bonuses: {
      attack: 95
    }
  },
  {
    name: 'Power armor is for pussies',
    slot: 'chest',
    bonuses: {
      defense: 601
    }
  },
  {
    name: 'Power armor',
    slot: 'chest',
    bonuses: {
      defense: 600
    }
  },
  {
    name: 'Furries cant use human chestgear.',
    slot: 'chest',
    bonuses: {
      defense: 10,
      attack: 10
    }
  },
  {
    name: 'Furries cant use human headgear.',
    slot: 'head',
    bonuses: {
      defense: 10,
      attack: 10
    }
  },
];



//create a get endpoint
app.get('/', (req, res) => {
  character.pickupItem('Furries cant use human headgear.');
  character.unequipItem('arm_p');
  //render a template called profile from the views folder
  res.render('profile', { sendData: character})
});

//start an http listen server
app.listen(3000)
