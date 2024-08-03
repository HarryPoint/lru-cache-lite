## lru-cache-lite

A mini LRU implementation library. If you have lightweight LRU needs, we recommend you give it a try.

[![NPM][npm-version-image]][npm-version-url]

English | [简体中文](./README.zh-CN.md)

### Features

1. Supports setting the number of cache entries
2. Supports setting the expiration time for each cache entry

### Usage

step1: import the file and initialize

```javascript
import LRUCacheLite from  "lru-cache-lite"

const cacheIns = new LRUCacheLite(10); // Specify the cache size as 10
```

step2: Set or read the cache

```javascript
// Set cache with set(key, value, expireTime)
cacheIns.set('demo', 'demo-value', 10)

// Read cache
cacheIns.get('demo') // 'demo-value'
```

### ⚠️Note

Currently only compatible with the browser

### Recommended Use Cases

1. Front-end API interface caching
2. Front-end business content caching


### :copyright: License

[MIT](http://opensource.org/licenses/MIT)
