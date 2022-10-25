import {createRouter, createWebHashHistory} from 'vue-router'
import skill from '../components/skills.vue'
import work from '../components/work.vue'
import ed from '../components/school.vue'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/exp',
            name:'exp',
            component:work

        },
        {
            path:'/school',
            name:'school',
            component:ed

        },
        {
            path:'/skills',
            name:'skills',
            component:skill

        }
    ]
})

export default router