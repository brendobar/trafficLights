import VueRouter from 'vue-router'
import foundatoin from "./components/foundation"

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: foundatoin
        },
        {
            path: "/red",
            component: foundatoin,
        },
        {
            path: "/yellow",
            component: foundatoin,
        },
        {
            path: "/green",
            component: foundatoin,
        }
        
    ]
})