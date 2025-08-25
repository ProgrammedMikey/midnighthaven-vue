<script setup lang="ts">
import testImage from '../assets/test.jpg';

const email = ref('');
const loading = ref(false);
const error = ref('');

</script>

<template>
    <div class="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div class="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
            <img :src="testImage" alt="Test Image" class="mx-auto w-24 h-24 mb-4" />
            <h1 class="text-2xl font-semibold mb-4 text-center">Login View</h1>
            <form class="space-y-4">
                <div>
                    <label for="username" class="block mb-1">Username</label>
                    <input type="text" id="username" class="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label for="password" class="block mb-1">Password</label>
                    <input type="password" id="password" class="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Login</button>
            </form>
        </div>
    </div>
</template>