const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

generateSequence = () => {
  const totalNumbers = parseInt(document.getElementById("digits").value);
  const result = document.getElementById("result");
  result.innerHTML = "";

  const start = new Date();
  for (let i = 1; i <= totalNumbers; i++) {
    result.append(fibonacci(i) + "  |  ");
  }

  result.append(
    " - TIME: " + (new Date().getMilliseconds() - start.getMilliseconds())
  );
};

getDigit = () => {
  const result = document.getElementById("result1");
  result.innerHTML = "";

  const start = new Date();
  const digit = fibonacci(parseInt(document.getElementById("digit").value));
  result.append(digit);
  result.append(" - TIME: " + (new Date().getTime() - start.getTime()));
};

fibonacci = memoize((n) => {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
});
