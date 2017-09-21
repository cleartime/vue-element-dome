<template>
	<div class="divisional_config">
		<section class="search-nav">
			<div class="search-nav-item">
				<span>策略名称：</span>
				<el-input v-model="input" placeholder="请输入策略名称"></el-input>
			</div>
			<div class="search-nav-item">
				<span>产品：</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="search-nav-item">
				<span>催收类型：</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="search-nav-item search-nav-item_differ">
				<span>状态：</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
		</section>
		<section class="search-btn">
			<el-button type="success">查询</el-button>
			<el-button  @click="alertVisible = !alertVisible" type="primary">新增</el-button>
		</section>
		<section class="search-res">
			<el-table highlight-current-row :data="tableData" border>
				<el-table-column prop="clmc" label="策略名称">
				</el-table-column>
				<el-table-column prop="cp" label="产品" >
				</el-table-column>
				<el-table-column prop="cslx" label="催收类型">
				</el-table-column>
				<el-table-column prop="yqts" label="逾期天数（D）" >
				</el-table-column>
				<el-table-column prop="zt" label="状态" >
				</el-table-column>
				<el-table-column  label="操作" >
					<template scope="scope">
						<el-button @click="toggleStatus(scope.$index, scope.row)" type="text" size="small" v-if='scope.row.zt=="启用"'>禁用</el-button>
						<el-button @click="toggleStatus(scope.$index, scope.row)"type="text" size="small" v-if='scope.row.zt=="禁用"'>启用</el-button>
					</template>
				</el-table-column>
			</el-table>
		</section>
		<transition name="el-fade-in-linear">
		<section class="f-alert" v-show="alertVisible">
			<h2 class="f-alert-title">{{title}}<span></span></h2>
			<div class="f-alert-item">
				<span>策略名称：</span>
				<el-input v-model="input" placeholder="请输入策略名称"></el-input>
			</div>
			<div class="f-alert-item">
				<span>产品：</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="f-alert-item">
				<span>催收类型：</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="f-alert-item">
				<span>逾期天数：</span>
				<div class="double-input" >
					<el-input v-model="input" placeholder="请输入策略名称"></el-input>
					<el-input v-model="input" placeholder="请输入策略名称"></el-input>
				</div>
			</div>
			<div  class="f-alert-btn">
				<el-button type="info">保存</el-button>
				<el-button @click="alertVisible = !alertVisible" type="info">取消</el-button>
			</div>
		</section>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'Divisional_config',
		data() {
			return {
				alertVisible: false,
				title: '分案配置新增',
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
					clmc: '工薪贷1-7天',
					cp: '工薪贷',
					cslx: '电催',
					yqts: '1<=D<=7',
					zt: '启用',
				}, {
					clmc: '工薪贷8-30天',
					cp: '工薪贷',
					cslx: '电催',
					yqts: '8<=D<=30',
					zt: '启用',
				},{
					clmc: '工薪贷委外',
					cp: '工薪贷',
					cslx: '委外',
					yqts: 'D>30',
					zt: '启用',
				},{
					clmc: '急速贷委外',
					cp: '急速贷',
					cslx: '委外',
					yqts: 'D>=1',
					zt: '启用',
				},{
					clmc: '工薪贷委外',
					cp: '工薪贷',
					cslx: '委外',
					yqts: 'D>30',
					zt: '禁用',
				}]
			}
		},
		methods: {
			toggleStatus(type) {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		    }
		},
	}
</script>

<style lang="scss" scoped>
</style>
