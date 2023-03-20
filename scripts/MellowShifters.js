import { Locations } from "./locations.js"
import { Drinks } from "./drinks.js"
import { Orders } from "./orders.js"
import { completeOrder } from "./database.js"
import { Desserts } from "./Desserts.js"
import { getDrinks } from "./database.js"

document.addEventListener(
    "click", (event) => {
    const itemClicked =event.target
    if (itemClicked.id.startsWith("button")){

        completeOrder()
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
        ${Orders()}
        <div class="ordertotal">
        
        </div>
    </section>
        <section class="button_container">
        <button id="button"></button>
    </section>
</article>
`
}
