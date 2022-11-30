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
              <v-toolbar-title>Realcion documento</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="reladocu" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Relacion Doc +
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Agregar Relacion Documento</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-form ref="form">
                            <v-text-field
                              v-model="relacion.id_documento1"
                              label="Id documento1"
                            ></v-text-field>
                            <v-text-field
                              v-model="relacion.id_documento2"
                              label="Id documento2"
                            ></v-text-field>
                            <v-text-field
                              v-model="relacion.id_relacion"
                              label="Id relacion"
                            ></v-text-field>
                            <v-btn
                              color="success"
                              class="mr-4"
                              v-on:click="postrela"
                              >Post</v-btn
                            >
                            <v-btn color="error" class="mr-4" @click="reset"
                              >Reset</v-btn
                            >
                            <v-btn class="mr-4" @click="reladocu = false"
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
            <v-text-field v-model="reladoc.id" label="id"></v-text-field>
            <v-text-field
              v-model="reladoc.id_documento1"
              label="Id documento1"
            ></v-text-field>
            <v-text-field
              v-model="reladoc.id_documento2"
              label="Id documento2"
            ></v-text-field>
            <v-text-field
              v-model="reladoc.id_relacion"
              label="Id relacion"
            ></v-text-field>
            <v-btn color="success" class="mr-4" v-on:click="putrela">Put</v-btn>
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
  name: "Documentos",
  data() {
    return {
      items: [],
      headers: [],
      relacion: {
        id_documento1: null,
        id_documento2: null,
        id_relacion: null,
      },
      reladoc: {
        id: null,
        id_documento1: null,
        id_documento2: null,
        id_relacion: null,
      },
      reladocu: false,
    };
  },

  async mounted() {
    await axios
      .get(this.$store.state.core_path + "RelacionDocumento/")
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
    postrela: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        await axios.post(
          this.$store.state.core_path + "RelacionDocumento/",
          this.relacion
        );
      }
      this.reladocu = false;
    },
    putrela: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        const update =
          this.$store.state.core_path +
          "RelacionDocumento" +
          "/" +
          this.reladoc.id;
        await axios.put(update, {
          id_documento1: this.reladoc.id_documento1,
          id_documento2: this.reladoc.id_documento2,
          id_relacion: this.reladoc.id_relacion,
        });
      }
    },
  },
};
</script>
