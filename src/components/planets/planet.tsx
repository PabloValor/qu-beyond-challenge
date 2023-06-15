import { Planet as TPlanet} from "../../types/planet"
import { Badget } from "../util/badget"
import { FaTemperatureHigh } from 'react-icons/fa'
import { IoMdPeople } from 'react-icons/io'
import { Button } from "../util/button"
import slugify from 'slugify'
import { Link } from "react-router-dom"
import { getRandomImageId } from "../../util"

export const displayPopulationNumber = (population: string) => {

    const number = Number(population)

    if(isNaN(number)) return population

    if(number >= 1000000) {
        return `${number / 1000000}M`
    } else if(number >= 1000) { 
        return `${number / 1000}K`
    }
    return number
}


export default function Planet({ planet } : { planet : TPlanet }) { 


    return (
        <div className={`
            p-3
            rounded-md shadow-lg
            cursor-pointer
            w-full md:max-w-[300px]
            bg-[url('/img/bg-galaxy.png')] bg-center bg-cover bg-no-repeat
            relative
            hover:bottom-1
        `}>
            <h2 className="font-bold text-center text-slate-50">{planet.name.toUpperCase()}</h2>

            <Image planet={planet}/>

            <Badget styles="mr-1">
                <FaTemperatureHigh className="inline-block mr-1"/>
                <span data-testid="climate">{planet.climate}</span>
            </Badget>
            <Badget styles="mr-1">
                <IoMdPeople className="inline-block mr-1"/>
                <span data-testid="population" title={`population: ${planet.population}`}>{displayPopulationNumber(planet.population)}</span>
            </Badget>
            
        </div>
    )

    function Image({ planet } : {planet : TPlanet}) { 
        return (
            <Link to={`/planet/${slugify(planet.name, { lower: true })}/${planet.id}`}>
                <div className="relative">
                    <img src={`/img/planet-${getRandomImageId()}.svg`}
                    alt={`Image of planet ${planet.name}`}
                    title={`Image of planet ${planet.name}`}
                    className={`
                        block my-4 mx-auto w-[200px]
                    `}
                    />
                    <div className={`
                        absolute top-0 bottom-0 left-0 right-0
                        flex align-middle items-center justify-around	
                        opacity-0
                        hover:opacity-100 
                        `
                    }>
                        <Button>
                                {`show more`.toUpperCase()}
                        </Button>
                    </div>
                </div>
            </Link>
        )
    }
}
