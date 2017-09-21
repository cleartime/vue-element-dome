<template>
  <div>
    <!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <i class="el-icon-d-arrow-left"></i>
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item :index="`${index}`" v-for='(i, index) in routerList' :key="index" @click="routerLink(i.path)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{i.meta.title}}</span>
      </el-menu-item>
      <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">分组管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">组员管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">催收作业管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">手工分案管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">催收业务查询</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">委外公司管理</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">工薪贷委外管理</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-setting"></i>
          <span slot="title">急速贷委外管理</span>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-setting"></i>
          <span slot="title">催收绩效管理</span>
        </el-menu-item>
        <el-menu-item index="11">
          <i class="el-icon-setting"></i>
          <span slot="title">催收绩效实时查询</span>
        </el-menu-item>
        <el-menu-item index="12">
          <i class="el-icon-setting"></i>
          <span slot="title">委外报表</span>
        </el-menu-item>
        <el-menu-item index="13">
          <i class="el-icon-setting"></i>
          <span slot="title">催收业绩报表</span>
        </el-menu-item> -->
    </el-menu>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  import routerList from '../router/'
  export default {
    data() {
      return {
        routerList: [],
        isCollapse: false
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.routerList = routerList.options.routes;
      });
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      routerLink(path) {
        this.$router.push(path)
      }
    }
  }
</script>