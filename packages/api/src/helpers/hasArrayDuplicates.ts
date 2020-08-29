const hasArrayDuplicates = (array) => {
  return new Set(array).size !== array.length;
};

export { hasArrayDuplicates };
