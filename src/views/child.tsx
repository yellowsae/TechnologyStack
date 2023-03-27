import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Child',
  emeits: ['click'],
  setup(props, { slots, emit }) {
    return () => (
      <>
        <el-text class="m-10">默认插槽:  {slots.default && slots.default()}</el-text>
        <br />
        <el-text>命名插槽:  {slots.header && slots.header()}</el-text>
        <br />
        <el-text>作用域插槽: {slots.suffix && slots.suffix({ name: '这是作用域插槽' })}</el-text>
        <br />
        <el-button onClick={() => emit('click')}>点击触发</el-button>
      </>
    )
  },
})
