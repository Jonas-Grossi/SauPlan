<template>
  <div id="appBody" :class="{ 'hide-menu': !isMenuVisible }">
    <HeaderLayoutVue title="Sauplan" :hideToggle="false" />
    <MenuAsideVue />
    <footer-layout-vue />
    <content-table />
  </div>
</template>

<script>

import HeaderLayoutVue from "./components/template/HeaderLayout.vue";
import FooterLayoutVue from "./components/template/FooterLayout.vue";
import MenuAsideVue from "./components/template/MenuAside.vue";
import ContentTable from "./components/template/ContentTable.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    HeaderLayoutVue,
    FooterLayoutVue,
    MenuAsideVue,
    ContentTable,
  },
  computed: mapState(["isMenuVisible"]),
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#appBody {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;

  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#appBody.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
