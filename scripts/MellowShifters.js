import { Locations } from "./locations.js"
import { drinkOrder } from "./drinks.js"
import { Orders } from "./orders.js"
import { completeOrder } from "./database.js"
import { Desserts } from "./Desserts.js"
import { foodOrder } from "./Foods.js"

document.addEventListener(
    "click", (event) => {
    const itemClicked =event.target
    if (itemClicked.id.startsWith("button")){

        completeOrder()}
    }
)


export const yallHungry = () => {
    return `

<h1>Y'ALL HUNGRY?</h1>

    <article class="container"

    <section class="location">
        ${Locations()}
    </section>

    </section>
    <section class="food">
        ${foodOrder()}
      
    </section>
    <section class="drink">
        ${drinkOrder()}
    </section>
    <section class="dessert">
        ${Desserts()}

    </section>
    <section class="yourorder">YOUR ORDER</section>
        <div id="foodorder"></div>
        <div id="drinkorder"></div>
        <div id="dessertorder"></div>
    </section>
    <section class="ordertotal">
        ${Orders()}
    <button id="button">Place Your Order</button>

</article>
`
}
