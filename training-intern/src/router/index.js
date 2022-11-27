import HomePage from '../components/HomePage.vue'
import TodoApp from '../components/todoApp/TodoApp.vue'
import AutoComplete from '../components/exam1/AutoComplete.vue'
import DropZone from '../components/exam2/DropZone.vue'
import MultiForm from '../components/exam3/MultiForm.vue'
import RecursiveForm from '../components/exam4/RecursiveForm.vue'
import DragDrop from '../components/exam5/DragDrop.vue'

export const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/todo', name: 'TodoApp', component: TodoApp },
    { path: '/exam1', name: 'AutoComplete', component: AutoComplete },
    { path: '/exam2', name: 'DropZone', component: DropZone },
    { path: '/exam3', name: 'MultiForm', component: MultiForm },
    { path: '/exam4', name: 'RecursiveForm', component: RecursiveForm },
    { path: '/exam5', name: 'DragDrop', component: DragDrop },
]