<template>
    <div class="home">
        <v-row>
            <v-col cols="12">
                <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(item, i) in items" :key="i">
                        <v-img :src="item.src" class="fill-height">
                            <v-container fill-height fluid pa-0 ma-0>
                                <v-layout fill-height align-end justify-center>
                                    <v-flex xs8 mb-12>
                                        <v-card color="yellow darken-3" class="pa-2">
                                            <span class="headline white--text" v-text="item.text"> </span>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            
            <v-col cols="7">
                <v-row>
                    <v-col cols="12">
                        <h1>All news</h1>
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
                    <v-col>
                        <div class="text-center mb-8">
                            <v-pagination v-model="page" :length="6" color="blue"></v-pagination>
                        </div>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="5">
                <v-row>
                    <v-col cols="12">
                        <h1>Blogs</h1>
                    </v-col>
                    <v-col cols="12" v-for="blog in blogs" :key="blog.id">
                        <v-card class="mx-auto" color="blue" dark max-width="100%">
                            <v-card-text class="headline font-weight-bold"> "{{ blog.text }}" </v-card-text>

                            <v-card-actions>
                                <v-list-item class="grow">
                                    <v-list-item-avatar color="grey darken-3">
                                        <v-img class="elevation-6" alt="" :src="blog.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{ blog.author }}</v-list-item-title>
                                    </v-list-item-content>

                                    <v-row align="center" justify="end">
                                        <v-icon class="mr-1">
                                            mdi-heart
                                        </v-icon>
                                        <span class="subheading mr-2">{{ blog.likes }}</span>
                                        <span class="mr-1">·</span>
                                        <v-icon class="mr-1">
                                            mdi-share-variant
                                        </v-icon>
                                        <span class="subheading">{{ blog.shares }}</span>
                                    </v-row>
                                </v-list-item>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Home",

    data() {
        return {
            page: 1,
            items: [
                {
                    text: "The Himalayan peak off limits to climbers",
                    src: "https://ychef.files.bbci.co.uk/1600x640/p0973lkk.jpg",
                },
                {
                    text: "Australian Open: Stefanos Tsitsipas beats Rafael Nadal to set up Daniil Medvedev semi-final",
                    src: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/11FEF/production/_117011737_tsitsipas.jpg",
                },
                {
                    text: "If Planet Nine exists, why has no one seen it?",
                    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                },
            ],
        };
    },

    computed: {
        news() {
            return this.$store.state.news;
        },

        blogs() {
            return this.$store.state.blogs;
        },
    },
};
</script>

<style lang="scss"></style>
