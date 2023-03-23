<script lang="ts" setup>
import { ref } from 'vue'
const theme = ref('dark')
const buttomClick = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div flex justify-center items-center h-screen w-screen :class="theme === 'dark' ? 'bg-dark' : 'bg-light'">
    <el-row m-10>
      <el-button @click="buttomClick">
        Default
      </el-button>
      <el-button type="primary" @click="buttomClick">
        Primary
      </el-button>
      <el-button type="success" @click="buttomClick">
        Success
      </el-button>
      <el-button type="info" @click="buttomClick">
        Info
      </el-button>
      <el-button type="warning" @click="buttomClick">
        Warning
      </el-button>
      <el-button type="danger" @click="buttomClick">
        Danger
      </el-button>
    </el-row>
  </div>
</template>
