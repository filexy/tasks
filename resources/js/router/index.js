import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import tasks from '../components/tasks';
import Addtask from '../components/AddTask';
import Edittask from '../components/EditTask';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'tasks',
        path: '/tasks',
        component: tasks
    },
    {
        name: 'addtask',
        path: '/tasks/add',
        component: AddTask
    },
    {
        name: 'edittask',
        path: '/tasks/edit/:id',
        component: EditTask
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
