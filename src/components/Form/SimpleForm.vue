<script>
import { ref, watch } from 'vue';

import CustomCheckbox from '@components/CustomCheckbox.vue';
import CustomInput from '@components/CustomInput.vue';
import CustomPopup from '@components/CustomPopup.vue';
import CustomRadio from '@components/CustomRadio.vue';
import useCustomForm from '@components/Form/useCustomForm.js';

export default {
  components: {
    CustomRadio,
    CustomInput,
    CustomCheckbox,
    CustomPopup,
  },
  props: ['title'],
  setup() {
    const isPopupVisible = ref(false);

    const { inputs, isFormValid, radioSelection, checkbox } = useCustomForm();

    const submitHandler = () => {
      if (!isFormValid.value) return;

      isPopupVisible.value = true;
    };

    const validateName = (value) => {
      if (value.length < 4 || value.length >= 12) {
        return 'Your name should be between 4 and 12 characters';
      }
      return false;
    };

    const validatePassword = (value) => {
      if (value.length < 4 || value.length >= 12) {
        return 'Your password should be between 4 and 12 characters';
      }

      const regExp = /[a-zA-Z0-9!@#$%^&*]/;
      if (!regExp.test(value)) {
        return 'Your password contains unsupported symbols';
      }

      return false;
    };

    const validateNumber = (value) =>
      value < 5 ? 'Your number should be bigger than 5' : false;

    watch(radioSelection, (old, newValue) => {
      console.log(newValue);
    });

    return {
      validateNumber,
      validateName,
      validatePassword,
      submitHandler,
      inputs,
      isFormValid,
      radioSelection,
      checkbox,
      isPopupVisible,
    };
  },
};
</script>

<template>
  <custom-heading level="1">{{ title }}</custom-heading>
  <form class="custom-form" @submit.prevent="submitHandler">
    <custom-input
      type="text"
      v-model="inputs.nameInput.value"
      v-model:is-valid="inputs.nameInput.isValid"
      label="Name"
      name="name"
      :validate="validateName"
      placeholder="Введите имя..."
    />
    <custom-input
      type="password"
      v-model="inputs.password.value"
      v-model:is-valid="inputs.password.isValid"
      label="Password"
      name="pwd"
      :validate="validatePassword"
      placeholder="Введите парль..."
    />
    <custom-input
      type="number"
      v-model="inputs.number.value"
      v-model:is-valid="inputs.number.isValid"
      label="Number"
      name="number"
      :validate="validateNumber"
    />
    <custom-checkbox
      class="custom-form__checkbox"
      v-model="checkbox"
      label="Checkbox"
      name="checkbox"
      required
    />
    <custom-radio
      v-model="radioSelection"
      :options="[
        { id: 'option-1', value: 'option-1', label: 'first', name: 'first' },
        { id: 'option-2', value: 'option-2', label: 'second', name: 'second' },
      ]"
    ></custom-radio>
    <custom-button :disabled="!isFormValid" class="custom-form__button"
      >Отправить</custom-button
    >
  </form>
  <custom-popup v-model:is-visible="isPopupVisible">
    <template v-slot="closePopup">
      <custom-heading level="4"
        >Name: {{ inputs.nameInput.value }}</custom-heading
      >
      <custom-heading level="4"
        >Password: {{ inputs.password.value }}</custom-heading
      >
      <custom-heading level="4"
        >Number: {{ inputs.number.value }}</custom-heading
      >
      <custom-heading level="4"
        >Checkbox: {{ checkbox ? 'on' : 'off' }}</custom-heading
      >
      <custom-heading level="4"
        >Selected Radio: {{ radioSelection }}</custom-heading
      >
      <custom-button @click="closePopup">Close</custom-button>
    </template>
  </custom-popup>
</template>

<style scoped lang="scss">
.custom-form {
  display: flex;
  flex-direction: column;

  &__button {
    align-self: flex-end;
  }

  &__checkbox {
    align-self: flex-start;
  }
}
</style>
