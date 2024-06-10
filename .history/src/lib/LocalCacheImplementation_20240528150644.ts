import { ILocalCache } from "../interfaces/ILocalCache";

export class LocalCacheImplementation implements ILocalCache {
    get(key: string): string | null {
        return localStorage.getItem(key);
    }

    set(key: string, value: any, ttl?: number): boolean {
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

    del(key: string): void {
        localStorage.removeItem(key);
    }

    exists(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    clear(): void {
        localStorage.clear();
    }

    ttl(key: string): number {
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

    isLocalStorageAvailable(): boolean {
        try {
            const x = '__storage_test__';
            localStorage.setItem(x, x);
            localStorage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }

}