export class LocalCache {

    /**
     * Retrieves the value associated with the specified key from the local storage.
     * @param {string} key - The key of the value to retrieve.
     * @returns The value associated with the specified key, or null if the key does not exist.
     */
    static get(key: string): string | null {
        return localStorage.getItem(key);
    }

    static set(key: string, value: any, ttl?: number): boolean {
        if (ttl) {
            const now = new Date();
            const item = {
                value: value,
                expiry: now.getTime() + ttl
            }
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } else {
            localStorage.setItem(key, value);
            return true;
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