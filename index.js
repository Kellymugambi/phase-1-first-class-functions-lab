// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers =function(drivers){
return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    return (function(y){
        return y*fare
    }
    )
}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, last){
    return last (arrayOfDrivers)
}