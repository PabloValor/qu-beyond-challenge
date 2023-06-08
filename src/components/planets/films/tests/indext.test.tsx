import { MemoryRouter } from "react-router-dom";
import Film from "..";
import { default as TFilm} from '../../../../types/film'
import { ReactTestRenderer, ReactTestRendererJSON, create } from "react-test-renderer";
import { render } from "@testing-library/react";

const filmMock: TFilm = {
    "title": "A New Hope", 
    "episode_id": 4, 
    "opening_crawl": "test", 
    "director": "George Lucas", 
    "producer": "Gary Kurtz, Rick McCallum", 
    "release_date": "1977-05-25", 
    "characters": [
    ], 
    "planets": [
    ], 
    "starships": [
    ], 
    "vehicles": [
    ], 
    "species": [
    ], 
    "created": "2014-12-10T14:23:31.880000Z", 
    "edited": "2014-12-20T19:49:45.256000Z", 
    "url": "https://swapi.dev/api/films/1/"
}

function toJson(component: ReactTestRenderer) {
const result = component.toJSON()
expect(result).toBeDefined()
return result as ReactTestRendererJSON
}

describe('<Film />', () => {

    test('should match snapshot', () => { 
        const component = create(
        <MemoryRouter>
            <Film films={[filmMock]}/>
        </MemoryRouter>
        )
        let json = toJson(component)
        expect(json).toMatchSnapshot() 
    })

    test('Planet mounts properly', () => {
        const wrapper = render(<MemoryRouter> <Film films={[filmMock]}/></MemoryRouter> )
        expect(wrapper).toBeTruthy()

        const span = wrapper.container.querySelector('span')
        expect(span?.textContent).toBe(filmMock.title)
    })
});