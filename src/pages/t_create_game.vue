<template>
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
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
</script>

<style scoped>

</style>