const express = require('express');
//create an express a[pplication object]
const app = express()

app.set("view engine" , "ejs")






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
    //this method searches for a given slot and overwrites it with an empty object
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

// this holds all possible items
var characterList = []
 characterList.push(new Character('Nasircrazy', 'Black','Gta star'))
var item_list = [
  {
    name: 'Sword',
    slot: 'arm_p',
    bonuses:{
      attack: 5
    }
  },
    {
      name: 'Shield',
      slot: 'arm_s',
      bonuses:{
        attack: 5
    }
  }
];

characterList[0].pickupItem('Sword');
characterList[0].unequipItem('arm_p');

//create a get endpoint
app.get('/profile/:characterid', (req, res) => {
  console.log(req.params.characterid);

  var foundProfile = characterList.find(character => character.id == req.params.characterid)
  console.log(foundProfile);

if (foundProfile){

  //render a template called 'profile' from the 'views' folder
  //
   res.render('profile' , {
      sendData: foundProfile
    })
  } else {
    res.redirect('/new', (req, res) =>{
      characterList.push(new Character('Nasircrazy', 'Black','Gta star'))
        res.redirect('/profile/' + characterList[characterList.length -1 ].id)
    });
  }
});
//STart an http listen server
app.listen(3000)
