//Import expressJS module
const express = require('express');

// Create an express application object
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
      attack: 39,
      defense: 39,
      hp_current: '∞',
      hp_max: '∞'
    }
    //This method searches for an item in the itme list with this name
    //And adds it to this character's inventory
    this.pickupItem = function(searchName) {
        console.log(this);
        for (var item of item_list) {
          console.log(item.name);
          if (item.name == searchName) {
            console.log("poggie woggies");
            this.inventory.push(item);
            break;
          }
        }
      },
      //This method searches for a given slot and overwrites
      //it with an empty object
      this.unequipItem = function(slot) {
        for (var slotName in this.equipment) {
          console.log(slotName);
          if (slotName == slot) {
            console.log("Removing - not so poggie woggies");
            this.equipment.slotName = {};
            break;
          }
        }
      }
  }
}

var characterList = []

// Holds all possible items
var item_list = [{
    name: 'Diamond Pickaxe',
    slot: 'arm_p',
    bonuses: {
      attack: 16
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

// characterList[0].pickupItem('Diamond Pickaxe');
// characterList[0].unequipItem('arm_p');

// Create a GET endpoint
// Change endpoint to include user's characterid
app.get('/profile/:characterid', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.params.characterid)

  if (foundProfile) {
    // Render a template called 'profile' from the /views folder - send a variable called "sendData"
    res.render('profile', {
      sendData: foundProfile
  })
} else {
  res.redirect('/new');
}
});

// This endpoint creates a new character
app.get('/new', (req, res) => {
  characterList.push(new Character('Hatsune Miku', 'Human', 'Virtual Idol'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
})


//Start an http listen server
app.listen(3000);
