import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import Child from './child'
import Renders from './userRender'
import foucsDirective from '@/directive/focus'
import { loginStore } from '@/store/login'
export default defineComponent({
  name: 'Home',
  directives: {
    focus: foucsDirective,
  },
  setup() {
    const storeLogin = loginStore()
    const { user } = storeToRefs(storeLogin)
    // eslint-disable-next-line no-console
    console.log(user.value.name)
    // eslint-disable-next-line no-console
    console.log(user.value.password)

    const size = ref<'large' | 'medium' | 'small' | 'mini'>('mini')
    const container = ref(true)
    const string = ref<string>('123')

    return () => (
      <>
        <el-button size={size.value} >默认按钮</el-button>
        <el-button type="primary" size={size.value} onClick={() => container.value = !container.value}>Primary</el-button>

        {/* v-if */}
        {
          container.value
            ? <el-button type='success' size="large"> A</el-button>
            : <el-button type="success" size={size.value}>B</el-button>
        }

        {/* v-for */}
        <br />
        <ul>
          {
            ['large', 'medium', 'small', 'mini'].map(item => (
              <li key={item}>
                <el-button type="success" size={item} >{item}</el-button>
              </li>
            ))
          }
        </ul>

        {/* 自定义指令 */}
        <br />
        <el-input type="text" v-focus v-model={string.value}></el-input>

        <br />

        {/* 插槽 */}
        <Child v-slots={{
          header: <el-icon>✔</el-icon>,
          suffix: (props: Record<'name', string>) => <span>{props.name}</span>,
        }}>
          这是默认插槽
        </Child>

        {/* emit */}
        <Child {...{
          onClick: () => {
            // eslint-disable-next-line no-console
            console.log('emit 点击了')
          },
        }} ></Child>

        <br />

        {/* 使用组件 */}
        <Renders />

        {/* 使用 pinia */}
      </>
    )
  },
})
