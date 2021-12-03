//import express js module
const express = require('express');
//Create and express application
const app = express()

app.set("view engine", "ejs")

class Character {
  constructor(name, race, profession){
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
    this.pickupItem = function (searchName) {
      for (var item of itemList) {
        console.log(item.name)
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item)
          break;
        }
      }
    }
    this.unequipItem = function (slot) {
      for (var slotName in this.equipment) {
        if (slotName == slot) {
          console.log("Found Slot. Removing Item...");
          this.equipment.slotName = {}
          break;
        }
      }
    }
  }
}

var characterList = []
characterList.push(new Character('Kazuha', 'Human', 'Wandering Samurai'))

var itemList = [
  {
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
]
characterList[0].pickupItem('Sword')
characterList[0].unequipItem('arm_p')
//Create a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.params.characterid)
  if(foundProfile) {
    res.render('profile', {sendData: foundProfile})
  }else {
    res.redirect('/new')
  }
})

app.get('/new', (req, res) => {
  characterList.push(new Character('Kaeya', 'Human', 'Calvary Captain'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
})




app.listen(3000)
