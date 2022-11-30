<template>
  <v-row justify="space-around">
    <v-col>
      <v-dialog
        v-model="show"
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar :color="color" dark> {{ title }}</v-toolbar>
            <v-card-text>
              <div class="text-h6 pa-12" v-html="text"></div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Continuar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SuccessDialog",
  props: {
    value: Boolean,
    text: {
      type: String,
      default: "Text",
    },
    title: {
      type: String,
      default: "Title",
    },
    close: {
      type: String,
      default: "Close",
    },
    color: {
      type: String,
      default: "primary",
    },
    redirection: {
      type: Boolean,
      default: false,
    },
    redirectionRoute: {
      type: String,
      default: "",
    },
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    computedRedirection: {
      get() {
        return this.redirection;
      },
      set(redirection) {
        this.$emit("input", redirection);
      },
    },
  },
  watch: {
    // Verificación de si se necesita redireccionamiento luego de cerrar el dialog
    show(newValue) {
      if (newValue === false && this.computedRedirection === true) {
        this.$router.push({
          name: this.redirectionRoute,
        });
      }
    },
  },
};
</script>
