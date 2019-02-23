function groupAdultsByAgeRange(persons){
    const ageFilter = persons.filter((person) => person.age >= 18)
    
    const grouping = ageFilter.reduce((accumulator, currentPerson) => {
        if(currentPerson.age < 21) {
            if(!accumulator['20 and younger']) {
                accumulator['20 and younger'] = []
            }
            accumulator['20 and younger'].push(currentPerson)    

        } else if (currentPerson.age > 20 && currentPerson.age < 31) {
            if(!accumulator['21-30']) {
                accumulator['21-30'] = []
            }
            accumulator['21-30'].push(currentPerson)

        } else if (currentPerson.age > 30 && currentPerson.age < 41) {
            if(!accumulator['31-40']) {
                accumulator['31-40'] = []
            }
            accumulator['31-40'].push(currentPerson)

        } else if (currentPerson.age > 40 && currentPerson.age < 51) {
            if(!accumulator['41-50']) {
                accumulator['41-50'] = []
            }
            accumulator['41-50'].push(currentPerson)
        } else {
            if(!accumulator['51 and older']){
                accumulator['51 and older'] = []
            } 
            accumulator['51 and older'].push(currentPerson)
        }
        return accumulator

    }, {})

    return grouping

}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange



 