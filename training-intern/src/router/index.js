import HomePage from '../components/HomePage.vue'
import TodoApp from '../components/todoApp/TodoApp.vue'
import BaiSo2 from '../components/bai2/BaiSo2.vue'
import BaiSo3 from '../components/bai3/BaiSo3.vue'

export const routes = [
    { path: '/', name: 'Trang chủ', component: HomePage },
    { path: '/todo', name: 'Todo Apps', component: TodoApp },
    { path: '/bai2', name: 'Bài 2', component: BaiSo2 },
    { path: '/bai3', name: 'Bài 3', component: BaiSo3 },
]