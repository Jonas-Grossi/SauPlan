<template>
  <aside class="menuAside" v-show="isMenuVisible">
    <router-link to="/colonoscopy"><h4>Colonoscopia</h4></router-link>
    <router-link to="/densitometry"><h4>Dessitometria</h4></router-link>
    <router-link to="/rectosigmoidoscopy"><h4>Retossigmordoscopia</h4></router-link>
      <router-link to="/surgerysus"><h4>Cirurgia SUSFACIL</h4></router-link>
        <router-link to="/surgery"><h4>Cirurgia</h4> </router-link>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MenuAside",
  computed: mapState(["isMenuVisible"]),
};
</script>

<style>
.menuAside {
  
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
}

.menuAside a {
  
  color: #fff;
  text-decoration: none;
  padding: 20px;
  padding-left: 5px;
}
.menuAside a:hover {
  color: #007fff;

  text-decoration: none;
}
</style>