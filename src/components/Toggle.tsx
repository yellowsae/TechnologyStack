import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Toggle',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    onText: {
      type: String,
      default: 'On',
    },
    offText: {
      type: String,
      default: 'Off',
    },
  },
  emits: ['changeClick'],
  setup(props, { emit }) {
    return () => (
      <div class="flex items-center">
        <span class="mr-2">{props.value ? props.onText : props.offText}</span>
        <div class="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            checked={props.value}
            onChange={(e: any) => emit('changeClick', e.target.checked)}
          />
          <label
            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>
    )
  },
})
