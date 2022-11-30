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
              <v-toolbar-title>Documentos</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="docnew" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Documento +
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Agregar Documento</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-form ref="form">
                            <v-text-field
                              v-model="documento.nombre"
                              label="Name"
                            ></v-text-field>
                            <v-text-field
                              v-model="documento.descripcion"
                              label="descripcion"
                            ></v-text-field>
                            <v-text-field
                              v-model="documento.id_rol"
                              label="id_rol"
                            ></v-text-field>
                            <v-text-field
                              v-model="documento.id_estado"
                              label="id_estado"
                            ></v-text-field>
                            <v-text-field
                              v-model="documento.id_carpeta"
                              label="id_carpeta"
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
                            <v-btn class="mr-4" @click="docnew = false"
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
            <v-text-field v-model="updatedoc.id" label="id"></v-text-field>
            <v-text-field
              v-model="updatedoc.nombre"
              label="Name"
            ></v-text-field>
            <v-text-field
              v-model="updatedoc.descripcion"
              label="descripcion"
            ></v-text-field>
            <v-text-field
              v-model="updatedoc.id_rol"
              label="id_rol"
            ></v-text-field>
            <v-text-field
              v-model="updatedoc.id_estado"
              label="id_estado"
            ></v-text-field>
            <v-text-field
              v-model="updatedoc.id_carpeta"
              label="id_carpeta"
            ></v-text-field>
            <v-btn color="success" class="mr-4" v-on:click="putdoc">Put</v-btn>
            <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
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
      documento: {
        nombre: "",
        descripcion: "",
        fecha_finalizacion: "2021-10-07",
        id_rol: null,
        id_estado: null,
        id_carpeta: null,
      },
      updatedoc: {
        nombre: "",
        descripcion: "",
        fecha_finalizacion: "2021-10-07",
        id_rol: null,
        id_estado: null,
        id_carpeta: null,
        id: null,
      },
      docnew: false,
    };
  },

  async mounted() {
    await axios
      .get(this.$store.state.core_path + "documentos/")
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
      console.log(this.documento);
      if (event) {
        await axios.post(
          this.$store.state.core_path + "documentos/",
          this.documento
        );
      }
      this.docnew = false;
    },
    putdoc: async function (event) {
      const data = new FormData();
      data.append("data", JSON.stringify(this.data));
      if (event) {
        const update =
          this.$store.state.core_path + "documentos" + "/" + this.updatedoc.id;
        await axios.put(update, {
          nombre: this.updatedoc.nombre,
          descripcion: this.updatedoc.descripcion,
          fecha_finalizacion: "2021-10-07",
          id_rol: this.updatedoc.id_rol,
          id_estado: this.updatedoc.id_estado,
          id_carpeta: this.updatedoc.id_carpeta,
        });
      }
    },
  },
};
</script>
