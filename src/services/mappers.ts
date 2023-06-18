import { Planet, PlanetResponse } from "../types/planet";

export const mapPlanets = (planets: PlanetResponse) => { 

    planets.results.map( planet => { 
        mapPlanet(planet)
    })
}

export const mapPlanet = (planet: Planet) => { 
    planet.id = planet.url.match(/\/([^\/]+)\/$/)?.[1]
}