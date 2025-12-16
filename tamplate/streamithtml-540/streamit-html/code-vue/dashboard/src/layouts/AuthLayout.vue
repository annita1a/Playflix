<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'AuthLayout',
  components: {},
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
      },
    };
  },
  // mounted() {
  //   document.querySelector('html').classList.add('dashboard-style');
  // },
  // unmounted() {
  //   document.querySelector('html').classList.remove('dashboard-style');
  // },
};
</script>
<style lang="scss">
/*---------------------------------------------------------------------
Font
-----------------------------------------------------------------------*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap');
</style>
