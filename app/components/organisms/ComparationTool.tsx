import { useComparePlanets } from "~/context/comparePlanetsContext";
import { isEmptyPlanet } from "~/utils";
import Button from "../atoms/Button";
import PlanetCard from "../molecules/PlanetCard";
import PlanetComparationCard from "../molecules/PlanetComparationCard";

const ComparationTool: React.FC = () => {
  const {
    selectedPlanets,
    comparisonResult,
    handleCompare,
    handleClearComparison,
    handleSelectPlanet,
  } = useComparePlanets();
  console.log("To show", selectedPlanets);

  const checkforEmptyPlanets = () => {
    return selectedPlanets.some((planet) => isEmptyPlanet(planet));
  };
  return (
    <div className="flex-column m-2 mb-12 justify-center p-4 space-y-4 border-b-2 border-teal-700">
      <h3 className="text-3xl c-white font-bold">Comparation tool!</h3>
      {checkforEmptyPlanets() && (
        <h2 className="text-1xl c-white font-bold">Add planets to compare!</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-column m-2 mb-12 justify-center">
        {selectedPlanets &&
          selectedPlanets.map((planet, index) => (
            <PlanetCard
              isCompareCard
              key={index}
              planet={planet}
              onClick={() => handleSelectPlanet(planet)}
            />
          ))}
        {comparisonResult && (
          <PlanetComparationCard planet={comparisonResult} />
        )}
      </div>
      {!checkforEmptyPlanets() && (
        <div>
          <Button onClick={handleCompare}>Compare</Button>
          <Button onClick={handleClearComparison}>Clear</Button>
        </div>
      )}
    </div>
  );
};

export default ComparationTool;
