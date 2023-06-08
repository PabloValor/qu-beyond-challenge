import { IoIosResize, IoMdPeople } from 'react-icons/io';
import { GiRingedPlanet } from 'react-icons/gi';
import { LuOrbit } from 'react-icons/lu';
import { FaGrav, FaWater} from 'react-icons/fa';
import { TiWeatherDownpour } from 'react-icons/ti';
import { MdTerrain } from 'react-icons/md';
import { Planet } from '../../../types/planet';

export default function PlanetProperties({ planet } : { planet: Planet}) { 
    return (
        <div className='block md:flex place-content-evenly gap-4 mb-4'>

        <div className='bg-slate-300 p-4 rounded-lg shadow-lg w-full mb-3 md:mb-0'>

          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <IoIosResize className='inline-block text-2xl mr-1'/> Diameter: <span className='font-bold'>{planet.diameter}</span>
            </span>
          </div>

          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <GiRingedPlanet className='inline-block mr-1 text-2xl'/> Rotation Period: <span className='font-bold'>{planet.rotation_period}</span>
            </span>
          </div>

          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <LuOrbit className='inline-block mr-1 text-2xl'/> Orbital Period: <span className='font-bold'>{planet.orbital_period}</span>
            </span>
          </div>

          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <FaGrav className='inline-block mr-1 text-2xl'/> Gravity:  <span className='font-bold'>{planet.gravity}</span>
            </span>
          </div>

          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <IoMdPeople className='inline-block mr-1 text-2xl'/> Population: <span className='font-bold'>{planet.population}</span>
            </span>
          </div>
        </div>

        <div className='bg-slate-300 p-4 rounded-lg shadow-lg w-full'>

          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <TiWeatherDownpour className='inline-block mr-1 text-2xl'/>Climate: <span className='font-bold'>{planet.climate}</span>
            </span>
          </div>
          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <MdTerrain className='inline-block mr-1 text-2xl'/>Terrain: <span className='font-bold'>{planet.terrain}</span>
            </span>
          </div>
          <div className='uppercase my-4'>
            <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
              <FaWater className='inline-block mr-1 text-2xl'/>Surface water: <span className='font-bold'>{planet.surface_water}</span>
            </span>
          </div>
        </div>
      </div>
    )
}