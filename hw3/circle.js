const circleArea = (radius) => {
  const area = Math.PI * radius ** 2;
  console.log(`area of the circle: ${area}`);
};

const circleCircumference = (radius) => {
  const circumference = 2 * Math.PI * radius;
  console.log(`circumference of the circle: ${circumference}`);
};

module.exports = {
  circleArea,
  circleCircumference,
};
