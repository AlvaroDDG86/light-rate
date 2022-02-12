<template>
  <div
    class="
      banner
      flex
      inline-block
      bg-blue-700
      text-gray-100
      overflow-hidden
      h-20
      whitespace-nowrap
      text-center
      relative
    "
  >
    <span class="text mb-auto mt-auto text-5xl uppercase absolute overflow-hidden">
      {{ message }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      default: "",
    },
  },
}
</script>
<style lang="scss" scoped>
.banner {
    justify-content: center;
    
    @media (max-width: 1240px) {
      justify-content: inherit;
    }
}
.text {
    top: 10%;
    animation: linear infinite;
    animation-duration: 10s;

    @media (max-width: 1240px) {
      justify-content: inherit;
      animation-name: run;
    }

    @media (max-width: 800px) {
      animation-name: run-m;
    }
   
    @media (max-width: 450px) {
      animation-name: run-xs;
    }
}

@keyframes run {
  from { margin-left: 100%; }
  to { margin-left: -100%; } 
}
@keyframes run-m {
  from { margin-left: 100%; }
  to { margin-left: -150%; } 
}
@keyframes run-xs {
  from { margin-left: 100%; }
  to { margin-left: -300%; } 
}
</style>