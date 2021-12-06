// import expressJs module
const express = require('express');

// create exress application object
const app = express ();

//create one charcater object
var protag = {
  name: 'spike',
  race: 'human',
  profession: 'space cowboy',
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
    hpmax: 20
  },
  //this method searches for an item in the item list with this name & adds it to this characters inventory
  pickupItem: function(searchName) {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        
        console.log('found a match!');
        this.inventory.push(item);
        break;
      }
    }
  },
  //this method searches for a given slot and overwrites it with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log('found item slot. removing.');
        this.equipment.slotName = {};
        break;
      }
    }
  }
}

//holds all possible items
var item_list = [
  {
    name: 'pewpew shooter',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
];


// create GET endpoint
app.get('/', (req, res) => {
  protag.pickupItem('pewpew shooter');
  protag.unequipItem('arm_p');
  res.send(`
    <h1>helo</h1>
    <p>Name: ${protag.name}</p>
    <p>Race: ${protag.race}</p>
    <p>Profession: ${protag.profession}</p>
    <p>Inventory: ${JSON.stringify(protag.inventory)}</p>
    <p>Abilities: ${protag.abilities}</p>
    <p>attack: ${protag.stats.attack}</p>
    <p>defense: ${protag.stats.defense}</p>
    <p>currentHP: ${protag.stats.hp_current}</p>
    <p>maxHP: ${protag.stats.hpmax}</p>
    `);
    //Each of the chatacters stats, one per paragraph

});
// start HTTP listen server
app.listen(3000)
