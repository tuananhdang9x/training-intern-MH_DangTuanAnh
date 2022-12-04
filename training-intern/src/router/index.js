import HomePage from '../components/HomePage.vue'
import TodoApp from '../components/todoApp/TodoApp.vue'
import FilterPlace from '../components/exam1/FilterPlace.vue'
import DropZoneHome from '../components/exam2/DropZoneHome.vue'
import MultiForm from '../components/exam3/MultiForm.vue'
import RecursiveForm from '../components/exam4/RecursiveForm.vue'
import DragDrop from '../components/exam5/DragDrop.vue'

export const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/todo', name: 'TodoApp', component: TodoApp },
    { path: '/exam1', name: 'AutoComplete', component: FilterPlace },
    { path: '/exam2', name: 'DropZone', component: DropZoneHome },
    { path: '/exam3', name: 'MultiForm', component: MultiForm },
    { path: '/exam4', name: 'RecursiveForm', component: RecursiveForm },
    { path: '/exam5', name: 'DragDrop', component: DragDrop },
]