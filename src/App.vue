<script lang="ts" setup>
import { ref } from 'vue'
const theme = ref('dark')
const buttomClick = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div flex justify-center items-center flex-row h-screen w-screen :class="theme === 'dark' ? 'bg-dark' : 'bg-light'" style="background-image: url('https: www.github.com/yellowsae.png');">
    <el-row m-10>
      <el-button :dark="true" @click="buttomClick">
        Default
      </el-button>
      <el-button :dark="true" type="primary" @click="buttomClick">
        Primary
      </el-button>
      <el-button :dark="true" type="success" @click="buttomClick">
        Success
      </el-button>
      <el-button :dark="true" type="info" @click="buttomClick">
        Info
      </el-button>
      <el-button :dark="true" type="warning" @click="buttomClick">
        Warning
      </el-button>
      <el-button :dark="true" type="danger" @click="buttomClick">
        Danger
      </el-button>
    </el-row>
    <el-image style="width: 100px; height: 100px" src="https://www.github.com/yellowsae.png" />
  </div>
</template>
