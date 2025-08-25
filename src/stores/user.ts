import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: null as string | null,
        email: null as string | null,
        isLoggedIn: false,
    }),
    actions: {
        setUser (data: { userId: string; email: string; isLoggedIn: boolean }) {
            this.userId = data.userId;  
            this.email = data.email;
            this.isLoggedIn = data.isLoggedIn;
        },
        logout() {
            this.userId = null;
            this.email = null;
            this.isLoggedIn = false;
        }
        
        // login(username: string, email: string) {
        //     this.username = username;
        //     this.email = email;
        //     this.isLoggedIn = true;
        // },
        // logout() {
        //     this.username = '';
        //     this.email = '';
        //     this.isLoggedIn = false;
        // },
    },
    persist: true,
});