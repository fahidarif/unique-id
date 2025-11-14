/**
 * @param {string} prefix Optional prefix to add with generated ID.
 * @param {string} postfix Optional postfix to add with generated ID.
 * @return {string} Returns The Unique ID.
 */
export function get(prefix?: string, suffix?: string): string;

/**
 * @param {string} unique64Characters Input of 64 unique characters which you want to use in id generation.
 */
export function characters(unique64Characters: string): {
    message: string;
    status: boolean;
} | {
    status: boolean;
    message?: undefined;
};
