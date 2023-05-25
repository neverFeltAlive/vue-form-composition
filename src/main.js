import { createApp } from 'vue';

import CustomButton from '@components/UI/CustomButton.vue';
import CustomHeading from '@components/UI/CustomHeading.vue';

import '@utils/reset.css';

import App from './App.vue';
import './style.scss';

const app = createApp(App);

app
  .component('CustomHeading', CustomHeading)
  .component('CustomButton', CustomButton);

app.directive('fade', (el, binding) => {
  el.style.opacity = binding.value ? 1 : 0;
});

app.mount('#app');
