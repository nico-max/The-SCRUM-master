<template>
  <v-container grid-list-xs>
    <!--Header-->
    <v-card
      color="primary"
      class="elevation-0 mx-4 px-3 py-3 my-4 rounded-lg d-flex align-center justify-left"
      height="100%"
    >
      <v-container flex>
        <v-row align="center" justify="start" class="pa-0 ma-0">
          <v-col cols="1" align="center" class="pa-0 ma-0">
            <div class="d-flex justify-center">
              <v-icon class="primaryText--text" x-large>mdi-domain</v-icon>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="primaryText--text text-h5 font-weight-bold mx-0">
              Módulo Multiempresa
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!--Header end-->
    <!--SubHeader-->
    <v-card
      color="primary lighten-1"
      class="elevation-0 mx-4 px-3 py-3 mt-4 rounded-t-lg d-flex align-center justify-space-between"
      height="100%"
    >
      <div class="primaryText--text text-h6 font-weight-bold mx-3">
        Información de la Empresa {{ detallesEmpresa["nombre_empresa"] }}
      </div>
      <v-btn
        class="primary text-body-2 font-weight-regular primaryText--text mx-3"
        :to="{ name: 'Multiempresa' }"
      >
        Volver
        <v-icon class="primaryText--text mx-2"
          >mdi-arrow-u-left-top-bold</v-icon
        >
      </v-btn>
    </v-card>
    <!--SubHeader end-->
    <v-card
      :loading="loading"
      color="secondary"
      class="elevation-0 mx-4 pa-2 my-0 rounded-b-lg d-flex align-center justify-left"
      height="100%"
    >
      <v-row align="center" justify="start" class="pa-0 ma-0">
        <v-col
          md="4"
          align="center"
          class="pa-0 ma-0 secondary darken-1 rounded-lg"
        >
          <v-img
            max-height="250"
            max-width="250"
            :src="
              detallesEmpresa.find((item) => item.key === 'logo_empresa').value
            "
          ></v-img>
        </v-col>
        <v-col md="8" align="center" class="pa-6 ma-0">
          <v-row
            align="center"
            justify="start"
            class="pa-0 ma-0"
            v-for="item in detallesEmpresaFiltrados"
            :key="item.key"
          >
            <v-col cols="4" align="left" class="pa-0 ma-0">
              <div class="secondaryText--text text-b1 font-weight-bold mx-3">
                {{ item.name }}
              </div>
            </v-col>
            <v-col cols="8" align="left" class="pa-0 ma-0">
              <div class="secondaryText--text text-b1 mx-3">
                {{ item.value }}
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.id = this.$route.params.id;
    this.getEmpresa();
  },
  data: () => ({
    id: null,
    //Detalles completos
    detallesEmpresa: [
      { key: "id", name: "ID", value: "" },
      { key: "nombre_empresa", name: "Nombre de la empresa", value: "" },
      { key: "tel_empresa", name: "Teléfono", value: "" },
      { key: "nit_empresa", name: "NIT", value: "" },
      { key: "dir_empresa", name: "Dirección", value: "" },
      { key: "logo_empresa", name: "Logo URL", value: "" },
      { key: "email_empresa", name: "Correo Electrónico", value: "" },
    ],
    //Detalles para mostrar (Sin id y logo)
    detallesEmpresaFiltrados: [
      { key: "nombre_empresa", name: "Nombre de la empresa", value: "" },
      { key: "tel_empresa", name: "Teléfono", value: "" },
      { key: "nit_empresa", name: "NIT", value: "" },
      { key: "dir_empresa", name: "Dirección", value: "" },
      { key: "email_empresa", name: "Correo Electrónico", value: "" },
    ],
    url: "detalle-empresa/",
  }),
  methods: {
    async getEmpresa() {
      let request = {
        method: "get",
        params: {},
        data: {},
        url: this.$store.state.organizacional_routes.empresa + this.id,
      };
      console.log("Request " + request.url);
      (this.responseTitle = "Respuesta"),
        await this.$store
          .dispatch("request_back", request)
          .then((value) => {
            //this.items_empresa = value.data;
            this.detallesEmpresa.forEach((element) => {
              element.value = value.data[element.key];
            });
            this.detallesEmpresaFiltrados.forEach((element) => {
              element.value = value.data[element.key];
            });
            //console.log(this.detallesEmpresa);
          })
          .catch(function (error) {
            this.responseText = "No se pudo cargar las empresas: " + error;
          });
    },
  },
};
</script>
