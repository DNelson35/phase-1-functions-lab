// Code your solution in this file!

function distanceFromHqInBlocks(location){
    let blocks = Math.abs(42 - location)
    return blocks
}

function distanceFromHqInFeet(location){
    let feet = 264 * distanceFromHqInBlocks(location)
    return feet
}

function distanceTravelledInFeet(start, end){
    let distance = Math.abs(end - start)
    return distance * 264
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start,destination)
    let price;
    if(feet < 400){
       return price = 0
    } 
    else if(feet > 400 && feet < 2000){
       return price = (feet - 400) * .02
    }
    else if(feet > 2000 && feet < 2500){
        return price = 25
    } else{
        return "cannot travel that far"
    }
}