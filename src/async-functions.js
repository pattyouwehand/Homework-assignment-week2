const fetch = require('node-fetch')

function getTatooineResidents(){

  const promise = fetch("https://swapi.co/api/planets/1/")
  promise
  .then(response => response.json()) // parameter geeft volgende regel door (json)
  .then(data => fetch(data.residents))
  .then(res => console.log(res.url))
  .catch(err => console.log(err))
  //var array = string.split(",").map(Number);
}
  /*The function should a return promise which resolves with an array of urls for the residents of Tatooine like : 
  [
    ${planets1.residents.map(url => `\n              "${url}"`)} \n
  ] 
the promise that was returned from you function resolved with: ${residents}`
}

const promise = fetch("https://swapi.co/api/planets/1/")
  promise
  .then(response => response.json()) // parameter geeft volgende regel door (json)
  .then(data => fetch(data.residents))
  .then(res => console.log(res.url))
  .catch(err => console.log(err))

*/
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