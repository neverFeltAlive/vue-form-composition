<template>
  <div class="custom-input">
    <label :for="name">{{ label }}:</label>
    <input
        class="custom-input__input"
        :id="name"
        :class="{ error: !!errorMessage }"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="onBlur"
    >
    <div class="custom-input__error" v-fade="!isValid && errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: true,
    },
    validate: {
      required: true
    },
    placeholder: {
      default: '...',
    },
  },
  emits: ['update:modelValue', 'update:isValid'],
  data(){
    return {
      errorMessage: null
    };
  },
  methods: {
    onBlur(event){
      const value = event.target.value;
      const error = this.validate(value);

      this.errorMessage = value.length === 0 ? '' : error;
      this.$emit('update:isValid', !error);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@utils/vars.scss";

.custom-input {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
  margin-bottom: 20px;

  &__input {
    padding: 10px 15px;
    border: 2px solid $light-blue;
    border-radius: 8px;
    transition: $default-transition;
    width: 400px;

    &.error {
      border-color: $light-red;
    }
  }

  &__error {
    color: $light-red;
    font-size: 12px;
    height: 12px;
    transition: $default-transition;
  }
}
</style>