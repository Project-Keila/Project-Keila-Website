export const getSourceName = (source) => {
  const words = source.split("_");
  return words.join(" ");
};
