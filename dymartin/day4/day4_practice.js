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
      weapon: {},
      shield: {}
    }
    this.inventory = []
    this.abilities = []
    this.stats = {
      attack: "3212",
      defense: "2979",
      hp_current: '5403',
      hp_max: '5403'
    }
    //This method searches for an item in the itme list with this name
    //And adds it to this character's inventory
    this.pickupItem = function(searchName) {
        console.log(this);
        for (var item of item_list) {
          console.log(item.name);
          if (item.name == searchName) {
            console.log("Item get! You have found an item.");
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
            console.log("Item unequipped.");
            this.equipment.slotName = {};
            break;
          }
        }
      }
  }
}
var characterList = []
characterList.push(new Character('Aleris Blackreaver VI, Duke of Vakkaerith', 'Draconic', 'Magician'))
// Holds all possible items
var item_list = [{
    name: 'Eternal Tempest Staff',
    slot: 'weapon',
    bonuses: {
      attack: 16
    }
  },
  {
    name: 'Shield of Nephthys',
    slot: 'shield',
    bonuses: {
      defense: 5
    }
  }
];
characterList[0].pickupItem('Eternal Tempest Staff');
characterList[0].unequipItem('weapon');
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
    res.redirect('/new')
  }
});

app.get('/new', (req, res) => {
  characterList.push(new Character('New Test', 'Non-existent', '404: job not found'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
});


//Start an http listen server
app.listen(3000);
