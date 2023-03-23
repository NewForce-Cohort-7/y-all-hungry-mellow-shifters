import { getDrinks, setDrink, getSingleDrink, getCurrentLocation, getOrders, getDrinkLocation} from "./database.js"

const drinks = getDrinks()

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

//track drink stock

export const drinkOrder = () => {
    const currentLocation = getCurrentLocation()
    let html = "<h2>Select Your Drink</h2>"

    html += '<select id="drink">'
    html += '<option value="0">Select Drink</option>'
        
    const drinksAvailable = drinks.map ( currentDrink =>  {
                for(let drinkLocation of drinkLocations){
                    if(currentDrink.id === drinkLocation.drinkId && currentLocation.selectedLocation === drinkLocation.locationId)
           
                        return `<option value="${currentDrink.id}">${currentDrink.name}: ${drinkLocation.quanity}</option>`
                    
                }
    }   )   


html += drinksAvailable.join("")
html += '</select>'
return html     
}
