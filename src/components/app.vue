<template>
  <f7-app v-bind="f7params">
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
import routes from '../js/routes.js';

export default {
  setup() {
    const f7params = {
      name: 'API Futbol Vue App',
      theme: 'auto',
      routes,
    };

    return {
      f7params,
    };
  },
};
</script>
