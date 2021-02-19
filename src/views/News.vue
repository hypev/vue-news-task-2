<template>
    <div class="news">
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12" class="mt-8">
                        <h1>{{ category }}</h1>
                    </v-col>
                    <v-col cols="12" v-for="item in news" :key="item.id">
                        <v-card class="my-4" max-width="100%">
                            <v-img :src="item.img" height="200px"></v-img>

                            <v-card-title>
                                {{ item.header }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{ item.date }}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="orange lighten-2" text>
                                    More
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn icon @click="item.show = !item.show">
                                    <v-icon>{{ item.show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="item.show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        {{ item.description }}
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    computed: {
        news() {
            return this.$store.state.news.filter((news) => {
                return this.$route.params.category == news.category;
            });
        },

        category() {
            return this.$route.params.category.toUpperCase();
        },
    },
};
</script>

<style></style>
