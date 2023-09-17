import Story from '../components/Story.js'
import view from '../utils/view.js'
import baseURL from '../utils/baseURL.js'
import store from '../store.js'
import checkFavorite from '../utils/checkFavorite.js'

export default async function Stories(path) {
    // sF for stories function.. Stories.. V for variable
    // lets us know where this variable comes from
    // having multiple stories variables gets confusing
    //  for function to let us know it's from a function
    const {favorites} = store.getState()
    const sF_V4Stories = await getStories(path)
    const hasStories = sF_V4Stories.length > 0;
   
    view.innerHTML = `<div>${hasStories ? sF_V4Stories.map((story, i) => Story({...story, index: i + 1, isFavorite: checkFavorite(favorites, story) })).join('') : "No Stories"}</div>`

    document.querySelectorAll(".favorite").forEach(favoriteButton => {
        favoriteButton.addEventListener('click', async function() {
                    const story  = JSON.parse(this.dataset.story);
                    const isFavorited = checkFavorite(favorites, story)
    store.dispatch({type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: {favorite: story}})
        await Stories(path);
 });
    } );

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


