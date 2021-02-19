<template>
    <v-btn text class="mx-2" color="primary" @click="dialog = true" v-if="user">
        Add Blog
        <v-dialog class="rounded-xl" v-model="dialog" max-width="600px">
            <v-card class="pa-8 rounded-xl">
                <v-card-title>
                    <span class="headline">
                        <strong>Add Blog</strong>
                    </span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="header" :label="'Title'" type="text"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="img" :label="'Image Link'" type="url"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea outlined name="input-7-4" label="Description" v-model="description"></v-textarea>
                                </v-col>
                                <v-col class="d-flex" cols="12">
                                    <v-select :items="categories" v-model="category" label="Category" outlined></v-select>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="success" text @click="addPost">
                        Add
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-btn>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            text: "",
            author: "",
            likes: 0,
            shares: 0,
            category: "",
            categories: ["sport", "politics", "technology", "business"],
            header: "",
            description: "",
            img: "",
        };
    },

    computed: {
        user() {
            return this.$store.state.user;
        },

        news() {
            return this.$store.state.news;
        },

        id() {
            return this.news[this.news.length - 1].id + 1;
        },
    },

    methods: {
        addPost() {
            let id = this.id;
            let category = this.category;
            let header = this.header;
            let description = this.description;
            let img = this.img;
            let show = false;
            let date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
            let news = {
                id,
                category,
                header,
                description,
                img,
                show,
                date,
            };
            this.$store.commit("addBlog", news);
            this.category = "";
            this.header = "";
            this.description = "";
            this.img = "";
            this.dialog = false;
        },
    },
};
</script>

<style lang="scss"></style>
