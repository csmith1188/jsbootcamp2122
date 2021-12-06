// Day 2 JS Bootcamp
// by Jenna

// Import expressJS module
const express = require('express');

// Create an express application object
const app = express()

// Create a character object
var char = {
  name: 'Hatsune Miku',
  race: 'Human', // coping
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
  // This method searched for an item in the item list with this name and adds it to this character's inventory
  pickupItem: function(searchName) {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log('poggie woggies');
        this.inventory.push(item);
        break;
      };
    }
  },
  // This method searches for a given slot and overwrites it with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log('Removing - not so poggie woggies');
        this.equipment.slotName = {};
        break;
      }
    }

  }
}

// This holds all possible items
var item_list = [{
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
  res.send(`
    <h1>こんにちは</h1>
    <p>Name: ${char.name} </p>
    <p>Race: ${char.race} </p>
    <p>Profession: ${char.profession} </p>
    <p>Attack: ${char.stats.attack} </p>
    <p>Defense: ${char.stats.defense} </p>
    <p>HP: ${char.stats.hp_current} / ${char.stats.hp_max} </p>
    <p>Inventory: ${JSON.stringify(char.inventory)}</p>
    `);
});

// Start an HTTP listen server
app.listen(3000)
