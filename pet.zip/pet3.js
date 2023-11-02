let pet3 = [
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
  
  info2.push(petA)
  info2.push(petB)
  info2.push(petC)
  
  // delete info2.splice(3,1)
  let infoSelect = pet3.splice(3,3)
  
  for(let i = 0; i < pet3.length; i++) {
  console.log('Name: ' + pet3[i].name)
  }
  
  console.log('--------------------')
  for(let i = 0; i < infoSelect.length; i++) {
    console.log('Name: ' + infoSelect[i].name)
  }