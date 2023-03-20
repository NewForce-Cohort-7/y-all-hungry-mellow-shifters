import { Locations } from "./locations.js"
import { Drinks } from "./drinks.js"
import { Foods } from "./Foods.js"
import {  Desserts } from "./Desserts.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "button") {
            getDrinks()
            console.log("we clicked it")
        }
        
    }
)

// document.addEventListener(
//     "click", (event) => {
//     const itemClicked =event.target
//     if (itemClicked.class.startsWith("button")){

//         // Call the function responsible for generating order here
//         }
//     }
// )


export const yallHungry = () => {
    return `

<h1>Y'ALL HUNGRY?</h1>

<article class="order_container"

    <section class="location_container">
        <div class="location">
        ${Locations()}
    </section>
    <section class="createorder_container">
        <div class="createorder">

        </div>
    </section>
    <section class="food_container">
        <div class="food">
        ${Foods()}
        </div>
    </section>
    <section class="drink_container">
        <div class="drinks">
        ${Drinks()}
        </div>
    </section>
    <section class="dessert_container">
        <div class="desserts">
        ${Desserts()}

        </div>
    </section>
    <section class="ordertotal_container">
        <div class="ordertotal">

        </div>
    </section>
        <section class="button_container">
        <button class="button"></button>
    </section>
</article>
`
}
