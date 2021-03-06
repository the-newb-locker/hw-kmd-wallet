import { Predicate, Context } from './predicate';
export declare class WeakMapPredicate<T1 extends object = any, T2 = any> extends Predicate<WeakMap<T1, T2>> {
    /**
     * @hidden
     */
    constructor(context?: Context<WeakMap<T1, T2>>);
    /**
     * Test a WeakMap to include all the provided keys. The keys are tested by identity, not structure.
     *
     * @param keys The keys that should be a key in the WeakMap.
     */
    hasKeys(...keys: T1[]): this;
    /**
     * Test a WeakMap to include any of the provided keys. The keys are tested by identity, not structure.
     *
     * @param keys The keys that could be a key in the WeakMap.
     */
    hasAnyKeys(...keys: T1[]): this;
}
