import {getFoods, setFood, getSingleFood, getFoodLocation, getCurrentLocation} from "./database.js"

const foods = getFoods()
const currentLocation = getCurrentLocation()
const currentFood = getFoodLocation()

const printFood = (foodObject) => {
    const foodHTML = `<p> ${foodObject.name}:$${foodObject.price}</p>` 
    document.querySelector("#foodorder").innerHTML = foodHTML
 }
 

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "foods") {
            setFood(parseInt(changeEvent.target.value))
            const singleFood = getSingleFood(parseInt(changeEvent.target.value))
            printFood(singleFood)
        }
    }
)

export const Foods = () => {
    let html = "<h2>Food</h2>"

    html += '<select id="foods">'
    html += '<option value="0">Select food</option>'
    if (currentLocation.locationId === currentFood.locationId) {
      const foodsAviable =[] 
        for (const food of foods) {
        html += `<option value="${food.id}">${food.name}</option>`
    }
}
    html += "</select>"
    return html

}
