import { Planet } from "~/types";
import { isEmptyPlanet } from "~/utils";
import Button from "../atoms/Button";

interface Props {
  planet: Planet;
  onClick: () => void;
  isCompareCard?: boolean;
}

const PlanetCard: React.FC<Props> = ({
  planet,
  onClick,
  isCompareCard,
}: Props) => {
  return (
    <div
      style={{
        minHeight: 280,
      }}
      className="flex-column text-left justify-start  bg-cyan-950 text-white p-4 rounded-lg shadow-md"
    >
      {!isEmptyPlanet(planet) && (
        <>
          <h2 className="text-xl font-bold">{planet.name}</h2>
          <p>Population: {planet.population.toLocaleString()}</p>
          <p>Rotation Period: {planet.rotation_period}</p>
          <p>Orbital Period: {planet.orbital_period}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
        </>
      )}
      {!isEmptyPlanet(planet) && (
        <div className="flex justify-end mt-4">
          <Button onClick={onClick}>
            {isCompareCard ? "Remove" : "Add to compare"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlanetCard;
