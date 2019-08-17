const fetch = require('node-fetch')

function getTatooineResidents(){

  const promise = fetch("https://swapi.co/api/planets/1/")
  promise
  .then(response => response.json())
  .then(data => console.log(data.residents))
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