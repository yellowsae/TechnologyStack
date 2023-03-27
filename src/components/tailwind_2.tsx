import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tailwind2',
  setup() {
    return () => (
      <>
        <div class="grid grid-cols-10 gap-2">
          <div class="bg-sky-50 aspect-square"></div>
          <div class="bg-sky-100 aspect-square"></div>
          <div class="bg-sky-200 aspect-square"></div>
          <div class="bg-sky-300 aspect-square"></div>
          <div class="bg-sky-400 aspect-square"></div>
          <div class="bg-sky-500 aspect-square"></div>
          <div class="bg-sky-600 aspect-square"></div>
          <div class="bg-sky-700 aspect-square"></div>
          <div class="bg-sky-800 aspect-square"></div>
          <div class="bg-sky-900 aspect-square"></div>
          <div class="bg-sky-1000 aspect-square"></div>
        </div>

        <div class="grid grid-cols-10 gap-2 my-10px">
          <div class="bg-blue-50 aspect-square"></div>
          <div class="bg-blue-100 aspect-square"></div>
          <div class="bg-blue-200 aspect-square"></div>
          <div class="bg-blue-300 aspect-square"></div>
          <div class="bg-blue-400 aspect-square"></div>
          <div class="bg-blue-500 aspect-square"></div>
          <div class="bg-blue-600 aspect-square"></div>
          <div class="bg-blue-700 aspect-square"></div>
          <div class="bg-blue-800 aspect-square"></div>
          <div class="bg-blue-900 aspect-square"></div>
        </div>

        <div class="grid grid-cols-10 gap-2 my-10px">
          <div class="bg-indigo-50 aspect-square"></div>
          <div class="bg-indigo-100 aspect-square"></div>
          <div class="bg-indigo-200 aspect-square"></div>
          <div class="bg-indigo-300 aspect-square"></div>
          <div class="bg-indigo-400 aspect-square"></div>
          <div class="bg-indigo-500 aspect-square"></div>
          <div class="bg-indigo-600 aspect-square"></div>
          <div class="bg-indigo-700 aspect-square"></div>
          <div class="bg-indigo-800 aspect-square"></div>
          <div class="bg-indigo-900 aspect-square"></div>
        </div>
        <div class="grid grid-cols-10 gap-2 my-10px">
          <div class="bg-violet-50 aspect-square"></div>
          <div class="bg-violet-100 aspect-square"></div>
          <div class="bg-violet-200 aspect-square"></div>
          <div class="bg-violet-300 aspect-square"></div>
          <div class="bg-violet-400 aspect-square"></div>
          <div class="bg-violet-500 aspect-square"></div>
          <div class="bg-violet-600 aspect-square"></div>
          <div class="bg-violet-700 aspect-square"></div>
          <div class="bg-violet-800 aspect-square"></div>
          <div class="bg-violet-900 aspect-square"></div>
        </div>

        <br />
        <div class="space-y-4">
          <div class="w-96 bg-white shadow rounded">
            w-96
          </div>
          <div class="w-80 bg-white shadow rounded">
            w-80
          </div>
          <div class="w-72 bg-white shadow rounded">
            w-72
          </div>
          <div class="w-64 bg-white shadow rounded">
            w-64
          </div>
          <div class="w-60 bg-white shadow rounded">
            w-60
          </div>
          <div class="w-56 bg-white shadow rounded">
            w-56
          </div>
          <div class="w-52 bg-white shadow rounded">
            w-52
          </div>
          <div class="w-48 bg-white shadow rounded">
            w-48
          </div>
        </div>

        <div class="flex font-sans">
          <div class="flex-none w-48 relative">
            <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                Classic Utility Jacket
              </h1>
              <div class="text-lg font-semibold text-slate-500">
                $110.00
              </div>
              <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                In stock
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-sm">
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="s" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="m" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="l" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="xl" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                  Buy now
                </button>
                <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                  Add to bag
                </button>
              </div>
              <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p class="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:items-center sm:space-y-0 sm:space-x-6">
          <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg" class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" alt="" />
          <div class="text-center space-y-2 sm:text-left">
            <p class="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p class="text-slate-500 font-medium">
              Product Engineer
            </p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Message</button>
        </div>
      </>
    )
  },
})
