<template>
  <div class="scheduled-event">
    <span class="time" v-text="time" />
    <div class="divider" />
    <slot />
    <span class="event" v-text="event" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScheduledEvent',
  props: {
    time: String,
    event: String
  }
})
</script>

<style scoped lang="scss">
.scheduled-event {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  color: #3b3b3b;
}

.divider {
  position: relative;
  width: 100%;
  padding-top: 26px;
  margin-bottom: 32px;
  border-bottom: 1px solid #3b3b3b;

  &:after {
    content: "";
    background: #3b3b3b;
    width: 1px;
    height: 40px;
    display: flex;
    position: absolute;
    top: 6px;
    left: 50%;
  }
}
</style>
