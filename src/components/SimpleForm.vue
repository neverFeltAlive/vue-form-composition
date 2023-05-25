<script>
import CustomInput from "@components/CustomInput.vue";
import CustomCheckbox from "@components/CustomCheckbox.vue";
import CustomRadio from "@components/CustomRadio.vue";
import CustomPopup from "@components/CustomPopup.vue";

export default {
  components: {
    CustomRadio,
    CustomInput,
    CustomCheckbox,
    CustomPopup
  },
  props: ['title'],
  data(){
    return {
      nameInput: {
        value: '',
        isValid: false,
      },
      passwordInput: {
        value: '',
        isValid: false,
      },
      numberInput: {
        value: '',
        isValid: false,
      },
      checkbox: false,
      radioSelection: 'option-1',
      isPopupVisible: false,
    };
  },
  computed: {
    isFormValid() {
      return this.nameInput.isValid && this.passwordInput.isValid && this.numberInput.isValid && this.checkbox;
    }
  },
  methods: {
    submitHandler() {
      if (!this.isFormValid) return;

      this.isPopupVisible = true;
    },
    validateName(value) {
      if (value.length < 4 || value.length >= 12){
        return "Your name should be between 4 and 12 characters";
      }
      return false;
    },
    validatePassword(value) {
      if (value.length < 4 || value.length >= 12){
        return "Your password should be between 4 and 12 characters";
      }

      const regExp = /[a-zA-Z0-9!@#$%^&*]/;
      if (!regExp.test(value)) {
        return "Your password contains unsupported symbols";
      }

      return false;
    },
    validateNumber(value) {
      return value < 5 ? 'Your number should be bigger than 5' : false;
    },
  },
};
</script>

<template>
  <custom-heading level=1>{{ title }}</custom-heading>
  <form class="custom-form" @submit.prevent="submitHandler">
    <custom-input type="text" v-model="nameInput.value" v-model:is-valid="nameInput.isValid" label="Name" name="name" :validate="validateName" placeholder="Введите имя..."/>
    <custom-input type="password" v-model="passwordInput.value" v-model:is-valid="passwordInput.isValid" label="Password" name="pwd" :validate="validatePassword" placeholder="Введите парль..."/>
    <custom-input type="number" v-model="numberInput.value" v-model:is-valid="numberInput.isValid" label="Number" name="number" :validate="validateNumber"/>
    <custom-checkbox class="custom-form__checkbox" v-model="checkbox" label="Checkbox" name="checkbox" required/>
    <custom-radio v-model="radioSelection" :options="[ {id: 'option-1', value: 'option-1', label: 'first', name: 'value'}, {id: 'option-2', value: 'option-2', label: 'second'} ]"></custom-radio>
    <custom-button :disabled="!isFormValid" class="custom-form__button">Отправить</custom-button>
  </form>
  <custom-popup v-model:is-visible="isPopupVisible">
    <template v-slot="closePopup">
      <custom-heading level="4">Name: {{ nameInput.value }}</custom-heading>
      <custom-heading level="4">Password: {{ passwordInput.value }}</custom-heading>
      <custom-heading level="4">Number: {{ numberInput.value }}</custom-heading>
      <custom-heading level="4">Checkbox: {{ checkbox ? 'on' : 'off' }}</custom-heading>
      <custom-heading level="4">Selected Radio: {{ radioSelection }}</custom-heading>
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
