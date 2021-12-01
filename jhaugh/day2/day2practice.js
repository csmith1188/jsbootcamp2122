//Import expressJS module
const express = require('express');

// Create an express application object
const app = express()

// Create one character object
var character = {
  name: 'Chad',
  race: 'God',
  profession: 'Assassin',
  equipment: {
    head: '',
    chest: '',
    legs: '',
    arm_p: '',
    arm_s: '',
  },
  inventory: [],
  abilities: [],
  pickupItem: function(searchName) {
    for (var item of item_list) {
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item);
        break;
      }
    }
  },
  stats: {
    attack: 999999999999,
    defense: 999999999999,
    hp_current: 999999999999,
    hp_max: 999999999999
  }
}

var item_list = [{
    name: 'Divine Dagger',
    slot: 'arm_p',
    bonuses: {
      attack: 999999999999
    }
  },
  {
    name: 'Gods Protection',
    slot: 'arm_s',
    bonuses: {
      defense: 999999999999
    }
  },
];


// Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Divine Dagger');
  res.send(`
    <h1>God's Judgement is among us</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Profession: ${character.profession}</p>
    <p>Current Attack: ${character.stats.attack}</p>
    <p>Current Defense: ${character.stats.defense}</p>
    <p>Current HP: ${character.stats.hp_current}</p>
    <p>Max HP: ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `);
  //each of the characters stats
  // One per paragraph
})
// STart an http listen server
app.listen(3000)
