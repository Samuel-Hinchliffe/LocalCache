import { CacheItem } from "./CacheItem";

export class LocalCache {
    /**
     * Retrieves the value associated with the specified key from the local storage.
     * @param key - The key of the value to retrieve.
     * @returns The value associated with the specified key, or null if the key does not exist.
     */
    static get(key: string): any | null {
        const data: string | null = localStorage.getItem(key);
        if (!data) return null;
        const { value, expiry }: CacheItem = JSON.parse(data);
        if (expiry) {
            const now = new Date();
            if (now.getTime() > expiry) {
                localStorage.removeItem(key);
                return null;
            }
        }
        return value
    }

    /**
     * Sets a value in the local cache with the specified key.
     * @param key - The key to associate with the value.
     * @param value - The value to store in the local cache.
     * @param ttl - The time-to-live (TTL) for the cached value in milliseconds. If provided, the value will expire after the specified TTL.
     * @returns A boolean indicating whether the value was successfully set in the local cache.
     */
    static set(key: string, value: any, ttl?: number): boolean {
        try {
            const now = new Date();
            const item: CacheItem = {
                value: value,
                expiry: ttl ? now.getTime() + ttl : null
            }
            localStorage.setItem(key, JSON.stringify(item));
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    /**
     * Removes the item with the specified key from the local storage.
     * @param key - The key of the item to remove.
     */
    static del(key: string): void {
        localStorage.removeItem(key);
    }

    /**
     * Checks if a value with the specified key exists in the local storage.
     * @param key - The key to check for existence.
     * @returns `true` if a value with the specified key exists, `false` otherwise.
     */
    static exists(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    /**
     * Clears all the data stored in the localstorage.
     */
    static clear(): void {
        localStorage.clear();
    }

    /**
     * Retrieves the time-to-live (TTL) of a cached item.
     * 
     * @param key - The key of the cached item.
     * @returns The remaining time-to-live in milliseconds. Returns -1 if the item does not exist or has expired.
     */
    static ttl(key: string): number {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) {
            return -1;
        }
        const item: CacheItem = JSON.parse(itemStr);
        const now = new Date();

        if (!item.expiry || now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return -1;
        }
        return item.expiry - now.getTime();
    }

    /**
     * Retrieves an array of keys that match the specified pattern from the local storage.
     * @param pattern - The regular expression pattern to match against the keys.
     * @returns An array of keys that match the specified pattern.
     */
    static keys(pattern: RegExp): string[] {
        const keys: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && pattern.test(key)) {
                keys.push(key);
            }
        }
        return keys;
    }

    /**
     * Checks if the localStorage is available in the current browser.
     * @returns {boolean} Returns true if localStorage is available, false otherwise.
     */
    static isLocalStorageAvailable(): boolean {
        try {
            if (!window.localStorage) {
                return false;
            }
            const x = '__storage_test__';
            localStorage.setItem(x, x);
            localStorage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }

}