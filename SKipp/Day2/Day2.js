//import express js module
const express = require('express');
//Create and express application
const app = express()

//create 1 character object
var character = {
  name: 'Kazuha',
  race: 'Human',
  profession: 'Wandering Samurai',
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
  pickupItem: function (searchName) {
    for (var item of itemList) {
      console.log(item.name)
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item)
        break;
      }
    }
  },
  unequipItem: function (slot) {
    for (var slotName in this.equipment) {
      if (slotName == slot) {
        console.log("Found Slot. Removing Item...");
        this.equipment.slotName = {}
        break;
      }
    }
  }
}

var itemList = [
  {
    name: 'Sword',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
]


//Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Sword')
  character.unequipItem('arm_p')
  res.send(`
    <h1>Hewwo UWU</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Class: ${character.profession}</p>
    <p>Attack: ${character.stats.attack}</p>
    <p>Defense: ${character.stats.defense}</p>
    <p>Current HP: ${character.stats.hp_current}</p>
    <p>Max HP: ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `)
})
app.listen(3000)
