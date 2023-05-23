declare type Version = 2 | 3;
interface StorageOpts {
    /** vue版本 可选2、3 默认3 */
    version?: Version;
    /** 命名空间 默认  `rs-` */
    nameSpace?: string;
    /** 需要存储的响应式对象 */
    memory: object;
}

declare class Storage {
    static _nameSpace: string;
    static _getStaticKey: (nameSpace: string, key: string) => string;
    static install(app: any, options: StorageOpts): Storage;
    static clearAll(nameSpace: string, memory: object): void;
    static get(key: string): any;
    static set(key: string, val: string): void;
    static getData(key: string, nameSpace?: string): any;
    constructor(app: any, options: StorageOpts);
}

export { Storage as default };
