//inport express js module
const express = require('express');

// create a express application object
const app = express()

app.set("view engine", "ejs");

// create one character object
var character = {
  name: '林',
  race: 'he/him',
  proffesion: 'drug addict',
  equipment: {
  head: {},
  chest : {},
  legs: {},
  arm_p: {},
  arm_s  : {}
},
  inventory: [],
  abilities: [],
  stats: {
    attack: 5,
    deffense: 5,
    hp_current: 20,
    hp_max: 20,
    hp_regen: 2
  },
  // this searchers for an item in the list with this name
  // and adds it to this characters inventory
  pickupItem: function(searchName)  {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("found a match");
        this.inventory.push(item);
        break;
      }
    }
  },
  // this method searches for a given slot and overrites
  // it was am empty objects
  unequipIten: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("found an item slot. removing");
        this.equipment.slotName = {};
        break;
      }
    }
  }
};
// this holds all possible items
var item_list = [
  {
    name: 'pipe',
    slot: 'arm_s',
    bonuses: {
      hp_regen: 2
    }
  },
  {
    name: 'knife',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  }
];

// create a get endpoint
app.get('/', (req, res) => {
  character.pickupItem('pipe', character);
  character.unequipIten('arm_p')
  res.render('profile', {sendData: character})
});

// start a http listen server
app.listen(3000)
