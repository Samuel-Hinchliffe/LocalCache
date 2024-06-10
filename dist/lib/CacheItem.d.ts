/**
 * Represents an item stored in the cache.
 */
/**
 * Represents a cache item.
 * @typedef {object} CacheItem
 * @property {any} value - The value of the cache item.
 * @property {number | null} expiry - The expiry time of the cache item in milliseconds. Null if the item does not expire.
 */
export type CacheItem = {
    value: any;
    expiry: number | null;
};
