<template>
  <f7-page name="home" :page-content="false">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title>API Futbol</f7-nav-title>
      <f7-nav-right>
        <f7-link
          panel-open="right"
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
        ></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- Bottom Tabbar -->
    <f7-toolbar bottom tabbar>
      <f7-link tab-link href="./" route-tab-id="live" tab-link-active>Live</f7-link>
    </f7-toolbar>
    <!-- Routable Tabs -->
    <f7-tabs routable swipeable>
      <f7-tab id="live" tab-active></f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import { f7Page, f7Navbar, f7NavTitle, f7NavRight, f7Link } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavTitle,
    f7NavRight,
    f7Link,
  },
};
</script>
