<template>
  <v-container fluid>
    <v-card
      color="primary"
      class="elevation-0 mx-3 pa-0 mb-4 rounded-lg d-flex align-center justify-left primaryText--text"
      align-left
      min-height="100%"
    >
      <v-card-text class="py-0">
        <v-row dense class="shrink" align="center" justify="center">
          <v-col col="1" md="1" class="pa-0 ma-0">
            <v-checkbox color="primaryText" dark></v-checkbox>
          </v-col>

          <v-col col="11" md="11" class="pa-0 ma-0">
            <v-row dense class="shrink" align="center" justify="center">
              <v-col
                v-for="itemTitle in inboxHeaders"
                :key="itemTitle.value"
                col="1"
                md="2"
                class="pa-0 ma-0"
                ><template>
                  <div class="primaryText--text caption">
                    {{ itemTitle.text }}
                  </div></template
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card
      color="bodyBackground"
      class="elevation-0 mx-3 px-1 my-0 rounded-lg d-flex align-center justify-left"
      align-left
    >
      <v-list
        color="bodyBackground"
        class="pa-0"
        width="100%"
        style="height: 500px; overflow-y: scroll"
      >
        <v-list-item
          class="secondary rounded-lg mb-3"
          v-for="item in inboxItems"
          :key="item + 'Item'"
        >
          <template>
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.numero_radicado }}</v-list-item-title>
              <v-list-item-subtitle
                v-html="
                  '<b>Asunto: </b>' +
                  item.asunto +
                  ' <b>Tercero: </b>' +
                  item.tercero +
                  '<b>'
                "
              ></v-list-item-subtitle> </v-list-item-content
          ></template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
//import radicadoUrlConfig from '../../store/radicado-url-config';

export default {
  name: "inbox-component",

  //Propiedades cargadas desde la inicializacion del componente
  props: {
    itemsData: {
      default: [
        {
          numero_radicado: "0",
          title: "No hay radicados para mostrar",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll`,
        },
      ],
    },

    itemHeaders: {
      default: ["Id", "Carpeta", "Número radicado", "Asunto", "tercero"],
    },
  },

  //Uso de las propiedades para ligarlas a data
  data() {
    return {
      inboxItems: this.itemsData,
      inboxHeaders: this.itemHeaders,
      active: false,
    };
  },
};
</script>
