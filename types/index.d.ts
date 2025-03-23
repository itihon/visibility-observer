declare const _default: {
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
