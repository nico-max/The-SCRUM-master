<template>
  <div>
    <v-container grid-list-xs>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-0 mx-4 my-1 px-4 py-0 rounded-lg d-flex align-center justify-center secondary"
      >
        <template v-slot:top>
          <v-toolbar flat color="secondary">
            <v-toolbar-title>Carpetas</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="newitemcarpeta" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="my-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Carpeta +
                </v-btn>
              </template>
              <v-card
                color="background"
                class="elevation-0 px-4 py-0 rounded-lg d-flex align-center justify-center"
              >
                <v-card-title>
                  <span class="text-h5">Agregar carpeta</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-form ref="form">
                          <v-text-field
                            v-model="carpeta.nombre"
                            label="Nombre"
                          ></v-text-field>
                          <v-text-field
                            v-model="carpeta.padre"
                            label="Padre"
                          ></v-text-field>
                          <v-text-field
                            v-model="carpeta.rol"
                            label="rol"
                          ></v-text-field>
                          <v-btn
                            color="success"
                            class="mr-4"
                            v-on:click="post_carpeta"
                            >Post</v-btn
                          >
                          <v-btn color="error" class="mr-4" @click="reset"
                            >Reset</v-btn
                          >
                          <v-btn class="mr-4" @click="newitemcarpeta = false"
                            >Cerrar</v-btn
                          >
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
    <br />

    <v-dialog v-if="this.newcarpeta.nombre != ''">
      <h2>Update carpeta</h2>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-form ref="form">
              <v-text-field
                v-model="newcarpeta.nombre"
                label="Nombre"
              ></v-text-field>
              <v-text-field
                v-model="newcarpeta.padre"
                label="Padre"
              ></v-text-field>
              <v-text-field v-model="newcarpeta.rol" label="rol"></v-text-field>
              <v-btn color="success" class="mr-4" v-on:click="putcarpeta"
                >Put</v-btn
              >
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Carpetas",
  data() {
    return {
      items: [],
      headers: [],
      carpeta: {
        nombre: "",
        padre: "",
        rol: "",
      },
      newcarpeta: {
        id: null,
        nombre: "",
        padre: null,
        rol: "",
      },
      newitemcarpeta: false,
    };
  },

  async mounted() {
    await axios
      .get(this.$store.state.core_path + "Carpetas/")
      .then((response) => {
        this.items = response.data;
        let hh = Object.keys(this.items[0]);
        hh.forEach((element) => {
          this.headers.push({ text: element, value: element });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    post_carpeta: function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        axios.post(this.$store.state.core_path + "Carpetas/", this.carpeta);
      }
      this.newitemcarpeta = false;
    },
    putcarpeta: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        const camino =
          this.$store.state.core_path + "Carpetas" + "/" + this.newcarpeta.id;
        await axios.put(camino, {
          nombre: this.newcarpeta.nombre,
          padre: this.newcarpeta.padre,
          rol: this.newcarpeta.rol,
        });
      }
    },
  },
};
</script>
