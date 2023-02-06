<template>
  <div class="schedule-of-events">
    <ScheduledEvent time="2:30" event="Arrive">
      <IconComponent
        class="icon-svg arrive"
        icon-name="arrive-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <arrive-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="3:30" event="Ceremony">
      <IconComponent
        class="icon-svg ceremony"
        icon-name="ceremony-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <ceremony-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="4:00" event="Tapas">
      <IconComponent
        class="icon-svg tapas"
        icon-name="tapas-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <tapas-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="4:00" event="Photos">
      <IconComponent
        class="icon-svg photos"
        icon-name="photos-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <photos-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="5:00" event="Dinner">
      <IconComponent
        class="icon-svg dinner"
        icon-name="dinner-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <dinner-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="6:30" event="Toasts">
      <IconComponent
        class="icon-svg toasts"
        icon-name="toasts-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <toasts-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="6:45" event="First Dance">
      <IconComponent
        class="icon-svg first-dance"
        icon-name="first-dance-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <first-dance-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="7:00" event="Party">
      <IconComponent
        class="icon-svg party"
        icon-name="party-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <party-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="8:00" event="Cake">
      <IconComponent
        class="icon-svg cake"
        icon-name="cake-icon"
        width="36"
        viewBox="0 0 36 36"
      >
        <cake-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent time="11:30" event="Carriages">
      <IconComponent
        class="icon-svg carriages"
        icon-name="carriages-icon"
        width="60"
        viewBox="0 0 60 36"
      >
        <carriages-icon />
      </IconComponent>
    </ScheduledEvent>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import ScheduledEvent from '@/components/ScheduledEvent.vue'
import IconComponent from '@/components/IconComponent.vue'
import ArriveIcon from '@/components/Icons/ArriveIcon.vue'
import CeremonyIcon from '@/components/Icons/CeremonyIcon.vue'
import TapasIcon from '@/components/Icons/TapasIcon.vue'
import PhotosIcon from '@/components/Icons/PhotosIcon.vue'
import DinnerIcon from '@/components/Icons/DinnerIcon.vue'
import ToastsIcon from '@/components/Icons/ToastsIcon.vue'
import FirstDanceIcon from '@/components/Icons/FirstDanceIcon.vue'
import PartyIcon from '@/components/Icons/PartyIcon.vue'
import CakeIcon from '@/components/Icons/CakeIcon.vue'
import CarriagesIcon from '@/components/Icons/CarriagesIcon.vue'

export default defineComponent({
  name: 'ScheduleOfEvents',
  components: {
    ScheduledEvent,
    IconComponent,
    ArriveIcon,
    CeremonyIcon,
    TapasIcon,
    PhotosIcon,
    DinnerIcon,
    ToastsIcon,
    FirstDanceIcon,
    PartyIcon,
    CakeIcon,
    CarriagesIcon
  }
})
</script>

<style scoped lang="scss">
.schedule-of-events {
  display: flex;
  flex: 1;
}
</style>
