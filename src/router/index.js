import { createRouter, createWebHashHistory } from 'vue-router'
import Product_Design_Hackathon from '../components/project/project_pages/Product_Design_Hackathon.vue'
import Alice_in_Wonderland from '../components/project/project_pages/Alice_in_Wonderland.vue'
import Hack_And_Juice from '../components/project/project_pages/Hack_And_Juice.vue'
import NextBuy from '../components/project/project_pages/NextBuy.vue'
import E_Todo from '../components/project/project_pages/E_Todo.vue'
import Tardis from '../components/project/project_pages/Tardis.vue'
import Eliza from '../components/project/project_pages/Eliza.vue'
import Yowl from '../components/project/project_pages/Yowl.vue'
import Projects from '../components/pages/Projects.vue'
import Contact from '../components/pages/Contact.vue'
import Home from '../components/pages/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/projects/eliza',
      component: Eliza
    },
    {
      path: '/projects/alice_in_wonderland',
      component: Alice_in_Wonderland
    },
    {
      path: '/projects/nextbuy',
      component: NextBuy
    },
    {
      path: '/projects/tardis',
      component: Tardis
    },
    {
      path: '/projects/yowl',
      component: Yowl
    },
    {
      path: '/projects/product_design_hackathon',
      component: Product_Design_Hackathon
    },
    {
      path: '/projects/hack_and_juice',
      component: Hack_And_Juice
    },
    {
      path: '/projects/e_todo',
      component: E_Todo
    },
  ],
})

export default router