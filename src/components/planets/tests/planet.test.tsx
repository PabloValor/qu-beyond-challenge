import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import Planet from '../planet'
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

describe('<Planet />', () => {

    test('should match snapshot', () => { 
        const component = create(
        <MemoryRouter>
            <Planet planet={planetMock}/>
        </MemoryRouter>
        )
        let json = toJson(component)
        expect(json).toMatchSnapshot() 
    })

    test('Planet mounts properly', () => {
        const wrapper = render(<MemoryRouter> <Planet planet={planetMock}/></MemoryRouter> )
        expect(wrapper).toBeTruthy()

        const span = wrapper.container.querySelector('span')
        expect(span?.textContent).toBe(planetMock.climate)

        // const text = screen.getByText(
        //   /Click on the Vite and React logos to learn more/i
        // );
        // expect(text.textContent).toBeTruthy()
    })
});