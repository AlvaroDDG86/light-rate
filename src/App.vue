<template>
  <div id="app" class="relative">
    <div class="dark-mode absolute right-1.5 top-0.5">
      <rocker-switch
        backgroundColorOn="#ec4899"
        backgroundColorOff="rgb(29, 78, 216)"
        :borderColor="(mode ? 'rgb(55, 65, 81)' : 'rgb(229, 231, 235)')"
        labelOn="L"
        labelOff="D"
        @change="changeMode"
      />
    </div>
    <the-header />
    <go-top
      bg-color="#ec4899"
      ripple-bg="rgb(29, 78, 216)"
    ></go-top>
    <router-view/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import RockerSwitch from "vue-rocker-switch";
import GoTop from '@inotom/vue-go-top';
export default {
  components: {
    TheHeader,
    RockerSwitch,
    GoTop
  },
  data() {
    return {
      mode: false
    }
  },
  methods: {
    changeMode() {
      this.mode = !this.mode
      document.querySelector('html').classList.toggle("dark");
    }
  }
}
</script>
<style lang="scss">
#app {
  min-width: 400px;
}
.blub {
  width: 150px;
  transform: rotate(-20deg);
  top: -25px;
  left: 5px;
  z-index: 0;
}
</style>
