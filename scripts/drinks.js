import { getDrinks, setDrink, getSingleDrink, getCurrentLocation, getOrders, getDrinkLocation } from "./database.js"

const drinks = getDrinks()
const currentLocation = getCurrentLocation()
const drinkLocations = getDrinkLocation()
const orders = getOrders()

const printDrink = (drinkObject) => {
   const drinkHTML = `<img src=${drinkObject.image}/> <p> ${drinkObject.name}: $${drinkObject.price}</p>` 
   document.querySelector("#drinkorder").innerHTML = drinkHTML
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "drink") {
            setDrink(parseInt(event.target.value)) 
        const singleDrink = getSingleDrink(parseInt(event.target.value))
        printDrink(singleDrink)
        }
    }
)

/*export const drinkOrder = () => {
   
    //Looooooooop of bridge table
    //Then does that stored variable match my bridge table? (storedVariable === currentItem.itemId)
   // If it does all of this we want it to print the drop downs

let html = "<h2>Select Your Drink</h2>"

html += '<select id="drink">'
html += '<option value="0">Select Drink</option>'

if (currentLocation.locationId === drinkLocations.locationId) { 
    
    // if the transient state ID matches the the location ID
    let drinksAvailable = []
    for (const drink of drinks) { //If it does match, we need to match the item to what is also in that bridge table (a stored variable) 
       for (const drinkLocation of drinkLocations) {
        if (currentLocation.id === drinkLocation.id)
        drinksAvailable.push(drink.name)
    }
    return drinksAvailable

}
drinksAvailable = 

}


html += drinksAvailable
    
html += "</select>"
return html

}*/

// export const drinkOrder = () => {
//     let html = "<h2>Select Your Drink</h2>"

//     html += '<select id="drink">'
//     html += '<option value="0">Select Drink</option>'
        
//     const drinksAvailable = drinks.map ( drinks => { 
//         for ( const drinkobj of drinkLocations) { 
//             if (orders.locationId === drinkobj.locationId) {
             
//                 return `<option value="${drinks.id}">${drinks.name}</option>`
//             }
//         } 
//     }   )   

// html += drinksAvailable.join("")
// html += '</select>'
// return html     
// }


export const drinkOrder = () => {
    let html = "<h2>Select Your Drink</h2>"

    html += '<select id="drink">'
    html += '<option value="0">Select Drink</option>'
        
    const drinksAvailable = drinks.map ( currentDrink => { 
                for(let drinkLocation of drinkLocations){
                    if(currentDrink.id === drinkLocation.drinkId){
                        return `<option value="${currentDrink.id}">${currentDrink.name}</option>`
                    }
                }
    }   )   

html += drinksAvailable.join("")
html += '</select>'
return html     
}
