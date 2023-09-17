import Story from '../components/Story.js'
import view from '../utils/view.js'
import baseURL from '../utils/baseURL.js'

export default async function Stories(path) {
    // sF for stories function.. Stories.. V for variable
    // lets us know where this variable comes from
    // having multiple stories variables gets confusing
    //  for function to let us know it's from a function
    const sF_V4Stories = await getStories(path)
    const hasStories = sF_V4Stories.length > 0;
   
    view.innerHTML = `<div>${hasStories ? sF_V4Stories.map((story, i) => Story({...story, index: i + 1})).join('') : "No Stories"}</div>`

}

async function getStories(path) {
const isHomeRoute = path === '/'
const isNewRoute = path === '/new'
if (isHomeRoute) {
    path = '/news'
} else if (isNewRoute) {
    path = '/newest'
}

const response = await fetch(`${baseURL}${path}`)
// gS for get stories F for function V for variable gSFV_stories
const gSFV_stories = await response.json()

return gSFV_stories;

}



// api endpoing = https://node-hnapi.herokuapp.com

//  (Top) -> /new
//  /new (new) -> newest


