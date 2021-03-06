import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: "",
                name: "shouye",
                component: () => import("../views/home/HomeIndex.vue")
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/login',
        name: "login",
        component: () => import("../views/MyLogin")
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach(function (to, from, next) {
    console.log(to, from)
    if (to.path === "/login") {
        next()
    } else {
        let token = localStorage.getItem("token")
        if (token) {
            next()
        } else {
            return next({ path: "/login" })
        }
    }
})
export default router
