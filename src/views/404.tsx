import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: '404',
  setup() {
    const router = useRouter()
    const route = useRoute()

    function go(pathName: string) {
      router.push({
        name: pathName,
        query: {
          value: '路由传参',
        },
      })
      const { query } = route
      // eslint-disable-next-line no-console
      console.log(query)
    }

    return () => (
      <div>
        <h1>404</h1>
        <el-button onClick={() => go('home')}>跳转home</el-button>
        <el-button onClick={() => go('login')}>跳转login</el-button>
      </div>
    )
  },
})
