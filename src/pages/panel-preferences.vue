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
  mounted() {
    const self = this;
    self.preferences = null;
  },
  methods: {
    setThemeMode() {
      self.preferences = f7.form.convertToData('#preferences');
      f7.$('html')
        .removeClass('theme-dark theme-light')
        .addClass(`theme-${self.preferences.theme}`);
    },
  },
};
</script>
