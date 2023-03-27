import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const theme = ref('dark')
    const buttomClick = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }
    return () => (
      <div
        flex
        justify-center
        items-center
        flex-row
        h-screen
        w-screen
        class={theme.value === 'dark' ? 'bg-dark' : 'bg-light'}
      >
        <el-row m-10>
          <el-button onClick={buttomClick}>Default</el-button>
          <el-button type="primary" onClick={buttomClick}>
            Primary
          </el-button>
          <el-button type="success" onClick={buttomClick}>
            Success
          </el-button>
          <el-button type="info" onClick={buttomClick}>
            Info
          </el-button>
          <el-button type="warning" onClick={buttomClick}>
            Warning
          </el-button>
          <el-button type="danger" onClick={buttomClick}>
            Danger
          </el-button>
        </el-row>
        <el-image style="width: 100px; height: 100px" src="https://www.github.com/yellowsae.png" />
      </div>
    )
  },
})
