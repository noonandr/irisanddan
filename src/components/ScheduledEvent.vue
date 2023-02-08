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

.time {
  font-weight: bold;
  font-size: 14px;
}

.divider {
  position: relative;
  width: 100%;
  margin: 28px 0 32px;
  height: 2px;
  background: #3b3b3b;

  &:after {
    content: "";
    background: #3b3b3b;
    width: 2px;
    height: 32px;
    display: flex;
    position: absolute;
    top: -15px;
    left: 50%;
    border-radius: 7px;
  }
}

.event {
  margin-top: 12px 0 28px;
  font-family: 'Freebooter Scirpt', serif;
  font-size: 26px;
}
</style>
