import HomePage from '../components/HomePage.vue'
import TodoApp from '../components/todoApp/TodoApp.vue'
import ExamNumber2 from '../components/exam2/ExamNumber2.vue'
import ExamNumber3 from '../components/exam3/ExamNumber3.vue'

export const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/todo', name: 'TodoApp', component: TodoApp },
    { path: '/exam2', name: 'Exam2', component: ExamNumber2 },
    { path: '/exam3', name: 'Exam3', component: ExamNumber3 },
]