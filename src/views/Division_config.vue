<template>
  <div class="divisional_config">
  	<section class="search-nav">
  		<div class="search-nav-item">
  			<span class="search-nav-item-l">策略名称：</span>
  			<el-input class="search-nav-item-r" v-model="input" placeholder="请输入策略名称"></el-input>
  		</div>
  		<div class="search-nav-item">
  			<span>产品：</span>
  			<el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
  		</div>
  		<div class="search-nav-item">
  			<span>催收类型：</span>
  			<el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
  		</div>
  		<div class="search-nav-item search-nav-item_differ">
  			<span>状态：</span>
  			<el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
  		</div>
  	</section>
  	<section class="search-btn">
		<el-button type="primary">查询</el-button>
		<el-button @click='add_config' type="primary">新增</el-button>
  	</section>
  	<section class="search-res">
  		<el-table
  		highlight-current-row
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	      fixed
	      prop="date"
	      label="日期"
	      width="150">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="province"
	      label="省份"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="city"
	      label="市区"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
	      width="300">
	    </el-table-column>
	    <el-table-column
	      prop="zip"
	      label="邮编"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      fixed="right"
	      label="操作"
	      width="100">
      <div scope="scope">
        <el-button @click="handleClick" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </div>
    </el-table-column>
  </el-table>
  	</section>
  </div>
</template>

<script>
export default {
  name: 'Divisional_config',
  data () {
    return {
    	input: '',
    	options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
    	tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  },
  methods: {
	  	add_config(){

	  	},
	  handleClick() {
	    console.log(1);
	  }
  },
}
</script>

<style lang="scss" scoped>
.divisional_config{
	.search-nav, .search-btn{
		display: flex;
	}
	.search-nav{
		flex-wrap: wrap;
		.el-input, .el-input__inner{
			width: auto;
		}
		&-item{
			padding:15px 30px;
			box-sizing: border-box;
			flex: 33%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			& > .el-input{
				width: 198px;
			}
			&_differ{
				width: 33%;
				flex: none;
			}
		}
	}
	.search-btn{
		justify-content: center;
		margin: 15px 15px 30px;
		& > button{
			margin: 0 15px
		}
	}
}
</style>
