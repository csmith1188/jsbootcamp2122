// IMport expressJs module
const express = require('express');
// create a express application obkect
const app = express()
app.set("view engine", "ejs")









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
      defense: 100,
      hp_current: 1,
      hp_max: 1
    }
    // this method searches for an itme in time list with this name
    //and adds it to tgis character's inventory
    this.pickupItem = function(searchName) {
      for (var item of item_list) {
        console.log(item.name);
        if (searchName = item.name) {
          console.log(" Found a match!");
          this.inventory.push(item)
          break;
        }
      }
    }
    //this method searches for an given slot and replace with empty
    this.unequipItem = function(slot) {
      for (var slotname in this.equipment) {
        console.log(slotname);
        if (slotname == slot) {
          console.log(" remove");
          this.equipment.slotname = {}
          break;
        }
      }

    }
  }
}



var characterList = []






characterList.push(new Character('rocky', 'rock','pet'))
// holds all possible items
var item_list = [{
    name: 'cupcake',
    slot: 'arm_p',
    bonuses: {
      attack: 0
    }
  },
  {
    name: 'sprinkles',
    slot: 'arm_s',
    bonuses: {
      defense: 1
    }
  }
];


characterList[0].pickupItem("cupcake")
characterList[0].unequipItem("arm_p")

// create a Get endpoint
app.get("/profile/:characterid", (req, res) => {
  console.log(req.params.characterid);

  var foundProfile = characterList.find(character => character.id == req.params.characterid)
  if (foundProfile) {
    res.render("profile", {
      sendData: foundProfile
    })

  } else {
    res.redirect('/new')
  }
  //render profile file from views folder
  // send 'sendData' varaible
});

// This endpoint creates a new character

app.get('/new', (req, res) => {
  characterList.push(new Character('angryrocky', 'angryrock','pet'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
});
//start an http listen server
app.listen(3000);
