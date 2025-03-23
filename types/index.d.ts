declare const _default: {
    "__#1@#initialViewportRect": any;
    "__#1@#lastViewportRect": any;
    /** @type {Map<HTMLElement, "FULLY_VISIBLE" | "PARTLY_VISIBLE" | "INVISIBLE">} */
    "__#1@#states": Map<HTMLElement, "FULLY_VISIBLE" | "PARTLY_VISIBLE" | "INVISIBLE">;
    /** @type {Map<HTMLElement, IntersectionObserverEntry>} */
    "__#1@#records": Map<HTMLElement, IntersectionObserverEntry>;
    /**
     * @param {IntersectionObserverEntry} entry
     */
    "__#1@#handleEntry"(entry: IntersectionObserverEntry): void;
    "__#1@#updateStates"(): void;
    /**
     * @param {HTMLElement} target
     * @returns {"FULLY_VISIBLE" | "PARTLY_VISIBLE" | "INVISIBLE"}
     */
    getVisibilityState(target: HTMLElement): "FULLY_VISIBLE" | "PARTLY_VISIBLE" | "INVISIBLE";
    /**
     * @param {HTMLElement} target
     * @returns {IntersectionObserverEntry}
     */
    getLastRecord(target: HTMLElement): IntersectionObserverEntry;
    /**
     * @returns {DOMRect}
     */
    getLastViewportRect(): DOMRect;
    /**
     * @param {HTMLElement} target
     */
    unobserve(target: HTMLElement): void;
    disconnect(): void;
    readonly root: Element | Document | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
};
export default _default;
