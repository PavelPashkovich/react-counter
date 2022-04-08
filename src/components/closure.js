const counter = (start) => {
  let count = start;

  return () => {
    return ++count;
  };
};

console.log(counter(0));
const newCounter = counter(0);

console.log(newCounter());
