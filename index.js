// Code your solution here
const drivers = ['Ali', 'Sammy', 'Suzy', 'Ani', 'Smith', 'bobby']

function findMatching(drivers, name){
let filteredDrivers = drivers.filter(driver => {
    if (driver.toLowerCase() === name.toLowerCase() )
    return true
    else return false
}) 
return filteredDrivers
}

function fuzzyMatch(drivers, fuzzyname){
    let filteredDrivers = drivers.filter(driver => {
        if (driver.startsWith(fuzzyname))
        return true
        else return false
    }) 
    return filteredDrivers
}
function matchName(drivers, name){
    let filteredDrivers = drivers.filter(driver => {
        if (driver.name === name )
        return true
        else return false
    }) 
    return filteredDrivers
    }



   