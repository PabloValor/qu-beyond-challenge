import { Link, useParams } from "react-router-dom";
import PlanetDetailsSkeleton from "../../components/skeleton/pages/planetDetails";
import { Error } from '../../components/util/error'
import { IoIosResize, IoMdPeople } from 'react-icons/io';
import { GiRingedPlanet } from 'react-icons/gi';
import { LuOrbit } from 'react-icons/lu';
import { FaGrav, FaWater} from 'react-icons/fa';
import { TiWeatherDownpour } from 'react-icons/ti';
import { MdTerrain, MdOutlineLocalMovies } from 'react-icons/md';
import { getFilms, getPlanet } from "../../services/swapi";
import { Button } from "../../components/util/button";
import { useEffect, useState } from "react";
import Film from "../../types/film";
import FilmsSkeleton from "../../components/skeleton/components/filmsSkeleton";

export default function PlanetDetail() {
    const [films, setFilms] = useState<Film[]>()

    const { id } = useParams(); 
    const { data, isLoading, error } = getPlanet(id)

    useEffect(() => {
      if (data) {
        getFilms(data.films)
          .then((data: Film[]) => setFilms(data))
      }
    }, [data])

    return (
      <>
        { error && <Error message={error.message}/> }
        { isLoading && <PlanetDetailsSkeleton/> }
        {
          data &&
          <>
            <h2 className='uppercase font-extrabold text-center text-[30px]'>{data.name}</h2>
            <div className={`my-4 h-64 shadow-lg rounded-lg w-full bg-[url('/img/bg-galaxy.png')] bg-center bg-cover bg-no-repeat overflow-hidden`}>
              <img src={`/img/planet-${data.id}.svg`} className='w-[250px] block mx-auto'/>
            </div>
            <div className='sm:block md:flex place-content-evenly gap-4 mb-4'>

              <div className='bg-slate-300 p-4 rounded-lg shadow-lg w-full max-sm:mb-3 md:mb-0'>

                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <IoIosResize className='inline-block text-2xl mr-1'/> Diameter: <span className='font-bold'>{data.diameter}</span>
                  </span>
                </div>

                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <GiRingedPlanet className='inline-block mr-1 text-2xl'/> Rotation Period: <span className='font-bold'>{data.rotation_period}</span>
                  </span>
                </div>

                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <LuOrbit className='inline-block mr-1 text-2xl'/> Orbital Period: <span className='font-bold'>{data.orbital_period}</span>
                  </span>
                </div>

                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <FaGrav className='inline-block mr-1 text-2xl'/> Gravity:  <span className='font-bold'>{data.gravity}</span>
                  </span>
                </div>

                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <IoMdPeople className='inline-block mr-1 text-2xl'/> Population: <span className='font-bold'>{data.population}</span>
                  </span>
                </div>
              </div>

              <div className='bg-slate-300 p-4 rounded-lg shadow-lg w-full'>

                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <TiWeatherDownpour className='inline-block mr-1 text-2xl'/>Climate: <span className='font-bold'>{data.climate}</span>
                  </span>
                </div>
                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <MdTerrain className='inline-block mr-1 text-2xl'/>Terrain: <span className='font-bold'>{data.terrain}</span>
                  </span>
                </div>
                <div className='uppercase my-4'>
                  <span className='bg-slate-50 p-2 mr-1 rounded-md font-bold'>
                    <FaWater className='inline-block mr-1 text-2xl'/>Surface water: <span className='font-bold'>{data.surface_water}</span>
                  </span>
                </div>
              </div>
            </div>
            { !films && <FilmsSkeleton/> }
            {
              films && 
              <div className='bg-slate-300 p-4 rounded-lg shadow-lg w-full'>
                  <div className="text-center font-bold text-2xl pb-5 uppercase">{`${data.name} appers in the following movies`}</div>
                  <div className="flex gap-4 flex-row flex-wrap place-content-center">
                    { 
                      films.map((film: Film) => (
                        <div key={film.title} className="bg-slate-800 text-slate-100 p-1 rounded-lg shadow-md w-1/4">
                          <div className='m-2 uppercase'>
                              <MdOutlineLocalMovies className='inline-block mr-1 text-2xl'/><span className='font-bold'>{film.title}</span>
                          </div> 
                          <div className='m-2'>
                              Director: <span className='font-bold'>{film.director}</span>
                          </div> 
                          <div className='m-2'>
                              Producer: <span className='font-bold'>{film.producer}</span>
                          </div> 
                        </div>
                      ))
                    }
                  </div>

              </div>
            }


            <div className='text-center mt-5'>
              <Button>
                <Link to='/'>Back</Link>
              </Button>
            </div>
          </>
        }
     </>
    )
  }