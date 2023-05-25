<script>
import {h} from "vue";

export default {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function() {
    return h('h' + this.level, {
      class: 'custom-h'
    }, this.$slots.default());
  }
};
</script>

<style lang="scss">
h1.custom-h {
  font-size: 42px;
}

.custom-h {
  margin-bottom: 20px;
}
</style>