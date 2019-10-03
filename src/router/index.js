import Friends from "../view/friends"
import Profile from "../view/profile"
import Home from "../view/home"
import Country from "../view/country"

const routes = [
    { path: "/country", component: Country},
    { path: "/friends", component: Friends},
    { path: "/profile", component: Profile},
    { path: "/", component: Home}
]

export default routes
