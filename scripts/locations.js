import { getLocations, setLocation } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "locations") {
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
        html += `<option value="${location.id}">${location.name}</option>`
    }

    html += "</select>"
    return html
}
