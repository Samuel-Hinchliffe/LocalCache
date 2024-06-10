
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    [Linkedin] {@link https://www.linkedin.com/in/samuel-hinchliffe-2bb5801a5/}
 *
 * @summary Interface for local cache
 *
 * Created at: 28/05/2024
*/
export interface ILocalCache {
    static get(key: string): string | null;
    static set(key: string, value: any, ttl?: number): boolean;
    static del(key: string): void;
    static exists(key: string): boolean;
    static clear(): void;
    static ttl(key: string): number;
    static isLocalStorageAvailable(): boolean;
}