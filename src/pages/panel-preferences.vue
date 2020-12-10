<template>
  <f7-page :page-content="true">
    <!-- Top Navbar -->
    <f7-navbar title="Preferences"></f7-navbar>
    <!-- Preference List -->
    <f7-list id="preferences" form form-store-data>
      <!-- Switch Theme Mode -->
      <f7-list-item title="Theme" smart-select smart-select-init>
        <select name="theme" @change="setThemeMode">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </f7-list-item>
      <!-- Switch Theme Color -->
      <f7-list-item title="Color" smart-select smart-select-init>
        <select name="color" @change="setThemeColor">
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { f7, f7Page, f7Navbar, f7List, f7ListItem } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7List,
    f7ListItem,
  },
  methods: {
    setThemeMode() {
      const $html = f7.$('html');
      const preferences = f7.form.convertToData('#preferences');

      $html.removeClass('theme-dark theme-light').addClass(`theme-${preferences.theme}`);
    },
    setThemeColor() {
      const $html = f7.$('html');
      const preferences = f7.form.convertToData('#preferences');

      const currentColorClass = $html[0].className.match(/color-theme-([a-z]*)/);
      if (currentColorClass) $html.removeClass(currentColorClass[0]);

      $html.addClass(`color-theme-${preferences.color}`);
    },
  },
};
</script>
