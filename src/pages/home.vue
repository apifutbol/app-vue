<template>
  <f7-page name="home" :page-content="false">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title>API Futbol</f7-nav-title>
    </f7-navbar>
    <!-- Bottom Tabbar -->
    <f7-toolbar bottom tabbar>
      <f7-link
        tab-link
        href="/"
        route-tab-id="live"
        icon-ios="f7:sportscourt"
        icon-md="f7:sportscourt"
        tab-link-active
      />
      <f7-link
        tab-link
        href="/explore/"
        route-tab-id="f7:search"
        icon-ios="f7:search"
        icon-md="f7:search"
      />
    </f7-toolbar>
    <!-- Routable Tabs -->
    <f7-tabs routable swipeable>
      <f7-tab id="live" tab-active />
      <f7-tab id="explore" />
    </f7-tabs>
  </f7-page>
</template>
