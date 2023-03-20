import { getDrinks, setDrink, getOrders } from "./database.js";

const buildOrderListItem = (order) => {

    const drinks = getDrinks()

const foundDrinks = drinks.find(
    (drink) => {
        return drink.id === order.drinkId
    }
)

// Running Subtotal

const totalCost = foundDrinks.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
    Order #${order.id} cost ${costString}
</li>`
}
export const Orders = () => {

const orders = getOrders()

let html = "<ul>"

const listItems = orders.map(buildOrderListItem)

html += listItems.join("")
html += "</ul>"

return html
}

