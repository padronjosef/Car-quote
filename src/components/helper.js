// difference of years
export function yearDifference(year) {
  return new Date().getFullYear() - year;
}

// calculate the total by brand
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "Asian":
      increment = 1.05;
      break;
    case "American":
      increment = 1.15;
      break;
    case "European":
      increment = 1.3;
      break;

    default:
      break;
  }

  return increment;
}

// calculate the total by plan
export const calculatePlan = (plan) => (plan === "Basic" ? 1.2 : 1.5);


// show first capital letter
export function capitalLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}