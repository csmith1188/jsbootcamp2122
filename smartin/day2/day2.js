//import express js modules
const express = require('express');
//create a express app
const app = express()
//create one character object
var character  = {
  name:'xqc',
  race: 'goblin',
  profession: 'gfuel sponsor',
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
    attack: '∞',
    defense: '∞',
    hp_current: '∞',
    hp_max: '∞',
  },
  //this method searches a item and adds it to inventory
  //And adds it to this character's Inventory
  pickupitem: function(searchName) {
    for (var item of item_list) {
      if (item.name == searchName) {
        console.log("founda match");
        this.inventory.push(item);
        break;
        }
      }
    },
    //this method searches for a certain slot
    //it then removes it
    unequipitem: function(slot) {
      for (var slotName in this.equipment) {
        console.log(slotName);
        if (slotName == slot) {
          console.log("found da slot, removing");
          this.equipment.slotName = {};
          break;
        }
      } {
      }
    }
}
//holds all possible items
var item_list = [
  {
    name: 'talk about enemy',
    slot: `arm_p`,
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'tier 3 sub knights',
    slot: `arm_s`,
    bonuses: {
      defense: 5
    }
  }
];
//create a get endpoint
app.get('/', (req,res) => {
  character.pickupitem('talk about enemy');
  character.unequipitem('arm_p')
  res.send(
    `
    <p>name: ${character.name}
    <p>race: ${character.race}
    <p>profession: ${character.profession}
    <p>equipment: ${character.equipment}
    <p>inventory: ${character.inventory}
    <p>abilities: ${character.abilities}
    <p>Attack: ${character.stats.attack}</p>
    <p>Defence: ${character.stats.defense}</p
    <p>Current HP: ${character.stats.hp_current}</p>
    <p>Max HP: ${character.stats.hp_max}</p>}
    <p>Inventory: ${JSON.stringify(character.inventory)}</p>
    `
  );
});
//create a app listen
app.listen(3000)