<template>
  <div class="select-language">
    <div class="select-language-background">
      <div class="wave">
        👋
      </div>
      <span
        v-for="(locale, index) in locales"
        :key="locale"
        @click="selectLocale(locale)"
        class="select"
        :class="'select-' + index"
      >
        <div class="language-box eng" v-if="locale === 'en'">
          <IconComponent
            class="icon-svg uk-flag"
            icon-name="uk-flag"
            width="84"
            viewBox="0 0 60 30"
          >
            <uk-flag />
          </IconComponent>
          <span class="hi">
            Hi!
          </span>
        </div>
        <div class="language-box port" v-if="locale === 'pt'">
          <IconComponent
            class="icon-svg portugal-flag"
            icon-name="portugal-flag"
            width="63"
            viewBox="0 0 600 400"
            v-if="locale === 'pt'"
          >
            <portugal-flag />
          </IconComponent>
          <span class="hi">
            Olá!
          </span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import IconComponent from '@/components/IconComponent.vue'
import UkFlag from '@/components/Icons/UkFlag.vue'
import PortugalFlag from '@/components/Icons/PortugalFlag.vue'

export default defineComponent({
  name: 'SelectLanguage',
  components: {
    IconComponent,
    UkFlag,
    PortugalFlag
  },
  props: {
    locales: Array
  },
  methods: {
    selectLocale (locale) {
      this.$store.dispatch('setLanguage', locale)
    }
  }
})
</script>

<style scoped lang="scss">
.select-language {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000000a6;
  display: flex;
  flex: 1 0 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.select-language-background {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 32px 32px;
  border-radius: 12px;
  justify-content: center;
}

.wave {
  display: flex;
  justify-content: center;
  flex: 1 0 100%;
  font-size: 32px;
}

.select {
  display: flex;
}

.select-0 {
  &:after {
    align-self: center;
    display: flex;
    content: "/";
    font-size: 32px;
  }
}

.language-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon-svg {
  padding: 6px 12px;
}
</style>
