# esbuild-plugin-unlink

Esbuild plugin for unlink files after build

---

[![npm](https://img.shields.io/npm/v/@olton/esbuild-plugin-unlink)](https://www.npmjs.com/package/@olton/esbuild-plugin-unlink)
![GitHub](https://img.shields.io/github/license/olton/esbuild-plugin-unlink)

---

## Installation
```bash
npm i -D @olton/esbuild-plugin-unlink
```

## Usage
```js
import { build } from 'esbuild';
import unlink from "@olton/esbuild-plugin-unlink"

await build({
  entryPoints: ...,
  bundle: true,
  outfile: ...,
  plugins: [unlink({
      files: ['dist/**/*.map'],
      skip: ['dist/index.js.map'],
  })],
});
```

---

## License
This software is released under the MIT License.

---

Copyright (c) 2024 by Serhii Pimenov