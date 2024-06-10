export class CacheItem {
    value: any;
    expiry: number | null;

    constructor(value: any, expiry: number | null) {
        this.value = value;
        this.expiry = expiry;
    }

    isExpired(): boolean {
        if (this.expiry === null) return false;
        const now = new Date().getTime();
        return now > this.expiry;
    }
}
