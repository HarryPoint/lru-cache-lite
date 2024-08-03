## lru-cache-lite

迷你型 LRU 实现库。如果你有轻量的 LRU 需求，那么推荐你试试。

[![NPM][npm-version-image]][npm-version-url]

[npm-version-image]: https://img.shields.io/npm/v/plk-api2ts.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/lru-cache-lite

[English](./README.md) | 简体中文

### 功能

1. 支持设置缓存内容数量
2. 支持设置每一条缓存过期时间

### 使用

step1: 引入文件，并初始化

```javascript
import LRUCacheLite from  "lru-cache-lite"

const cacheIns = new LRUCacheLite(10); // 指定缓存数量为10
```

step2: 设置缓存或读取缓存

```javascript
// 设置缓存 set(key, value, expireTime(秒) ), 
cacheIns.set('demo', 'demo-value', 10)

// 读取缓存
cacheIns.get('demo') // 'demo-value'

const objKey = {};

const objValue = {};

cacheIns.set(objKey, objValue)

console.log(objValue === cacheIns.get(objKey)) // true
```

### 建议使用场景

1. 前端做接口缓存
2. 前端业务内容的缓存处理


### :copyright: License

[MIT](http://opensource.org/licenses/MIT)
