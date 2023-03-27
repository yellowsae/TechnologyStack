import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Login',
  setup() {
    const theme = ref<boolean>(true)
    const router = useRouter()

    const buttomClick = () => {
      theme.value = !theme.value
    }

    const login = () => {
      localStorage.setItem('user', '123')
      router.push({
        name: 'home',
      })
    }

    return () => (
      <div class={theme.value ? 'bg-dark' : 'bg-light'} flex justify-center items-center flex-row h-screen w-screen>
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
          <el-button type="primary" onClick={login}>login</el-button>
        </el-row>
        <el-image style="width: 100px; height: 100px" src="https://www.github.com/yellowsae.png" />
      </div>
    )
  },
})
