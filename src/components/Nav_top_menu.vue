<template>
    <div>
    {{title}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '发薪贷催收系统',
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.route_change();
      });
    },
    methods: {
      route_change() {
        document.title = this.title = this.$route.meta.title
      }
    },
    watch: {
      '$route'() {
        this.route_change();
      },
    }
  }
</script>