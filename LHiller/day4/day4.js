//Import expressJS module
const express = require('express');

//Create an express application object
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
      defense: 5,
      hp_current: 20,
      hp_max: 20
    }

    //This method searches for an item in the item in the last list with this name and adds it to this character's inventory
    this.pickupItem = function(searchName) {
      console.log(this);
      for (var item of item_list) {
        console.log(item.name);
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item);
          break;
        }
      }
    }
    //This method searches for a given slot and overwrites it with an empty object
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
characterList.push(new Character('Yer Boi', 'Heretic Astartes', 'Noise Marine'))

//This holds all possible items
var item_list = [{
    name: 'Sword',
    slot: 'arm_p',
    bonuses: {
      attack: 5
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

characterList[0].pickupItem('Sword');
characterList[0].unequipItem('arm_p');

//Create a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  console.log(req.params.characterid);
  var foundProfile = characterList.find(character => character.id == req.params.characterid)

  if (foundProfile) {


    //Render a template called 'profile' from the views folder and send it a variable called "sendData"
    res.render('profile', {
      sendData: foundProfile
    })
  } else {
    res.redirect('/new');
  }

});

//This endpoint creates a new character
app.get('/new', (req, res) => {
  characterList.push(new Character('Yer Boi 2', 'Heretic Astartes', 'Noise Marine'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
});

//Start an http listen server
app.listen(3000)
