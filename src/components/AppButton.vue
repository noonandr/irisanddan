<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'medium'
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<template>
  <button class="app-button" :class="[{ deactive: !active }, size, type]">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.app-button {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: auto;
  margin: 0;
  padding: 14px 24px;
  font-family: 'Freebooter Scirpt', serif;
  font-family: 'Merriweather', serif;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
}

.deactive {
  cursor: default !important;
}

.primary {
  background: #ff6c50;

  &:hover {
    background: desaturate(#ff6c50, 20%);
  }
}
</style>
