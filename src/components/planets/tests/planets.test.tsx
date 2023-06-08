import { ReactTestRenderer, ReactTestRendererJSON, create } from 'react-test-renderer'
import Planets from '../planets'
import { Planet as TPlanet, PlanetResponse } from '../../../types/planet'
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Planet from '../planet';

// function toJson(component: ReactTestRenderer) {
//     const result = component.toJSON()
//     expect(result).toBeDefined()
//     expect(result).toBeInstanceOf(Array)
//     return result as ReactTestRendererJSON
// }

// describe('Planets component test', () => {

//   // afterEach(() => {
//   //   vi.restoreAllMocks()
//   // })

//   it('shoud match snapshot', () => {
//     const component = create(
//       <Planets/>,
//     )
//     let json = toJson(component)
//     expect(json).toMatchSnapshot()
//   })
  
//   it('should render a planet', () => { 

//     const planetsMock: Planet[] = [
//       {
//         id: "123",
//         name: "Earth",
//         diameter: "12742",
//         rotation_period: "24",
//         orbital_period: "365",
//         gravity: "9.8",
//         population: "7800000000",
//         climate: "Temperate",
//         terrain: "Land, Water",
//         surface_water: "70",
//         residents: [],
//         films: [],
//         url: "https://example.com/earth",
//         created: "2021-01-01",
//         edited: "2021-01-02",
//       }
//     ]

//     const responseApiMock: PlanetResponse = { 
//       count: 1,
//       next: "",
//       previous: "",
//       results: planetsMock
//     }

//     const mocks = vi.hoisted(() => {
//       return { 
//         mockreponse = { 
//           data: responseApiMock,
//           error: undefined,
//           isLoading: false
//         }
//       }
//     })

//     vi.mock('../../../services/swapi', () => { 
//       return { 
//         getPlanets: () => mockreponse
//       }
//     })

//     render(<Planets/>)

//     expect(screen.getByText('/Earth/i')).toBeDefined()

//   })

// })


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

describe('<Planets />', () => {

test('should match snapshot', () => { 
    const component = create(
    <MemoryRouter>
        <Planets/>
    </MemoryRouter>
    )
    let json = toJson(component)
    expect(json).toMatchSnapshot() 
})

test('Planets mounts properly', () => {
    const wrapper = render(<MemoryRouter> <Planets/></MemoryRouter> )
    expect(wrapper).toBeTruthy()

})
});