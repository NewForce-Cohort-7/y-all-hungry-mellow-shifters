import { getLocations, setLocation, getCurrentLocation } from "./database.js"
const locations = getLocations()
const currentLocation = getCurrentLocation()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "location") {
            const chosenOption = changeEvent.target.value
            setLocation(parseInt(changeEvent.target.value))
        }
    }
)

export const Locations = () => {
    let html = "<h2>Locations</h2>"

    html += '<select id="location">'
    html += '<option value="0">Select a Location</option>'
  
    for (const location of locations) {
       if (currentLocation.selectedLocation === location.id) {
        html += `<option value="${location.id}" selected>${location.name}</option>`

       }
       else {
        html += `<option value="${location.id}">${location.name}</option>`

       }
    }

    html += "</select>"
    return html
}
