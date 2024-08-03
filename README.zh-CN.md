## lru-cache-lite

迷你型 LRU 实现库。如果你有轻量的 LRU 需求，那么推荐你试试。

[![NPM][npm-version-image]][npm-version-url]

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
// 设置缓存 set(key, value, expireTime), 
cacheIns.set('demo', 'demo-value', 10)

// 读取缓存
cacheIns.get('demo') // 'demo-value'
```

### ⚠️注意

目前只兼容了浏览器端

### 建议使用场景

1. 前端做接口缓存
2. 前端业务内容的缓存处理


### :copyright: License

[MIT](http://opensource.org/licenses/MIT)
