//Import expressJS module
const express = require('express');

//Create an express application object
const app = express()

//Create one character object
var character = {
  name: 'Yer Boi',
  race: 'Heretic Astartes',
  profession: 'Chaos Space Marine',
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
  //This method searches for an item in the item in the last list with this name and adds it to this character's inventory
  pickupItem: function(searchName) {
    console.log(this);
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match!");
        this.inventory.push(item);
        break;
      }
    }
  },
  //This method searches for a given slot and overwrites it with an empty object
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
}

//This holds all possible items
var item_list = [
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
];


//Create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Sword');
  character.unequipItem('arm_p')
  res.send(`
    <h1>Hello</h1>
    <p>Name: ${character.name}</p>
    <p>Race: ${character.race}</p>
    <p>Profession: ${character.profession}</p>
    <p>Equipment: ${character.equipment}</p>
    <p>Inventory: ${character.inventory}</p>
    <p>Abilities: ${character.abilities}</p>
    <p>Attack: ${character.stats.attack}</p>
    <p>Defense: ${character.stats.defense}</p>
    <p>HP Current: ${character.stats.hp_current}</p>
    <p>HP Max: ${character.stats.hp_max}</p>
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `);
    //race and profession
    //Each of the characters stats
    //Once per paragraph
});

//Start an http listen server
app.listen(3000)
