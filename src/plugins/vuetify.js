import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: colors.yellow.darken1,
                success: colors.green.darken3,
            },
            dark: {
                primary: colors.yellow.lighten1,
                success: colors.green.lighten3,
            },
        },
    },
    icons: {
        iconfont: "mdiSvg",
    },
});
