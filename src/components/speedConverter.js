function kmphToMph(kmph) {
  return kmph / 1.609344;
}
function mphToKmph(mph) {
  return mph * 1.609344;
}

function tryConvert(_speed, convertFunc) {
  _speed = parseFloat(_speed);
  if (Number.isNaN(_speed)) return "";
  return convertFunc(_speed).toFixed(2);
}

export default function speedConverter(speed, units) {
console.log(speed, units)
  return {
    'km/h': units === "km/h" ? speed : tryConvert(speed, mphToKmph),
    'mph': units === "mph" ? speed : tryConvert(speed, kmphToMph),
  };
}
