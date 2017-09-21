<template>
  <div id="app">
    <Nav-Top-Menu class='top'></Nav-Top-Menu>
    <div class="bottom">
      <Nav-Side-Menu class='left'></Nav-Side-Menu>
      <router-view class='right'></router-view>
    </div>
  </div>
</template>

<script>
  import Nav_side_menu from './components/Nav_side_menu.vue'
  import Nav_top_menu from './components/Nav_top_menu.vue'
  import './style/common.scss'
  export default {
    name: 'app',
    components: {
      'Nav-Side-Menu': Nav_side_menu,
      'Nav-Top-Menu': Nav_top_menu,
    },
  }
</script>

<style>
</style>
