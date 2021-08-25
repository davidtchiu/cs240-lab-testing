/**
 * Checks whether num is a prime number... or so we think.
 *
 * @param {*} num
 */
function primeChecker(num) {
  let divisor = num - 1;
  while (num % divisor != 0) {
    divisor--;
  }
  return divisor == 1;
}

/**
 * Checks whether year is a leap year... or so we think.
 *
 * To be a leap year, the year must be divisible by four –
 * except for end-of-century years (like 1900), which must be divisible by 400.
 * This means that the year 2000 was a leap year, although 1900 was not.
 *
 * @param {*} year
 */
function leapYear(year) {
  return year % 4 == 0 && year % 100 != 0;
}

/**
 * Generates a valid email address given first and last name... or so we think.
 *
 * A valid email is formatted user@domain, where user is:
 * - First initial appended to last name
 * - A maximum 8 characters long, so you may have to truncate the last name
 * - Cannot be duplicated in the system. Look in the 'existing' array for duplicates.
 *   If a duplicate is detected, you must replace the last character of the user
 *   name with the next available digit (e.g., 1,2,...)
 *
 * @param {string} first
 * @param {string} last
 * @param {string} domain
 * @param {array} existing
 */
function generateEmail(first, last, domain, existing) {
  // TODO - you write this
}
