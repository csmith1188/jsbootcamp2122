//day 2 practice
//by dylan or something


//import stuff, and declare an application
const express = require('express');
const app = express();
const ejs = require('ejs');
app.set("view engine", "ejs");
//character
var person1 = {
  name: "Aleris Blackreaver the Fourth, Duke of Vakkaerith and King of all Dragons",
  race: "Abyssal Demon",
  class: "Dragon Summoner",
  profession: 'Magic Expert',
  equipment: {
    weapon: 'Unsealed Spellbook',
    shield: 'The Emperors Key',
    head: 'Crown of the Vakkaerith Duke',
    chest: 'Grand Summoner Chestplate',
    pants: 'Grand Summoner Leggings',
    shoes: 'Grand Summoner Boots',
  },
  inventory: ['Kings Gate Zero', 'Kings Gate Infinity'],
  abilities: ['Summon Dragon', 'Dragon Form', 'Draconic Fusion', 'Recover Life'],
  stats: {
    attack: '3220',
    defense: '2150',
    healthCurrent: '1273',
    healthMax: '1273',
    manaCurrent: '5324',
    manaMax: '6038'
  },
  //claim an item from the list
  pickupItem: function(searchName) {
    for (var item of possibleItems) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Item get! You have recieved " + searchName);
        this.inventory.push(item)
        break;
      }
    }
  },
  //search a given slot, and overwrite it.
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot) {
        console.log("Item unequipped.");
        this.equipment.slotName = {};
        break;
      }
    }
  }
}


//list of obtainable items
var possibleItems = [{
    name: "Eternal Tempest Staff",
    slot: "weapon",
    givenBonus: {
      attack: '440',
      mana: '590',
    }
  },
  {
    name: "Resilience of the Armed Protector Dragon",
    slot: "shield",
    givenBonus: {
      defense: '410',
      healthMax: '1190',
    }
  }
];

//used to pick up items


//get endpoint
app.get('/', (req, res) => {
//person1.pickupItem('Eternal Tempest Staff')
//person1.unequipItem('weapon')
  res.render('profile', { sendData: person1 } );
})

//tells http to listen to this server
app.listen(3000)
