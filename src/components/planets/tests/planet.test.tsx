import { test, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import Planet, { displayPopulationNumber } from '../planet'
import { Planet as TPlanet } from '../../../types/planet';
import { MemoryRouter } from 'react-router-dom';
import { ReactTestRenderer, ReactTestRendererJSON, create } from 'react-test-renderer'

const planetMock: TPlanet = {
        id: "123",
        name: "Earth",
        diameter: "12742",
        rotation_period: "24",
        orbital_period: "365",
        gravity: "9.8",
        population: "7800000000",
        climate: "Temperate",
        terrain: "Land, Water",
        surface_water: "70",
        residents: [],
        films: [],
        url: "https://example.com/earth",
        created: "2021-01-01",
        edited: "2021-01-02",
}

function toJson(component: ReactTestRenderer) {
    const result = component.toJSON()
    expect(result).toBeDefined()
    return result as ReactTestRendererJSON
}


const renderComponent = () => render( <MemoryRouter> <Planet planet={planetMock}/></MemoryRouter> )

let climate: any,
    population: any
    = undefined


beforeEach(() => { 
    const { getByTestId } = renderComponent()
    climate = getByTestId('climate') 
    population = getByTestId('population') 

})

afterEach(() => {
    cleanup()
})

test('should match snapshot', () => { 
    const component = create(
    <MemoryRouter>
        <Planet planet={planetMock}/>
    </MemoryRouter>
    )
    let json = toJson(component)
    expect(json).toMatchSnapshot() 
})

test('Planet properties', () => {
    expect(planetMock.climate).equals(climate)
    expect(displayPopulationNumber(planetMock.population)).equals(population)
})