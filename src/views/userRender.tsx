import { defineComponent, onUnmounted, ref, renderSlot } from 'vue'

export default defineComponent({
  name: 'UserRender',
  props: {
    title: {
      type: String,
      default: '默认标题',
    },
  },
  // 逻辑层
  setup() {
    const count = ref<number>(0)

    const timer = setInterval(() => {
      count.value++
    }, 2 * 1000)

    onUnmounted(() => {
      clearInterval(timer)
    })
    return {
      count,
      // timer,
    }
  },

  // 渲染层
  render() {
    const { count, $slots, title } = this
    return (
      <el-card>
        {/* 渲染插槽 */}
        {renderSlot($slots, 'prefix')} {count}
        <br />
        这是 props title {title}
        <br />
        {renderSlot($slots, 'default')}
      </el-card>
    )
  },
})
