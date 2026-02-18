// const toMeterConversion = {
//   'km': x => x * 1000,
//   'm': x => x,
//   'cm': x => x / 100,
//   'mm': x => x / 1000,
//   'micro': x => x / 1_000_000,
//   'nano': x => x / 1_000_000_000,
//   'mile': x => x * 1609.344,
//   'yard': x => x * 0.9144,
//   'ft': x => x * 0.3048,
//   'in': x => x * 0.0254,
//   'nautiMile': x => x * 1852
// };

// const fromMeterConversion = {
//   'km': x => x / 1000,
//   'm': x => x,
//   'cm': x => x * 100,
//   'mm': x => x * 1000,
//   'micro': x => x * 1_000_000,
//   'nano': x => x * 1_000_000_000,
//   'mile': x => x / 1609.344,
//   'yard': x => x / 0.9144,
//   'ft': x => x / 0.3048,
//   'in': x => x / 0.0254,
//   'nautiMile': x => x / 1852
// };

// const conversionFormula = {
//   'm-km': 'divide the length value by 1000',
//   'km-m': 'multiply the length value by 1000'
// }

// new logic for efficiency
const meterFactor = {
  km: 1000,
  m: 1,
  cm: 0.01,
  mm: 0.001,
  micro: 0.000001,
  nano: 0.000000001,
  mile: 1609.344,
  yard: 0.9144,
  ft: 0.3048,
  in: 0.0254,
  nautiMile: 1852
};


const input = document.getElementById('inp');
const type1 = document.getElementById('type1');
const type2 = document.getElementById('type2');
const result = document.getElementById('result')
const formula = document.getElementById('formula')

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  if(!isFinite(input.value) && input.value !== '') result.value = ''
  else { 
    result.value = (input.value * (meterFactor[type1.value] / meterFactor[type2.value]))

    if( (Math.round(result.value) - result.value) !== 0) {
      result.value = (input.value * (meterFactor[type1.value] / meterFactor[type2.value])).toFixed(4);
    }

    formula.innerText = `Unit * ( Meter form of 1${type1.value} / Meter form of 1${type2.value} )`
  }
})