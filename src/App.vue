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
import Nav_side_menu from './components/Nav_side_menu.vue';
import Nav_top_menu from './components/Nav_top_menu.vue';
export default {
  name: 'app',
  components: {
    'Nav-Side-Menu': Nav_side_menu,
    'Nav-Top-Menu': Nav_top_menu,
  },
}
</script>

<style>
body {
  margin: 0;
}
.top{
  position: absolute;
  top: 0;
  left: 0;
  line-height: 50px;
  background: #009dd9;
  width: 100%;
  text-align: center;
  color: #fff;
}
.bottom{
  display: flex;
  padding-top: 50px;
}
.left{
  flex: 200px;
}
.right{
  margin-left: 20px;
  flex: auto
}
</style>
