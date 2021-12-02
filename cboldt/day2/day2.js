//import expresjs module
const express = require('express');

//create and express application object
const app = express()

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
  res.send(`
    <h1>i really want to skin a child</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Profession: ${character.profession}</p>
    <p>Current Attack: ${character.stats.attack}</p>
    <p>Current Defense: ${character.stats.defense}</p>
    <p>Current HP: ${character.stats.hp_current}</p>
    <p>Max HP: ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)} </p>
    `);
  //each of the characters stats
  // One per paragraph
});
//start an http listen server
app.listen(3000)
