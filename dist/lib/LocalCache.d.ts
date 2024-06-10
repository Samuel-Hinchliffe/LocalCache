export declare class LocalCache {
    /**
     * Retrieves the value associated with the specified key from the local storage.
     * @param key - The key of the value to retrieve.
     * @returns The value associated with the specified key, or null if the key does not exist.
     */
    static get(key: string): any | null;
    /**
     * Sets a value in the local cache with the specified key.
     * @param key - The key to associate with the value.
     * @param value - The value to store in the local cache.
     * @param ttl - The time-to-live (TTL) for the cached value in milliseconds. If provided, the value will expire after the specified TTL.
     * @returns A boolean indicating whether the value was successfully set in the local cache.
     */
    static set(key: string, value: any, ttl?: number): boolean;
    /**
     * Removes the item with the specified key from the local storage.
     * @param key - The key of the item to remove.
     */
    static del(key: string): void;
    /**
     * Checks if a value with the specified key exists in the local storage.
     * @param key - The key to check for existence.
     * @returns `true` if a value with the specified key exists, `false` otherwise.
     */
    static exists(key: string): boolean;
    /**
     * Clears all the data stored in the localstorage.
     */
    static clear(): void;
    /**
     * Retrieves the time-to-live (TTL) of a cached item.
     *
     * @param key - The key of the cached item.
     * @returns The remaining time-to-live in milliseconds. Returns -1 if the item does not exist or has expired.
     */
    static ttl(key: string): number;
    /**
     * Checks if the localStorage is available in the current browser.
     * @returns {boolean} Returns true if localStorage is available, false otherwise.
     */
    static isLocalStorageAvailable(): boolean;
}
