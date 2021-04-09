<template>
  <f7-page name="home" :page-content="true">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link
          panel-open="left"
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
        ></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Home</f7-nav-title>
    </f7-navbar>
    <!-- Page Content-->
    <f7-block strong>
      <p>API Futbol Vue App</p>
    </f7-block>
  </f7-page>
</template>
