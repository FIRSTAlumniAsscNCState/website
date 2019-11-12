// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from "buefy"
import './main.scss'

import HomeLayout from '~/layouts/Home.vue'

export default function(Vue, { router, head, isClient }) {
    // use Buefy
    head.link.push({
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
    })
    Vue.use(Buefy)

    // Set default layout as a global component
    Vue.component('HomeLayout', HomeLayout)
}