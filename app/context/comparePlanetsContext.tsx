import React, { createContext, useState } from "react";
import { Planet } from "~/types";
import { comparePlanets, isEmptyPlanet } from "~/utils";

interface ComparePlanets {
  selectedPlanets: Planet[];
  comparisonResult: Planet | null;
  handleSelectPlanet: (planet: Planet) => void;
  handleCompare: () => void;
  handleClearComparison: () => void;
}

interface ComparePlanetsProviderProps {
  children: React.ReactNode;
}
// create two empty planets
const emptyPlanet: Planet = {
  name: "",
  population: 0,
  climate: "",
  terrain: "",
  residents: undefined,
  url: "",
  diameter: 0,
  gravity: "",
  orbital_period: 0,
  rotation_period: 0,
  surface_water: 0,
};

const ComparePlanetsContext = createContext<ComparePlanets>({
  selectedPlanets: [],
  comparisonResult: null,
  handleSelectPlanet: () => {},
  handleCompare: () => {},
  handleClearComparison: () => {},
});

const initialSelectedPlanets: Planet[] = [emptyPlanet, emptyPlanet];

export function ComparePlanetsProvider({
  children,
}: ComparePlanetsProviderProps) {
  const [selectedPlanets, setSelectedPlanets] = useState<Planet[]>(
    initialSelectedPlanets
  );
  const [comparisonResult, setComparisonResult] = useState<Planet | null>(null);

  const handleSelectPlanet = (planet: Planet) => {
    // if the planet is already selected, remove it
    if (selectedPlanets.includes(planet)) {
      console.log("remove", selectedPlanets);
      setSelectedPlanets(selectedPlanets.filter((p) => p !== planet));
      return;
    }

    if (comparisonResult) {
      setComparisonResult(null);
    }

    if (!selectedPlanets.length) {
      setSelectedPlanets([planet, emptyPlanet]);
      return;
    }

    //check if selectedPlanets is empty and add the planet
    for (let i = 0; i < selectedPlanets.length; i++) {
      if (isEmptyPlanet(selectedPlanets[i])) {
        const newSelectedPlanets = [...selectedPlanets];
        newSelectedPlanets[i] = planet;
        setSelectedPlanets(newSelectedPlanets);
        return;
      }
    }

    if (selectedPlanets.length < 2) {
      setSelectedPlanets([...selectedPlanets, planet]);
    }

    // setSelectedPlanets([...selectedPlanets, planet]);
  };

  const handleCompare = () => {
    if (selectedPlanets.length === 2) {
      setComparisonResult(
        comparePlanets(selectedPlanets[0], selectedPlanets[1])
      );
    }
  };

  const handleClearComparison = () => {
    setSelectedPlanets([emptyPlanet, emptyPlanet]);
    setComparisonResult(null);
  };
  return (
    <ComparePlanetsContext.Provider
      value={{
        selectedPlanets,
        comparisonResult,
        handleSelectPlanet,
        handleCompare,
        handleClearComparison,
      }}
    >
      {children}
    </ComparePlanetsContext.Provider>
  );
}

export const useComparePlanets = () => {
  const context = React.useContext(ComparePlanetsContext);
  if (!context) {
    throw new Error(
      "useComparePlanets must be used within a ComparePlanetsProvider"
    );
  }
  return context;
};
