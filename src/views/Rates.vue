<template>
  <div class="rates">
    <datepicker :value="date" @selected="changeDate"></datepicker>
    <h2>
      {{dataInfo}}
    </h2>
    <h3>
      {{dataPrice.title}}
    </h3>
    <pre>{{ dataPrice.values }}</pre>
    <h3>
      {{dataMarket.title}}
    </h3>
    <pre>{{ dataMarket.values }}</pre>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { HttpService } from '@/services/http.service'
import Datepicker from 'vuejs-datepicker'

export default Vue.extend({
  components: {
    Datepicker
  },
  created() {
    this.changeDate(this.date)
  },
  data() {
    return {
      date: new Date(),
      dataInfo: '',
      dataPrice: [],
      dataMarket: []
    }
  },
  methods: {
    changeDate(date: any) {
      let loader = this.$loading.show({
        color: '#1855E4',
        loader: 'bars',
        backgroundColor: '#C8D7FA'
      });
      const start_date = new Date(date);
      start_date.setHours(0,0,0,0);

      const end_date = new Date(date);
      end_date.setHours(23,0,0,0);
      HttpService.getRates(start_date.toISOString(), end_date.toISOString()).then(res => {
        loader.hide()
        this.dataInfo = res.data.data.type
        this.dataPrice = res.data.included[0].attributes
        this.dataMarket = res.data.included[1].attributes
      })
    }
  }
})
</script>
