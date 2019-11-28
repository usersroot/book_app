<template>
  <div>
    <el-form
      label-width="100px"
      class="demo-ruleForm"
    @submit.native.prevent="severAticle"
    >
      <el-form-item label="文章名称" prop="name">
        <el-input v-model="article.name"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="desc">
        <el-input type="textarea" v-model="article.text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即提交</el-button>
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
      severAticle(){
          this.$http.post('articles',this.article).then(res=>{
              console.log(res.data)
              if(res.data){
                  this.$message({
                message: '恭喜，文章创建成功！',
                type: 'success'
                })
                this.$router.push('/')
              }
              

          })
        //   console.log('content',this.article)
      }
  }
};
</script>