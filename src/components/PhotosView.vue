<template>
  <div class="photos-view">
    <SwitchLanguage :locales="locales" :language="language" />
    <h1
      class="title photos-title"
      v-text="$t('PhotosView.Title')"
    />
    <div class="photo-list">
      <PhotoSelector
        v-for="(photo, index) in photos"
        :selectedPhotos="selectedPhotos"
        :image="photo"
        :key="index"
        @photo-selected="photoSelected"
      />
    </div>
    <div class="photo-footer">
      <span class="photo-footer-total-title">
        Photos selected:
      </span>
      <span class="photo-footer-total" v-text="selectedPhotos.length" />
      <div class="photo-footer-ids">
        <span
          class="photo-footer-id"
          v-for="(photo, index) in selectedPhotos"
          :key="index"
          v-text="'#' + photo"
        />
      </div>
      <AppButton @click="download" class="button-download-photos">
        Download
      </AppButton>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex'
import { saveAs } from 'file-saver'

import SwitchLanguage from '@/components/SwitchLanguage.vue'
import PhotoSelector from '@/components/PhotoSelector.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'PhotosView',
  components: {
    SwitchLanguage,
    PhotoSelector,
    AppButton
  },
  setup () {
    const selectedPhotos = ref([])

    function photoSelected (photo) {
      if (!selectedPhotos.value.includes(photo)) {
        selectedPhotos.value.push(photo)
      } else {
        selectedPhotos.value =
          selectedPhotos.value.filter(existing => existing !== photo)
      }
    }

    function resetPhotoSelected () {
      selectedPhotos.value = []
    }

    return {
      selectedPhotos,
      photoSelected,
      resetPhotoSelected
    }
  },
  computed: {
    ...mapGetters(['language']),
    locales () {
      const langs = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
      langs.sort(() => Math.random() - 0.5)
      return langs
    },
    photos () {
      const files = require.context('@/assets/images/photos/', true, /\.jpg$/)
      const photoArray = files.keys()
      const ids = photoArray.map(element => {
        return element.replace(/\.[^/.]+$|\.\//g, '')
      })
      return ids
    }
  },
  methods: {
    async download () {
      for (const photo of this.selectedPhotos) {
        const URL = 'https://s3.eu-west-2.amazonaws.com/uploads.irisanddan.com/' + photo + '.jpg'
        fetch(URL)
          .then((response) => response.blob())
          .then((blob) => {
            saveAs(blob, photo + '.jpg')
          })
        console.log('downloading', URL)
      }
      this.resetPhotoSelected()
    }
  },
  watch: {
    language: {
      immediate: true,
      handler (language) {
        this.$i18n.locale = language
      }
    }
  }
}
</script>

<style scoped lang="scss">
.photos-view {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 24px;
}

.photos-title {
  flex: 1 0 100%;
  justify-content: center;
}

.photo-list {
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (min-width: 608px) {
  .photo-list {
    justify-content: space-between;
  }
}

.photo-footer {
  display: flex;
  flex: 1 0 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  color: white;
  background: lch(25 13.99 260.3 / 0.59);
  align-items: baseline;
}

.photo-footer-total-title {
  flex-shrink: 0;
  margin-right: 4px;
}

.photo-footer-total {
  width: 12px;
  margin-right: 8px;
}

.photo-footer-ids {
  display: none;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  margin-right: 30px;
}

@media screen and (min-width: 608px) {
  .photo-footer-ids  {
    display: flex;
  }
}

.photo-footer-list {}

.photo-footer-id {
  display: flex;
  background: #2c3e50;
  border-radius: 4px;
  padding: 0px 8px;
  margin: 0 8px;
}

.button-download-photos {
  margin-left: auto;
}
</style>
