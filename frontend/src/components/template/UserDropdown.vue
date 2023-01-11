<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{ user.name }}</span>
      <div class="user-dropdown-img">
        <VueGravatar email="mock@cod3r.com.br"  />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueGravatar from "vue3-gravatar";

export default {

  name: "UserDropdown",
  components: {
    VueGravatar 
  
  },
  computed: mapState(["user"]),
};
</script>

<style>
</style>