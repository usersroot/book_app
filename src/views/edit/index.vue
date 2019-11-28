<template>
  <div>
    <el-form

      label-width="100px"
      class="demo-ruleForm"
    @submit.native.prevent="seveAticle"
    >
      <el-form-item label="文章名称" prop="name">
        <el-input v-model="article.name"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="text">
        <el-input type="textarea" v-model="article.text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
     article:{
         name:'',
         text:''
     }
    };
  },
  methods: {
    fetch(){
          this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data;
        console.log(this.tableData);
        });
      },
      seveAticle(){
          this.$http.put(`articles/edit/${this.$route.params.id}`,this.article).then(res=>{
              console.log(res.data)
              if(res.data){
                  this.$message({
                message: '恭喜，文章修改成功！',
                type: 'success'
                })
                this.$router.push('/')
              }
              

          })
        //   console.log('content',this.article)
      }
  },
  created(){
    this.fetch()
  }
};
</script>