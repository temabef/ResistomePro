/**
 * Utility functions for formatting data in the ResistomePro application
 */

/**
 * Format a decimal value as a percentage
 * @param {number} value - Value between 0 and 1
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {string} Formatted percentage string
 */
export const formatPercent = (value, decimals = 0) => {
  return `${(value * 100).toFixed(decimals)}%`;
};

/**
 * Format a number with commas as thousands separators
 * @param {number} value - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (value) => {
  return value.toLocaleString();
};

/**
 * Get a CSS color class based on a value's position in a range
 * @param {number} value - Value to evaluate
 * @param {number} min - Minimum threshold (returns danger below this)
 * @param {number} low - Low threshold (returns warning between min and low)
 * @param {number} high - High threshold (returns success between low and high)
 * @param {number} max - Maximum threshold (returns warning between high and max, danger above max)
 * @returns {string} Bootstrap color class
 */
export const getRangeColorClass = (value, min, low, high, max) => {
  if (value < min || value > max) {
    return 'text-danger';
  } else if (value < low || value > high) {
    return 'text-warning';
  } else {
    return 'text-success';
  }
};

/**
 * Generate a simple score label based on a value from 0-1
 * @param {number} value - Score between 0 and 1
 * @returns {object} Object with text and color class
 */
export const getScoreLabel = (value) => {
  if (value >= 0.8) {
    return { text: 'Excellent', class: 'text-success' };
  } else if (value >= 0.6) {
    return { text: 'Good', class: 'text-primary' };
  } else if (value >= 0.4) {
    return { text: 'Fair', class: 'text-warning' };
  } else {
    return { text: 'Poor', class: 'text-danger' };
  }
}; 