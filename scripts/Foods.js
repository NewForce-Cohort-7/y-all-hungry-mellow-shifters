import {getFoods, setFood} from "./database.js"

const foods = getFoods()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "food") {
            setFood(parseInt(changeEvent.target.value))
        }
    }
)

export const Foods = () => {
    let html = "<h2>Food</h2>"

    html += '<select id="foods">'
    html += '<option value="0">Select food</option>'

    for (const food of foods) {
        html += `<option value="${food.id}">${food.name}</option>`
    }

    html += "</select>"
    return html


    // const arrayOfOptions = foods.map( (food) => {
    //         return `<option value="${food.id}">${food.name}</option>`
    //     }
    // )

    // html += arrayOfOptions.join("")
    // html += "</select>"
    // return html
}
