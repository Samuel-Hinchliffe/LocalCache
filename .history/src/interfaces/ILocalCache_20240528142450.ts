
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    [Linkedin] {@link https://www.linkedin.com/in/samuel-hinchliffe-2bb5801a5/}
 *
 * @summary Interface for local cache
 *
 * Created at: 28/05/2024
*/
export interface ILocalCache {
    get(key: string): string | null;
    set(key: string, value: any, ttl?: number): boolean;
    del(key: string): void;
    exists(key: string): boolean;
    clear(): void;
    expire(key: string, ttl: number): void;
    isLocalStorageAvailable(): boolean;
}