const areaOfCircule = (radius) => {
  let area = (Math.PI * radius ** 2).toFixed(2);

  console.log(`Area of the circle with radius ${radius}: ${area}`);
};

areaOfCircule(process.argv[2]);
