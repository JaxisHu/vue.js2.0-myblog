<template>
  <div id="app">
    <myHeader></myHeader>
    <navbar></navbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import myHeader from './components/myHeader/myHeader';
  import navbar from './components/navbar/navbar';
  import footer from './components/footer/footer';
  export default {
    components: {
      myHeader,
      navbar,
      'v-footer': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    min-width: 350px

  .fade-enter-active
    transition: all 0.5s

  .fade-enter
    opacity: 0
    transform: translateY(20px)

</style>
