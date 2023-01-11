<template>
  <aside class="menuAside" v-show="isMenuVisible">
    <a href=""><h4>Colonoscopia</h4></a>
    <a href=""><h4>Dessitometria</h4></a>
    <a href=""><h4>Retossigmordoscopia</h4></a>
    <a href=""><h4>Cirurgia SUSFACIL</h4></a>
    <a href=""><h4>Cirurgia</h4> </a>
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