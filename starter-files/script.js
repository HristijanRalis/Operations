// SCRIPT
// Logical Operators

function drivingLicence(firstName, years, hasLicence) {
  if (years >= 18 && hasLicence) {
    return `${firstName} have ${years} and can drive a car! `;
  } else if (years >= 18 && !hasLicence) {
    return `${firstName} have ${years} cannot drive a car because don't have licence yet `;
  } else {
    return `${firstName} have ${years} and cannot drive a car!  `;
  }
}

console.log(drivingLicence("Nikola", 18, true));
console.log(drivingLicence("Hristijan", 18, true));
console.log(drivingLicence("Nikola", 16, true));

