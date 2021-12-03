//Import expressJS module
const express = require('express');

// Create an express application object
const app = express()

// View Engine
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
      legs:{},
      arm_p: {},
      arm_s: {},
    }
    this.inventory = []
    this.abilities = []
    this.stats = {
      attack: 999999999999,
      defense: 999999999999,
      hp_current: 999999999999,
      hp_max: 999999999999
    }
    //This method searches for an item in the item list with this Name and aadds it to this characters inventory
    this.pickupItem = function(searchName) {
      for (var item of item_list) {
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item);
          break;
        }
      }
    }
    // This method searches for a given slot and overwrites it with an empty object
    this.unequipItem = function(slot) {
      for (var slotName in this.equipment) {
        console.log(slotName);
        if (slotName == slot) {
          console.log("Found item slot. Removing");
          this.equipment.slotName = {};
        }
      }
    }
  }
}
var characterList = []
characterList.push(new Character('Chad', 'God Slayer', 'Assassin'))

var item_list = [{
    name: 'Divine Dagger',
    slot: 'arm_p',
    bonuses: {
      attack: 999999999999
    }
  },
  {
    name: 'Gods Protection',
    slot: 'arm_s',
    bonuses: {
      defense: 999999999999
    }
  },
];

characterList[0].pickupItem('Divine Dagger');
characterList[0].unequipItem('arm_p');

// Create a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  console.log(req.params.characterid);

  var foundProfile = characterList.find(character => character.id == req.params.characterid)
  console.log(foundProfile)
  // Render a template called 'profile' from the 'views' folder and send it to a variable called "sendData"
  res.render('profile', { sendData: characterList[0] })
  //each of the characters stats
  // One per paragraph
})
// Start an http listen server
app.listen(3000)
