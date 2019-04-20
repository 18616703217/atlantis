<template>
<div class="app-container">
  <div class="app-container">
    <el-input v-model="search_form.userId" style="width:300px;"/>
    <el-button class="filter-item" type="primary" icon="el-icon-search" @click="search">
          {{ $t('table.search') }}
    </el-button>
    <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="addDialog">
          {{ $t('table.add') }}
    </el-button>
  </div>
  <div class="app-container">
  <el-table :v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
    <el-table-column align="center" label="用户ID">
      <template slot-scope="scope">
        {{ scope.row.userId }}
      </template>
    </el-table-column>
    <el-table-column align="center" label="用户名称" >
      <template slot-scope="scope">
        {{ scope.row.username }}
      </template>
    </el-table-column>
    <el-table-column align="center" label="用户分组">
      <template slot-scope="scope">
        {{ scope.row.userGroup }}
      </template>
    </el-table-column>
    <el-table-column align="center" label="创建时间">
      <template slot-scope="scope">
        {{ scope.row.creatTime }}
      </template>
    </el-table-column>
    <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope)">
            {{ $t('table.edit') }}
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
  </el-table>
  </div>
  <el-dialog title="新增用户" :visible.sync="dialogAdd" :before-close="handleClose">
    <el-form :model="add_form">
      <el-form-item label="用户名称" :label-width="formLabelWidth">
        <el-input v-model="add_form.username" autocomplete="off" placeholder="输入用户名称"></el-input>
      </el-form-item>
      <el-form-item label="选择分组" :label-width="formLabelWidth">
        <el-select v-model="add_form.userGroup" placeholder="请选择分组">
          <el-option label="管理员" value="admin"></el-option>
          <el-option label="测试" value="test"></el-option>
        </el-select>
      </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAdd = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </div>
  </el-dialog>
    <el-dialog title="编辑用户" :visible.sync="dialogEdit" :before-close="handleClose">
    <el-form :model="edit_form">
      <el-form-item label="用户名称" :label-width="formLabelWidth">
        <el-input v-model="edit_form.username" autocomplete="off" placeholder="输入用户名称"></el-input>
      </el-form-item>
      <el-form-item label="选择分组" :label-width="formLabelWidth">
        <el-select v-model="edit_form.userGroup" placeholder="请选择分组">
          <el-option label="管理员" value="admin"></el-option>
          <el-option label="测试" value="test"></el-option>
        </el-select>
      </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogEdit = false">取 消</el-button>
    <el-button type="primary" @click="edit">确 定</el-button>
  </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      downloadLoading: false,
      filename: '',
      search_form: { userId: '' },
      add_form: { userName: '', userGroup: '' },
      edit_form: { userId: '', userName: '', userGroup: '', creatTime: '' },
      del_form: { userId: '' },
      dialogAdd: false,
      dialogEdit: false,
      formLabelWidth: '120px'
    }
  },
  // watch: {
  //   list(val) {
  //     console.log(val)
  //   }
  // },
  created() {
    this.listLoading = true
    this.list = [{ 'userId': 1, username: 'wenqiz', 'userGroup': 'admin', 'creatTime': '2019-04-17' },
      { 'userId': 2, username: 'dong', 'userGroup': 'admin', 'creatTime': '2019-04-17' },
      { 'userId': 3, username: 'hao', 'userGroup': 'admin', 'creatTime': '2019-04-17' }]
    // this.listLoading = false
  },
  methods: {
    search() {
      console.log(this.filename)
    },
    addDialog() {
      this.dialogAdd = true
      console.log(this.filename)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        }).catch(_ => {})
    },
    save() {
      this.add_form['userId'] = 4
      this.add_form['creatTime'] = '2019-04-17'
      this.list.push(JSON.parse(JSON.stringify(this.add_form)))
      this.add_form = { userName: '', userGroup: '' }
      this.dialogAdd = false
    },
    edit() {
      console.log(this.edit_form)
      this.dialogEdit = false
    },
    handleDelete(data) {
      this.del_form.userId = data.row.userId
      delete this.list.splice(data.$index, 1)
    },
    handleUpdate(data) {
      this.dialogEdit = true
      this.edit_form = data.row
    }
  }
}
</script>
