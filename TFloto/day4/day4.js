//import expressjs module
const express = require('express');

//create an express application object
const app = express();

app.set("view engine", "ejs");

class Character {
  constructor(name, race, profession) {
    this.id = characterList.length+1000
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
    //this method searches for items in the itemlist with this name
    //and adds it to this characters inventory
    this.pickupItem = function(searchName) {
      for (var item of item_list) {
        console.log(item.name);
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item);
          break;
        }
      }
    }
    //this method searches for a given slot and overwrites it with an empty objects
    this.unequipItem = function(slot) {
      for (var slotName in this.equipment) {
        console.log(slotName);
        if (slotName == slot) {
          console.log("found item slot. removing.")
          this.equipment.slotName = {};
          break;
        }
      }
    }
  }
}

var characterList=[]

characterList.push(new Character('Tiberius Ceasar Aguwustus', 'furry', "Furries don't get to work"))

//this holds all possible items
var item_list = [{
    name: 'Half-life Crossbow',
    slot: 'arm_p',
    bonuses: {
      attack: 95
    }
  },
  {
    name: 'Power armor is for pussies',
    slot: 'chest',
    bonuses: {
      defense: 601
    }
  },
  {
    name: 'Power armor',
    slot: 'chest',
    bonuses: {
      defense: 600
    }
  },
  {
    name: 'Furries cant use human chestgear.',
    slot: 'chest',
    bonuses: {
      defense: 10,
      attack: 10
    }
  },
  {
    name: 'Furries cant use human headgear.',
    slot: 'head',
    bonuses: {
      defense: 10,
      attack: 10
    }
  },
];


characterList[0].pickupItem('Furries cant use human headgear.');
characterList[0].unequipItem('arm_p');

//create a get endpoint
app.get('/profile/:characterid', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.params.characterid)

  if (foundProfile) {

  //render a template called 'profile' from the views folder
  //and send it a variable called "sendData"
  res.render('profile', {
    sendData: characterList[0]
  })
} else {
  res.redirect('/new')
}
});

//this endpoint creates a new character
app.get('/new', (req, res) => {
  characterList.push(new Character('Duke Nukem', 'Duke Nuken', "Duke Nukem"))
  res.redirect('/profile/' + characterList[characterList.lengh -1].id)
})


//start an http listen server
app.listen(3000)
