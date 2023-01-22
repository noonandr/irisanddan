<template>
  <div class="switch-language">
    <span
      v-for="locale in locales"
      :key="locale"
      @click="switchLocale(locale)"
      class="switch"
    >
      <IconComponent
        class="icon-svg uk-flag"
        :class="{active: language === 'en'}"
        icon-name="uk-flag"
        width="42"
        viewBox="0 0 60 30"
        v-if="locale === 'en'"
      >
        <uk-flag />
      </IconComponent>
      <IconComponent
        class="icon-svg portugal-flag"
        :class="{active: language === 'pt'}"
        icon-name="portugal-flag"
        width="34"
        viewBox="0 0 600 400"
        v-if="locale === 'pt'"
      >
        <portugal-flag />
      </IconComponent>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import IconComponent from '@/components/IconComponent.vue'
import UkFlag from '@/components/Icons/UkFlag.vue'
import PortugalFlag from '@/components/Icons/PortugalFlag.vue'

export default defineComponent({
  name: 'SwitchLanguage',
  components: {
    IconComponent,
    UkFlag,
    PortugalFlag
  },
  props: {
    locales: Array,
    language: String
  },
  methods: {
    switchLocale (locale) {
      this.$store.dispatch('setLanguage', locale)
    }
  }
})
</script>

<style scoped lang="scss">
.switch-language {
  display: flex;
  flex: 1 0 100%;
  justify-content: flex-end;
  padding-top: 36px;
}

.switch {}

.icon-svg {
  padding: 3px 4px;
}

.active {
  background: #8BB2A1;
}
</style>
