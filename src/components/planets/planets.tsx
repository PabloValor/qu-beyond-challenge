import { Planet as TPlanet } from "../../types/planet"
import Planet from "./planet"
import PlanetsSkeleton from "../skeleton/components/planets"
import { getPlanets } from "../../services/swapi"

export default function Planets() {

const { data, error, isLoading } = getPlanets()

return (
    <>
      { isLoading && <PlanetsSkeleton/> }

      { error && <h1>{error.message}</h1> }

      <div className={`flex flex-wrap place-content-center gap-8`}>
        {
            data && data.results.map((planet : TPlanet) => <Planet key={planet.id} planet={planet}/>)
        }
      </div>
    </>
  )

}
