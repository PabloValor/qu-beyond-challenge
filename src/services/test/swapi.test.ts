// import { ReactTestRenderer, ReactTestRendererJSON, create } from 'react-test-renderer'
// import {render, screen} from '@testing-library/react';
// import { getPlanets } from '../swapi';
// import { PlanetResponse } from '../../types/planet';
// import useFetch from '../../hooks/useFetch';

// const mockResponse: PlanetResponse = {
//     count: 1,
//     next: '',
//     previous: "",
//     results: [
//       {
//         id: '1',
//         name: 'Earth',
//         diameter: '12742',
//         rotation_period: '24',
//         orbital_period: '365',
//         gravity: '9.8',
//         population: '7800000000',
//         climate: 'Temperate',
//         terrain: 'Land, Water',
//         surface_water: '70',
//         residents: [],
//         films: [],
//         url: 'https://example.com/earth',
//         created: '2021-01-01',
//         edited: '2021-01-02',
//       },
//     ],
//   }

// //   const mockFetch = vi.mock('../hooks/useFetch', {
// //     default: jest.fn().mockReturnValueOnce(mockResponse),
// //   })

//   const mockFetch = vi.mock('useFetch', () => { 
//     return {
//         data: mockResponse,
//     }
//   }
//   )

// afterEach(() => {
//     vi.restoreAllMocks()
// })

// describe('getPlanets', () => {
//     it('should fetch and return planets', async () => {
//       const response = await getPlanets()
  
//       expect(mockFetch).toHaveBeenCalledWith({
//         url: 'https://swapi.dev/api/planets',
//         errorMessage: 'something went wrong trying to get planets resource 🪐',
//         mapper: expect.any(Function),
//       })
  
//       expect(response).toEqual(mockResponse)
//     })
//   })