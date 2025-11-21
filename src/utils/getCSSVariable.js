export const getCSSVariable = (variableName, fallback = "#000") => {
  return (
    getComputedStyle(document.documentElement).getPropertyValue(variableName) ||
    fallback
  );
};
