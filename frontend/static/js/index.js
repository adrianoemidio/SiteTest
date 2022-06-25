import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostsView from "./views/PostsView.js";
import Settings from "./views/Settings.js";

//Regex to separate path from id
const pathToRegex = path => new RegExp("^" + path.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)") + "$");

const getParams = match =>{
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(r => r[1]);

    return Object.fromEntries( keys.map((key,i) => {
        return [key,values[i]];
    }));
}

const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}

const router = async () => {

    const routes = [
        {path:"/", view: Dashboard},
        {path:"/posts", view: Posts},
        {path: "/posts/:id", view: PostsView},
        {path:"/settings", view: Settings}
    ];

    //Test earch route for potential match
    const potentialMatch = routes.map(route =>{
        return {
            route : route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatch.find(p => p.result !== null);

    if(!match){
        match = {
            route: routes[0],
            result : [location.pathname]
        }
    }
    
    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    //console.log(match.route.view());
}; 

//Listen to back and foward events on browser
window.addEventListener("popstate",router);

//Listen  to document loaded event
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});