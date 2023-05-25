<template>
  <div class="custom-radio">
    <div
      class="custom-radio__option"
      v-for="option in options"
      :key="option.id"
    >
      <input
        class="custom-radio__input"
        type="radio"
        :id="option.id"
        :name="option.name"
        :value="option.value"
        :checked="isRadioChecked(option.id)"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <label class="custom-radio__label" :for="option.id">{{
        option.label
      }}</label>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';

export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { modelValue, options } = toRefs(props);

    const isRadioChecked = (id) => {
      return options.value.find(
        (option) => option.id === id && option.value === modelValue.value
      );
    };

    return {
      isRadioChecked,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@utils/vars.scss';

.custom-radio {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  &__option {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__input {
    appearance: none;

    &:before {
      content: '';
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: $light-red;
      transition: $default-transition;
      cursor: pointer;
    }

    &:checked:before {
      background-color: $light-blue;
    }
  }
}
</style>
