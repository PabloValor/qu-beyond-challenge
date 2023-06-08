import { ReactTestRenderer, ReactTestRendererJSON, create } from 'react-test-renderer'
import Planets from '../planets'
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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