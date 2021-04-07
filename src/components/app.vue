<template>
  <f7-app v-bind="f7params">
    <f7-views tabs class="safe-areas" theme-dark>
      <!-- Bottom Toolbar -->
      <f7-toolbar position="bottom" tabbar>
        <f7-link tab-link="#view-home" icon-ios="f7:sportscourt" icon-md="f7:sportscourt" />
        <f7-link tab-link="#view-explore" icon-ios="f7:search" icon-md="f7:search" />
        <f7-link tab-link="#view-live" icon-ios="f7:app_badge" icon-md="f7:app_badge" />
      </f7-toolbar>
      <!-- Views -->
      <f7-view id="view-home" :main="true" tab tab-active url="/"></f7-view>
      <f7-view id="view-explore" :main="true" tab url="/explore/"></f7-view>
      <f7-view id="view-live" :main="true" tab url="/live/"></f7-view>
    </f7-views>
  </f7-app>
</template>
<script>
import { onMounted } from 'vue';
import { f7ready } from 'framework7-vue';
import { Device } from '@capacitor/device';
import { Storage } from '@capacitor/storage';

import routes from '../js/routes';

export default {
  setup() {
    const f7params = {
      id: 'com.apifutbol.appvue',
      theme: 'auto',
      iosTranslucentBars: false,
      iosTranslucentModals: false,
      routes,
    };

    onMounted(() => {
      f7ready(async () => {
        const { uuid } = await Device.getInfo();

        await Storage.set({
          key: 'uuid',
          value: uuid,
        });
      });
    });

    return {
      f7params,
    };
  },
};
</script>
