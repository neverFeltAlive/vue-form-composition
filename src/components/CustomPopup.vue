<template>
  <teleport to="#popup-container" v-if="isVisible">
    <div class="popup__background" @click="closePopup">
      <div class="popup__inner">
        <slot v-bind="closePopup"></slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ['update:isVisible'],
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePopup(){
      this.$emit('update:isVisible', false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@utils/vars.scss";

.popup__background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($light-blue, 0.7);
  z-index: 2;
}

.popup__inner {
  padding: 30px 60px;
  width: 50%;
  min-height: 400px;
  border-radius: 8px;
  background-color: white;
}
</style>