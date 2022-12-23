import HomePage from '../components/HomePage.vue'
import TodoApp from '../components/todoApp/TodoApp.vue'
import DropZoneHome from '../components/exam2/DropZoneHome.vue'
import AutoCompleteHome from '../components/exam1/AutoCompleteHome.vue'
import MultiFormHome from '../components/exam3/MultiFormHome.vue'

export const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/todo', name: 'TodoApp', component: TodoApp },
    { path: '/exam1', name: 'AutoComplete', component: AutoCompleteHome },
    { path: '/exam2', name: 'DropZone', component: DropZoneHome },
    { path: '/exam3', name: 'MultiForm', component: MultiFormHome },
]