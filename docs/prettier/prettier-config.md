# Prettier 配置

项目根目录新增`.prettierrc` 文件 需要使用`module.export` 导出对象

## printWidth

每行显示最多显示多少个字符换行

- **默认值**: `80`
- **类型**: `number`

## tabWidth

指定每个缩进级别的空格数

- **默认值**:`2`
- **类型**: `number`

## useTabs

使用 `Tabs` 替代空格缩进, `useTabs` 为 true 会忽略 `tabWidth`

- **默认值**:`false`
- **类型**:`boolean`

## semi

在语句末尾打印分号。

- **默认值**:`true`
- **类型**:`boolean`

## parser

指定使用哪种解析器进行格式化。

`prettier` 会自动从输入文件路径推断解析器，可以不必更改这个设置

- **默认值**: `none`
- **类型**: `string`

## singleQuote

用单引号代替双引号

- **默认值**:`false`
- **类型**: `boolean`

## quoteProps

对象里的 key 是否用引号包裹

- **默认值**:`as-needed`

有效选项

- `as-needed` 仅在需要的时候增加引号
- `consistent` 如果一个属性值需要引号 则所有属性包裹引号
- `preserve` 在对象属性中注意引号的输入使用

## jsxSingleQuote

在 JSX 使用单引号取代双引号

- **默认值**:`false`
- **类型**:`boolean`

## trailingComma

在多行逗号分隔的语法结构中，尽可能打印末尾逗号

- **默认值**:`false`

有效选项

- `es5` 在 ES5 中有效末尾逗号(对象、数组等)。TypeScript 的类型参数中没有末尾的逗号
- `none` 没有末尾的逗号
- `all` 尽可能以逗号结尾

## bracketSpacing

打印对象字面量中括号之间的空格。

- **默认值**:true

有效选项

- `true` - Example: `{ foo: bar }`
- `false` -  Example: `{foo: bar}`

## bracketSameLine

将多行 HTML (HTML, JSX, Vue, Angular)元素的>放在最后一行，而不是单独放在下一行(这不适用于自闭和元素)。

- **默认值**:true

有效选项:

- `true` Example

  ```jsx
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}>
    Click Here
  </button>
  ```

- `false` Example

  ```jsx
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}
  >
    Click Here
  </button>
  ```

## arrowParens

在一个单独的箭头函数的周围包含括号

- **默认值**:`always`

有效选项:

- `always` - 始终包含括号 : `(x) => x`
- `avoid` - 尽可能省略括号 : `x => x`

## requirePragma

在文件顶部添加注释才会被Prettier格式化
这在逐渐将大型、未格式化的代码库过渡到 Prettier 时非常有用。

- **默认值**:false

  ```js
  /**
   @prettier
   */
  ```

  或者

  ```js
  /**
   @format
   */
  ```

## insertPragma

Prettier 可以在文件顶部插入一个特殊的`@format` 标记 表示该文件可以被Prettier格式化
和requirePragma一起配合使用效果很好
如果在文件的顶部已经有 `@format`  标记 那么这个选项将会为它添加一个换行符

- **默认值**:false

## proseWrap

 是否需要折行

- **默认值**:`preserve`

有效选项:

- `always` - 当文字超出 `printWidth` 的时候换行
- `never` - 不换行
- `preserve` - 按照文件原样换行

## htmlWhitespaceSensitivity

指定 HTML、Vue、Angular 和 Handlebars 的全局空白敏感度

- **默认值**:`css`

有效选项:

- `css` - 遵守 CSS `display` 属性的默认值。对于 Handlebars ，同样严格对待。
- `strict` - 所有标签周围的空白（或缺少空白）被认为是重要的。
- `ignore` - 所有标签周围的空格（或缺少空格）被认为是无关紧要的。

## endOfLine

换行结尾的风格

- **默认值**:`lf`

有效选项:

- `lf` - 仅换行 `(\n)`，在 Linux 和 macOS 以及 git repos 中很常见
- `crlf` - 回车 + 换行字符 `(\r\n)`，在 Windows 上很常见
- `cr` - 仅回车符`(\r)`，很少使用
- `auto` -维护现有的行结尾

## overrides

对某些扩展文件，文件夹和特殊的文件 拥有不用的配置项

 ```js
{
  "semi": false,
  "overrides": [
    {
      "files": "*.test.js",
      "options": {
        "semi": true
      }
    },
    {
      "files": ["*.html", "legacy/**/*.js"],
      "options": {
        "tabWidth": 4
      }
    }
  ]
}
 ```
