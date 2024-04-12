import { Planet } from "~/types";

export function comparePlanets(planet1: Planet, planet2: Planet): Planet {
  const differences = {};
  Object.keys(planet1).forEach((key) => {
    if (planet1[key] !== planet2[key]) {
      differences[key] = `${planet1[key]} / ${planet2[key]}`;
    }
  });
  return differences as Planet;
}

export function isEmptyPlanet(planet: Planet) {
  const emptyValues = {
    string: "",
    number: 0,
    undefined: undefined,
  };

  // Check each property of the planet object
  for (const key in planet) {
    const property = planet[key];
    const type = typeof property;
    if (property !== emptyValues[type]) {
      return false; // If any property is not empty, return false
    }
  }
  return true;
}
