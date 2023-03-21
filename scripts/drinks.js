import { getDrinks, setDrink, getSingleDrink } from "./database.js"

const drinks = getDrinks()

const printDrink = (drinkObject) => {
   const drinkHTML = `<p> ${drinkObject.name}: $${drinkObject.price}</p>` 
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

export const Drinks = () => {
let html = "<h2>Select Your Drink</h2>"

html += '<select id="drink">'
html += '<option value="0">Select Drink</option>'

for (const drink of drinks) {
    html += `<option value="${drink.id}">${drink.name}</option>`
}

html += "</select>"
return html
}
