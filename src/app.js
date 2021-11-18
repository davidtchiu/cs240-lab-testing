/**
 * Checks whether num is a prime number... or so we think.
 *
 * @param {number} num
 */
function isPrime(num) {
  if (Number.isInteger(num) && num > 2) {
    let divisor = 2;
    while (num % divisor != 0) {
      divisor++;
    }
    return divisor == num;
  }

  return false;
}

/**
 * Checks whether year is a leap year... or so we think.
 *
 * To be a leap year, the year must be divisible by four –
 * except for end-of-century years (like 1900), which must be divisible by 400.
 * This means that the year 2000 was a leap year, although 1900 was not.
 *
 * @param {number} year
 */
function leapYear(year) {
  return year % 4 == 0 && year % 100 != 0;
}

/**
 * Generates a valid email address given first and last name.
 *
 * A valid email is formatted user@domain, where user is:
 * - First initial appended to last name
 * - A maximum 8 characters long, so you may have to truncate the last name
 * - Cannot be duplicated in the system. Look in the 'existing' array for duplicates.
 *   If a duplicate is detected, you must replace the last character(s) of the user
 *   name with the next available integer value, starting with 2.
 *
 * For instance, if brichard already exists, then the next instance should be brichar2.
 * And if brichar2, brichar3, ..., brichar9, exist, then the next instance should be
 * bricha10.
 *
 * @param {string} first    First name
 * @param {string} last     Last name
 * @param {string} domain   Domain (e.g., pugetsound.edu)
 * @param {array} existing  An array that contains a list of emails already
 *                          in existence in the system
 */
function generateEmail(first, last, domain, existing) {
  // TODO - you write this after you write the specs
}
