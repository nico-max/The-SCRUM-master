<template>
  <div class="container pt-2">
    <v-row>
      <v-col cols="12" md="12">
        <v-form ref="form" flat>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              p="2"
              v-for="item_obj in form_items_data"
              :key="item_obj.id"
            >
              <v-textarea
                v-if="item_obj.type === 'textArea'"
                outlined
                v-model="item_obj.vmodel"
                :label="item_obj.label"
                :name="item_obj.id + 'form'"
                :rules="item_obj.rules"
                shaped
              ></v-textarea>
              <v-text-field
                v-else-if="item_obj.type === 'textField'"
                v-model="item_obj.vmodel"
                :label="item_obj.label"
                :name="item_obj.id + 'form'"
                :rules="item_obj.rules"
              ></v-text-field>
              <v-radio-group
                v-else-if="item_obj.type === 'radioGroup'"
                :name="item_obj.id + 'form'"
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
                :name="item_obj.id + 'form'"
                v-model="item_obj.vmodel"
                :items="item_obj.elements"
                :rules="item_obj.rules"
                :label="item_obj.label"
                required
              ></v-select>

              <v-file-input
                v-else-if="item_obj.type === 'image'"
                :rules="item_obj.rules"
                accept="image/png, image/jpeg, image/bmp"
                :placeholder="item_obj.placeholder"
                prepend-icon="mdi-camera"
                :label="item_obj.label"
                v-model="item_obj.vmodel"
                @change="preview_image(item_obj.vmodel, item_obj)"
                required
              ></v-file-input>
              <v-img
                v-if="item_obj.type === 'image'"
                :src="item_obj.url"
                width="100"
              ></v-img>
              <v-col v-else cols="12" sm="6" p="2"></v-col>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "basic-form-component",

  //Propiedades cargadas desde la inicializacion del componente
  props: {
    tableHeaderColor: {
      default: "primaryText--text primary ",
    },
    tableColor: { default: "background rounded-lg" },
    form_items: {
      type: Array,
      default: () => [],
    },

    tableHeaders: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      form_items_data: this.form_items,
      url: null,
    };
  },
  methods: {
    validateForm() {
      return this.$refs.form.validate();
      //alert('validada')
      //this.$emit('update:form_items', this.form_items_computed);
    },
    reset() {
      this.$refs.form.reset();
    },
    preview_image(img, url) {
      this.url = URL.createObjectURL(img);
      url.url = this.url;
    },
  },
  computed: {
    form_items_computed() {
      return this.form_items_data;
    },
  },
};
</script>
