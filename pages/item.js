import view from '../utils/view.js'


export default function Item() {
    getStory()
    view.innerHTML = `<div>item</div>`
}

function getStory() {
    // window.location.hash.split()
    const storyId = window.location.hash.split('?id=')[1]
    // console.log("location hash", window.location.hash)
    // console.log("the id", storyId)
    // /item/
    fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
}