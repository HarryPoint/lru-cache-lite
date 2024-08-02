class LRUCache {
  #length;
  #cache;
  constructor(length = 10) {
    this.#length = length;
    this.#cache = new Map();
    this.clearCacheLoop();
  }

  clearCacheLoop() {
    this.#cache.forEach((value, key) => {
      const [, timeSamp] = value;
      if (Date.now() > timeSamp) {
        this.#cache.delete(key);
      }
    });
    requestAnimationFrame(() => {
      this.clearCacheLoop();
    });
  }

  get(key) {
    if (!this.#cache.has(key)) {
      return;
    }
    const [value, timeSamp] = this.#cache.get(key);
    this.#cache.delete(key);
    this.#cache.set(key, [value, timeSamp]);
    return value;
  }

  set(key, value, expireTime = 60) {
    if (this.#cache.has(key)) {
      this.#cache.delete(key);
    }
    if (this.#cache.size === this.#length) {
      this.#cache.delete(this.#cache.keys().next().value);
    }
    this.#cache.set(key, [value, Date.now() + expireTime * 1000]);
  }
}

export default LRUCache;
