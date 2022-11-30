<template>
  <div>
    <v-container grid-list-xs>
      <v-data-table
        :headers="tercerosHeaders"
        :items="allTerceros"
        :items-per-page="5"
        class="elevation-1"
        @click:row="checking"
        @contextmenu:row="deleteContacto"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Terceros</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="newthird" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Tercero +
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Agregar tercero</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-form ref="form">
                          <!-- <v-select
                                v-model="tercero.tipo_tercero"
                                :items="this.tipo_terceros"
                                item-text="nombre"
                                item-value="id"
                                label="tipo tercero"
                                required
                              ></v-select> -->
                          <v-text-field
                            v-model="tercero.nombre"
                            label="nombre"
                            required
                          ></v-text-field>
                          <!-- <v-select
                                v-model="tercero.tipo_identificación"
                                :items="this.tipo_identificaciones"
                                item-text="sigla"
                                item-value="id"
                                label="tipo identificación"
                                required
                              >
                              </v-select> -->
                          <v-text-field
                            v-model="tercero.numero_identificacion"
                            label="numero_identificacion"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="tercero.correo"
                            label="correo"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="tercero.direccion"
                            label="direccion"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="tercero.ubicacion"
                            label="ubicacion"
                            required
                          ></v-text-field>
                          <v-checkbox
                            v-model="tercero.activo"
                            label="activo"
                            required
                          ></v-checkbox>
                          <v-text-field
                            v-model="tercero.contacto_set[0].tipo_id"
                            label="tipo_id"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="tercero.contacto_set[0].contacto"
                            label="contacto"
                            required
                          ></v-text-field>
                          <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validateTercero"
                          >
                            Post
                          </v-btn>
                          <v-btn color="error" class="mr-4" @click="reset">
                            Reset
                          </v-btn>
                          <v-btn class="mr-4" @click="newthird = false"
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

    <div v-if="this.editar.nombre != ''">
      <h2>PUT</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-select
          v-model="editar.tipo_tercero"
          :items="this.tipo_terceros"
          item-text="nombre"
          item-value="id"
          label="tipo tercero"
          required
        ></v-select>
        <v-text-field
          v-model="editar.nombre"
          label="nombre"
          required
        ></v-text-field>

        <v-select
          v-model="editar.tipo_identificación"
          :items="this.tipo_identificaciones"
          item-text="sigla"
          item-value="id"
          required
        >
        </v-select>

        <v-text-field
          v-model="editar.numero_identificacion"
          label="numero_identificacion"
          required
        ></v-text-field>

        <v-text-field
          v-model="editar.correo"
          label="correo"
          required
        ></v-text-field>

        <v-text-field
          v-model="editar.direccion"
          label="direccion"
          required
        ></v-text-field>

        <v-text-field
          v-model="editar.ubicacion"
          label="ubicacion"
          required
        ></v-text-field>

        <v-checkbox
          v-model="editar.activo"
          label="activo"
          required
        ></v-checkbox>
        <div v-for="contacto in editar.contacto_set" :key="contacto.id">
          <v-text-field
            v-model="contacto.tipo_id"
            label="tipo_id"
            required
          ></v-text-field>

          <v-text-field
            v-model="contacto.contacto"
            label="contacto"
            required
          ></v-text-field>
        </div>

        <v-btn color="success" class="mr-4" @click="agregarContacto"> + </v-btn>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="modificarTercero"
        >
          PUT
        </v-btn>

        <v-btn color="error" class="mr-4" @click="deleteTercero">
          Eliminar
        </v-btn>
      </v-form>
    </div>
    <br />
    <h2>Desde aqui esta el post</h2>
    <div class="container">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-select
          v-model="tercero.tipo_tercero"
          :items="this.tipo_terceros"
          item-text="nombre"
          item-value="id"
          label="tipo tercero"
          required
        ></v-select>
        <v-select
          v-model="tercero.tipo_identificación"
          :items="this.tipo_identificaciones"
          item-text="sigla"
          item-value="id"
          label="tipo identificación"
          required
        >
        </v-select>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Terceros",
  data() {
    return {
      tercerosHeaders: [],
      allTerceros: [],
      tercero: {
        tipo_tercero: "",
        nombre: "",
        tipo_identificación: "",
        numero_identificacion: "",
        correo: "",
        direccion: "",
        ubicacion: "",
        activo: false,
        contacto_set: [{ id: null, tipo_id: "", contacto: "" }],
      },
      editar: {
        id: "",
        tipo_tercero: "",
        nombre: "",
        tipo_identificación: "",
        numero_identificacion: "",
        correo: "",
        direccion: "",
        ubicacion: "",
        activo: false,
        contacto_set: [],
      },
      tipo_terceros: [],
      tipo_identificaciones: [],
      newthird: false,
    };
  },
  async mounted() {
    axios
      .get(this.$store.state.tercero_path + "tercero/")
      .then((response) => {
        this.allTerceros = response.data;
        let temp = Object.keys(this.allTerceros[0]);
        temp.forEach((element) => {
          this.tercerosHeaders.push({ text: element, value: element });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(this.$store.state.tercero_path + "tipo_identificacion/")
      .then((response) => {
        this.tipo_identificaciones = response.data;
      });
    axios
      .get(this.$store.state.tercero_path + "tipo_tercero/")
      .then((response) => {
        this.tipo_terceros = response.data;
      });
  },
  /* TODO
  Agregar que la selección de tipos sea un select */
  methods: {
    checking(item) {
      this.editar.id = item.id;
      this.editar.tipo_tercero = item.tipo_tercero;
      this.editar.nombre = item.nombre;
      this.editar.tipo_identificación = item.tipo_identificación;
      this.editar.numero_identificacion = item.numero_identificacion;
      this.editar.correo = item.correo;
      this.editar.direccion = item.direccion;
      this.editar.ubicacion = item.ubicacion;
      this.editar.activo = item.activo;
      item.contacto_set.forEach((it) => {
        this.editar.contacto_set.push(it);
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    validateTercero() {
      axios.post(this.$store.state.tercero_path + "tercero/", this.tercero);
      console.log(this.tercero);
    },
    agregarContacto() {
      this.editar.contacto_set.push({ id: null, tipo_id: "", contacto: "" });
    },
    modificarTercero() {
      axios.put(
        this.$store.state.tercero_path + "tercero/" + this.editar.id + "/",
        this.editar
      );
    },
    deleteTercero() {
      axios.delete(
        this.$store.state.tercero_path + "tercero/" + this.editar.id + "/"
      );
    },
  },
};
</script>
