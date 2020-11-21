require('./bootstrap');
window.Vue = require('vue')
import common from './common'
Vue.mixin(common)
import moment from 'moment';

Vue.component('search', require('./components/search.vue').default)
Vue.component('comment', require('./components/comment.vue').default)
Vue.component('writecomment', require('./components/writecomment.vue').default)

Vue.filter('timeformat', (arg) => {
    return moment(arg).format('MMM Do YY')
})

const app = new Vue({
    el: '#app',
})