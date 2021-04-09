<template>
  <f7-page name="explore" :page-content="true" ptr :ptr-mousewheel="true" @ptr:refresh="refresh">
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
      <f7-nav-title sliding>Explore</f7-nav-title>
    </f7-navbar>
    <!-- Fab Buttons -->
    <f7-fab position="right-bottom">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
      <f7-fab-buttons position="top">
        <f7-fab-button label="Refresh" :fab-close="true" @click="refresh">1</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
    <!-- Page Content-->
    <f7-list v-if="loading" media-list>
      <f7-list-item
        v-for="n in 3"
        :key="n"
        class="skeleton-text skeleton-effect-fade"
        title="Full Name"
        subtitle="Position"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </f7-list-item>
    </f7-list>
    <f7-list v-else media-list>
      <f7-list-item
        title="John Doe"
        subtitle="CEO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/1"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Jane Doe"
        subtitle="Marketing"
        text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/2"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Kate Johnson"
        subtitle="Admin"
        text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/3"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const loading = ref(false);

    function refresh(done) {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        done();
      }, 1000);
    }

    return {
      loading,
      refresh,
    };
  },
};
</script>
