<template>
  <div class="colonoscopy">
    <PageTitle
      icon="fa fa-h-square"
      main=" Colonoscopia"
      sub="Agendamento de pacientes"
    />
    <ul>
      <li v-for="patient in colonoscopy" :key="patient.id">
        <PatientItem :patient="patient" />
      </li>
    </ul>
    <div class="load-more">
      <button
        v-if="loadMore"
        class="btn btn-lg btn-outline-primary"
        @click="getColonoscopy"
      >
        Carregar Mais Artigos
      </button>
    </div>
  </div>
</template>
  
  <script>
import PageTitle from "@/components/template/PageTitle.vue";
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PatientItem from './PatientItem'


export default {
  name: "ColonoPatient",
  components: { PageTitle, PatientItem },
  data: function () {
    return {
      colonoscopy: [],
      page: 1,
      loadMore: true,
    };
  },
  methods: {
    getColonoscopy() {
      const url = `${baseApiUrl}/colonoscopy/${this.colonoscopy.id}/colonoscopy?page=${this.page}`;
      axios(url).then((res) => {
        this.colonoscopy = this.colonoscopy.concat(res.data);
        this.page++;

        if (res.data.length === 0) this.loadMore = false;
      });
    },
  },
  watch: {
    $route() {
      this.colonoscopy = [];
      this.page = 1;
      this.loadMore = true;

      this.getColonoscopy();
    },
  },
  mounted() {
    this.getColonoscopy();
  },
};
</script>
  
  <style>
</style>