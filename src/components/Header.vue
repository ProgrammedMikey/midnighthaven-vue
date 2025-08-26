<script setup lang="ts"></script>
<template>
    <div class="py-4 px-6 bg-gray-800 shadow-md flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white">Midnight Haven</h1>
        <nav>
            <ul class="flex space-x-4">
                <li><RouterLink to="/" class="text-white hover:underline">Home</RouterLink></li>
                <li><RouterLink to="/login" class="text-white hover:underline">Login</RouterLink></li>
            </ul>   
        </nav>
    </div>
</template>