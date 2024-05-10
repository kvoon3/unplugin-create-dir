# unplugin-create-dir

[![NPM version](https://img.shields.io/npm/v/unplugin-create-dir?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-create-dir)

## Install

```bash
pnpm i -D unplugin-create-dir
```

## Usage

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import CreateDir from 'unplugin-create-dir/vite'

export default defineConfig({
  plugins: [
    CreateDir({
      dirs: ['./pkg'],
    })
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import CreateDir from 'unplugin-limit-files/rollup'

export default {
  plugins: [
    CreateDir({
      /* options */
    })
  ],
}
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-create-dir/rspack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-limit-files/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-limit-files/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import CreateDir from 'unplugin-limit-files/esbuild'

build({
  plugins: [
    CreateDir(
    /* options */
    )
  ],
})
```

<br></details>
