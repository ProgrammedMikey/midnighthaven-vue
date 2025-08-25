<script setup lang="ts">
import testImage from '../assets/test.jpg';
import { ref } from 'vue';
import { useUserStore} from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const email = ref('');
const loading = ref(false);
const error = ref('');

const createUser = async () => {
    if (!name.value || !email.value || !password.value) {
        error.value = 'Please fill in all fields.';
        return;
    }

    loading.value = true;
    error.value = '';

    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
            // name: name.value,
            email: email.value,
            password: password.value,
        });

        userStore.setUser({ email: data.email, token: data.token });
        router.push('/home');
    } catch (err) {
        error.value = 'Login failed. Please try again.';
    } finally {
        loading.value = false;
    }
};
// const createUser = async () => {
//     loading.value = true;
//     error.value = '';
//     try {
//         // Simulate an API call
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         // Here you would normally handle the login logic
//         alert(`Logged in as ${email.value}`);
//     } catch (e) {
//         error.value = 'Login failed. Please try again.';
//     } finally {
//         loading.value = false;
//     }
// };

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
                <button @click="createUser" type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded" :disabled="loading">{{ loading ? 'Logging in...' : 'Login'}}</button>
                <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
            </form>
        </div>
    </div>
</template>