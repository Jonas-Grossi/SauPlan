<template>
    <div class="colonoscopy">
      <PageTitle
        icon="fa fa-h-square"
        main=" Colonoscopia"
        sub="Agendamento de pacientes"
        but="Cadastrar"
      />
    </div>
  </template>
  
  <script>
  import PageTitle from "@/components/template/PageTitle.vue";
  export default {
    name: "ColonoPatient",
    components: { PageTitle },
  };
  </script>
  
  <style>
  </style>