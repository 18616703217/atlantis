<template>
  <el-select v-model="id" placeholder="请选择" :filterable="filterable">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.description || item.storeName"
      :value="item.id"
    />
  </el-select>
</template>

<script>
import { getEngineIdByType } from './util'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'engineType'
    },
    filterable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { id: this.value }
  },
  computed: {
    options() {
      switch (this.type) {
        case 'engineType':
          return this.$store.state.basic.engineTypes

        case 'storeType':
          return this.$store.state.basic.storeTypes

        default:
          return this.$store.state.basic.engineTypes
      }
    }
  },
  watch: {
    id(v) {
      this.$emit('input', v)
    },
    value(v) {
      this.id = v
    }
  },
  created() {
    if (!this.id && this.type === 'engineType') {
      this.id = getEngineIdByType('INTERFAC')
    }
  },
  methods: {
    handleChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>
