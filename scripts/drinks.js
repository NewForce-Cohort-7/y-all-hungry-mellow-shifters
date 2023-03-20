import { getDrinks, setDrinks } from "./database.js"

const drinks = getDrinks()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "drinks") {
            setDrinks(parseInt(event.target.value))
        
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