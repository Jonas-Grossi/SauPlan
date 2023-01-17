<template>
  <div class="user-dropdown">
    <div class="user-button">
     
      <div class="user-dropdown-img">
        <vue-gravatar alt="user" @click.prevent="logout"/>
      </div>
      <span class="d-none d-sm-block">{{ user.name }}</span>
    
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserDropdown",
  components: {},
  computed: mapState(["user"]),
  
  methods:{
    logout(){
      console.log("logout")
    }
  }
};
</script>

<style>
.user-dropdown {
  position: relative;
  height: 100%;
}
.user-button {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
}
.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.user-dropdown-img {
  margin: 0px 10px;
}
.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

#angle {
  padding-left: 10px;
}
</style>