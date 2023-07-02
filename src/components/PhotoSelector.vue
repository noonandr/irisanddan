<script>
export default {
  name: 'PhotoSelector',
  props: {
    image: {
      type: String,
      default: ''
    },
    selectedPhotos: Array
  },
  computed: {
    active () {
      return this.selectedPhotos.includes(this.image)
    }
  },
  methods: {
    getImgUrl (image) {
      const photo = require.context('@/assets/images/photos/', false, /\.jpg$/)
      return photo('./' + image + '.jpg')
    },
    selectPhoto (image) {
      this.$emit('photoSelected', image)
    }
  }
}
</script>

<template>
  <div class="photo-selector" @click="selectPhoto(image)" :class="{active}">
    <div class="photo-selector-background">
      <img
        :src="getImgUrl(image)"
        class="photo"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.photo-selector {
  display: flex;
  align-items: center;
  background: #f5f1e8;
  padding: 20px;
  margin-bottom: 24px;
  width: 240px;
  height: 240px;
  box-shadow: #2c3e5060 0 0 8px 0px;

  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}

.photo-selector-background {
  background: #4b4b4b;
  flex: 1;
  height: inherit;
  display: flex;
  align-items: center;
  border-radius: 2px;
}

.photo {
  object-fit: contain;
  width: 100%;
  height: inherit;
  pointer-events: none;
}

.active {
  opacity: 0.4;
}
</style>
