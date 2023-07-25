import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            itemsCounter: 0,
            userLoggedIn: false
        };
    },
    mutations: {
        incrementCounter(state) {
            state.itemsCounter++;
        },
        setAuth(state, payload) {
            state.userLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        cartItemsCounter(state) {
            return state.itemsCounter;
        },
        userAuthentification(state) {
            return state.userLoggedIn;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
