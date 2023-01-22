<template>
  <div class="home-view">
    <SelectLanguage v-if="!language" :locales="locales" />
    <SwitchLanguage :locales="locales" :language="language" />
    <div class="title-section">
      <h1 class="title">Iris & Daniel</h1>
    </div>
    <div class="hi">
      <p class="hello-text" v-text="$t('HomeView.Hello')" />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.Venue')" />
      <h3 class="important venue-name" v-text="$t('HomeView.VenueName')" />
      <a
        href="https://goo.gl/maps/SrL827q5b2ezJGqM8"
        class="important address"
        v-text="$t('HomeView.Address')"
        target="_blank"
      />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.Map')" />
      <p class="map-description" v-text="$t('HomeView.MapDescription')" />
      <picture class="image">
        <source
          srcset="@/assets/images/map-zoom-3.webp"
          type="image/webp"
        />
        <img
          src="@/assets/images/map-zoom-3.jpg"
          class="image-jpg"
          alt="Map zoom level 3"
        />
      </picture>
      <p class="map-description" v-text="$t('HomeView.MapOneDescription')" />
      <picture class="image">
        <source
          srcset="@/assets/images/map-zoom-2.webp"
          type="image/webp"
        />
        <img
          src="@/assets/images/map-zoom-2.jpg"
          class="image-jpg"
          alt="Map zoom level 2"
        />
      </picture>
      <p class="map-description" v-text="$t('HomeView.MapTwoDescription')" />
      <picture class="image">
        <source
          srcset="@/assets/images/map-zoom-1.webp"
          type="image/webp"
        />
        <img
          src="@/assets/images/map-zoom-1.jpg"
          class="image-jpg"
          alt="Map zoom level 1"
        />
      </picture>
      <p class="map-description" v-text="$t('HomeView.MapThreeDescription')" />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.Stay')" />
      <h3 class="subtitle" v-text="$t('HomeView.Lisbon')" />
        <picture class="image">
          <source
            srcset="@/assets/images/lisbon-zoom-3.webp"
            type="image/webp"
          />
          <img
            src="@/assets/images/lisbon-zoom-3.jpg"
            class="image-jpg"
            alt="Lisbon zoom level 1"
          />
        </picture>
        <p class="places-to-stay-description" v-text="$t('HomeView.LisbonDescription')" />
      <h3 class="subtitle" v-text="$t('HomeView.Sintra')" />
        <picture class="image">
          <source
            srcset="@/assets/images/sintra-zoom-3.webp"
            type="image/webp"
          />
          <img
            src="@/assets/images/sintra-zoom-3.jpg"
            class="image-jpg"
            alt="Sintra zoom level 1"
          />
        </picture>
        <p class="places-to-stay-description" v-text="$t('HomeView.SintraDescription')" />
      <h3 class="subtitle" v-text="$t('HomeView.Cascais')" />
        <picture class="image">
          <source
            srcset="@/assets/images/cascais-zoom-3.webp"
            type="image/webp"
          />
          <img
            src="@/assets/images/cascais-zoom-3.jpg"
            class="image-jpg"
            alt="Cascais zoom level 1"
          />
        </picture>
        <p class="places-to-stay-description" v-text="$t('HomeView.CascaisDescription')" />
        <p class="places-to-stay-description" v-text="$t('HomeView.CarcavelosDescription')" />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.Transport')" />
      <h3 class="subtitle" v-text="$t('HomeView.Drive')" />
      <h3 class="subtitle" v-text="$t('HomeView.Train')" />
      <h3 class="subtitle" v-text="$t('HomeView.Taxi')" />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.Events')" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SelectLanguage from '@/components/SelectLanguage.vue'
import SwitchLanguage from '@/components/SwitchLanguage.vue'

export default {
  name: 'HomeView',
  components: {
    SelectLanguage,
    SwitchLanguage
  },
  computed: {
    ...mapGetters(['language']),
    locales () {
      const langs = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
      langs.sort(() => Math.random() - 0.5)
      return langs
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
.home-view {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  padding: 24px;
}

.title-section {
  flex: 1 0 100%;
  padding-top: 64px;
}

.hi {
  display: flex;
  flex: 0 1 490px;
  justify-content: center;
  margin: auto;
  text-align: center;
}

.venue-name {
  flex: 1 0 100%;
}

.page-section {
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 100%;
  justify-content: center;
}

.image {
  display: flex;
  align-items: center;
  flex: 0 1 800px;
}

.image-jpg {
  width: 100%;
}
</style>
