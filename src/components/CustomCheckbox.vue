<template>
  <div class="custom-checkbox">
    <div class="custom-checkbox__inner">
      <input ref="input" type="checkbox" class="custom-checkbox__input" :id="name" :name="name" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" :required="required">
      <label class="custom-checkbox__checkbox" :for="name">{{ label }}</label>
    </div>
    <div class="custom-checkbox__error" :class="{checked: modelValue}" v-if="required" v-fade="!modelValue">This checkbox is required</div>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@utils/vars.scss";

.custom-checkbox {
  margin-bottom: 20px;

  &__inner {
    display: flex;
    align-self: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__input {
    appearance: none;
    display: flex;
    align-self: center;
    gap: 10px;

    &:before {
      content: '';
      display: inline-block;
      border-radius: 4px;
      width: 18px;
      height: 18px;
      background-color: $light-red;
      transition: $default-transition;
      cursor: pointer;
    }

    &:checked::before {
      background-color: $light-blue;
    }
  }

  &__error {
    color: $light-red;
    transition: $default-transition;
  }
}
</style>