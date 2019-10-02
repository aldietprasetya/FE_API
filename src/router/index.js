import Friends from "../view/friends"
import Profile from "../view/profile"
import Home from "../view/home"

const routes = [
    { path: "/friends", component: Friends},
    { path: "/profile", component: Profile},
    { path: "/", component: Home}
]

export default routes
