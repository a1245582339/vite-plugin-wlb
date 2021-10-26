# Vite Plugin Work Life Balance

> A vite plugin help you automatically open debugging tools in the development environment

### Install

```sh
$ yarn add vite-plugin-wlb
```

### Usage

```javascript
import WLBPlugin from 'vite-plugin-wlb'

module.exports = {
    plugins: [
        // others
        WLBPlugin()
    ]
}
```

### Options

#### `startWorkingTime`

* **Type:** `number | undefind`
* **Default:** `10`

  上班时间。

#### `endWorkingTime`

* **Type:** `number | undefind`
* **Default:** `19`

  下班时间。

#### `ignoreWeekend`

* **Type:** `boolean | undefind`
* **Default:** `false`

  是否忽略周末。

#### `warningMessage`

* **Type:** `string | undefind`
* **Default:** `'别卷了！现在不是工作时间！为了营造良好的工作环境，WLB插件已经将「反内卷 & 防沉迷逻辑」注入到打包产物中。'`

  构建时控制台输出的文案。
