<template>
  <div>
    <el-table :data="arrs">
      <el-table-column prop="id"
                       label="id">

      </el-table-column>
      <el-table-column prop="name"
                       label="姓名">

      </el-table-column>
      <el-table-column prop="text"
                       label="文本">

      </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑删除 -->
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import instance from '../../api/index'
export default {
  name: "HomeIndex",
  data () {
    return {
      arrs: null
    }
  },
  methods: {
    async gethome () {
      let { data } = await instance.get("/homeindex")
      console.log(data)
      this.arrs = data
    },
  },
  created () {
    this.gethome()
  }
}
</script>

<style>
</style>