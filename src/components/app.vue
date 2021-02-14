<template>
  <f7-app v-bind="f7params">
    <f7-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="800"></f7-view>
  </f7-app>
</template>
<script>
import { onMounted } from 'vue';
import { f7ready } from 'framework7-vue';
import { Plugins } from '@capacitor/core';
import routes from '../js/routes';
import store from '../js/store';

const { Device } = Plugins;

export default {
  setup() {
    const f7params = {
      id: 'com.apifutbol.appvue',
      theme: 'auto',
      autoDarkTheme: true,
      iosTranslucentBars: false,
      iosTranslucentModals: false,
      routes,
      store,
    };

    onMounted(() => {
      f7ready(async (f7) => {
        const { uuid } = await Device.getInfo();

        f7.store.dispatch('setUuid', uuid);
      });
    });

    return {
      f7params,
    };
  },
};
</script>
