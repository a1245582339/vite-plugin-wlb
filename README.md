# Vite Plugin Work Life Balance

> 一个反内卷vite插件，是 https://github.com/shadowings-zy/wlb-webpack-plugin 的复刻版，代码逻辑基本一致，欢迎试用～

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
