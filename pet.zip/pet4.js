let pet4 = [
    {
        "name" : "Josh",
        "type" : "Dog",
        "color" : "Black",
        "owner" : "Kaew"
    },
    {
       "name" : "Maew",
       "type" : "Cat",
       "color" : "White",
       "owner" : "phoo"
    }
    ]
    let petA = {
  
        "name" : "Kai",
        "type" : "Chicken",
        "color" : "Brown",
        "owner" : "Jane"
    }
    let petB = {
  
      "name" : "Susy",
      "type" : "fish",
      "color" : "Orange",
      "owner" : "Nun"
    }
    let petC = {
  
     "name" : "Mah",
     "type" : "Cat",
     "color" : "Black",
     "owner" : "Bown"
  }
  
  pet4.push(petA)
  pet4.push(petB)
  pet4.push(petC)
  
  delete pet4.splice(3,1)
  
  for(let i = 0; i < info3.length; i++) {
    console.log('Name: ' + pet4[i].name)
  }
  