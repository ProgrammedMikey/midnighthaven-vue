<script setup lang="ts">
import { useUserStore } from '../stores/user';
import { useRouter, RouterLink } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const logout = () => {
    userStore.logout();
    router.push('/login');
};
</script>
<template>
    <div class="py-4 px-6 bg-gray-800 shadow-md flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white">Midnight Haven</h1>
        <nav>
            <ul class="flex space-x-4">
                <li><RouterLink to="/" class="text-gray-400 hover:underline">Home</RouterLink></li>
                <!-- <li><RouterLink to="/login" class="text-white hover:underline">Login</RouterLink></li> -->
                <li><button @click="logout" class="text-gray-400 hover:text-white">Logout</button></li>

            </ul>   
        </nav>
    </div>
</template>