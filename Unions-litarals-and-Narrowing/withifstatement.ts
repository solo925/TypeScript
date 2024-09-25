/**
 * Validates a username to ensure it meets the minimum length requirement.
 *
 * @remarks
 * This function checks if the provided username is a non-null string and if its length is greater than 5.
 *
 * @param username - The username to validate. It can be a string or null.
 * @returns A boolean value indicating whether the username is valid (true) or not (false).
 * If the username is not a string or is null, the function returns false.
 *
 * @example
 */

export function validateUsername(username: string | null): boolean {
    if (typeof username === 'string') {
      return username.length > 5
    }

    return false
  }