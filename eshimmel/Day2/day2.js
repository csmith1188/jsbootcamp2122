// Import express js file
const express = require('express');
// Create an expres application object
const app = express();

// Create one character object
var character = {
  name: 'Johny',
  race: 'Human',
  profession: 'Homeless',
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
    attack: 5,
    defense: 5,
    hp_current: 20,
    hp_max: 20
  },
  // searches for an item in the item list and
  // adds it to the characters inventory
  pickupItem: function(searchName) {
    for (var item of itemList) {
      console.log(item.name)
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item);
        break;
      }
    }
  },
  // This method searches for a given slot and overwrites
  // it with an empty object
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

// All possible items
var itemList = [{
    name: 'Rusty Can',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'Cardboard Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  },
];



// Start a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem("Rusty Can")
  character.unequipItem('arm_p')
  res.send(`
    <h1>Hello</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Profession: ${character.profession}</p>
    <h2> Stats: </h2>
    <p>Attack: ${character.stats.attack}</p>
    <p>Defense: ${character.stats.defense}</p>
    <p>HP: ${character.stats.hp_current} / ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `);
});

// Start an HTTP listen server
app.listen(3000);
