<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <template>
      <Bot />
    </template>
  </v-app>
</template>

<script>
import Bot from "./components/Bot.vue";
//import DashHeader from "./components/DashHeader.vue";
//import SideBarVue from "./components/SideBar.vue";

export default {
  name: "App",

  data: () => ({
    //
    session: false,
  }),
  components: {
    //DashHeader,

    Bot,
  },
};
</script>
