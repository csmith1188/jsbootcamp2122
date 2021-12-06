//Import expressJS module
const express = require('express');

//Create an express aplication object
const app = express()

//Create one character object
var character = {
  name: 'Jack Cooper',
  race: 'Human',
  profession: 'Militia SRS Pilot',
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
    attack: 15,
    defense: 10,
    hp_current: 25,
    hp_max: 25
  },
  //This method searches for an item in the item list
  // with this name and adds it to this character's inventory
  pickupItem: function(searchName) {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match");
        this.inventory.push(item)
        break;
      }
    }
  },
  //This method searches for a given slot and
  //overwrites is with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (this.equipment.hasOwnProperty(slotName)) {
        if (slotName == slot) {
          console.log("Found item slot. Removing.");
          this.equipment.slotName = {};
          break;
        }
      }
    }
  }
};

//This holds all possible items
var item_list = [{
    name: 'Spitfire',
    slot: 'arm_p',
    bonuses: {
      attack: 10
    }
  },
  {
    name: 'Particle Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 10
    }
  }
];


//Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Spitfire')
  character.unequipItem('arm_p');
  res.send(
    `<h1>Hello World</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Profession: ${character.profession}</p>
    <p>Attack: ${character.stats.attack}</p>
    <p>Defense: ${character.stats.defense}</p>
    <p>Current Hp: ${character.stats.hp_current}</p>
    <p>Max Hp: ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
  `);

});

//Start an http listen server
app.listen(3000);
