//inport express js module
const express = require('express');

// create a express application object
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
        attack: 5,
        deffense: 5,
        hp_current: 20,
        hp_max: 20,
        hp_regen: 2
      },
      // this searchers for an item in the list with this name
      // and adds it to this characters inventory
      this.pickupItem = function(searchName) {
        for (var item of item_list) {
          console.log(item.name);
          if (item.name == searchName) {
            console.log("found a match");
            this.inventory.push(item);
            break;
          }
        }
      },
      // this method searches for a given slot and overrites
      // it was am empty objects
      this.unequipItem = function(slot) {
        for (var slotName in this.equipment) {
          console.log(slotName);
          if (slotName == slot) {
            console.log("found an item slot. removing");
            this.equipment.slotName = {};
            break;
          }
        }
      }
  }
};

var characterList = []
 characterList.push(new Character('林', 'he/him', 'drug addict'))

// this holds all possible items
var item_list = [{
    name: 'pipe',
    slot: 'arm_s',
    bonuses: {
      hp_regen: 2
    }
  },
  {
    name: 'knife',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  }
];

  characterList[0].pickupItem('pipe');
  characterList[0].unequipItem('arm_p')
  // create a get endpoint

  app.get('/profile/:characterid', (req, res) => {
var foundProfile = characterList.find(character => character.id == req.params.characterid)

if (foundProfile) {
  //render a template called profile from the views folder
  // and send a variable called sendData
  res.render('profile', {
    sendData: JSON.stringify(foundProfile)
    })
  } else {
    res.redirect('/new');
  }

});
// this endpoint creates a new character
app.get('/new', (req, res) => {
characterList.push(new Character('sam', 'they/him', 'smelly boi'))
res.redirect('/profile/' + characterList[characterList.length - 1].id)
});
// start a http listen server
app.listen(3000)
