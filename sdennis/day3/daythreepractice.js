const express = require('express');
//create an express a[pplication object]
const app = express()

app.set("view engine" , "ejs")
// create a get endpoint
var character = {
  name: 'Nasircrazy',
  race: 'black',
  profression: 'gta star',
  equipment: {
    head : {},
    chest: {},
    legs : {},
    arm_p: {},
    arm_s: {}
  },
  inventory: [],
  abililities: [],
  stats: {
    attack: 5,
    defense: 5,
    hp_current:100,
    hp_max:200

  },
  //this method searches for an item in the time list
  // and adds it to this chracter's iventory
  pickupItem: function(searchName)  {
    console.log(this);
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log("Found a match!!");
        this.inventory.push(item);
        break;
      }
    }
  },
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot ) {
        console.log(" Found item slot. Removing.");
        this.equipment.slotName = {};
        break;
      }
    }

  }
  }
// this holds all possible items
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


//create a get endpoint
app.get('/', (req, res) => {
  character.pickupItem('Sword');
  character.unequipItem('arm_p');
 res.render('profile' , { sendData: character})
});
//STart an http listen server
app.listen(3000)
