import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/game",
    name: "game",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Game.vue")
  },
  {
    path: "/howtoplay",
    name: "howtoplay",
    component: () => import(/* webpackChunkName: "about" */ "../views/HowToPlay.vue")
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import(/* webpackChunkName: "about" */ "../views/Stats.vue")
  },
  {
    path: "/cheats",
    name: "cheats",
    component: () => import(/* webpackChunkName: "about" */ "../views/Cheats.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
