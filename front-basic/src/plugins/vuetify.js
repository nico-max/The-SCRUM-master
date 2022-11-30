import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ToolIcon from "../components/icons/ToolIcon.vue";
import InboxIcon from "../components/icons/InboxIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    light: true,
    themes: {
      light: {
        primary: "#0F2435",
        secondary_light: "#eeeeee",
        secondary: "#e1e2e2",
        secondary_dark: "#cfcfcf",
        accent: "#05aa77",
        warning: "#ffc107",
        info: "#03a9f4",
        success: "#05AA77",
        dark: "#a59f98",
        background: "#FFFFFF",
        bodyBackground: "#f5f6f8",
        primaryText: "#FFFFFF",
        secondaryText: "#0F2435",
        primaryInput: "#293E4F",
      },
      dark: {
        primary: "#1E1E1E",
        accent: "#FF4081",
        secondary: "#0F2435",
        success: "#86af3f",
        info: "#f34fc6",
        warning: "#FB8C00",
        error: "#FF5252",
        background: "#000000",
        bodyBackground: "#000000",
      },
    },
  },
  icons: {
    iconfont: "mdi",
    values: {
      "icon-tool": {
        component: ToolIcon,
      },
      "icon-inbox": {
        component: InboxIcon,
      },
    },
  },
});
