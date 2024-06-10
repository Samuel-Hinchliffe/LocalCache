/**
 * Represents an item stored in the cache.
 */
export class CacheItem {
    /**
     * The value of the cache item.
     */
    value: any;

    /**
     * The expiry time of the cache item.
     * If null, the item does not expire.
     */
    expiry: number | null;

    /**
     * Creates a new instance of the CacheItem class.
     * @param value The value of the cache item.
     * @param expiry The expiry time of the cache item.
     *              If null, the item does not expire.
     */
    constructor(value: any, expiry: number | null) {
        this.value = value;
        this.expiry = expiry;
    }
}
