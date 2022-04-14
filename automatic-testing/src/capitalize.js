const capitalize = (text) => {
  if (text.length === 0) {
    return '';
  }
  const tmp = text[0];
  const firstChar = tmp.toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};
export default capitalize;
