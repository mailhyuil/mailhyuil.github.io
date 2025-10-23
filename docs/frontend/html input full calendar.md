# full calendar

[fullcalendar]('https://fullcalendar.io/')

## install

```bash
yarn add @fullcalendar/core
yarn add @fullcalendar/vue3
yarn add @fullcalendar/daygrid
yarn add @fullcalendar/interaction
```

## config

```vue
<script lang="ts" setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
const handleDateClick = (arg: any) => {
  console.log(arg);
};
const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  locale: "ko",
  height: "60rem",
  initialView: "dayGridMonth",
  dateClick: handleDateClick,
  events: [
    { title: "할일 1", date: "2022-12-30" },
    { title: "할일 2", date: "2022-12-30" },
    { title: "할일 3", date: "2022-12-31" },
  ],
};
</script>
<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>
```

## style

> css selector로 변경

```
<style>
.fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
  border-color: rgb(175, 175, 175);
}
.fc-view-harness.fc-view-harness-active {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.5);
}
.fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.fc-daygrid-day-top {
  flex-direction: none !important;
  color: gray;
}
.fc-day-sun a {
  color: rgb(219, 27, 27);
}
.fc-day-sat a {
  color: rgb(219, 27, 27);
}
.fc-today-button.fc-button.fc-button-primary {
  background-color: rgb(23, 23, 102);
}
.fc-prev-button.fc-button.fc-button-primary {
  background-color: rgb(23, 23, 102);
}
.fc-next-button.fc-button.fc-button-primary {
  background-color: rgb(23, 23, 102);
}
.fc-toolbar-title {
  color: rgb(39, 39, 39);
  font-weight: bold;
}
.fc-scrollgrid-sync-inner {
  padding: 0.5rem;
  font-size: 0.8rem;
}
</style>
```
