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
      <div class="primaryText--text text-h6 font-weight-bold mx-0">
        <v-icon class="mx-2 primaryText--text"> mdi-plus-box-outline </v-icon>
        Creación de empresa
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
      color="secondary"
      class="elevation-0 mx-4 pa-2 my-0 rounded-b-lg d-flex align-center justify-left"
      height="100%"
    >
      <SuccessDialog
        v-model="showDialog"
        :text="responseText"
        close="Cerrar"
        :title="responseTitle"
        :color="responseColor"
        :redirection="redirection"
        redirection-route="Multiempresa"
      ></SuccessDialog>
      <v-row align="center" justify="start" class="pa-6 ma-0">
        <v-col cols="12" align="center" class="pa-0 ma-0">
          <basic-dynamic-form
            :form_items.sync="empresaItems"
            ref="companyForm"
          ></basic-dynamic-form>
        </v-col>
        <v-col cols="12" align="center" class="pa-0 ma-0">
          <v-img :src="urlImg" />
          <v-btn
            class="accent elevation-0 primaryText--text"
            type="submit"
            @click.prevent="submit"
          >
            Crear
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import BasicDynamicForm from "../../components/BasicDynamicForm.vue";
import SuccessDialog from "../../components/dialogs/SuccessDialog.vue";

export default {
  data: () => ({
    urlImg: null,
    //Dialog
    showDialog: false,
    responseText: "",
    responseTitle: "",
    responseColor: "primary",
    redirection: false,
  }),
  computed: {
    empresaItems: {
      get() {
        return [
          {
            id: "logo_empresa",
            vmodel: null,
            label: "Logo de la empresa",
            placeholder: "placeholder",
            type: "image",
            rules: [
              (val) =>
                !val ||
                val.size < 2000000 ||
                "¡El tamaño del logo no debe pesar más de 2 MB!",
            ],
            image: "",
          },

          {
            id: "nombre_empresa",
            vmodel: "",
            label: "Nombre",
            type: "textField",
            rules: [(val) => !!val || "Debe ingresar un nombre"],
          },
          {
            id: "tel_empresa",
            vmodel: "",
            label: "Teléfono",
            type: "textField",
            rules: [(val) => !!val || "Debe ingresar un teléfono"],
          },
          {
            id: "nit_empresa",
            vmodel: "",
            label: "NIT",
            type: "textField",
            rules: [(val) => !!val || "Debe ingresar un NIT"],
          },
          {
            id: "dir_empresa",
            vmodel: "",
            label: "Dirección",
            type: "textField",
            rules: [(val) => !!val || "Debe ingresar una dirección"],
          },
          {
            id: "email_empresa",
            vmodel: "",
            label: "Correo Electrónico",
            type: "textField",
            rules: [(val) => !!val || "Debe ingresar un correo"],
          },
        ];
      },
      set(newComp) {
        return newComp;
      },
    },
  },

  methods: {
    async empresa_form_post_data() {
      //var result = {};
      let result = new FormData();
      this.empresaItems.forEach(async (element) => {
        result.append(element.id, element.vmodel);

        //console.log(result.entries())
      });

      return result;
    },

    readFile(file) {
      return new Promise((resolve, reject) => {
        var fr = new FileReader();
        fr.onload = () => {
          resolve(fr.result);
        };
        fr.onerror = reject;
        fr.readAsText(file);
      });
    },
    async submit() {
      let self = this;
      if (this.$refs.companyForm.validateForm()) {
        let request = {
          method: "post",
          params: {},
          data:
            //JSON.stringify(
            await this.empresa_form_post_data(),
          //this.$refs.form,
          //),
          url: this.$store.state.organizacional_routes.empresa,
        };
        (this.responseTitle = "Respuesta"),
          await this.$store
            .dispatch("request_back", request)
            .then((value) => {
              this.responseText =
                "Se ha creado la empresa <b>" +
                value.data.nombre_empresa +
                "</b> exitosamente.";
              self.responseTitle = "Petición exitosa";
              self.responseColor = "success";
              self.redirection = true;
            })
            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                var errorResponse =
                  "<b>Error " + error.response.status + ": </b></br>";
                Object.values(error.response.data).forEach((errorElement) => {
                  errorResponse += errorElement + "</br>";
                });

                self.responseText = errorResponse;

                self.responseTitle = "Error en la edición de la empresa";
                self.responseColor = "error";
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
              }
              console.log(error.config);
            });
        this.showDialog = true;

        this.$refs.form.reset();
      }
    },
  },

  components: { BasicDynamicForm, SuccessDialog },
};
</script>
