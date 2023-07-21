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
      <h2 class="heading" v-text="$t('HomeView.Photos')" />
        <router-link class="gift-list-description" :to="{name: 'photos-view'}">View Photos</router-link>
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.DressCode')" />
      <p class="gift-list-description" v-text="$t('HomeView.DressCodeDescription')" />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.GiftList')" />
      <p class="gift-list-description" v-text="$t('HomeView.GiftListDescription')" />
      <a
        href="https://www.johnlewis.com/wish-list/KQKDFNJ"
        class="important gift-list-link"
        v-text="$t('HomeView.JohnLewis')"
        target="_blank"
      />
      <a
        href="https://prezola.com/wishlists/10277867/"
        class="important gift-list-link"
        v-text="$t('HomeView.Prezola')"
        target="_blank"
      />
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
      <p class="important map-description-main" v-text="$t('HomeView.MapDescription')" />
      <picture class="image" v-if="language === 'en'">
        <source
          srcset="@/assets/images/map-zoom-3-en.webp"
          type="image/webp"
        />
        <img
          src="@/assets/images/map-zoom-3-en.jpg"
          class="image-jpg"
          alt="Map zoom level 3"
        />
      </picture>
      <picture class="image" v-if="language === 'pt'">
        <source
          srcset="@/assets/images/map-zoom-3-pt.webp"
          type="image/webp"
        />
        <img
          src="@/assets/images/map-zoom-3-pt.jpg"
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
    <div class="page-section" v-if="language === 'en'">
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
        <p
          class="places-to-stay-description"
          v-text="$t('HomeView.LisbonDescription')"
        />
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
        <p
          class="places-to-stay-description"
          v-text="$t('HomeView.SintraDescription')"
        />
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
        <p
          class="places-to-stay-description"
          v-text="$t('HomeView.CascaisDescription')"
        />
        <p
          class="places-to-stay-description"
          v-text="$t('HomeView.CarcavelosDescription')"
        />
    </div>
    <div class="page-section">
      <h2 class="heading" v-text="$t('HomeView.Events')" />
      <ScheduleOfEvents />
    </div>
    <div class="page-section">
      <p
        class="updates-description"
        v-text="$t('HomeView.Updates')"
      />
    </div>
    <div class="page-section">
      <div class="see-you-soon">
        <span
          class="subtitle see-you-soon-copy"
          v-text="$t('HomeView.SeeYouSoon')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SelectLanguage from '@/components/SelectLanguage.vue'
import SwitchLanguage from '@/components/SwitchLanguage.vue'
import ScheduleOfEvents from '@/components/ScheduleOfEvents.vue'

export default {
  name: 'HomeView',
  components: {
    SelectLanguage,
    SwitchLanguage,
    ScheduleOfEvents
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
  max-width: 1200px;
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

.gift-list-description {
  flex: 0 1 490px;
}

.gift-list-link {
  flex: 1 0 100%;
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
  flex: 0 1 720px;
  border: 12px solid #f6f6f6;
}

.image-jpg {
  width: 100%;
}

.map-description-main {
  flex: 1 0 100%;
}

.map-description {
  background: #f6f6f6;
  margin: 0 0 24px 0;
  bottom: 24px;
  flex: 0 1 720px;
  padding: 0 12px 12px;
  text-align: center;
}

.places-to-stay-description {
  flex: 0 1 720px;
}

.updates-description {
  margin-top: 56px;
  text-align: center;
}

.see-you-soon {
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 38px 24px 32px;
}

.see-you-soon-copy {
  display: flex;
  justify-content: center;
}
</style>
