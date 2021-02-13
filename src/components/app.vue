<template>
  <f7-app v-bind="f7Params">
    <f7-panel right reveal resizable>
      <f7-view url="/panel-preferences/"></f7-view>
    </f7-panel>
    <f7-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="800"></f7-view>
  </f7-app>
</template>
<script>
import { f7App, f7Panel, f7View } from 'framework7-vue';
import routes from '../js/routes';

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
  },
  data() {
    const theme = 'auto';

    return {
      f7Params: {
        id: 'com.apifutbol.appvue',
        theme,
        autoDarkTheme: true,
        iosTranslucentBars: false,
        iosTranslucentModals: false,
        routes,
      },
    };
  },
};
</script>
