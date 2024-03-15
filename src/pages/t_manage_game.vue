<template>
    <el-main class="main">
        <div class="box1">
            <el-form ref="form" :model="form" label-width="6%" style="font-size: 16px; 
                                                              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                                                              font-weight: 500;
                                                              margin: 1%; ">
                <el-form-item label="Name" >
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Course">
                    <el-select v-model="form.region" placeholder="select">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Type">
                    <el-select v-model="form.region" placeholder="select">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Time">
                    <el-col style="width: 20%;">
                        <el-date-picker type="date" placeholder="Start" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" style="width: 2%;">----</el-col>
                    <el-col style="width: 20%;">
                        <el-date-picker type="date" placeholder="End" v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="Upload">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange"
                        :file-list="fileList">
                        <el-button size="small" type="primary" style="font-size: 14px;">Click</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="Tab">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="AI" name="type"></el-checkbox>
                        <el-checkbox label="Deep learing" name="type"></el-checkbox>
                        <el-checkbox label="RNN" name="type"></el-checkbox>
                        <el-checkbox label="For new" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Level">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="Easy"></el-radio>
                        <el-radio label="Medium"></el-radio>
                        <el-radio label="Hard"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Descripetion">
                    <el-input type="textarea" v-model="form.desc" style="font-size: 14px; 
                                                                 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                                                                 height: 100%;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Submit</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="box2">
            <el-table
                ref="filterTable"
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="name"
                    style="width: 5%;"
                    >
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="date"
                    sortable
                    style="width: 10%;"
                    column-key="date"
                    :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                    :filter-method="filterDate"
                    >
                </el-table-column>
                <el-table-column
                    prop="score"
                    label="score"
                    style="width: 25%;"
                    sortable
                    colum-key="score"
                    :filters="[{text:'88',value:'88'},{text:'68',value:'68'},{text:'58',value:'58'},{text:'48',value:'48'},]"
                    :filter-method="filterScore"
                >
                </el-table-column>
                <el-table-column
                    align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                                v-model="search"
                                size="large"
                                placeholder="Search"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                                size="lage"
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)">Download all</el-button>
                        </template>
                </el-table-column>
            </el-table>
        </div>
    </el-main>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: 'neale',
          score: '88',
        },{
          date: '2016-05-04',
          name: 'neal',
          score: '68',
        },{
          date: '2016-05-03',
          name: 'niel',
          score: '58',
        },{
          date: '2016-05-01',
          name: 'nio',
          score: '48',
        },],
        search: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterDate(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      filterScore(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style>
.main{
    height: 100%;
    font-family:monospace;
}
.box1{
    border: 1px solid #2e2e2ef6;
    height: 80%;
    font-family:monospace;
}
.box2{
    margin-top: 1%;
    border: 1px solid #2e2e2ef6;
    font-family:monospace;
}
.el-form,
.el-input,
.el-select,
.el-date-picker,
.el-time-picker,
.el-upload,
.el-checkbox-group,
.el-radio-group,
.el-button,
.el-table,
.el-input__inner, 
.el-select-dropdown__item, 
.el-checkbox__label, 
.el-radio__label 
{
  font-family:monospace;
  font-size: 14px;
}
</style>
