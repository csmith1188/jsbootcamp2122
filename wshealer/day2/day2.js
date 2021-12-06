//inport express js module
const express = require('express');

// create a express application object
const app = express()

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
  res.send(`
    <h1>i live in a cardboard box in south carolina</h1>
    <p>Name: ${character.name}</p>
    <p>Attack ${character.stats.attack}</p>
    <p>Deffense ${character.stats.deffense}</p>
    <p>Hp_current ${character.stats.hp_current}</p>
    <p>Hp_max ${character.stats.hp_max}</p>
    <p>Hp_regen ${character.stats.hp_regen}</p>
    <p>Race ${character.race}</p>
    <p>Proffesion ${character.proffesion}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `)

});

// start a http listen server
app.listen(3000)
