//day 2 practice
//by dylan or something


//import stuff, and declare an application
const express = require('express');
const app = express();

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
  person1.pickupItem('Eternal Tempest Staff')
  person1.unequipItem('weapon')
  res.send(`<h1>Stats page</h1>
    <p>Name: ${person1.name}</p>
    <p>Race: ${person1.race}</p>
    <p>Class: ${person1.class}</p>
    <p>Profession: ${person1.profession}</p>
    <p>Equipment: ${person1.equipment.weapon}, ${person1.equipment.shield}, ${person1.equipment.head}, ${person1.equipment.chest}, ${person1.equipment.pants}, ${person1.equipment.shoes}</p>
    <p>Inventory: ${person1.inventory}</p>
    <p>Spells: ${person1.abilities}</p>
    <p>Statistics: Attack: ${person1.stats.attack}, Defense: ${person1.stats.defense}, HP: ${person1.stats.healthCurrent}, HP Max: ${person1.stats.healthMax}, Mana: ${person1.stats.manaCurrent}, Mana Max: ${person1.stats.manaMax},</p>
    `);
})

//tells http to listen to this server
app.listen(3000)
