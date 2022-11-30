<template>
  <div>
    <v-container grid-list-xs>
      <v-card
        color="primary"
        class="elevation-0 mx-3 px-1 my-1 rounded-lg d-flex align-center justify-left"
        height="100%"
        align-left
      >
        <v-container flex>
          <v-row align="center" justify="start" class="pa-0 ma-0">
            <v-col cols="1" align="center" class="pa-0 ma-0">
              <div class="d-flex justify-center">
                <inbox-icon
                  class="primaryText--text"
                  width="30"
                  height="30"
                ></inbox-icon>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="primaryText--text text-h5 font-weight-bold mx-2">
                Bandeja de Entrada
              </div>
            </v-col>
            <v-col cols="4">
              <div
                class="mx-3 my-1 px-4 py-0 rounded-lg d-flex align-center justify-center"
              >
                <button flat>
                  <v-icon class="primaryText--text"
                    >mdi-archive-search-outline</v-icon
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
            </v-col>
            <v-col cols="4">
              <v-tabs
                background-color="primary"
                :height="$vuetify.breakpoint.xs ? '95%' : '30px'"
                :vertical="$vuetify.breakpoint.xs"
              >
                <v-tab>
                  <div
                    class="primaryText--text caption font-weight-bold text-center"
                  >
                    Todos
                  </div>
                </v-tab>
                <v-tab>
                  <div
                    class="primaryText--text caption font-weight-bold text-center"
                  >
                    Nuevos
                  </div>
                </v-tab>
                <v-tab>
                  <div
                    class="primaryText--text caption font-weight-bold text-center"
                  >
                    Leídos
                  </div>
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <inbox-toolbar> </inbox-toolbar>

      <inbox-component
        :itemHeaders="headers"
        :itemsData="itemsInbox"
      ></inbox-component
      >}

      <v-card
        color="secondary"
        class="elevation-0 mx-3 my-2 px-1 rounded-lg child-flex align-center justify-center"
        align-center
      >
      </v-card>
    </v-container>
    <v-col cols="12" sm="12" md="12"> </v-col>

    <v-dialog v-model="dialog" persistent max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark"
          fab
          dark
          color="teal"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Registro Documentos</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="1">
                <v-btn class="theme--dark" color="teal" @click="tercero = true">
                  +
                </v-btn>
              </v-col>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="busqueda.nombre"
                    label="Nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="busqueda.correo"
                    label="Correo electrónico"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="busqueda.documento"
                    label="Documento"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-btn
                    class="theme--dark"
                    color="teal"
                    @click="buscarTercero"
                  >
                    busqueda
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-card v-if="terceros.length != 0">
                    <v-container grid-list-xs>
                      <v-card-title primary-title> Terceros </v-card-title>
                      <v-card-text>
                        <v-data-table
                          :headers="tercerosHeaders"
                          :items="terceros"
                          :items-per-page="5"
                          class="elevation-1"
                          @click:row="agregarTercero"
                        >
                        </v-data-table>
                      </v-card-text>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="newtercero.asunto"
                    label="Asunto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-row>
            <v-btn class="theme--dark" color="teal" @click="group = true">
              grupo
            </v-btn>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" text @click="validateTercero">
            Generar consecutivo
          </v-btn>
          <v-btn color="secondary" text @click="dialog = false">
            Digitalizar
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn color="error" text @click="dialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="tercero" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Creación Terceros</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="newtercero.tipo_tercero"
                    :items="this.tipo_terceros"
                    item-text="nombre"
                    item-value="id"
                    label="Tipo tercero"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                  <v-text-field
                    v-model="newtercero.nombre"
                    label="Nombre/Razón social"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="newtercero.tipo_identificación"
                    :items="this.tipo_identificaciones"
                    item-text="sigla"
                    item-value="id"
                    label="Tipo de identificación"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="newtercero.numero_identificacion"
                    label="Número de identificación"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="newtercero.correo"
                    label="Correo electrónico"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="newtercero.direccion"
                    label="Dirección"
                  ></v-text-field>
                </v-col>
                <!--  -->
                <v-row
                  v-if="extraubicacion"
                  persistent
                  max-width="900px"
                  cols="12"
                  sm="6"
                  md="12"
                >
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="newtercero.pais"
                      label="Pais"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="newtercero.region"
                      label="Departamento/Estado"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="newtercero.ciudad"
                      label="Ciudad"
                    ></v-text-field>
                  </v-col>

                  <!--  -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="newtercero.zipcode"
                      label="Codigo ZIP"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn color="brown" text @click="agregarUbicacion">
                  Especificar ubicación
                </v-btn>
                <v-btn color="brown" text @click="showmapita">
                  Encontrar
                </v-btn>
                <l-map
                  v-if="showMap"
                  :zoom="zoom"
                  :center="center"
                  :options="mapOptions"
                  style="z-index: 0; height: 300px"
                  @update:center="centerUpdate"
                  @update:zoom="zoomUpdate"
                >
                  <l-tile-layer :url="url" :attribution="attribution" />
                  <l-marker :lat-lng="withTooltip">
                    <l-tooltip
                      :options="{ permanent: true, interactive: true }"
                    >
                      <div>Aqui</div>
                    </l-tooltip>
                  </l-marker>
                </l-map>

                <!--  -->
                <v-col
                  cols="12"
                  sm="6"
                  md="7"
                  v-for="contacto in newtercero.contacto_set"
                  :key="contacto.id"
                >
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
                </v-col>
                <v-col cols="12" sm="6" md="8">
                  <v-btn color="success" text @click="agregarContacto">
                    contacto +
                  </v-btn>
                  <v-btn color="success" text @click="deleteContacto">
                    contacto -
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue-grey" text @click="reset"> Limpiar </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="create_tercero"> Crear </v-btn>
          <v-btn color="error" text @click="tercero = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="group" persistent max-width="900px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Elegir Grupo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-treeview
              item-text="nombre"
              item-value="id"
              open-on-click
              rounded
              hoverable
              activatable
              :items="this.grupos"
            >
              <template #label="{ item }">
                <span @click="grupo(item)">{{ item.nombre }}</span>
              </template>
            </v-treeview>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue-grey" text @click="group = false"> Limpiar </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="group = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import InboxIcon from "../../components/icons/InboxIcon.vue";
