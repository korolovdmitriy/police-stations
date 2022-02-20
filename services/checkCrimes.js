module.exports = {
  checkCrimes(crimes) {
    const resultOfcheckCrimes = [];

    crimes.forEach((crime) => {
      const id = crime.id;
      const resultOfcheckCrime = {};
      const entriesOfCrime = Object.entries(crime);
      let flag = false;

      entriesOfCrime.forEach(([key, value]) => {
        if (value === "-") {
          resultOfcheckCrime[key] = "Missing value";
          flag = true;
        }
      });

      if (flag === true) {
        resultOfcheckCrime["id"] = id;
        resultOfcheckCrimes.push(resultOfcheckCrime);
      }
    });

    if (resultOfcheckCrimes.length === 0) {
      return "Missing value not found";
    }
    return resultOfcheckCrimes;
  },
};
