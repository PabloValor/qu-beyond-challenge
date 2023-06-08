import { MemoryRouter } from "react-router-dom";
import { ReactTestRenderer, ReactTestRendererJSON, create } from "react-test-renderer";
import { render } from "@testing-library/react";
import PlanetProperties from "..";
import { Planet as TPlanet } from '../../../../types/planet'


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
    
    describe('<PlanetProperties />', () => {
    
        test('should match snapshot', () => { 
            const component = create(
            <MemoryRouter>
                <PlanetProperties planet={planetMock}/>
            </MemoryRouter>
            )
            let json = toJson(component)
            expect(json).toMatchSnapshot() 
        })
    
        test('PlanetProperties mounts properly', () => {
            const wrapper = render(<MemoryRouter> <PlanetProperties planet={planetMock}/></MemoryRouter> )
            expect(wrapper).toBeTruthy()
    
            const span = wrapper.container.querySelector('span')
            expect(span?.textContent).toBe(` Diameter: ${planetMock.diameter}`)
        })
    });