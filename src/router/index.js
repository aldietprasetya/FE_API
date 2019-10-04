import Friends from "../view/friends"
import Profile from "../view/profile"
import Home from "../view/home"
import Country from "../view/country"
import Login from "../view/login"

const routes = [
    { path: "/country", component: Country},
    { path: "/friends", component: Friends},
    { path: "/profile", component: Profile},
    { path: "/home", component: Home},
    { path: "/", component: Login}
]

export default routes
