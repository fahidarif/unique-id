/**
 * @return {string} Returns The Unique ID.
 */
declare function get(): string;

/**
 * @param {string} unique64Characters Input of 64 unique characters which you want to use in id generation.
 */
declare function characters(unique64Characters: string): { message: string, status: boolean };

/**
 * @param {string} prefixInput Input of prefix, Max length can be 50 chars.
 */
declare function setPrefix(prefixInput: string): { message: string, status: boolean };

/**
 * @param {string} postfixInput Input of postfix, Max length can be 50 chars.
 */
declare function setPostfix(postfixInput: string): { message: string, status: boolean };

export { get, characters, setPrefix, setPostfix };
