const convertToCelsius = function(fahr) {
  convertedToCels = (fahr - 32) * 5 / 9;
  roundedConvertedToCels = Math.round(convertedToCels * 10) / 10;
  return roundedConvertedToCels;
};

const convertToFahrenheit = function(cels) {
  convertedToFahr = (cels * 9 / 5) + 32;
  roundedConvertedToFahr = Math.round(convertedToFahr * 10) / 10;
  return roundedConvertedToFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
