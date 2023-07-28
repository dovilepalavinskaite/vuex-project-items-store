import { createStore } from 'vuex';
import rootMutations from  './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
    state() {
        return {
            userLoggedIn: false,
            itemsCounter: 0,
            itemsCart: []
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;