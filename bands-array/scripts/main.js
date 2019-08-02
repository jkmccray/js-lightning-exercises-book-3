// create an array of your top five favorite bands (at least 5)
// write a function that takes an array of bands as an argument and logs each name to the console

const faveBands = ["muse", "jonas brothers", "panic at the disco", "cage the elephant", "onerepublic"]

const logBands = (bands) => {
  bands.forEach(band => {
    console.log(band)
  });
}

logBands(faveBands)

