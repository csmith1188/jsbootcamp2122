// Import express js file
const express = require('express');
// Create an expres application object
const app = express();

// Sets EJS as templating engine
app.set('view engine', 'ejs');

class Character {
  constructor(name, race, profession) {
    this.id = characterList.length + 1000
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
      defense: 5,
      hp_current: 20,
      hp_max: 20
    }
    // searches for an item in the item list and
    // adds it to the characters inventory
    this.pickupItem = function(searchName) {
      for (var item of itemList) {
        console.log(item.name)
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item);
          break;
        }
      }
    }
    // This method searches for a given slot and overwrites
    // it with an empty object
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

var characterList = [];
characterList.push(new Character('Johny', 'Human', 'Homeless'))


// All possible items
var itemList = [{
    name: 'Rusty Pipe',
    slot: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'Cardboard Shield',
    slot: 'arm_s',
    bonuses: {
      defense: 5
    }
  },
];

characterList[0].pickupItem("Rusty Pipe");
characterList[0].unequipItem('arm_p');


// Start a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.params.characterid)

  if (foundProfile) {
    // Render a template called 'profile' from the 'views' folder
    // And send it a variable called "sendData"
    res.render('profile', {
      sendData: foundProfile
    });
  } else {
    res.redirect('/new');
  }
});


// This endpoint creates a new character
app.get('/new', (req, res) => {
  characterList.push(new Character('Jeff', 'StickMan', 'Prisoner'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
})



// Start an HTTP listen server
app.listen(3000);
