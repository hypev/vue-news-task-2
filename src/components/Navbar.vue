<template>
    <v-app-bar app class="px-16">
        <span class="mr-4">HABAR</span>
        <v-btn class="mx-2" text to="/">All news</v-btn>
        <v-btn class="mx-2" text to="/news/sport">Sport</v-btn>
        <v-btn class="mx-2" text to="/news/politics">Politics</v-btn>
        <v-btn class="mx-2" text to="/news/technology">Technology</v-btn>
        <v-btn class="mx-2" text to="/news/business">Business</v-btn>

        <v-spacer></v-spacer>

        <v-text-field solo label="Search" class="mt-6" prepend-inner-icon="mdi-magnify " dense></v-text-field>
        <NavbarRegister />
        <NavbarLogin />
        <NavbarAddPost />
        <NavbarLogout />
    </v-app-bar>
</template>

<script>
import NavbarLogin from "./NavbarLogin.vue";
import NavbarRegister from "./NavbarRegister.vue";
import NavbarLogout from "./NavbarLogout.vue";
import NavbarAddPost from "./NavbarAddPost.vue";

export default {
    name: "Navbar",

    components: {
        NavbarLogin,
        NavbarRegister,
        NavbarLogout,
        NavbarAddPost,
    },
};
</script>

<style lang="scss"></style>
