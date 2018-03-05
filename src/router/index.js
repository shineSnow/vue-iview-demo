import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import About from '../views/about'
import News from '../views/news'

Vue.use(Router)
const Foo = { template: '<div>foo</div>' }

export default new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
            path:'/news',
            name:'news',
            component:News
        },
        {
            path:'/about',
            name:'about',
            component:About
        }
    ]
})