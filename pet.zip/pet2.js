let pet2 = [
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
  
        "name" : "Cloudy",
        "type" : "Dog",
        "color" : "Brown",
        "owner" : "Jane"
    }
    let petB = {
  
      "name" : "Bobby",
      "type" : "Dog",
      "color" : "White",
      "owner" : "Shark"
    }
    let petC = {
  
     "name" : "Sandy",
     "type" : "Cat",
     "color" : "Brown",
     "owner" : "Jay"
  }
  
  info1.push(petA)
  info1.push(petB)
  info1.push(petC)
  
  for(let i = 0; i < info1.length; i++) {
    console.log('Name: ' + pet2[i].name)
  }
