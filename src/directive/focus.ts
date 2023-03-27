import type { ObjectDirective } from 'vue'

const focus: ObjectDirective<HTMLElement, any> = {
  mounted(el: any) {
    switch (el.target) {
      case 'input':
        el.focus()
        break
      default:
        // eslint-disable-next-line no-case-declarations
        const input = el.querySelector('input')
        input?.focus()
        break
    }
  },
}

export default focus
