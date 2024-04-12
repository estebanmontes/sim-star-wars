import { Planet } from "~/types";

interface Props {
  planet: Planet;
}

const PlanetComparationCard: React.FC<Props> = ({ planet }: Props) => {
  return (
    <div className="flex-column text-left justify-start  bg-cyan-950 text-white p-4 rounded-lg shadow-md">
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
    </div>
  );
};

export default PlanetComparationCard;
