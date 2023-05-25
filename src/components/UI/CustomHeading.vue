<script>
import { h, toRefs } from 'vue';

export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { level } = toRefs(props);
    return () => {
      return h(
        'h' + level.value,
        {
          class: 'custom-h',
        },
        slots.default()
      );
    };
  },
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
