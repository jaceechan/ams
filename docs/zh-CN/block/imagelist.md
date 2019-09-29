---
Imagelist: Imagelist 图片列表
---
# Imagelist 图片列表

### 基础用法

默认是带有图片的模式。

<ClientOnly>
<block-imagelist-demo blockName="imagelist1" onlineDemo="https://codepen.io/w3cmark/pen/RwbEgOZ"/>
</ClientOnly>

### 没有图片

```js
options: {
    imageText: { // imageSrc不存在，则认为是无图列表模式，图片显示的位置显示该文案
        field: 'name'
    }
}
```
<ClientOnly>
<block-imagelist-demo blockName="imagelist2" onlineDemo="https://codepen.io/w3cmark/pen/OJLrgGv"/>
</ClientOnly>

### 多选批量操作

配置 `operations`，注意 `operations.showBatch`（显示所有批量操作按钮）、`operations.hideBatch`（隐藏所有批量操作按钮）这两个是内置了action

<ClientOnly>
<block-imagelist-demo blockName="imagelist3" onlineDemo="https://codepen.io/w3cmark/pen/gOYEGjJ"/>
</ClientOnly>

#### 配置

显示数据的字段配置：
```js
options: { // 可以通过options设置显示内容映射的字段名
    imageSrc: { // 图片地址（默认为list的image），如果没有image字段且没指定的其它字段，则认为是无图列表模式
        field: 'imagexxx' // 默认是取image字段，也可以在这指定其它字段
    },
    imageText: { // 无图模式时，图片的位置显示的文案
        field: 'imageText' // 默认是取imageText字段，也可以在这指定其它字段
    }
    title: { // 主标题（默认：list的title）
        field: 'title', // 或在这指定其它字段
        // 'prefix-icon': 'el-icon-search' // 主标题前显示icon
        'prefix-tag': { // 主标题显示tag标签
            type: 'info', // success | info | warning | danger
            label(args) { // 标签内容，args是当前list-item的所有信息
                return args.status;
            }
        }
    },
    subtitle: { // 副标题（默认：list的subtitle）
        field: 'content' // 或在这指定其它字段
    },
    info: { // 主标题右边的信息（默认：list的info）
        field: 'info' // 或在这指定其它字段
    }
}
```
操作栏（没有配置`slot`的操作都会会显示列表每一项的这左上角）：
```js
operations: {
    rejectedItem: {
        type: 'text', // 文字类型
        props: {
            type: 'danger', // 可设置状态
            size: 'mini',
        },
        label: '驳回'
    },
    rejectedItem2: {
        type: 'text', // 文字类型
        props: {
            size: 'mini',
        },
        label: '通过(协助)'
    },
    deleteItem: {
        type: 'button', // icon类型的按钮
        props: {
            size: 'mini',
            icon: 'el-icon-delete'
        }
    },
    editItem: {
        type: 'icon', // hover时会带提示的icon
        label: '编辑',
        icon: 'el-icon-edit'
    }
}
```

| 参数 | 说明 | 类型 | 可选值 | 默认值
| -- | -- | -- | -- | --
| type | block类型 | string | imagelist | -- 
| ctx | 状态，可取值 | string | view | -- 
| resource | 依赖资源 | string / object | -- | -- 
| operations | 可操作项（没有配置`slot`的操作都会会显示列表每一项的这左上角） | object | -- | -- 
| options | 可以设置显示内容映射的字段名 | object | -- | -- 
| props | 辅助配置 | object | -- | -- 
| props.shadow | 辅助配置 | object | hover / always / never | hover
| props.subtitle | 辅助配置 | object | hover / always | hover
| props.pagination | 前端模拟分页 | string | simulate | --