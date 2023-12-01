/**
 * @return {string} Returns The Unique ID.
 */
export function get(): string;

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

/**
 * @param {string} prefixInput Input of prefix, Max length can be 50 chars.
 */
export function setPrefix(prefixInput: string): {
    message: string;
    status: boolean;
} | {
    status: boolean;
    message?: undefined;
};

/**
 * @param {string} postfixInput Input of postfix, Max length can be 50 chars.
 */
export function setPostfix(postfixInput: string): {
    message: string;
    status: boolean;
} | {
    status: boolean;
    message?: undefined;
};
