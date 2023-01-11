<template>
  <div class="content">
    
      <div class="content-filter">
        <i class="fa fa-search fa-lg"></i>
        <input
          type="text"
          placeholder="Digite um nome para filtrar...."
          class="filter-field"
        />
        <button id="cadastrar" class="btn btn-primary">Cadastrar</button>
      </div>
    
  </div>
</template>

<script>

export default {

  name: "ContentTable",

  components: {
   
  },
};
</script>

<style>
.content {
  grid-area: content;
  background-color: #efefef;
  padding: 20px;
}
.content .content-filter {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  padding-bottom: 8px;
  
}

.content .content-filter i {
  color: #aaa;
  margin-right: 10px;
}
.content .content-filter .filter-field{
  border-bottom: 1px solid #aaa;
  
}

.content input {
  color: #ccc;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}
#cadastrar{

  margin-left: 100px;
}
</style>