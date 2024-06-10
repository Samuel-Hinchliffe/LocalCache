export class LocalCache {

    /**
     * Retrieves the value associated with the specified key from the local storage.
     * @param {string} key - The key of the value to retrieve.
     * @returns {any | null} The value associated with the specified key, or null if the key does not exist.
     */
    static get(key: string): any | null {

        const data = localStorage.getItem(key);
        if (!data) return null;

        const { value, expiry } = JSON.parse(data);

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
            const item = {
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

    static del(key: string): void {
        localStorage.removeItem(key);
    }

    static exists(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    static clear(): void {
        localStorage.clear();
    }

    static ttl(key: string): number {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) {
            return -1;
        }
        const item = JSON.parse(itemStr);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return -1;
        }
        return item.expiry - now.getTime();
    }

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