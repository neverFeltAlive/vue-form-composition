<template>
  <button class="custom-button"><slot></slot></button>
</template>

<style lang="scss" scoped>
@import "@utils/vars.scss";

.custom-button {
  width: fit-content;
  border: 2px solid $light-blue;
  border-radius: 8px;
  padding: 5px 10px;
  color: $light-blue;
  transition: $default-transition;

  &:disabled {
    border-color: $light-red;
    color: $light-red;
    pointer-events: none;
  }
}
</style>