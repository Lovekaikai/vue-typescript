<template>
  <div class="container">
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import myHeader from '@/components/header.vue'
  @Component({
    components: {
      myHeader
    }
  })
export default class App extends Vue {}
</script>

<style>
#app {

  background:rgb(236, 236, 236)
}
</style>
