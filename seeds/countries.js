const nobelPrize = require('../data/countries.json')
const nobelPrizeArray = nobelPrize.prizes
const nobelPrizeArrayData = []
const data = nobelPrizeArray.map(nobelprize => {
  let dataIWant = nobelprize.laureates
  dataIWant.map(prize =>(
    nobelPrizeArrayData.push({
    firstname: prize.firstname,
    surname: prize.surname,
    category: nobelprize.category,
    year: nobelprize.year,
    motivation: prize.motivation

  })))
})
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nobelprize').del()
    .then(function () {
      // Inserts seed entries
      return knex('nobelprize').insert(nobelPrizeArrayData.slice(0, 20))
            
    });
};
