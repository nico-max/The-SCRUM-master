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
              <v-toolbar-title>Relación</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="newrelation" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Relación +
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Agregar Relacion</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-form ref="form">
                            <v-text-field
                              v-model="relacion.relacion"
                              label="Relacion"
                            ></v-text-field>
                            <v-text-field
                              v-model="relacion.descripcion_relacion"
                              label="descripcion Relacion"
                            ></v-text-field>
                            <v-btn
                              color="success"
                              class="mr-4"
                              v-on:click="postdoc"
                              >Post</v-btn
                            >
                            <v-btn color="error" class="mr-4" @click="reset"
                              >Reset</v-btn
                            >
                            <v-btn class="mr-4" @click="newrelation = false"
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
            <v-text-field v-model="uprela.id" label="id"></v-text-field>
            <v-text-field
              v-model="uprela.relacion"
              label="Relacion"
            ></v-text-field>
            <v-text-field
              v-model="uprela.descripcion_relacion"
              label="Descripcion relacion"
            ></v-text-field>
            <v-btn color="success" class="mr-4" v-on:click="putdoc">Put</v-btn>
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
  name: "Relacion",
  data() {
    return {
      items: [],
      headers: [],
      relacion: {
        relacion: "",
        descripcion_relacion: "",
      },
      uprela: {
        id: null,
        relacion: "",
        descripcion_relacion: "",
      },
      newrelation: false,
    };
  },

  async mounted() {
    await axios
      .get(this.$store.state.core_path + "Relacion/")
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
    postdoc: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        await axios.post(
          this.$store.state.core_path + "Relacion/",
          this.relacion
        );
      }
      this.newrelation = false;
    },
    putdoc: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        const update =
          this.$store.state.core_path + "Relacion" + "/" + this.uprela.id;
        await axios.put(update, {
          relacion: this.uprela.relacion,
          descripcion_relacion: this.uprela.descripcion_relacion,
        });
      }
    },
  },
};
</script>
