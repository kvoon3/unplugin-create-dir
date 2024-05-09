import fs from 'node:fs'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-create-dir',
  transformInclude(id) {
    return id.endsWith('main.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`)
  },
  buildStart() {
    const { dirs } = options
    dirs.forEach((dir) => {
      try {
        if (!fs.existsSync(dir))
          fs.mkdirSync(dir)
      }
      catch (err) {
        console.error(err)
      }
    })
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
