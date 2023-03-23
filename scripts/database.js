const database = {
    transientState: {},

    foods: [ 
        {id: 1, name: "Hot Dog", image: "images/Foods/HotDog.jpg", price: 1.00},
        {id: 2, name: "Pepperoni Roll", image: "images/Foods/PepperoniRoll.jpeg", price: 1.00},
        {id: 3, name: "Fried chicken", image: "images/Foods/FriedChicken.jpg", price: 3.50}, 
        {id: 4, name: "Opossum Pie", image: "images/Foods/OpossumPotPie.jpg", price: 5.00},
        {id: 5, name: "Fried Raccoon", image: "images/Foods/FriedRaccoon.jpg", price: 5.00}
        ],
    drinks: [
        { id: 1, name: "Dr. Pepper", image: "images/drinks/Drpepper.png", price: 0.99 },
        { id: 2, name: "Mt. Dew", image: "images/drinks/mtdew.png", price: 0.99}, 
        { id: 3, name: "Coke", image: "images/drinks/coke.png", price: 0.99}, 
        { id: 4, name: "Coffee", image: "images/drinks/coffee.jpg", price: 1.99}, 
        { id: 5, name: "Tea", image: "images/drinks/tea.jpg", price: 0.99}
        ],
    desserts: [
        { id: 1, name: "Ice Cream", image: "images/Desserts/Ice_cream_with_whipped_cream,_chocolate_syrup,_and_a_wafer_(cropped).jpg", price: 2.99},
        { id: 2, name: "Apple Pie", image: "images/Desserts/pie.jpeg", price: 6.99},
        { id: 3, name: "Toe Nails", image: "images/Desserts/Toenail_clippings.JPG", price: 15.99},
        { id: 4, name: "Hot Fudge Sundae", image:"images/Desserts/hotfudgesundae.jpg", price: 3.99},
        { id: 5, name: "Triple Decker Ice Cream Root Beer Float Explosion", image: "images/Desserts/rootbeerfloat.jpg", price: 78.99}
        ],
    locations: [
        {id:1, name: "Dogs-R-Us", address: "26 Main St." }, 
        {id:2, name: "Fred's", address: "99 Central Ave." }, 
        {id:3, name: "Food Factory", address: "129 Parkside Dr." }, 
        {id:4, name: "Riverside Grille", address:"89 Riverside Way"}
    ],
    customOrder: [
        {id:1,locationId:3,drinkId:2,dessertId:3,foodId:2,timestamp:1614659931693}
    ],

    foodLocation: [
        { id: 1, foodId: 2, locationId: 1, quanity: 15 },
        { id: 2, foodId: 2, locationId: 2, quanity: 10},
        { id: 3, foodId: 3, locationId: 3, quanity: 20},
        { id: 4, foodId: 4, locationId: 4, quanity: 10 },
        { id: 5, foodId: 5, locationId: 1, quanity: 15 },
        { id: 6, foodId: 1, locationId: 1, quanity: 20 },
        { id: 7, foodId: 2, locationId: 3, quanity: 10},
        { id: 8, foodId: 3, locationId: 4, quanity: 15 },
        { id: 9, foodId: 4, locationId: 1, quanity: 20},
        { id: 10, foodId: 5, locationId: 2, quanity: 10 },
        { id: 11, foodId: 3, locationId: 3, quanity: 15 },
        { id: 12, foodId: 4, locationId: 4, quanity: 10 },
    ],
    drinkLocation: [
        { id: 1, drinkId: 2, locationId: 2, quanity: 20 },
        { id: 2, drinkId: 1, locationId: 1, quanity: 10},
        { id: 3, drinkId: 2, locationId: 3, quanity: 20},
        { id: 4, drinkId: 1, locationId: 4, quanity: 10 },
        { id: 5, drinkId: 2, locationId: 4, quanity: 20 },
        { id: 6, drinkId: 1, locationId: 3, quanity: 20 },
        { id: 7, drinkId: 3, locationId: 4, quanity: 10},
        { id: 8, drinkId: 4, locationId: 3, quanity: 20 },
        { id: 9, drinkId: 3, locationId: 4, quanity: 20},
        { id: 10, drinkId: 4, locationId: 3, quanity: 10 },
        { id: 11, drinkId: 3, locationId: 4, quanity: 20},
        { id: 12, drinkId: 4, locationId: 3, quanity: 10 },   
        
    ],
    dessertLocation: [
        { id: 1, dessertId: 3, locationId: 3, quanity: 20 },
        { id: 2, dessertId: 1, locationId: 4, quanity: 10},
        { id: 3, dessertId: 2, locationId: 2, quanity: 20},
        { id: 4, dessertId: 4, locationId: 1, quanity: 10 },
        { id: 5, dessertId: 3, locationId: 3, quanity: 20 },
        { id: 6, dessertId: 2, locationId: 4, quanity: 20 },
        { id: 7, dessertId: 1, locationId: 1, quanity: 10},
        { id: 8, dessertId: 3, locationId: 2, quanity: 20 },
        { id: 9, dessertId: 4, locationId: 4, quanity: 20},
        { id: 10, dessertId: 1, locationId: 3, quanity: 10 },
        { id: 11, dessertId: 3, locationId: 2, quanity: 20},
        { id: 12, dessertId: 2, locationId: 1, quanity: 10 },   
    ]

}

export const getOrders = () => {
    return database.customOrder.map(customOrder =>({...customOrder}))
}
//locations
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getCurrentLocation = () => {
    return database.transientState
}


export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
//drinks
export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const setDrink = (drinkId) => {
    database.transientState.selectedLocation = drinkId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getSingleDrink = (id) => {
    return database.drinks.find(currentDrink => currentDrink.id === id)
}

//Desserts
export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}

export const setDesserts = (dessertId) => {
    database.transientState.selectedDessert = dessertId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getSingleDessert = (id) => {
    return database.desserts.find(currentDessert => currentDessert.id === id)
}

//foods
export const getFoods = () => {
    return database.foods.map(food => ({...food}))
}

export const setFood = (foodId) => {
    database.transientState.selectedLocation = foodId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getSingleFood = (id) => {
    return database.foods.find(currentFood => currentFood.id === id)
}

export const getFoodLocation = () => {
    return database.foodLocation.map(foodLocation => ({...foodLocation}))
}

export const getDrinkLocation = () => {
    return database.drinkLocation.map(drinkLocation => ({...drinkLocation}))
}


export const completeOrder = () => {

    const newOrder = {...database.transientState}
    const lastIndex = database.customOrder.length - 1
    newOrder.id = database.customOrder[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrder.push(newOrder)
    database.transientState = {}
        document.dispatchEvent(new CustomEvent("stateChanged"))
}