import InboxToolbar from "./InboxToolbar.vue";
import InboxComponent from "./InboxComponent.vue";

export default {
  name: "Radicado",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    InboxIcon,
    InboxToolbar,
    InboxComponent,
  },
  data: () => ({
    itemsInbox: [],
    headers: [],
    tipo_terceros: [],
    tipo_identificaciones: [],
    zoom: 17,
    latitudMapa: 0,
    longitudMapa: 0,
    center: latLng(4.733994, -74.052752),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    withTooltip: latLng(4.733994, -74.052752),
    currentZoom: 11.5,
    currentCenter: latLng(4.733994, -74.052752),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5,
    },
    showMap: false,
    dialog: false,
    group: false,
    tercero: false,
    newcontact: false,
    extraubicacion: false,
    terceros: [],
    tercerosHeaders: [],
    busqueda: {
      nombre: null,
      correo: null,
      documento: null,
    },
    newtercero: {
      oldtercero: null,
      asunto: "",
      tipo_tercero: "",
      nombre: "",
      tipo_identificación: "",
      numero_identificacion: "",
      correo: "",
      direccion: "",
      ubicacion: 1,
      activo: true,
      contacto_set: [{ id: null, tipo_id: "", contacto: "" }],
      grupo: "",
      zipcode: "",
      pais: "",
      region: "",
      ciudad: "",
      latitud: "",
      longitud: "",
    },
    grupos: [],
  }),
  async mounted() {
    var ref = this;
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
    axios
      .get(this.$store.state.organizacional_path + "grupo/")
      .then((response) => {
        this.grupos = response.data;
      });
    axios
      .get(this.$store.state.radicado_routes.radicado)
      .then((response) => {
        let responseData = JSON.parse(JSON.stringify(response.data));
        responseData.forEach((element) => {
          ref.itemsInbox.push(element);
        });
        ref.itemsInbox = JSON.parse(JSON.stringify(response.data));
        console.log(this.itemsInbox);
        let hh = Object.keys(this.itemsInbox[0]);
        hh.forEach((element) => {
          this.headers.push({ id: "0", text: element, value: element });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    reset() {
      this.$refs.form.reset();
    },
    radicar() {
      this.$refs.form.reset();
    },
    agregarContacto() {
      this.newtercero.contacto_set.push({
        id: null,
        tipo_id: "",
        contacto: "",
      });
    },
    agregarUbicacion() {
      this.extraubicacion = !this.extraubicacion;
    },
    showmapita() {
      if (this.newtercero.ciudad != "") {
        this.showMap = !this.showMap;
        axios
          .get(
            "http://localhost:4000/v1/search?size=15&text=" +
              this.newtercero.ciudad
          )
          .then((response) => {
            this.longitudMapa =
              response.data.features[0].geometry.coordinates[0];
            this.latitudMapa =
              response.data.features[0].geometry.coordinates[1];
            this.currentCenter = latLng(this.latitudMapa, this.longitudMapa);
            this.center = latLng(this.latitudMapa, this.longitudMapa);
            this.withTooltip = latLng(this.latitudMapa, this.longitudMapa);
          });
      }
    },
    deleteContacto() {
      if (this.newtercero.contacto_set.length >= 2)
        this.newtercero.contacto_set.pop({
          id: null,
          tipo_id: "",
          contacto: "",
        });
    },
    validateTercero() {
      axios
        .post(this.$store.state.radicado_path + "radicado/", this.newtercero)
        .then(() => {
          this.$swal.fire({
            position: "top",
            icon: "success",
            title: "Radicado creado satisfactoriamente",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    buscarTercero() {
      if (this.busqueda.nombre == "") {
        this.busqueda.nombre = null;
      }
      if (this.busqueda.correo == "") {
        this.busqueda.correo = null;
      }
      if (this.busqueda.documento == "") {
        this.busqueda.documento = null;
      }

      axios
        .get(this.$store.state.tercero_path + "tercero/", {
          params: {
            nombre__icontains: this.busqueda.nombre,
            correo__icontains: this.busqueda.correo,
            numero_identificacion__icontains: this.busqueda.documento,
            activo: true,
          },
        })
        .then((response) => {
          this.terceros = response.data;
          let temp = ["nombre", "correo", "numero_identificacion", "direccion"];
          this.tercerosHeaders = [];
          temp.forEach((element) => {
            this.tercerosHeaders.push({ text: element, value: element });
          });
        });
    },
    agregarTercero(item) {
      this.newtercero.oldtercero = item.id;
      this.$swal.fire({
        position: "top",
        icon: "success",
        title: "Tercero Agregado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    grupo(item) {
      this.newtercero.grupo = item.id;
    },
    create_tercero() {
      //// crear un validador de campos terceros
      if (this.newtercero.nombre != "") {
        this.tercero = false;
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tercero creado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
};
</script>
