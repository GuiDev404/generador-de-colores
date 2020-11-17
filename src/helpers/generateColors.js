const nRandom = (len) => Math.floor(Math.random() * len);

const randomColor = () => {
  const hex = "abcdef0123456789";
  const color = Array(6)
    .fill("")
    .reduce((acc) => {
      acc += hex[nRandom(hex.length)];
      return acc;
    }, "#");  

  return color;
};

const generateDegColor = () => {
  const colors = Array(2).fill().map(randomColor);
  const color = `linear-gradient(${nRandom(360)}deg, ${colors})`;

  return color;
};

export {
  generateDegColor,
  randomColor 
}