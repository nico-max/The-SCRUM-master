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
              <v-toolbar-title>Estado Documento</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="newestadocu" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Estado Doc +
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Agregar Estado Documento</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-form ref="form">
                            <v-text-field
                              v-model="estad.estado"
                              label="Estado"
                            ></v-text-field>
                            <v-btn
                              color="success"
                              class="mr-4"
                              v-on:click="post_estado_doc"
                              >Post</v-btn
                            >
                            <v-btn color="error" class="mr-4" @click="reset"
                              >Reset</v-btn
                            >
                            <v-btn class="mr-4" @click="newestadocu = false"
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
            <v-text-field v-model="newestado.id" label="id"></v-text-field>
            <v-text-field
              v-model="newestado.estado"
              label="id_usuario"
            ></v-text-field>
            <v-btn color="success" class="mr-4" v-on:click="putestadodoc"
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
  name: "Estado_documento",
  data() {
    return {
      items: [],
      headers: [],
      estad: {
        estado: "",
      },
      newestado: {
        id: null,
        estado: "",
      },
      newestadocu: false,
    };
  },

  async mounted() {
    await axios
      .get(this.$store.state.core_path + "EstadoDocumento/")
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
    post_estado_doc: function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        axios.post(
          this.$store.state.core_path + "EstadoDocumento/",
          this.estad
        );
      }
      this.newestadocu = false;
    },
    putestadodoc: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        const camino =
          this.$store.state.core_path +
          "EstadoDocumento" +
          "/" +
          this.newestado.id;
        await axios.put(camino, {
          estado: this.newestado.estado,
        });
      }
    },
  },
};
</script>
