<template>
  <div>
    <div class="container pt-2">
      <v-row>
        <v-col cols="12" md="6">
          <div class="pl-4">
            <v-card
              color="primary"
              class="elevation-0 mr-0 py-2 px-3 mb-2 rounded-lg d-flex align-center justify-left"
              height="70px"
              align-left
            >
              <div class="container primaryText--text">
                <h2>Radicación de Entrada.</h2>
              </div>
            </v-card>
            <v-row>
              <v-col cols="12" md="6" p="1">
                <v-card
                  :loading="loading"
                  color="primary"
                  class="elevation-0 px-1 my-1 rounded-lg d-flex align-center justify-left"
                  height="100%"
                >
                </v-card>
              </v-col>
              <v-col cols="12" md="6" p="1">
                <v-card
                  :loading="loading"
                  color="secondary"
                  class="elevation-0 px-1 my-1 rounded-lg d-flex align-center justify-left"
                  height="100%"
                >
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            :loading="loading"
            color="secondary"
            class="elevation-0 mr-4 px-1 my-1 rounded-lg d-flex align-center justify-left"
            height="100%"
          >
            <v-row class="cyan-accent">
              <v-col cols="12" md="12" p="1">
                <v-tabs color="#deffff" background-color="transparent">
                  <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                  <v-tab class="argo-tab-item">Registro</v-tab>
                  <v-tab class="argo-tab-item">Historico</v-tab>
                  <v-tab class="argo-tab-item">Anexos</v-tab>
                  <v-tab class="argo-tab-item">cuatro</v-tab>
                  <v-tab class="argo-tab-item">cinco</v-tab>

                  <v-tab-item class="argo-component" outlined>
                    <v-form ref="form" flat>
                      <v-row justify="center">
                        <v-col xs="6" sm="3">
                          <v-card class="pa-3 mt-2" outlined tile
                            >DD / MM / AAAA 19 / 07 / 2022</v-card
                          >
                        </v-col>
                        <v-col xs="6" sm="3" p="1">
                          <v-text-field
                            v-model="form_radicado.referencia"
                            label="Referencia"
                          ></v-text-field>
                        </v-col>
                        <v-col xs="6" sm="3">
                          <v-text-field
                            v-model="form_radicado.guia"
                            label="Guia"
                          ></v-text-field>
                        </v-col>
                        <v-col xs="6" sm="3">
                          <v-text-field
                            v-model="form_radicado.fecha_documento"
                            label="Fecha_documento"
                          ></v-text-field>
                        </v-col>
                        <v-col xs="12" sm="12">
                          <v-card class="argo-component" outlined tile>
                            <v-row>
                              <v-col cols="6" sm="3">
                                <div class="control-usuario-radicador">
                                  <v-btn
                                    @click="add"
                                    fab
                                    dark
                                    small
                                    color="primary"
                                  >
                                    <v-icon dark> mdi-plus </v-icon>
                                  </v-btn>
                                </div>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <div
                            v-for="(
                              tercero_actual, key
                            ) in form_terceros_actual"
                            v-bind:key="key"
                          >
                            <v-card class="argo-component" outlined tile>
                              <v-row>
                                <v-col
                                  cols="6"
                                  sm="3"
                                  md="2"
                                  v-for="item_obj in tercero_actual"
                                  :key="item_obj.id"
                                >
                                  <v-text-field
                                    v-model="item_obj.vmodel"
                                    :label="item_obj.label"
                                  ></v-text-field>
                                </v-col>
                                <v-btn
                                  @click="remove(key)"
                                  fab
                                  dark
                                  small
                                  color="secondary"
                                >
                                  <v-icon dark> mdi-minus </v-icon>
                                </v-btn>
                              </v-row>
                            </v-card>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12"> </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" sm="12">
                          <v-card class="argo-component" outlined tile>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="6"
                                p="2"
                                v-for="item_obj in form_radicado"
                                :key="item_obj.id"
                              >
                                <v-textarea
                                  v-if="item_obj.type === 'textArea'"
                                  outlined
                                  v-model="item_obj.vmodel"
                                  :label="item_obj.label"
                                  :name="key"
                                  :rules="item_obj.rules"
                                  shaped
                                ></v-textarea>
                                <v-text-field
                                  v-else-if="item_obj.type === 'textField'"
                                  v-model="item_obj.vmodel"
                                  :label="item_obj.label"
                                  :name="key"
                                  :rules="item_obj.rules"
                                ></v-text-field>
                                <v-radio-group
                                  v-else-if="item_obj.type === 'radioGroup'"
                                  :name="key"
                                  :rules="item_obj.rules"
                                >
                                  {{ item_obj.label }}
                                  <v-radio
                                    v-for="n in item_obj.elements"
                                    :key="n.id"
                                    :label="n.label"
                                    :value="n.id"
                                  ></v-radio>
                                </v-radio-group>
                                <v-select
                                  v-else-if="item_obj.type === 'select'"
                                  :name="item_obj.id"
                                  v-model="item_obj.vmodel"
                                  :items="item_obj.elements"
                                  item-text="label"
                                  item-value="id"
                                  :rules="item_obj.rules"
                                  color="pink"
                                  :label="item_obj.label"
                                  required
                                ></v-select>
                                <v-col v-else cols="12" sm="6" p="2"></v-col>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-btn color="success" class="mr-4" v-on:click="radicar()"
                        >Radicar</v-btn
                      >

                      <v-btn color="error" class="mr-4" @click="reset"
                        >Reset</v-btn
                      >
                    </v-form>
                    <SuccessDialog
                      v-model="showDialog"
                      :text="responseText"
                      close="Cerrar"
                      :title="responseTitle"
                    ></SuccessDialog>
                  </v-tab-item>
                  <v-tab-item> item 2 </v-tab-item>
                  <v-tab-item> item 3 </v-tab-item>
                  <v-tab-item> item 4 </v-tab-item>
                  <v-tab-item> item 5 </v-tab-item>
                </v-tabs>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SuccessDialog from "../../components/dialogs/SuccessDialog.vue";
