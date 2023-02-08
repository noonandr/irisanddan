<template>
  <div class="schedule-of-events">
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.ArriveTime')"
      :event="$t('ScheduleOfEvents.ArriveCopy')"
      class="scheduled-event-arrive"
    >
      <IconComponent
        class="icon-svg arrive"
        icon-name="arrive-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <arrive-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.CeremonyTime')"
      :event="$t('ScheduleOfEvents.CeremonyCopy')"
    >
      <IconComponent
        class="icon-svg ceremony"
        icon-name="ceremony-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <ceremony-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.TapasTime')"
      :event="$t('ScheduleOfEvents.TapasCopy')"
    >
      <IconComponent
        class="icon-svg tapas"
        icon-name="tapas-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <tapas-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.PhotosTime')"
      :event="$t('ScheduleOfEvents.PhotosCopy')"
    >
      <IconComponent
        class="icon-svg photos"
        icon-name="photos-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <photos-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.DinnerTime')"
      :event="$t('ScheduleOfEvents.DinnerCopy')"
    >
      <IconComponent
        class="icon-svg dinner"
        icon-name="dinner-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <dinner-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.ToastsTime')"
      :event="$t('ScheduleOfEvents.ToastsCopy')"
    >
      <IconComponent
        class="icon-svg toasts"
        icon-name="toasts-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <toasts-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.FirstDanceTime')"
      :event="$t('ScheduleOfEvents.FirstDanceCopy')"
    >
      <IconComponent
        class="icon-svg first-dance"
        icon-name="first-dance-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <first-dance-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.PartyTime')"
      :event="$t('ScheduleOfEvents.PartyCopy')"
    >
      <IconComponent
        class="icon-svg party"
        icon-name="party-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <party-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.CakeTime')"
      :event="$t('ScheduleOfEvents.CakeCopy')"
    >
      <IconComponent
        class="icon-svg cake"
        icon-name="cake-icon"
        width="48"
        viewBox="0 0 36 36"
      >
        <cake-icon />
      </IconComponent>
    </ScheduledEvent>
    <ScheduledEvent
      :time="$t('ScheduleOfEvents.CarriagesTime')"
      :event="$t('ScheduleOfEvents.CarriagesCopy')"
      class="scheduled-event-carriages"
    >
      <IconComponent
        class="icon-svg carriages"
        icon-name="carriages-icon"
        width="80"
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
$screen-small: 480px;
$screen-medium: 769px;
$screen-large: 1024px;
$screen-larger: 1200px;
$screen-extra-large: 1400px;
$screen-huge: 1800px;

.schedule-of-events {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.scheduled-event-arrive {
  :deep(.divider) {
    border-radius: 4px 0 0 4px;
  }
}

.scheduled-event-carriages {
  :deep(.divider) {
    border-radius: 0 4px 4px 0;
  }
}

.scheduled-event {
  flex: 1 0 33%;
}

@media screen and (min-width: $screen-small) {
  .scheduled-event {
    flex: 1 0 25%;
  }
}

@media screen and (min-width: $screen-medium) {
  .scheduled-event {
    flex: 1 0 20%;
  }
}

@media screen and (min-width: $screen-large) {
  .scheduled-event {
    flex: 1 0 20%;
  }
}

@media screen and (min-width: $screen-larger) {
  .scheduled-event {
    flex: 1;
  }
}
</style>
