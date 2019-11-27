/**
 * Implement a fixed array tuple of TItem type and TLength length.
 */
export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };
