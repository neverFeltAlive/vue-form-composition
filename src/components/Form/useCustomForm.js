import { computed, ref } from 'vue';

export default function useCustomForm() {
  const inputs = ref({
    nameInput: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
    number: {
      value: '',
      isValid: false,
    },
  });

  const checkbox = ref(false);
  const radioSelection = ref('option-1');

  const isFormValid = computed(() => {
    return (
      inputs.value.nameInput.isValid &&
      inputs.value.password.isValid &&
      inputs.value.number.isValid &&
      inputs.value
    );
  });

  return {
    inputs,
    checkbox,
    radioSelection,
    isFormValid,
  };
}
