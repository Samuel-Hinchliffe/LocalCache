export class CacheItem {
    value: any;
    expiry: number | null;

    constructor(value: any, expiry: number | null) {
        this.value = value;
        this.expiry = expiry;
    }
}
