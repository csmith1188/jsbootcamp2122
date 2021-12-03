//Import ExpressJS Module
const express = require('express');
//Create express application object
const app = express()

app.set("view engine", "ejs");


class Character {
  constructor(name, race, profession) {
    this.id = characterList.length + 1000;
    this.name = name
    this.race = race
    this.profession = profession
    this.equipment = {
      head: {},
      chest: {},
      legs: {},
      arm_p: {},
      arm_s: {}
    }
    this.inventory = []
    this.abilities = []
    this.stats = {
      attack: 1,
      defense: 0,
      hp_current: 0,
      hp_max: 2,
    }
    //Searches for an item in the item list with this name and adds it to this character's inventory
    this.pickupItem = function(searchName) {
      for (var item of item_list) {
        console.log(item.name);
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item)
          break;
        }
      }
    }
    //Searches for a given slot and overwrites it with an emtpy object
    this.unequipItem = function(slot) {
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
}

var characterList = []
characterList.push(new Character('Steve Jobs', 'Kindergarden Dropout', 'CEO of Apple'))

//This holds all possible items
var item_list = [{
    name: 'Cool Hat',
    slot: 'head',
    bonuses: {
      defense: 0,
      hp_max: 3
    }
  },
  {
    name: 'Bag',
    slot: 'arm_s',
    bonuses: {
      defense: 1
    }
  }
];

characterList[0].pickupItem('Cool Hat');
characterList[0].unequipItem('head');

//Create a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.params.characterid)

  if (foundProfile) {
    //Render a template called profile from the views folder and send it a variable called "sendData"
    res.render('profile', {
      sendData: foundProfile
    })
  } else {
    res.redirect('/new');
  }
});

//This endpoints creates a new character
app.get('/new', (req, res) => {
  characterList.push(new Character('Job Steve', 'CEO of Apple', 'Guy'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
});

//Start an HTTP Listen Server
app.listen(3000)
