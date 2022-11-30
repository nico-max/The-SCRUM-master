<template>
  <div>
    <v-card>
      <v-container grid-list-xs>
        <v-card-title primary-title> Contactos </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            class="elevation-1"
            @click:row="checking"
            @contextmenu:row="deleteContacto"
          >
          </v-data-table>
        </v-card-text>
      </v-container>
    </v-card>
    <br />
    <div v-if="this.editar.contacto != ''">
      <v-form ref="form" lazy-validation>
        <v-select
          v-model="editar.tipo_id"
          :items="this.tipo_contactos"
          item-text="tipo"
          item-value="id"
          label="tipo contacto"
          required
        ></v-select>

        <v-text-field
          v-model="editar.contacto"
          label="contacto"
          required
        ></v-text-field>

        <v-btn color="success" class="mr-4" @click="updateContacto">
          PUT
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset </v-btn>
      </v-form>
    </div>
    <div class="container">
      <v-form ref="form" lazy-validation>
        <v-select
          v-model="documento.tipo_id"
          :items="this.tipo_contactos"
          item-text="tipo"
          item-value="id"
          label="tipo contacto"
          required
        ></v-select>

        <v-text-field
          v-model="documento.contacto"
          label="contacto"
          required
        ></v-text-field>

        <v-btn color="success" class="mr-4" @click="validateContacto">
          Post
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contactos",
  data: () => ({
    items: [],
    headers: [],
    documento: {
      tipo_id: "",
      contacto: "",
      id: null,
    },
    editar: {
      tipo_id: "",
      contacto: "",
      id: 0,
    },
    tipo_contactos: [],
  }),
  async mounted() {
    axios.get(this.$store.state.tercero_path + "contacto/").then((response) => {
      this.items = response.data;
      let temp = Object.keys(this.items[0]);
      temp.forEach((element) => {
        this.headers.push({ text: element, value: element });
      });
    });
    axios
      .get(this.$store.state.tercero_path + "tipo_contacto/")
      .then((response) => {
        this.tipo_contactos = response.data;
      });
  },
  methods: {
    validateContacto() {
      axios.post(this.$store.state.tercero_path + "contacto/", this.documento);
    },
    checking(da, ta) {
      console.log(da.id);
      console.log(ta);
      this.editar.id = da.id;
      this.editar.tipo_id = da.tipo_id;
      this.editar.contacto = da.contacto;
    },
    updateContacto() {
      axios.put(
        this.$store.state.tercero_path + "contacto/" + this.editar.id + "/",
        this.editar
      );
    },
    deleteContacto(asd, item) {
      console.log("--------------------------");
      console.log(item.item.id);
      axios.delete(
        this.$store.state.tercero_path + "contacto/" + item.item.id + "/"
      );
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
