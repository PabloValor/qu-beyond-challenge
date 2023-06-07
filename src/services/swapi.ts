import useFetch from "../hooks/useFetch"
import { Planet, PlanetResponse } from "../types/planet"
import { mapPlanet, mapPlanets } from "./mappers"

const WSAPI_BASE_URL = 'https://swapi.dev/api'

function getPlanets() { 

    const source = `${WSAPI_BASE_URL}/planets`
    const errorMessage = 'something went wrong trying to get planets resource 🪐'

    const response = useFetch<PlanetResponse>({ url: source, errorMessage, mapper: mapPlanets })

    return response
}

function getPlanet(id: string | undefined) { 

    const source = `${WSAPI_BASE_URL}/planets/${id}`
    const errorMessage = `Something went wrong trying to get planet resource with id: ${id} 🪐 `

    const response = useFetch<Planet>({ url: source, errorMessage, mapper: mapPlanet })

    return response
}

export { 
    getPlanets,
    getPlanet
}