import {getFoods, setFood, getSingleFood, getFoodLocation, getCurrentLocation} from "./database.js"

const foods = getFoods()
const currentLocation = getCurrentLocation()
const foodLocations = getFoodLocation()

const printFood = (foodObject) => {
    const foodHTML = `<p> ${foodObject.name}:$${foodObject.price}</p>` 
    document.querySelector("#foodorder").innerHTML = foodHTML
 }
 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "foods") {
            setFood(parseInt(event.target.value))
            const singleFood = getSingleFood(parseInt(event.target.value))
            printFood(singleFood) 
        }
    }
)

// export const foodOrder = () => {
//     let html = "<h2>Food</h2>"

//     html += '<select id="foods">'
//     html += '<option value="0">Select food</option>'
//     const foodAviable = foods.map (currentFood => {
//         for (let foodLocation of foodLocations){
//             if (currentFood.id === foodLocation.foodId){
//                 return `<option value="${currentFood.id}">${currentFood.name}</option>`
//             }
//         }
//     })
//     html += foodAviable.join("")
//     html += "</select>"
//     return html

// }


export const foodOrder = () => {
    let html = "<h2>Food</h2>"

    html += '<select id="foods">'
    html += '<option value="0">Select Food</option>'

    const foodsAvailable = foods.map ( currentFood => {
                for(let foodLocation of foodLocations){
                    if(currentFood.id === foodLocation.foodId){
                        return `<option value="${currentFood.id}">${currentFood.name} ${foodLocation.quanity}</option>`
                    }
                }
    }   )

html += foodsAvailable.join("")
html += '</select>'
return html
}