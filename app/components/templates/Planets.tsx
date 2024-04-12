import { json, useLoaderData } from "@remix-run/react";
import { useQuery } from "react-query";
import PlanetCard from "~/components/molecules/PlanetCard";
import ComparationTool from "~/components/organisms/ComparationTool";
import { useComparePlanets } from "~/context/comparePlanetsContext";
import { fetchPlanets } from "~/services/api";
import { Planet } from "~/types";

export const loader = async () => {
  const planets = await fetchPlanets();
  return json({ planets });
};

const PlanetsTemplate: React.FC = () => {
  const loaadedData = useLoaderData<Planet[]>();
  const { handleSelectPlanet, selectedPlanets } = useComparePlanets();
  const checkIfExistOnSelectedPlanets = (planet: Planet) => {
    return selectedPlanets.some((p) => p.name === planet.name);
  };
  const { data: planets, isLoading } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
    initialData: loaadedData,
  });
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        {
          // create multiple skeleton loader cards
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 rounded-lg p-16"
            ></div>
          ))
        }
      </div>
    );
  }

  return (
    <div className="">
      <ComparationTool />
      <div className="grid grid-cols-3 gap-4 p-4">
        {planets &&
          planets.map((planet: Planet) => (
            <PlanetCard
              key={planet.name}
              planet={planet}
              isCompareCard={checkIfExistOnSelectedPlanets(planet)}
              onClick={() => handleSelectPlanet(planet)}
            />
          ))}
      </div>
    </div>
  );
};

export default PlanetsTemplate;
