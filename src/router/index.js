import Vue from 'vue'
import Router from 'vue-router'
import Division_config from '@/views/Division_config'
import Group_manage from '@/views/Group_manage'
import Team_manage from '@/views/Team_manage'
import Collect_operation_manage from '@/views/Collect_operation_manage'
import Manual_division_manage from '@/views/Manual_division_manage'
import Collect_business_query from '@/views/Collect_business_query'
import Outsource_company_manage from '@/views/Outsource_company_manage'
import Gxd_manage from '@/views/Gxd_manage'
import Jsd_manage from '@/views/Jsd_manage'
import Collect_performance_manage from '@/views/Collect_performance_manage'
import Collect_performance_query from '@/views/Collect_performance_query'
import Outsource_statements from '@/views/Outsource_statements'
import Collect_statements from '@/views/Collect_statements'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Division_config',
      component: Division_config,
      meta: {
        title: '分案配置',
      }
    },{
      path: '/group_manage',
      name: 'Group_manage',
      component: Group_manage,
      meta: {
        title: '分组管理',
      }
    },{
      path: '/team_manage',
      name: 'Team_manage',
      component: Team_manage,
      meta: {
        title: '组员管理',
      }
    },{
      path: '/collect_operation_manage',
      name: 'Collect_operation_manage',
      component: Collect_operation_manage,
      meta: {
        title: '催收作业管理',
      }
    },{
      path: '/manual_division_manage',
      name: 'Manual_division_manage',
      component: Manual_division_manage,
      meta: {
        title: '手工分案管理',
      }
    },{
      path: '/collect_business_query',
      name: 'Collect_business_query',
      component: Collect_business_query,
      meta: {
        title: '催收业务查询',
      }
    },{
      path: '/outsource_company_manage',
      name: 'Outsource_company_manage',
      component: Outsource_company_manage,
      meta: {
        title: '委外公司管理',
      }
    },{
      path: '/gxd_manage',
      name: 'Gxd_manage',
      component: Gxd_manage,
      meta: {
        title: '工薪贷委外管理',
      }
    },{
      path: '/jsd_manage',
      name: 'Jsd_manage',
      component: Jsd_manage,
      meta: {
        title: '急速贷委外管理',
      }
    },{
      path: '/collect_performance_manage',
      name: 'Collect_performance_manage',
      component: Collect_performance_manage,
      meta: {
        title: '催收绩效管理',
      }
    },{
      path: '/collect_performance_query',
      name: 'Collect_performance_query',
      component: Collect_performance_query,
      meta: {
        title: '催收绩效实时查询',
      }
    },{
      path: '/outsource_statements',
      name: 'Outsource_statements',
      component: Outsource_statements,
      meta: {
        title: '委外报表',
      }
    },{
      path: '/collect_statements',
      name: 'Collect_statements',
      component: Collect_statements,
      meta: {
        title: '催收业绩报表',
      }
    }
  ]
})
