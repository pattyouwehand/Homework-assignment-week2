const grouping = [
    [20, "20 and younger"],
    [30, "21-30"],
    [40, "31-40"],
    [50, "41-50"],
    [null, "51 and older"]
]

function groupAdultsByAgeRange(people) {
    return people
    .filter(person => person.age >= 18)
    .reduce((categorise, currentPerson) => {
        const [ , label] = grouping.find(([maxAge]) => maxAge === null || currentPerson.age <= maxAge)
        categorise[label] = categorise[label] || []
        categorise[label].push(currentPerson)
        return categorise
    },{})
}

module.exports = { groupAdultsByAgeRange }