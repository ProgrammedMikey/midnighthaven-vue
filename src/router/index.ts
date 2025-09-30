import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ListingDetail from '../views/ListingDetail.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/listing/:id', name: 'ListingDetail', component: ListingDetail }
];


export const router = createRouter({
    history: createWebHistory(),
    routes
})