# 安装

## 安装tnpm
tnpm是阿里定制的npm，内部私有的模块都会发布到这里（官网：http://web.npm.alibaba-inc.com/）

```
$ npm i -g npminstall --registry=http://registry.npm.alibaba-inc.com
$ npminstall -g tnpm --registry=http://registry.npm.alibaba-inc.com
```
## 安装vue-cli

```
$ npm install -g vue-cli
```

## 拉取模版生成demo

```
$ vue init aligenie-iot-team/genie-iot-cli my-project
$ cd my-project
// 安装依赖可以用tnpm install会快一些
$ npm install
$ npm run dev
```
## 打包

```
$ npm run build
```

# 参考资料
* 组件：http://element-cn.eleme.io/#/zh-CN/component/button
* vue :https://cn.vuejs.org/v2/guide/installation.html
* vuex（状态管理）:https://vuex.vuejs.org/zh/guide/
* vue api: https://cn.vuejs.org/v2/api

# 组件库（基于element ui）

## 新增历史

### radio-button 新增参数列表

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 组件展示类型 | string | default,grid | default |

#### radio-button 新增参数示例 

```html
<template>
  <div style="width:320px;">
    <el-radio-group v-model="grid" type="grid" size='mini'>
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
      <el-radio-button label="其他"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        grid: '上海',
      };
    }
  }
</script>
```


### slider 新增参数列表

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showNumerial | 显示数值 | Boolean | - | false |
| showAllStops | 显示所有离散点 | Boolean | - | false |
| formatNumerial | 自定义数值内容 | function | - | - |

#### slider 新增参数示例

```html
<template>
  <div class="block">
    <span class="demonstration">不显示间断点，显示数值</span>
    <el-slider
      v-model="val1"
      :min="5"
      :max="25"
      :format-numerial="formatNumerial"
      show-numerial>
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点，显示数值</span>
    <el-slider
      v-model="val2"
      :min="5"
      :max="25"
      :step="5"
      :format-numerial="formatNumerial"
      show-stops
      show-numerial>
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示全部间断点</span>
    <el-slider
      v-model="val3"
      :step="10"
      show-all-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: 0,
        value7: 0
      }
    },
    methods: {
      formatNumerial(item){
        return  item.percentage + '%'
      }
    }
  }
</script>
```
