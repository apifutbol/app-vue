<template>
  <f7-app v-bind="f7params">
    <f7-views tabs class="safe-areas" color-theme="green" :theme-dark="darkMode">
      <!-- Bottom Toolbar -->
      <f7-toolbar position="bottom" tabbar>
        <f7-link
          tab-link="#view-home"
          icon-ios="f7:sportscourt"
          icon-aurora="f7:sportscourt"
          icon-md="f7:sportscourt"
        />
        <f7-link
          tab-link="#view-explore"
          icon-ios="f7:search"
          icon-aurora="f7:search"
          icon-md="f7:search"
        />
        <f7-link
          tab-link="#view-live"
          icon-ios="f7:app_badge"
          icon-aurora="f7:app_badge"
          icon-md="f7:app_badge"
        />
      </f7-toolbar>
      <!-- Views -->
      <f7-view id="view-home" :main="true" tab tab-active url="/"></f7-view>
      <f7-view id="view-explore" tab url="/explore/"></f7-view>
      <f7-view id="view-live" tab url="/live/"></f7-view>
    </f7-views>

    <!-- Preferences Panel -->
    <f7-panel left cover resizable color-theme="green" :theme-dark="darkMode">
      <f7-view>
        <f7-page>
          <f7-navbar title="Preferences" />
          <f7-block-title>Theme</f7-block-title>
          <f7-list>
            <f7-list-item
              checkbox
              title="Dark Mode"
              name="darkmode-checkbox"
              :checked="darkMode === true"
              @change="setTheme"
            />
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
  </f7-app>
</template>

<script>
import { ref, onMounted } from 'vue';
import { f7ready } from 'framework7-vue';
import { Storage } from '@capacitor/storage';

import routes from '../js/routes';

export default {
  setup() {
    const darkMode = ref(true);

    const f7params = {
      id: 'com.apifutbol.appvue',
      theme: 'auto',
      iosTranslucentBars: false,
      iosTranslucentModals: false,
      routes,
    };

    const setTheme = async (e) => {
      const checked = e.target.checked;

      await Storage.set({
        key: 'darkMode',
        value: checked,
      });

      darkMode.value = checked;
    };

    onMounted(() => {
      f7ready(async () => {
        const { value: mode } = await Storage.get({ key: 'darkMode' });
        if (mode) {
          darkMode.value = JSON.parse(mode);
        }
      });
    });

    return {
      f7params,
      darkMode,
      setTheme,
    };
  },
};
</script>
