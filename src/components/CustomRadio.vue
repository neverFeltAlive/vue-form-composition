<template>
  <div class="custom-radio">
    <div class="custom-radio__option" v-for="option in options" :key="option.id" @click.prevent="handleClick($event, option.value)">
      <input class="custom-radio__input" type="radio" :id="option.id" :name="option.name" :value="option.value" :checked="idRadioChecked(option.id)">
      <label class="custom-radio__label" :for="option.id">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleClick(event, value) {
      this.$emit('update:modelValue', (!this.required && value === this.modelValue) ? '' : value);
    },
    idRadioChecked(id) {
      return this.options.find((option) => option.id === id && option.value === this.modelValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@utils/vars.scss";

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