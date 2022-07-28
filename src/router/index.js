import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import Docs from '../views/Docs.vue'
import Contacts from '../views/Contacts.vue'
import Prod from '../views/prods/Prod.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/Product',
        name: 'Product',
        component: Product,
        // redirect: {  name: 'Prod', params:{id:'0'} },
        redirect: '/Product/Prod/0' ,

        children: [
        {
            path: 'Prod/:id',
            component: Prod,
            name: 'Prod',
            props: true
        },
        ]


},
    {path: '/Docs', name: 'Docs', component: Docs},
    {path: '/Contacts', name: 'Contacts', component: Contacts}
]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router