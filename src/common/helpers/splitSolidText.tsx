const UppercasePattern = /([A-Z])/g;

export const splitSolidText = (string: string, pattern = UppercasePattern) => {
  return string.replace(pattern, ' $1');
};
