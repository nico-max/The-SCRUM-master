<template>
  <div>
    <div class="container"><h2>Administracion</h2></div>
    <div>
      <v-row class="">
        <v-col cols="12" md="2" justify="center"> </v-col>
        <v-col cols="12" md="7" justify="center">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <!-- <template>
                    <pdf src="../assets/ikfile.pdf"></pdf>
                    </template> -->
          <div>
            <pdf src="../assets/ikfile.pdf"></pdf>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="container">
            <v-tabs>
              <v-tab>Registro</v-tab>
              <v-tab>Historico</v-tab>
              <v-tab>Anexos</v-tab>
              <v-tab>cuatro</v-tab>
              <v-tab>cinco</v-tab>

              <v-tab-item>
                <v-form ref="form" flat>
                  <v-text-field
                    v-model="form_radicado.referencia"
                    label="Referencia"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.guia"
                    label="Guia"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.fecha_documento"
                    label="Fecha_documento"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.tipo_id"
                    label="Tipo_id"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.numero_id"
                    label="Numero_id"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.Nombres"
                    label="Nombres"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.apellidos"
                    label="Apellidos"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.telefono"
                    label="Telefono"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.direccion"
                    label="Direccion"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.email"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.pais"
                    label="Pais"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.departamento"
                    label="Departamento"
                  ></v-text-field>
                  <v-text-field
                    v-model="form_radicado.municipio"
                    label="Municipio"
                  ></v-text-field>
                  <v-btn color="success" class="mr-4" v-on:click="radicar"
                    >Radicar</v-btn
                  >

                  <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
                </v-form>
              </v-tab-item>
              <v-tab-item> item 2 </v-tab-item>
              <v-tab-item> item 3 </v-tab-item>
              <v-tab-item> item 4 </v-tab-item>
              <v-tab-item> item 5 </v-tab-item>
            </v-tabs>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "EditDoc",
  data: () => ({
    item_radicado: [
      { name: "Registro" },
      { name: "Historico" },
      { name: "Anexo" },
      { name: "uno mas" },
      { name: "dos mas" },
    ],
    form_radicado: {
      referencia: "",
      guia: "",
      fecha_documento: "",
      tipo_id: "",
      numero_id: "",
      Nombres: "",
      apellidos: "",
      telefono: "",
      direccion: "",
      email: "",
      pais: "",
      departamento: "",
      municipio: "",
    },
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    radicar() {
      this.$refs.form.reset();
    },
  },
  components: {
    pdf,
  },
};
</script>
