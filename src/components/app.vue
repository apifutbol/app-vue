<template>
  <f7-app v-bind="params">
    <f7-views tabs class="safe-areas" :color-theme="colorMode" :theme-dark="themeMode">
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
      <f7-view id="view-home" :main="true" name="Home" tab tab-active url="/"></f7-view>
      <f7-view id="view-explore" name="Explore" tab url="/explore/"></f7-view>
      <f7-view id="view-live" name="Live" tab url="/live/"></f7-view>
    </f7-views>

    <!-- Preferences Panel -->
    <f7-panel left cover resizable :color-theme="colorMode" :theme-dark="themeMode">
      <f7-view>
        <f7-page>
          <f7-navbar title="Preferences" />
          <f7-block-title>Theme</f7-block-title>
          <f7-list>
            <f7-list-item
              checkbox
              title="Dark Mode"
              name="theme-mode-checkbox"
              :checked="themeMode === true"
              @change="setMode"
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
import { getThemeMode, getColorMode } from '../utils/theme';

import routes from '../js/routes';

export default {
  setup() {
    const themeMode = ref(true);
    const colorMode = ref('green');

    const params = {
      id: 'com.apifutbol.appvue',
      theme: 'auto',
      iosTranslucentBars: false,
      iosTranslucentModals: false,
      routes,
    };

    const setMode = async (e) => {
      const checked = e.target.checked;

      await Storage.set({
        key: 'themeMode',
        value: checked,
      });

      themeMode.value = getThemeMode(checked);
      colorMode.value = getColorMode(checked);
    };

    onMounted(() => {
      f7ready(async () => {
        const { value: mode } = await Storage.get({ key: 'themeMode' });
        if (mode) {
          themeMode.value = getThemeMode(mode);
          colorMode.value = getColorMode(mode);
        }
      });
    });

    return {
      params,
      themeMode,
      colorMode,
      setMode,
    };
  },
};
</script>
