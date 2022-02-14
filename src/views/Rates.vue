<template>
  <div class="rates bg-gray-50 dark:bg-gray-700">
    <div class="sticky top-0 z-50">
      <Banner :message="dataInfo" />
      <div class="items-center flex justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2">
        <div class="vue-datepicker text-gray-50">
          <vue-date-picker
            v-model="date"
            format="DD/MM/YYYY"
            :color="'#ec4899'"
            :max-date="maxDate"
            button-validate="MOSTRAR PRECIOS"
            button-cancel="CERRAR"
            fullscreen-mobile
            validate
            no-calendar-icon
            @onChange="changeDate"
            >
          </vue-date-picker>
        </div>
      </div>
      <h1 class="shadow-md bg-gray-50 dark:bg-gray-700 text-2xl font-light px-10 text-center dark:text-gray-50">{{dataPrice.title}}</h1>
    </div>
    <div class="flex justify-around flex-wrap gap-y-0.5 gap-x-0.5">
      <Hour
        :data="hour"
        v-for="(hour, i) in dataPrice.values"
        :key="'price' + i"
        :tabindex="i"
        :id="'price' + i.toString()"
        :active="i === now" />
    </div>
  </div>
</template>
<script>
import HttpService from '@/services/http.service'
import Hour from '@/components/Hour.vue'
import Banner from '@/components/Banner.vue'
import { VueDatePicker } from '@mathieustan/vue-datepicker';

export default {
  components: {
    Hour,
    Banner,
    VueDatePicker
  },
  created() {
    this.changeDate(this.date)
  },
  data() {
    return {
      date: new Date(),
      maxDate: new Date(),
      now: new Date().getHours(),
      dataInfo: '',
      dataPrice: [],
      dataMarket: []
    }
  },
  methods: {
    async changeDate() {
      let loader = this.$loading.show({
        color: '#1855E4',
        loader: 'bars',
        backgroundColor: '#C8D7FA',
        height: 150,
        width: 150
      });
      try {
        const start_date = new Date(this.date);
        start_date.setHours(0,0,0,0);

        const end_date = new Date(this.date);
        console.log(this.date)
        const res = await HttpService.getRates(start_date.toISOString(), end_date.toISOString())
        loader.hide()
        this.dataInfo = res.data.data.type
        this.dataPrice = res.data.included[0].attributes
        this.dataMarket = res.data.included[1].attributes
        this.$nextTick(() => {
          const divFocusable = (this.now > 2) ? (this.now - 2) : this.now
          document.getElementById('price' + divFocusable).scrollIntoView();
        })
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
}
</script>
<style lang="scss" scoped>

.vue-datepicker /deep/ .vd-picker__input input {
  font-size: 20px !important;
  font-weight: 700 !important;
  text-align: center;
}

</style>
