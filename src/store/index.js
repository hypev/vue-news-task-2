import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import news from "./news";
import blogs from "./blogs";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: JSON.parse(window.localStorage.getItem("user")) || null,
        users,
        news,
        blogs,
    },
    mutations: {
        login(state, payload) {
            state.user = payload.user;
            if (payload.remember) {
                window.localStorage.setItem("user", JSON.stringify(state.user));
            }
        },

        logout(state) {
            state.user = null;
            window.localStorage.removeItem("user");
        },

        addPost(state, news) {
            state.news.push(news);
        },
    },
    actions: {},
});
