<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <template v-if="$store.state.auth">
      <!-- <span>{{$store.state.user.firstname}}</span>  -->

      <!-- <h2>hooooooooooo {{$store.state.auth}} s</h2> -->
      <DashHeader />
      <!-- <SideBarVue></SideBarVue>-->
      <v-main class="bodyBackground">
        <router-view />
      </v-main>
    </template>

    <template v-else>
      <Bot/>
      <Login />
    </template>
  </v-app>
</template>

<script>
import Bot from "./components/Bot.vue";
import DashHeader from "./components/DashHeader.vue";
//import SideBarVue from "./components/SideBar.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",

  data: () => ({
    //
    session: true,
  }),
  components: {
    DashHeader,
    Login,
    Bot
},
};
</script>
