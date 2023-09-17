import view from '../utils/view.js'


export default function Item() {
    getStory()
    view.innerHTML = `<div>item</div>`
}

function getStory() {
    console.log(window.location)
}