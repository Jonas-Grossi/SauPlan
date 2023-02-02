<template>
  <div class="page-title">
    <div class="titleSub">
      <h1>
        <i v-if="icon" :class="icon">{{ main }}</i>
      </h1>
      <h2>{{ sub }}</h2>
      <button v-if=!but class="btn btn-primary">Cadastrar</button>
    </div>
    <hr />
    <div v-if=!search class="content-filter">
      <i class="fa fa-search fa-lg"></i>
      <input
        type="text"
        placeholder="  Pesquise aqui...."
        class="filter-field"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub","but","search"],

};
</script>

<style>
.page-title .titleSub {
  display: flex;
  flex-direction: column;
}
.titleSub > button{
  position:absolute;
 margin-left: 68% ;
 margin-top: 2%;
 
  
}
.page-title h1 {
  display: flex;
  justify-items: end;
}
.page-title h2 {
  color: #777;
  margin-top: 5px;
  font-size: 1.3rem;
}

.content-filter {
  padding-left: 70%;
}


</style>