const fetch = require('node-fetch')

function getTatooineResidents(){
    
    fetch("https://swapi.co/api/planets/1/")
      .then(response => response.json()) // parameter geeft volgende regel door (json)
      .then(data => fetch(data.residents))
      .then(res => console.log(res)) //aanpassen
      //.then(homeworld => homeworld.json())//aanpassen
      //.then(item => console.log(item.name))
      .catch(err => console.log(err))
}    


function promiseMeAString(input) {
    return new Promise((resolve, reject) => {
      if (!input) {
        reject('You have failed me!')
      }
        resolve('You kept the Promise!')
    })
  }











module.exports = {
    getTatooineResidents,
    promiseMeAString
  }