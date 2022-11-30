<template>
  <div>
    <div>
      <v-container grid-list-xs>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Carpeta usuario</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="newfoluser" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Carpeta User+
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Agregar carpeta Usuario</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-form ref="form">
                            <v-text-field
                              v-model="carpeta.id_carpeta"
                              label="Id_carpeta"
                            ></v-text-field>
                            <v-text-field
                              v-model="carpeta.id_usuario"
                              label="Id_usuario"
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
                            <v-btn class="mr-4" @click="newfoluser = false"
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
    </div>

    <v-container>
      <h2>PUT</h2>
      <v-row>
        <v-col>
          <v-form ref="form">
            <v-text-field v-model="newcarpeta.id" label="id"></v-text-field>
            <v-text-field
              v-model="newcarpeta.id_carpeta"
              label="id_carpeta"
            ></v-text-field>
            <v-text-field
              v-model="newcarpeta.id_usuario"
              label="id_usuario"
            ></v-text-field>
            <v-btn color="success" class="mr-4" v-on:click="putcarpeta"
              >Put</v-btn
            >
            <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Carpeta_usuario",
  data() {
    return {
      items: [],
      headers: [],
      carpeta: {
        id_carpeta: "",
        id_usuario: "",
      },
      newcarpeta: {
        id: null,
        id_carpeta: "",
        id_usuario: "",
      },
      newfoluser: false,
    };
  },

  async mounted() {
    await axios
      .get(this.$store.state.core_path + "CarpetaUsuario/")
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
        axios.post(
          this.$store.state.core_path + "CarpetaUsuario/",
          this.carpeta
        );
      }
      this.newfoluser = false;
    },
    putcarpeta: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        const camino =
          this.$store.state.core_path +
          "CarpetaUsuario" +
          "/" +
          this.newcarpeta.id;
        await axios.put(camino, {
          id_carpeta: this.newcarpeta.id_carpeta,
          id_usuario: this.newcarpeta.id_usuario,
        });
      }
    },
  },
};
</script>
