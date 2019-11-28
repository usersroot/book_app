<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="文章名称" width="180"></el-table-column>
      <el-table-column prop="text" label="文章内容" min-width="260"></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
 
export default {
    
  data() {
    return {
      tableData: []
    }
  },
  methods: {
      fetch(){
          this.$http.get("articlelists").then(res => {
        this.tableData = res.data;
        console.log(this.tableData);
        });
      },
      edit(id){
          this.$router.push(`/atricle/${id}/edit`)
      },
      remove(id){
          this.$http.delete(`articles/${id}`).then(res=>{
              if(res.data){
                this.$message({
                message: '删除成功',
                type: 'success'
                });
                this.fetch();
              }
          })
      },
  },
  created() {
    this.fetch()
  }
};
</script>