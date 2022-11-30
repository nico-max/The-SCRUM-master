<template>
  <v-card
    :color="toolbarColor"
    class="elevation-0 mx-3 px-1 my-1 rounded-lg d-flex align-center justify-left"
    align-left
  >
    <v-toolbar dense elevation="0" :color="toolbarColor">
      <v-btn-toggle v-model="toggle_exclusive" dense group>
        <v-btn :value="1" text>
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>

        <v-btn :value="2" text>
          <v-icon>mdi-archive-outline</v-icon>
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn :value="3" text>
          <v-icon>mdi-inbox</v-icon>
        </v-btn>

        <v-btn :value="4" text>
          <v-icon>mdi-send-outline</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "inbox-toolbar",
  data() {
    return {
      inbox_menu_items: [
        { text: "Arial" },
        { text: "Calibri" },
        { text: "Courier" },
        { text: "Verdana" },
      ],
      dropdown_edit: [
        { text: "100%" },
        { text: "75%" },
        { text: "50%" },
        { text: "25%" },
        { text: "0%" },
      ],
      toggle_exclusive: 2,
      toggle_multiple: [1, 2, 3],
    };
  },
  props: {
    toolbarColor: {
      type: String,
      default: "bodyBackground",
    },
  },
};
</script>
