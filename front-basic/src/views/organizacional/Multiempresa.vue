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
              Módulo de Empresas
            </div>
          </v-col>
          <v-col cols="4">
            <!-- Campo de Búsqueda
            <div
              class="mx-3 my-1 px-4 py-0 rounded-lg d-flex align-center justify-center"
            >
              <button flat>
                <v-icon class="primaryText--text" large
                  >mdi-card-search-outline</v-icon
                >
              </button>
              <v-text-field
                class="py-0 px-3 ma-0 primaryText--text centered-input rounded-pill"
                background-color="primaryInput"
                dark
                placeholder="Búsqueda en bandeja"
                filled
                hide-details
                dense
                rounded
              ></v-text-field>
            </div>
            -->
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!--Header end-->
    <v-card
      color="secondary"
      class="elevation-0 mx-4 px-0 my-4 rounded-lg d-flex align-center justify-left"
      height="100%"
    >
      <v-container flex>
        <v-row align="center" justify="start" class="pa-0 ma-0">
          <v-col cols="12" align="left" class="pa-0 ma-0">
            <div
              class="primary lighten-1 primaryText--text text-h5 font-weight-bold mx-0 py-3 px-6 rounded-t-lg"
            >
              Lista de Empresas
            </div>
          </v-col>
          <v-col cols="12" align="right" class="px-3 ma-0">
            <v-btn
              class="accent primaryText--text elevation-1"
              outlined
              :to="{ name: 'CrearEmpresa' }"
            >
              <v-icon small class="mr-2 primaryText--text"> mdi-plus </v-icon>
              Nuevo</v-btn
            >
          </v-col>

          <v-col cols="12" align="center" class="px-3 ma-0">
            <ArgoTable
              :tableItems.sync="empresas"
              :table-headers="empresaHeaders"
              @click:row="detalleEmpresa(props.item)"
            >
              <template v-slot:item.actions="{ item }">
                <v-btn
                  class="primary--text elevation-0"
                  :to="{ name: 'EditarEmpresa', params: { id: item.id } }"
                  plain
                >
                  <v-icon small class="mr-2 primary--text"> mdi-pencil </v-icon>
                </v-btn>
                <v-btn
                  class="primary--text elevation-0"
                  @click="deleteItem(item)"
                  plain
                >
                  <v-icon small class="mr-2 primary--text"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <template v-slot:item.nombre_empresa="props">
                <v-edit-dialog
                  @click:row="props.item.opciones;"
                  @open="detalleEmpresa(props.item)"
                >
                  {{ props.item.nombre_empresa }}
                  <v-icon small> mdi-detail </v-icon>
                </v-edit-dialog>
              </template>
            </ArgoTable>
          </v-col>
        </v-row>
        <v-dialog v-model="dialogDelete" max-width="530px">
          <v-card>
            <v-card-title class="text-h5 justify-center"
              >¿Seguro que desea eliminar este registro?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success darken-1" @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="error darken-1" @click="deleteItemConfirm"
                >Eliminar</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <SuccessDialog
          v-model="showDialog"
          :text="responseText"
          close="Cerrar"
          :title="responseTitle"
          :color="responseColor"
        ></SuccessDialog>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import ArgoTable from "../../components/ArgoTable.vue";
import SuccessDialog from "../../components/dialogs/SuccessDialog.vue";

export default {
  data: () => ({
    items_empresa: [{}],

    url: "multiempresa/",

    //Delete data
    dialog: false,
    dialogDelete: false,
    editedItem: "",
    //Delete result dialog
    showDialog: false,
    responseText: "",
    responseTitle: "",
    responseColor: "primary",
  }),
  methods: {
    detalleEmpresa(item) {
      //console.log("row click "+ item.nombre_empresa)
      this.$router.push({
        name: "DetalleEmpresa",
        params: { id: item.id },
      });
    },
    async getEmpresas() {
      let request = {
        method: "get",
        params: {},
        data: {},
        url: this.$store.state.organizacional_routes.empresa,
      };
      (this.responseTitle = "Respuesta"),
        await this.$store
          .dispatch("request_back", request)
          .then((value) => {
            this.items_empresa = value.data;
            //this.responseText = "Se han cargado las empresas";
          })
          .catch(function (error) {
            this.responseText = "No se pudo cargar las empresas: " + error;
          });
    },
    //Delete dialog
    deleteItem(item) {
      //this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = item.id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      //this.desserts.splice(this.editedIndex, 1)
      let self = this;

      let request = {
        method: "delete",
        params: {},
        url: this.$store.state.organizacional_routes.empresa + this.editedItem,
      };
      (this.responseTitle = "Respuesta"),
        await this.$store
          .dispatch("request_back", request)
          .then(() => {
            this.responseText = "Se ha borrado la empresa exitosamente.";
            self.responseTitle = "Petición exitosa";
            self.responseColor = "success";
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

              self.responseTitle = "Error en la creación de la empresa";
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

      this.closeDelete();
      this.getEmpresas();
    },

    close() {
      this.dialog = false;
      /** 
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        */
    },

    closeDelete() {
      this.dialogDelete = false;
      /** 
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        */
    },
  },
  computed: {
    empresas() {
      //console.log(JSON.stringify(this.items_empresa));
      return this.items_empresa;
    },
    empresaHeaders() {
      return [
        { value: "nombre_empresa", text: "Nombre" },
        { value: "nit_empresa", text: "NIT" },
        { value: "dir_empresa", text: "Dirección" },
        //{ value: "logo_empresa", text: "logo" },
        { value: "actions", text: "Acciones" },
      ];
    },
  },
  mounted() {
    this.getEmpresas();
  },
  components: { ArgoTable, SuccessDialog },
};
</script>
