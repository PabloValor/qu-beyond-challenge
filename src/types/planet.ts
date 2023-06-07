import Film from "./film"
import People  from "./people"

export interface Planet {
    id?: string
    name: string
    diameter: string
    rotation_period: string
    orbital_period: string
    gravity: string
    population: string
    climate: string
    terrain: string
    surface_water: string
    residents: People[]
    films: Film[]
    url: string
    created: string
    edited: string
}

export interface PlanetResponse { 
    count: number
    next: string
    previous: string
    results: Planet[]
}