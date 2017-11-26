export const NUMERICAL = 'Numerical';
export const CATEGORICAL = 'Categorical';
export const DATE = 'Date';

// Removes the content in the parenthesis
export const getType = string => (
  string.replace(/\(.*?\)/, '')
);

// Captures the content inside the parenthesis (if any?)
export const getSubType = string => (
  string.match(/\((.*?)\)/) ? string.match(/\((.*?)\)/)[1] : undefined
);
