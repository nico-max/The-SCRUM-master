<template>
  <v-container fluid>
    <v-data-table
      :headers="processedItemHeaders"
      :items="itemsa"
      show-select
      :class="dataColor"
    >
      <template v-slot:header.data-table-select="{ on, props }">
        <v-simple-checkbox color="primaryText" v-bind="props" v-on="on">
        </v-simple-checkbox>
      </template>

      <!-- pass through scoped slots -->
      <template
        v-for="(_, scopedSlotName) in $scopedSlots"
        v-slot:[scopedSlotName]="slotData"
      >
        <slot :name="scopedSlotName" v-bind="slotData" />
      </template>

      <!-- pass through normal slots -->
      <template v-for="(_, slotName) in $slots" v-slot:[slotName]>
        <slot :name="slotName" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "table-component",

  //Propiedades cargadas desde la inicializacion del componente
  props: {
    tableHeaderColor: {
      default: "primaryText--text primary lighten-1 ",
    },
    tableColor: { default: "background rounded-lg" },
    tableItems: {
      type: Array,
      default: () => [],
    },

    tableHeaders: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    tableItems: function (newValue) {
      this.itemsa = newValue;
    },
  },
  data() {
    return {
      disabledValue: true,
      selectedItem: [],
      itemsa: this.tableItems,
      itemHeaders: this.tableHeaders,
      dataHeaderColor: this.tableHeaderColor,
      dataColor: this.tableColor,
      active: false,
    };
  },
  computed: {
    processedItemHeaders() {
      var headers = [];
      var headerItem = {};
      this.itemHeaders.forEach((element) => {
        headerItem = {
          value: element["value"],
          text: element["text"],
          class: this.dataHeaderColor,
        };

        headers.push(headerItem);
      });
      return headers;
    },
  },

  methods: {
    getColourDisabled(disabledValue) {
      if (disabledValue) {
        return "primaryText--text";
      } else {
        return "primaryText--text";
      }
    },

    processItems() {
      this.itemsa = this.tableItems;
    },
  },
};
</script>

<style scoped>
::v-deep .v-data-table-header {
  background-color: var(--v-primary-lighten1);
}

.v-input--checkbox::v-deep .v-label,
.v-icon {
  color: white;
}
</style>
