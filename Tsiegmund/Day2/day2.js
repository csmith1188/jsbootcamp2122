
//import express js
const express = require('express');
//create express app object
const app = express()
//global variables
var character = {
  name: 'Jack',
  race: 'Human',
  characterClass:'Knight',
  equipment: {
    head: {},
    chest: {},
    legs: {},
    arm_p: {},
    arm_s: {},
    two_handed:{}
  },
  inventory: [],
  abilities:[],
  stats: {
  attack:5,
  defense:6,
  hp_current:20,
  hp_max:20,
},
  pickupItem: function(searchName)  {
    for (var item of equipment_list) {
      console.log(item.name)
      if (item.name == searchName) {
        console.log('found match')
        this.inventory.push(item)
        break;
      }
    }
  },
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName)
      if (slotName == slot) {
        console.log('found item slot, removing')
        this.equipment.slotName = {}
        }
      }
    }
}





//holds all possible items
var equipment_list = [
  {name: 'Longsword',
   slot: 'arm_p',
   bonuses: {
     defense: 5,
     attack: 5
   }
 },
{
  name: 'shield',
   slot: 'arm_s',
   bonuses: {
     defense: 5
   }
 },
];


if (character.equipment.two_handed) {
  character.equipment.arm_p = {}
  character.equipment.arm_s = {}
}

//creates get endpoint
app.get('/', (req, res) => {
  character.pickupItem('Longsword')
  character.unequipItem('arm_p')
  res.send(`
    <h1> hi lmao lmao lmao </h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Class: ${character.characterClass}</p>
    <p>Attack Rating: ${character.stats.attack}</p>
    <p>Defense Rating: ${character.stats.defense}</p>
    <p>Current HP: ${character.stats.hp_current}</p>
    <p>Maximum HP: ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>


    `);
});


//starts an http listen server
app.listen(1000)
