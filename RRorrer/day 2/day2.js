//Import express js module
const express = require('express');
//create an express app object
const app = express();
//initalize the port
const port = 3000

//Create 1 character object
var player = {
  name: 'Clide',
  race: 'Half Elf',
  profession: 'God Killer',
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
    attack: '∞',
    defense: '∞',
    hp_current: '∞',
    hp_max: '∞',

  },
  pickupItem: function(searchName) {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log('found a match');
        this.inventory.push(item);
        break;
      }
    }
  },
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      if (slotName == slot) {
        console.log("Found cringe slot, removing");
        this.equipment.slotName = {};
      }
    }
  }
}
// This holds all possible items
var item_list = [{
  name: 'Sword',
  slot: 'arm_p',
  bonuses: {
    attack: 60
  }
}, {
  name: 'Shield',
  slot: 'arm_s',
  bonuses: {
    defense: 90
  }
}];


//create a get endpoint
app.get('/', (req, res) => {
  player.pickupItem('Sword', player);
  player.unequipItem('arm_p');
  res.send(`<h1>Wubbles Bubbles Doubles Trouble</h1>
    <h3>Name:${ player.name}</h3>
<h2>Your Stats</h2>
<p>Attack:${player.stats.attack}</p>
<p>Defense:${player.stats.defense}</p>
<p>Current HP:${player.stats.hp_current}</p>
<p>Max HP:${player.stats.hp_max}</p>
<p>${JSON.stringify(player.inventory)}

    `)
  //each of the character's stats
  //One per paragraph

})

//start an http listen server
app.listen(port)