export default {
  name: "EditDocv2",
  data: () => ({
    item_radicado: [
      { name: "Registro" },
      { name: "Historico" },
      { name: "Anexo" },
      { name: "uno mas" },
      { name: "dos mas" },
    ],
    form_radicado: [
      {
        id: "asunto_radicado",
        vmodel: "",
        label: "Asunto",
        type: "textArea",
        rules: [(val) => !!val || "Debe ingresar un asunto"],
      },
      {
        id: "medio_recepcion_radicado",
        vmodel: "",
        label: "Medio de Recepción / Envío",
        type: "select",
        elements: [
          {
            id: 1,
            label: "Correo",
          },
          {
            id: 2,
            label: "Telefono",
          },
        ],
        rules: [(v) => !!v || "Debe ingresar una opción"],
      },
      {
        id: "no_folios_radicado",
        vmodel: "",
        label: "No. Folios",
        type: "textField",
      },
      {
        id: "no_anexos_radicado",
        vmodel: "",
        label: "No. Anexos",
        type: "textField",
      },
      {
        id: "apoderado_radicado",
        vmodel: "",
        label: "Apoderado",
        type: "textField",
      },
      {
        id: "descripcion_anexos_radicado",
        vmodel: "",
        label: "Descripción Anexos",
        type: "textField",
      },
      {
        id: "demandante_radicado",
        vmodel: "",
        label: "Demandante",
        type: "textField",
      },
      {
        id: "dependencia_radicado",
        vmodel: "",
        label: "*Dependencia",
        type: "select",
        elements: [
          {
            id: 1,
            label: "905 - Pruebas",
          },
          { id: 2, label: "909 - Administrador" },
        ],
      },
      {
        id: "tramite_radicado",
        vmodel: "",
        label: "Trámite y Servicio",
        type: "select",
        elements: [
          {
            id: 1,
            label: "Solicitud",
          },
        ],
      },
      {
        id: "vacio",
        vmodel: "",
        label: "",
        type: "a",
      },
      {
        id: "nivel_seguridad_radicado",
        vmodel: "",
        label: "Nivel de Seguridad",
        type: "radioGroup",
        elements: [
          { id: "publico", label: "Público" },
          {
            id: "privado_usuario",
            label: "Privado solo jefe y Ususarios Actuales de Radicados.",
          },
          {
            id: "privado_dependencia",
            label: "Privado dependencia (Solo usuarios Dependencias).",
          },
        ],
      },
    ],
    form_terceros_actual: [],
    item_tercero: [],
    count_destinatarios: 0,
    values: {},
    //Dialog
    showDialog: false,
    responseText: "",
    responseTitle: "",
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    add: function () {
      this.form_terceros_actual.push(this.form_tercero_base);
      this.count_destinatarios++;
    },
    remove: function (counter) {
      if (this.count_destinatarios > 0) {
        this.form_terceros_actual.splice(counter, 1);
        this.count_destinatarios--;
      }
    },
    terceros_form_post_data: function () {
      var result = {};
      for (let item = this.form_terceros_actual.length - 1; item >= 0; item--) {
        result[item] = this.reduce_post_data(this.form_terceros_actual[item]);
      }
      return result;
    },
    reduce_post_data: function (object) {
      var result = {};
      object.map(function (item) {
        result[item.id] = item.vmodel;
      });
      return result;
    },
    async radicar() {
      //let datarequest = { user: 'usuario', pw: 'pass'};
      //let dataq = {data: datarequest , url:'/radicado/' , method:'post', params:null};
      if (this.$refs.form.validate()) {
        let request = {
          method: "post",
          params: {},
          data: JSON.stringify({
            form_data_radicado: this.radicado_form_post_data,
            form_data_terceros: this.terceros_form_post_data(),
          }),
          url: this.$store.state.radicado_routes.crear,
        };
        (this.responseTitle = "Respuesta"),
          await this.$store
            .dispatch("request_back", request)
            .then((value) => {
              this.responseText =
                "Se ha creado el radicado " + value.data + " exitosamente.";
            })
            .catch(function (error) {
              this.responseText = "No se pudo crear el radicado: " + error;
            });
        this.showDialog = true;

        this.$refs.form.reset();
      }
    },
    async buscar() {
      axios
        .get(this.$store.state.organizacional_path + "tipoIdentificacion/")
        .then((response) => {
          this.item_tercero = response.data;
        });
    },
  },
  computed: {
    radicado_form_post_data() {
      return this.reduce_post_data(this.form_radicado);
    },
    form_tercero_base() {
      return [
        {
          id: "tipo_id_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Tipo de identificación",
        },
        {
          id: "numero_id_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Número de Identificación",
        },
        {
          id: "nombres_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Nombres",
        },
        {
          id: "apellidos_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Apellidos",
        },
        {
          id: "telefono_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Teléfono",
        },
        {
          id: "direccion_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Dirección",
        },
        {
          id: "email_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Correo Electrónico",
        },
        {
          id: "pais_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "País",
        },
        {
          id: "departamento_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Departamento",
        },
        {
          id: "municipio_tercero_" + this.count_destinatarios,
          vmodel: "",
          label: "Municipio",
        },
      ];
    },
  },
  components: { SuccessDialog },
};
</script>
