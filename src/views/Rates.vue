<template>
  <div class="rates bg-gray-50 dark:bg-gray-700">
    <div class="sticky top-0">
      <Banner :message="dataInfo" />
      <div class="datepicker items-center flex justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2">
        <span class="text-2xl font-bold m-1.5 text-gray-50">Fecha:</span>
        <datepicker
          class="text-2xl font-light text-center"
          :value="date"
          :monday-first="true"
          :language="es"
          @selected="changeDate"
          >
        </datepicker>
      </div>
    </div>
    <h1 class="text-2xl font-light px-10 text-center dark:text-gray-50">{{dataPrice.title}}</h1>
    <div class="flex justify-around flex-wrap gap-y-0.5 gap-x-0.5">
      <Hour :data="hour" v-for="(hour, i) in dataPrice.values" :key="'price' + i" :id="'price' + i.toString()" />
    </div>
    <!-- <h1 class="text-2xl font-light px-10 py-5">{{dataMarket.title}}</h1>
    <Hour :data="hour" v-for="(hour, i) in dataMarket.values" :key="'market' + i" /> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { HttpService } from '@/services/http.service'
import Datepicker from 'vuejs-datepicker'
import Hour from '@/components/Hour.vue'
import Banner from '@/components/Banner.vue'
import {es} from 'vuejs-datepicker/dist/locale'

export default Vue.extend({
  components: {
    Datepicker,
    Hour,
    Banner
  },
  created() {
    this.changeDate(this.date)
  },
  data() {
    return {
      date: new Date(),
      es: es,
      dataInfo: '',
      dataPrice: [],
      dataMarket: []
    }
  },
  methods: {
    async changeDate(date: any) {
      let loader = this.$loading.show({
        color: '#1855E4',
        loader: 'bars',
        backgroundColor: '#C8D7FA',
        height: 150,
        width: 150
      });
      try {
        const start_date = new Date(date);
        start_date.setHours(0,0,0,0);

        const end_date = new Date(date);
        end_date.setHours(23,0,0,0);
        const res = await HttpService.getRates(start_date.toISOString(), end_date.toISOString())
        loader.hide()
        this.dataInfo = res.data.data.type
        this.dataPrice = res.data.included[0].attributes
        this.dataMarket = res.data.included[1].attributes
      } catch (error) {
        loader.hide()
      }
     
    }
  },
  watch: {
    'dataPrice.values': {
      handler: (newValue) => {
        const current = new Date().getHours()
        document.getElementById('price' + current)?.focus()
      }
    }
  }
})
</script>
<style lang="scss" scoped>
/deep/ .vdp-datepicker imput {
  text-align: center;
}
</style>
