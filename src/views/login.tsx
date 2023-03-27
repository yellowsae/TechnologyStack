import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Toggle from '@/components/Toggle'
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
    const state = reactive({
      isOn: false,
    })
    const changeClick = (value: boolean) => {
      state.isOn = value
    }

    return () => (
      <div class={String('flex justify-center items-center flex-row h-screen w-screen bg-dark-100')}>
        <el-row class="m-10">
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
          <Toggle {...{
            value: theme.value,
            onText: 'On',
            offText: 'Off',
            changeClick,
          }} />
        </el-row>
        <el-image style="width: 100px; height: 100px" src="https://www.github.com/yellowsae.png" />
      </div>
    )
  },
})
